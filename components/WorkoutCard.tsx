"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/lib/api";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ccff00] transition"
    >
      <div className="relative w-full h-40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-[#ccff00] text-black text-xs font-bold px-2 py-0.5 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold uppercase text-white">{workout.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-gray-300 text-sm border-t border-gray-800 pt-3">
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
    </Link>
  );
}