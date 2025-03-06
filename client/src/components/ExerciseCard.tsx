import { Play, ChevronRight } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  image?: string;
  color: string;
  difficulty: string;
  description: string;
  path: string;
}

interface ExerciseCardProps {
  exercise: Exercise;
  hoveredExercise: string | null;
  setHoveredExercise: (id: string | null) => void;
  navigateToExercise: (path: string) => void; // ✅ Ensure path is used instead of id
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  hoveredExercise,
  setHoveredExercise,
  navigateToExercise,
}) => {
  return (
    <div
      key={exercise.id}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      onMouseEnter={() => setHoveredExercise(exercise.id)}
      onMouseLeave={() => setHoveredExercise(null)}
      onClick={() => navigateToExercise(exercise.path)}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${exercise.color} opacity-80`}
        ></div>
        {/* <img
          src={exercise.image || "/placeholder.svg"}
          alt={exercise.name}
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">{exercise.name}</h3>
        </div>

        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            hoveredExercise === exercise.id ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-white text-primary px-4 py-2 rounded-lg font-medium flex items-center">
            <Play className="mr-2 h-4 w-4 fill-primary" />
            Watch Preview
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Difficulty: {exercise.difficulty}
          </span>
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            Realtime feedback
          </span>
        </div>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <button
          className="text-primary font-medium flex items-center hover:underline"
          onClick={() => {
            navigateToExercise(exercise.path);
          }}
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
