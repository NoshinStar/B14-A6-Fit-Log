"use client";

import { useState, useEffect } from "react";
import { getAllWorkouts, Workout } from "@/lib/api";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllWorkouts()
      .then(setWorkouts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = workouts.filter((w) => {
    const q = query.toLowerCase();
    return (
      w.name.toLowerCase().includes(q) ||
      w.muscleGroups.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <Hero />
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-6 mb-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>
      {loading ? (
        <p className="text-center text-gray-400 py-12">
          Loading workouts…
        </p>
      ) : (
        <WorkoutGrid workouts={filtered} />
      )}
    </div>
  );
}