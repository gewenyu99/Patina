import os

import flask
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/load", methods=['POST'])
def load():
    try:
        imagefile = flask.request.files.get('meme_image', '')
    except Exception as err:
        return "unable to retried the dank memes"


@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 5000), debug=True)