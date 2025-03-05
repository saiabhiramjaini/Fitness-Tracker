import { Activity } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              FitTrack
            </span>
          </div>
          
        </div>
      </div>
    </nav>
  );
};
