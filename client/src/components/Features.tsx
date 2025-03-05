import { Camera, Dumbbell, Zap } from "lucide-react";

export const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              How FitTrack Works
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our advanced technology analyzes your movements in real-time to
              provide personalized feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Real-time Tracking
              </h3>
              <p className="text-gray-600">
                Your webcam captures your movements while our system analyzes
                your form with precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Instant Feedback
              </h3>
              <p className="text-gray-600">
                Get immediate suggestions to correct your form and maximize your
                workout effectiveness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Multiple Exercises
              </h3>
              <p className="text-gray-600">
                Supports real-time tracking for Squats, Push-ups, Planks, Bicep
                Curls, and Lateral Raises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
