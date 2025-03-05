import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const VideoCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [feedback, setFeedback] = useState("");
  const [processedImage, setProcessedImage] = useState(null);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/analyze_frame",
            { image: imageSrc },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );

          setFeedback(response.data.feedback);
          setProcessedImage(response.data.image); // Store processed image
        } catch (error) {
          console.error("Error sending frame:", error);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureFrame();
    }, 100); // Capture frame every 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <h3>Feedback: {feedback}</h3>
      {processedImage && <img src={processedImage} alt="Processed Frame" />}
    </div>
  );
};

export default VideoCapture;
