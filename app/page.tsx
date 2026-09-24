import { getAllWorkouts } from "@/lib/api";
import Hero from "@/components/Hero";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <div>
      <Hero />
      
    </div>
  );
}