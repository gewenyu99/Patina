import base64
import io
import os

import flask
from PIL import Image
from flask import Flask, render_template, request, flash, redirect

from artifacts.add_patina import jpegBlur

app = Flask(__name__)


@app.route("/load", methods=['POST'])
def load():
    try:
        if 'image' not in request.files:
            print('No file part')
            return "No files"
        file = request.files['image']
    except Exception as err:
        print('err')
        return "Unable to retried the dank memes"

    im = jpegBlur(Image.open(io.BytesIO(file.read())), 10, True, 10)
    rawBytes = io.BytesIO()
    im.save(rawBytes, "JPEG")
    rawBytes.seek(0)
    img_base64 = base64.b64encode(rawBytes.read())
    response = {
        "image": img_base64.decode(),
        "message": "Image is BASE 64 encoded"
    }
    return response, 200


@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 5000), debug=True)