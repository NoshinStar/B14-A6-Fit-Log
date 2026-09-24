"use client";

import { useState, useMemo } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Tab = "plan" | "saved";
type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlanPage() {
  const { todaysPlan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    usePlan();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const activeList = tab === "plan" ? todaysPlan : saved;

  const sortedList = useMemo(() => {
    return [...activeList].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [activeList, sortKey]);

  const totalMinutes = todaysPlan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = todaysPlan.reduce(
    (sum, w) => sum + w.caloriesBurned,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-1">
        My Plan
      </h1>
      <p className="text-gray-400 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3 gap-4 bg-gray-900 rounded-xl p-6 mb-8">
        <div>
          <p className="text-gray-500 text-sm">Exercises</p>
          <p className="text-2xl font-bold text-[#ccff00]">
            {todaysPlan.length}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Minutes</p>
          <p className="text-2xl font-bold text-white">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Calories</p>
          <p className="text-2xl font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2 bg-gray-900 rounded-full p-1">
          <button
            onClick={() => setTab("plan")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              tab === "plan"
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              tab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="relative">
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="appearance-none bg-gray-900 text-white text-sm px-4 py-2 pr-8 rounded-full border border-gray-700 focus:outline-none"
          >
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="rating">Rating</option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
          />
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-12 text-center">
          <h3 className="font-bold uppercase text-lg mb-2">
            Nothing Here Yet
          </h3>
          <p className="text-gray-400 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedList.map((w) => (
            <PlanCard
              key={w.id}
              workout={w}
              showMarkDone={tab === "plan"}
              onRemove={tab === "plan" ? removeFromPlan : removeFromSaved}
              onMarkDone={markAsDone}
            />
          ))}
        </div>
      )}
    </div>
  );
}