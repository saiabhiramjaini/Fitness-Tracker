# Fitness-Tracker

A real-time exercise form analysis application that uses computer vision to help users perform exercises correctly.

## Overview

Fitness-Tracker is an interactive web application that leverages machine learning and computer vision to track and analyze users' exercise form in real-time. By accessing the user's webcam, the application processes video frames through MediaPipe's pose estimation model to provide instant feedback on exercise technique, helping users prevent injuries and maximize workout effectiveness.

## Features

- **Exercise Library**: Browse through various exercises (Push-ups, Plank, Lateral Raises, Curls, and Squats) with instructional demos
- **Real-time Form Analysis**: Get instant feedback on your exercise form
- **Posture Correction**: Receive specific guidance on how to adjust your form
- **Exercise Tracking**: Monitor your progress over time
- **Visual Feedback**: View your form with skeletal overlays showing correct alignment

## Technology Stack

### Frontend
- **React**: Component-based UI library for building the user interface
- **TypeScript**: Core programming language for frontend logic
- **TailwindCSS**: Styling the web-pages.
- **Shadcn UI**: A UI for components.
- **Webcam Integration**: `react-webcam` is a popular npm package that allows you to capture images or videos from the webcam in a React application. It provides an easy-to-use Webcam component that integrates with the browser’s `navigator.mediaDevices.getUserMedia` API.
- **Base64 Encoding**: For transmitting image frames to the backend

### Backend
- **Flask**: Lightweight Python web framework for API endpoints
- **OpenCV**: Computer vision library for image processing
- **MediaPipe**: Machine learning framework for pose estimation

## Detailed Workflow

### Frontend (Client-Side)
1. **Landing Page**:
- Users are greeted with an introductory page outlining the project's purpose and features

2. **Exercise Selection**:
- Five exercise options are displayed as interactive cards: Push-ups, Plank, Lateral Raises, Curls, and Squats
- Each card includes a "View Exercise" button, allowing users to watch instructional content on proper exercise form

3. **Exercise Execution**:
- Upon selecting an exercise, the application requests access to the user's webcam
- The webcam feed is captured using the `getUserMedia` API, enabling real-time video streaming within the React component

4. **Frame Capture and Transmission**:
- The application captures individual frames from the webcam feed at set intervals
- Each frame is converted to a Base64-encoded string
- These encoded frames are sent via HTTP POST requests to the Flask backend for analysis

### Backend (Server-Side)
1. **Flask API Endpoints**:
- The backend defines specific routes for each exercise, such as `/analyze_plank`, `/analyze_pushup` etc.
- Each route is designed to handle POST requests containing the Base64-encoded image data

2. **Image Decoding**:
- Upon receiving a request, the backend decodes the Base64 string back into an image format compatible with OpenCV

3. **Pose Analysis**:
- The decoded image is processed using MediaPipe's Pose solution, which detects and tracks human body landmarks
- MediaPipe identifies key points (e.g., shoulders, elbows, hips) and computes angles between them to assess posture and movement

4. **Feedback Generation**:
- Based on the computed angles and detected posture, the backend generates feedback on the user's form
- For instance, in push-ups, the angle between the shoulder, elbow, and wrist determines if the user is in the "up" or "down" position

5. **Response to Frontend**:
- The backend sends a JSON response containing:
   - The feedback message
   - The processed image with visual annotations (e.g., lines connecting joints), encoded back into Base64 format

## How MediaPipe Detects and Tracks Human Poses

MediaPipe Pose is a **machine learning-based pose estimation solution** that detects 33 key points (landmarks) on the human body in real-time using a **deep learning model**. Below is a breakdown of how it works:

### 1. Preprocessing: Converting Input to a Tensor
* When an image frame is received:
   * It is **converted to RGB** (as MediaPipe models are trained on RGB images)
   * The image is **normalized and resized** to fit the input dimensions required by the model
   * The frame is passed through a **deep learning model** that detects key body landmarks

### 2. Pose Landmark Detection
* MediaPipe uses a **BlazePose deep learning model**, which runs in two stages:
   1. **Pose Detection Stage:**
      * The model first detects a rough bounding box around the person in the frame
      * This bounding box is used to crop and focus on the relevant area (ignoring background noise)
   2. **Pose Landmark Prediction Stage:**
      * After detecting the bounding box, a **pose landmark model** is applied inside the detected region
      * This model identifies **33 key body landmarks**, including:
         * **Head & Shoulders:** Nose, eyes, ears, shoulders
         * **Torso:** Hips, chest
         * **Arms:** Elbows, wrists
         * **Legs:** Knees, ankles, heels, toes

### 3. Landmark Connection & Visualization
* Once landmarks are detected, **MediaPipe connects them using predefined rules** based on anatomical movement
* The **connections between landmarks** (like elbow to wrist, hip to knee, etc.) define the **skeleton structure** of the person in the frame
* The pose is then drawn on the frame using `mp_drawing.draw_landmarks()`, which:
   * Plots small **dots on joints** where landmarks are detected
   * Connects these dots with **lines** based on human movement
   * Assigns different colors to landmarks and connections

### 4. Tracking Movements Across Frames
* For continuous movement tracking (e.g., push-ups or squats):
   * The landmarks detected in **previous frames** are compared with the **current frame**
   * The position changes of key points (like elbows and knees) are tracked over time
   * Based on **angle calculations**, the system determines if the movement is correct

## Workflow Architecture

![Image](https://github.com/user-attachments/assets/b0630777-7afc-4e78-8b16-260c42370143)

## Installation

### Prerequisites
- Node.js (v14+)
- Python (v3.7+)
- Webcam

### Frontend Setup
1 . Clone the repository
```bash
git clone https://github.com/saiabhiramjaini/Fitness-Tracker.git
cd Fitness-Tracker/client
```

2 . Install dependencies
```
npm install
```

3 . Start development server
```
npm run dev
```

### Backend Setup

1 . Navigate to backend directory
```bash
cd ../backend
```

2 . Create and activate virtual environment
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3 . Install dependencies
```
pip install -r requirements.txt 
(or)
pip install mediapipe opencv-python flask flask-cors
```

4 . Start Flask server
```
python app.py
```

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Select an exercise from the exercise library (Push-ups, Plank, Lateral Raises, Curls, or Squats)
3. Watch the demonstration video to understand proper form
4. Click "Start" and grant webcam access when prompted
5. Position yourself correctly in the frame according to the on-screen guidance
6. Begin performing the exercise
7. Receive real-time feedback on your form with visual skeletal overlays
8. Adjust your form based on the specific suggestions provided

