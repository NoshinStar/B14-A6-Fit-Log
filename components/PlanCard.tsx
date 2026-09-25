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
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-900 rounded-xl p-4 w-full overflow-hidden">
      <div className="relative w-full sm:w-20 h-40 sm:h-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold uppercase text-white truncate">
          {workout.name}
        </h3>

        <p className="text-gray-400 text-sm mt-1">{workout.equipment}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-300 text-sm mt-2">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm rounded-2xl border border-gray-700 text-white"
        >
          View Details
        </Link>

        {showMarkDone && onMarkDone && (
          <button
            onClick={() => onMarkDone(workout.id)}
            className="btn btn-sm btn-accent rounded-2xl"
          >
            <Check className="h-4 w-4" />
            Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="flex items-center justify-center w-9 h-9 border border-gray-700 text-gray-400 rounded-full hover:text-white hover:bg-gray-800 transition"
          aria-label="Remove workout"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
