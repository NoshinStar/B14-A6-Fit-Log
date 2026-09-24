"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { Workout } from "@/lib/api";

interface PlanCardProps {
  workout: Workout;
  showMarkDone?: boolean;
  onRemove: (id: number) => void;
  onMarkDone?: (id: number) => void;
}

export default function PlanCard({
  workout,
  showMarkDone,
  onRemove,
  onMarkDone,
}: PlanCardProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-900 rounded-xl p-4">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold uppercase text-white">{workout.name}</h3>
        <p className="text-gray-400 text-sm">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-gray-300 text-sm mt-1">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} /> {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="border border-gray-600 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          View Details
        </Link>
        {showMarkDone && onMarkDone && (
          <button
            onClick={() => onMarkDone(workout.id)}
            className="flex items-center gap-1 bg-[#ccff00] text-black text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            <Check size={14} /> Mark as Done
          </button>
        )}
        <button
          onClick={() => onRemove(workout.id)}
          className="text-gray-400 hover:text-white p-2"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}