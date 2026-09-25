"use client";

import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/lib/api";
import { Bookmark, Plus } from "lucide-react";

export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => addToPlan(workout)}
        className="btn btn-sm btn-accent rounded-2xl"
      >
        <Plus className="h-4 w-4" />
        Add to Today&apos;s Plan
      </button>

      <button
        onClick={() => addToSaved(workout)}
        className="btn btn-sm rounded-2xl border border-gray-700 text-white"
      >
        <Bookmark className="h-4 w-4" />
        Save for Later
      </button>
    </div>
  );
}

