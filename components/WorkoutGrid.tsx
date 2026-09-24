import { Workout } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }: { workouts: Workout[] }) {
  return (
    <section id="library" className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold uppercase mb-1">The Library</h2>
      <p className="text-gray-400 mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((w) => (
          <WorkoutCard key={w.id} workout={w} />
        ))}
      </div>
    </section>
  );
}
