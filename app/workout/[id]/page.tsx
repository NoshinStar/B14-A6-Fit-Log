import { getWorkoutById } from "@/lib/api";
import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: image */}
      <div className="relative w-full h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Right: details */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-3">
          {workout.name}
        </h1>
        <p className="text-gray-400 mb-4">{workout.description}</p>

        <div className="flex gap-2 mb-6">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-6 divide-y divide-gray-800">
          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.caloriesBurned} kcal`],
            ["Rating", workout.rating],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between py-2 text-sm text-gray-300"
            >
              <span className="uppercase text-gray-500">{label}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>

        <h2 className="font-bold uppercase mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-1 mb-6">
          {workout.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <WorkoutActions workout={workout} />
      </div>
    </div>
  );
}