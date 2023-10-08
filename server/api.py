from flask import Flask, request, jsonify, send_file
from flask_ngrok2 import run_with_ngrok
from dotenv import load_dotenv
import os
from openai_api import gerarImagemDeTexto

app = Flask(__name__)

# Carrega as variáveis de ambiente
load_dotenv()
ngrok_key = os.getenv("NGROK_AUTH_TOKEN")
run_with_ngrok(app=app, auth_token = ngrok_key)

@app.route('/generate_image', methods=['POST'])
def generate_image():
    try:
        data = request.get_json()

        text = data['text']
        print(f"Texto recebido: {text}")
        link_generated_img = gerarImagemDeTexto(text)
        
        return jsonify({'link_generated_img': link_generated_img})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
