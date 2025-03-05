import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
import axios from "axios";
import { ArrowLeft, Camera, AlertCircle, Pause, Play, RotateCcw } from 'lucide-react';
import { backendURL } from "@/config";

export const PlankPage = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);
  const [feedback, setFeedback] = useState("");
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        try {
          const response = await axios.post(
             `${backendURL}/analyze_plank`,
            { image: imageSrc },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );

          setFeedback(response.data.feedback);
          setProcessedImage(response.data.image);
        } catch (error) {
          console.error("Error sending frame:", error);
          setFeedback("Error analyzing movement. Please check your connection.");
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnalyzing) {
        captureFrame();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 group"
          >
            <ArrowLeft className="h-6 w-6 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium text-lg">Back to Exercises</span>
          </button>
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-all duration-300">
            <Camera className="h-5 w-5 text-gray-700 mr-2 animate-pulse" />
            <span className="text-gray-700 font-semibold">Live Analysis Active</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Webcam Section */}
          <div className="">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Webcam Feed</h2>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-500">Camera Active</span>
                </div>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden ring-1 ring-gray-300 shadow-lg">
                <Webcam
                  ref={webcamRef}
                  className="w-full h-full object-cover"
                  mirrored={true}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  <span className="text-gray-700 text-sm font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-6">
            {/* Real-time Feedback */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-6 w-6 text-gray-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Real-time Feedback</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-inner">
                <p className="text-lg text-gray-700 font-medium">
                  {feedback || "Analyzing your form..."}
                </p>
              </div>
            </div>

            {/* Analysis Visualization */}
            {processedImage && (
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Analysis Visualization</h2>
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden ring-1 ring-gray-300 shadow-inner">
                  <img
                    src={processedImage}
                    alt="Processed Frame"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsAnalyzing(!isAnalyzing)}
                className={`
                  flex items-center px-6 py-3 rounded-xl font-semibold
                  transform transition-all duration-200 hover:scale-105
                  ${
                    isAnalyzing
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                `}
              >
                {isAnalyzing ? (
                  <>
                    <Pause className="h-5 w-5 mr-2" />
                    Pause Analysis
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Resume Analysis
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setFeedback("");
                  setProcessedImage(null);
                }}
                className="flex items-center px-6 py-3 rounded-xl font-semibold
                  bg-gray-100 text-gray-900 hover:bg-gray-200
                  transform transition-all duration-200 hover:scale-105"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};