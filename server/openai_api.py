import os
import openai
from dotenv import load_dotenv
import re

# Carrega as variáveis de ambiente
load_dotenv()
openai.api_key = os.getenv("API_KEY")

# Prompt para gerar os prompts para o DallE
with open('server/prompts/system_prompt.txt', 'r') as file:
    server_prompt = file.read()

with open('server/prompts/start_mpgm.txt', 'r') as file:
    start_mpgm_prompt = file.read()

def gerar_prompts(dream_text):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": server_prompt},
        {"role": "assistant", "content": "Midjourney Prompt Generator Mode ready."},
        {"role": "user", "content": "[Start MPGM]"},
        {"role": "assistant", "content": start_mpgm_prompt},
        {"role": "user", "content": f"[prompt] \"{dream_text} digital art\"]"},
    ]
    )

    response = completion.choices[0].message["content"]
        
    # Use regular expression to extract each item
    prompt_items = re.findall(r'(\d+\.)\s+(.*?)\n', response, re.DOTALL)

    # Transform prompt items into a list
    prompts = [prompt[1] for prompt in prompt_items]
    
    return prompts

def gerarImagemDeTexto(dream_text):
    prompts = gerar_prompts(dream_text)
    prompt = prompts[0].replace("Prompt", "")
    print(f"Prompt usado: {prompt}")

    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="512x512"
    )

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
    print(gerarImagemDeTexto(text_dream))
    # print(gerarImagemDeAudio('server\\teste_carla.mp3'))