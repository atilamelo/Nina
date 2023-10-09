import os
import openai
from dotenv import load_dotenv
import re

# Carrega as variáveis de ambiente
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Prompt para gerar os prompts para o DallE
with open('server/prompts/system_prompt.txt', 'rb') as file:
    server_prompt = file.read().decode('utf-8')

with open('server/prompts/start_mpgm.txt', 'rb') as file:
    start_mpgm_prompt = file.read().decode('utf-8')

def gerar_prompts(dream_text):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": server_prompt},
        {"role": "assistant", "content": "DallE Prompt Generator Mode ready."},
        {"role": "user", "content": "[Start DPGM]"},
        {"role": "assistant", "content": start_mpgm_prompt},
        {"role": "user", "content": f"[prompt] {dream_text}]"},
    ]
    )

    response = completion.choices[0].message["content"]
    print(f"Response of chat gpt: {response}")
    pattern = r"\[generated prompt\](?: |\n)([^\n]+)"
    matches = re.findall(pattern, response)
    
    return matches

def gerarImagemDeTexto(dream_text):
    print("Texto do sonho: " + dream_text   )
    prompts = gerar_prompts(dream_text)
    prompt = prompts[0]
    print(f"Prompt usado: {prompt}")

    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="512x512"
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
    with open('server/sonho.txt', 'r') as file:
        text_dream = file.read()
    print(gerar_prompts(text_dream))

    # print(gerarImagemDeAudio('server\\teste_carla.mp3'))