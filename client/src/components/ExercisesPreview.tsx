import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "./ExerciseCard"; // Import the card component

const exercises = [
  {
    id: "squats",
    name: "Squats",
    description:
      "A compound exercise that targets your quadriceps, hamstrings, and glutes.",
    difficulty: "Beginner",
    image: "/",
    color: "from-blue-500 to-indigo-600",
    path: "/squat-preview",
  },
  {
    id: "pushups",
    name: "Push-ups",
    description:
      "A classic bodyweight exercise that works your chest, shoulders, and triceps.",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-red-500 to-pink-600",
    path: "/pushup-preview",
  },
  {
    id: "curls",
    name: "Bicep Curls",
    description:
      "An isolation exercise that targets your biceps for stronger arms.",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-amber-500 to-orange-600",
    path: "/curl-preview",
  },
  {
    id: "plank",
    name: "Plank",
    description:
      "A core strengthening exercise that improves stability and posture.",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-emerald-500 to-teal-600",
    path: "/plank-preview",
  },
  {
    id: "lateral-raise",
    name: "Lateral Raise",
    description:
      "An isolation exercise that targets your shoulder muscles for definition.",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-violet-500 to-purple-600",
    path: "/lateral-raise-preview",
  },
];

export const ExercisePreview = () => {
  const [hoveredExercise, setHoveredExercise] = useState<string | null>(null);
  const navigate = useNavigate();

  const navigateToExercise = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Featured Exercises
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Browse our collection of exercises with detailed instructions and real-time tracking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            hoveredExercise={hoveredExercise}
            setHoveredExercise={setHoveredExercise}
            navigateToExercise={navigateToExercise}
          />
        ))}
      </div>
    </section>
  );
};
