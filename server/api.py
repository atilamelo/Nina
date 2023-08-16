from flask import Flask, request, jsonify, send_file
from PIL import Image, ImageDraw, ImageFont
from flask_ngrok2 import run_with_ngrok

import io

app = Flask(__name__)
run_with_ngrok(app=app, auth_token ='2S9x1jqbKlPcoB0K8vCGx1d3uNC_7di6EuoY3q9dre3oW3A6b')

@app.route('/generate_image', methods=['POST'])
def generate_image():
    try:
        data = request.get_json()
        text = data['text']
        print(text)
        # Criar uma imagem usando a biblioteca Pillow
        image = Image.new('RGB', (800, 600), color='black')
        draw = ImageDraw.Draw(image)
        font = ImageFont.load_default()
        draw.text((10, 10), text, font=font, fill='black')

        # Converter a imagem em bytes
        img_io = io.BytesIO()
        image.save(img_io, 'JPEG')
        img_io.seek(0)

        return send_file(img_io, mimetype='image/jpeg')

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
