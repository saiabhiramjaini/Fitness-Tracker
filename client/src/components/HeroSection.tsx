import Lottie from "lottie-react";
import animationData from "@/assets/animation.json";

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary-900 text-white px-8 py-24 mx-auto">
      {/* Left Content Section */}
      <div className="max-w-3xl pl-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Perfect Your Form with Realtime Analysis
        </h1>
        <p className="text-xl text-white/90 mb-8">
          FitTrack analyzes your movements in real-time to provide instant
          feedback, ensuring you get the most out of every exercise while
          preventing injuries.
        </p>
      </div>

      {/* Right Lottie Animation */}
      <div className="w-72 h-72">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
