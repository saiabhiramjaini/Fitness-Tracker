import squat from "@/assets/squat.mp4";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SquatPreviewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Exercise Library
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto my-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Master proper form and technique with our video demonstrations
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Exercise Title Bar */}
          <div className="bg-primary px-6 py-4 flex flex-col justify-between items-center w-full">
            <h2 className="text-2xl font-bold text-white text-center">
              How to Perform a Perfect Squat ?
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Video Column */}
            <div className="relative bg-gray-900">
              <video
                src={squat}
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=480&width=640"
              />
            </div>

            {/* Instructions Column */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Perfect Your Form
                </h3>
                <p className="text-gray-600">
                  The squat is a fundamental lower body exercise that targets
                  your quadriceps, hamstrings, and glutes. Follow these key
                  points to ensure proper form and maximize results while
                  preventing injury.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                    1
                  </span>
                  Starting Position
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Stand with feet shoulder-width apart</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Toes slightly pointed outward (about 5-20 degrees)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Keep your chest up and shoulders back</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                    2
                  </span>
                  Descent
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Initiate the movement by hinging at the hips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Bend knees and lower until thighs are parallel to ground
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Maintain a neutral spine throughout the movement
                    </span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                    3
                  </span>
                  Ascent
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Push through your heels to stand back up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Keep knees in line with toes (don't let them cave inward)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Fully extend hips and knees at the top</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Pro Tips</h4>
                <p className="text-gray-600 text-sm">
                  Breathe in as you lower and exhale as you rise. Start with
                  bodyweight squats before adding resistance. If you experience
                  knee pain, check your form or consult with a fitness
                  professional.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 flex justify-between items-center border-t border-gray-100">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Difficulty:</span> Beginner
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-medium">Target:</span> Quads, Glutes,
              Hamstrings
            </div>
            <button
              onClick={() => {
                navigate("/squat");
              }}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
            >
              Start Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
