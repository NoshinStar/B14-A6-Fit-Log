import { getAllWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getAllWorkouts();
  console.log(workouts);

  return (
    <div>
      <h1>Total workouts: {workouts.length}</h1>
      <pre>{JSON.stringify(workouts[0], null, 2)}</pre>
    </div>
  );
}