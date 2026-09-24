"use client";

import { Plus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/lib/api";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-5 py-3 rounded-full hover:opacity-90 transition"
      >
        <Plus size={18} /> Add to today's plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 border border-gray-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-gray-900 transition"
      >
        <Bookmark size={18} /> Save for later
      </button>
    </div>
  );
}