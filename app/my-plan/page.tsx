"use client";

import { useState, useMemo } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";
import Link from "next/link";

type Tab = "plan" | "saved";
type SortKey = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const { todaysPlan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    usePlan();

  const [tab, setTab] = useState<Tab>("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const activeList = tab === "plan" ? todaysPlan : saved;

  const sortedList = useMemo(() => {
    return [...activeList].sort((a, b) => {
      if (sortKey === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b[sortKey] - a[sortKey];
    });
  }, [activeList, sortKey]);

  const totalMinutes = activeList.reduce(
    (sum, w) => sum + w.duration,
    0,
  );

  const totalCalories = activeList.reduce(
    (sum, w) => sum + w.caloriesBurned,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-1">
        My Plan
      </h1>

      <p className="text-gray-400 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="stats stats-vertical sm:stats-horizontal w-full bg-base-200 mb-8">
        <div className="stat">
          <div className="stat-title">Exercises</div>
          <div className="stat-value text-[#ccff00]">
            {activeList.length}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Minutes</div>
          <div className="stat-value text-white">
            {totalMinutes}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Calories</div>
          <div className="stat-value text-white">
            {totalCalories}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
        <div className="flex gap-2 bg-gray-900 rounded-full p-1 w-fit">
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

        <div className="w-full sm:w-auto">
          <p className="text-sm text-gray-400 mb-2">Sort By</p>

          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="select select-bordered rounded-2xl !w-[180px]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
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
              onRemove={
                tab === "plan" ? removeFromPlan : removeFromSaved
              }
              onMarkDone={markAsDone}
            />
          ))}
        </div>
      )}
    </div>
  );
}
