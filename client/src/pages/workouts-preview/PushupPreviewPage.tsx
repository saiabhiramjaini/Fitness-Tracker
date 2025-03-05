import pushup from "@/assets/pushup.mp4";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PushupPreviewPage = () => {
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
              How to Perform a Perfect Push-up ?
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Video Column */}
            <div className="relative bg-gray-900">
              <video
                src={pushup}
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
                  The push-up is a classic bodyweight exercise that targets your
                  chest, shoulders, triceps, and core. Follow these key points
                  to ensure proper form and maximize effectiveness.
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
                    <span>Place hands shoulder-width apart on the floor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Keep your body in a straight line from head to heels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Engage your core and keep elbows slightly tucked</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                    2
                  </span>
                  Lowering Phase
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Lower your chest towards the ground in a controlled manner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Keep elbows at about a 45-degree angle to your body</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Lower until your chest is just above the ground</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                    3
                  </span>
                  Pushing Up
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Press through your palms to lift your body</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Fully extend your arms at the top of the movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span>Maintain a strong core throughout</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Pro Tips</h4>
                <p className="text-gray-600 text-sm">
                  Keep your movements slow and controlled to engage muscles more
                  effectively. If push-ups are too difficult, modify by
                  performing them on your knees. For an added challenge, try
                  diamond or decline push-ups.
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
              <span className="font-medium">Target:</span> Chest, Shoulders, Triceps, Core
            </div>
            <button 
            onClick={()=>{navigate("/pushup")}}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg">
              Start Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
