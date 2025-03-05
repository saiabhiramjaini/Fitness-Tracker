import cv2
import mediapipe as mp
import numpy as np

mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils

def calculate_angle(a, b, c):
    """Calculate the angle between three points."""
    a, b, c = np.array(a), np.array(b), np.array(c)
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    return 360 - angle if angle > 180 else angle

def analyze_lateral_raise_frame(frame):
    """Analyze a single frame for lateral raise form."""
    feedback = {"left": "No detection", "right": "No detection"}
    color = {"left": (0, 0, 255), "right": (0, 0, 255)}  # Default red (bad form)

    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = pose.process(image)

        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark

            lt_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            lt_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            lt_hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]

            rt_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
            rt_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
            rt_hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]

            lt_angle = calculate_angle(lt_elbow, lt_shoulder, lt_hip)
            rt_angle = calculate_angle(rt_elbow, rt_shoulder, rt_hip)

            # Lateral raise feedback
            if 70 <= lt_angle <= 110:
                feedback["left"], color["left"] = "Good raise!", (0, 255, 0)  # Green
            elif lt_angle > 110:
                feedback["left"], color["left"] = "Lower your arm!", (0, 0, 255)  # Red
            elif lt_angle < 45:
                feedback["left"], color["left"] = "Raise higher!", (0, 0, 255)  # Red

            if 70 <= rt_angle <= 110:
                feedback["right"], color["right"] = "Good raise!", (0, 255, 0)  # Green
            elif rt_angle > 110:
                feedback["right"], color["right"] = "Lower your arm!", (0, 0, 255)  # Red
            elif rt_angle < 45:
                feedback["right"], color["right"] = "Raise higher!", (0, 0, 255)  # Red

            # Draw feedback on the image
            cv2.putText(frame, f"Left: {feedback['left']}", (15, 100), cv2.FONT_HERSHEY_SIMPLEX, 0.8, color["left"], 2)
            cv2.putText(frame, f"Right: {feedback['right']}", (15, 150), cv2.FONT_HERSHEY_SIMPLEX, 0.8, color["right"], 2)

            # Draw pose landmarks
            mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    return f"Left: {feedback['left']}, Right: {feedback['right']}", frame
