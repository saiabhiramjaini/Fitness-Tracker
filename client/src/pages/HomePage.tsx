import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExercisePreview } from "@/components/ExercisesPreview";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <HeroSection />

      <ExercisePreview />

      <Features />

      <Footer />
    </div>
  );
};
