import { getAllWorkouts } from "@/lib/api";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <div>
      <Hero />
      <WorkoutGrid workouts={workouts}></WorkoutGrid>
    </div>
  );
}