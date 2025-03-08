from flask import Flask, request, jsonify
import base64
import cv2
import numpy as np
from flask_cors import CORS
from plank import analyze_plank_frame  
from curls import analyze_curl_frame  
from lateral_raises import analyze_lateral_raise_frame
from pushups import analyze_pushup_frame 
from squats import analyze_squat_frame

app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
CORS(app, resources={r"/*": {"origins": "https://fitness-tracker-two-gamma.vercel.app"}}, supports_credentials=True, allow_headers=["Content-Type"])

from flask_cors import CORS

CORS(app, resources={r"/*": {"origins": ["https://fitness-tracker-two-gamma.vercel.app", "http://localhost:5173"]}}, 
     supports_credentials=True, 
     allow_headers=["Content-Type"])


@app.route('/analyze_plank', methods=['POST'])
def analyze_plank():
    data = request.json
    image_data = data['image'].split(',')[1]  
    decoded_image = base64.b64decode(image_data)

    np_arr = np.frombuffer(decoded_image, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    feedback, processed_frame = analyze_plank_frame(frame)

    _, buffer = cv2.imencode('.jpg', processed_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"feedback": feedback, "image": f"data:image/jpeg;base64,{encoded_image}"})


@app.route('/analyze_curl', methods=['POST'])
def analyze_curl():
    data = request.json
    image_data = data['image'].split(',')[1]  
    decoded_image = base64.b64decode(image_data)

    np_arr = np.frombuffer(decoded_image, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    feedback, processed_frame = analyze_curl_frame(frame)

    _, buffer = cv2.imencode('.jpg', processed_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"feedback": feedback, "image": f"data:image/jpeg;base64,{encoded_image}"})


@app.route('/analyze_lateral_raise', methods=['POST'])
def analyze_lateral_raise():
    data = request.json
    image_data = data['image'].split(',')[1]  
    decoded_image = base64.b64decode(image_data)

    np_arr = np.frombuffer(decoded_image, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    feedback, processed_frame = analyze_lateral_raise_frame(frame)

    _, buffer = cv2.imencode('.jpg', processed_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"feedback": feedback, "image": f"data:image/jpeg;base64,{encoded_image}"})


@app.route('/analyze_pushup', methods=['POST'])
def analyze_pushup():
    data = request.json
    image_data = data['image'].split(',')[1]  
    decoded_image = base64.b64decode(image_data)

    np_arr = np.frombuffer(decoded_image, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    feedback, processed_frame = analyze_pushup_frame(frame)

    _, buffer = cv2.imencode('.jpg', processed_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"feedback": feedback, "image": f"data:image/jpeg;base64,{encoded_image}"})


@app.route('/analyze_squat', methods=['POST'])
def analyze_squat():
    data = request.json
    image_data = data['image'].split(',')[1]  
    decoded_image = base64.b64decode(image_data)

    np_arr = np.frombuffer(decoded_image, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    feedback, processed_frame = analyze_squat_frame(frame)

    _, buffer = cv2.imencode('.jpg', processed_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"feedback": feedback, "image": f"data:image/jpeg;base64,{encoded_image}"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)