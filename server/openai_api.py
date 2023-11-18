import os
import openai
from dotenv import load_dotenv

# Carrega as variáveis de ambiente
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Prompt para gerar os prompts para o DallE
with open('server/prompts/system_prompt.txt', 'rb') as file:
    server_prompt = file.read().decode('utf-8')

with open('server/prompts/start_mpgm.txt', 'rb') as file:
    start_mpgm_prompt = file.read().decode('utf-8')

def translate(dream_text):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": server_prompt},
        {"role": "user", "content": f"{dream_text}"},
    ]
    )

    response = completion.choices[0].message["content"]
    
    return response

def gerarImagemDeTexto(dream_text):
    print("Texto do sonho: " + dream_text   )
    prompt = translate(dream_text)
    print(f"Prompt usado: {prompt}")

    response = openai.Image.create(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )

    print(f"DallE response: {response}")
    image_url = response['data'][0]['url']
    
    return image_url

def gerarImagemDeAudio(audio_path):
    audio_file = open(audio_path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file, language="pt")
    print(f"Transcrição do áudio: {transcript}")

    return gerarImagemDeTexto(transcript['text'])


if __name__ == '__main__':

    # Prompt para gerar os prompts para o DallE
    with open('server/sonhoTeste.txt', 'r') as file:
        text_dream = file.read()
    print(gerarImagemDeTexto(text_dream))