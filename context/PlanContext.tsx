"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import { Workout } from "@/lib/api";

interface PlanContextType {
  todaysPlan: Workout[];
  saved: Workout[];
  addToPlan: (w: Workout) => void;
  addToSaved: (w: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

const PLAN_LIMIT = 5;
const PLAN_KEY = "fitlog_plan";
const SAVED_KEY = "fitlog_saved";

function loadFromStorage(key: string): Workout[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }: { children: ReactNode }) {
  const [todaysPlan, setTodaysPlan] = useState<Workout[]>(() =>
  loadFromStorage(PLAN_KEY)
);

const [saved, setSaved] = useState<Workout[]>(() =>
  loadFromStorage(SAVED_KEY)
);

useEffect(() => {
  localStorage.setItem(PLAN_KEY, JSON.stringify(todaysPlan));
}, [todaysPlan]);

useEffect(() => {
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}, [saved]);

  const isInPlan = (id: number) => todaysPlan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);

  const addToPlan = (w: Workout) => {
    if (isInPlan(w.id)) {
      toast.info("Already in today's plan");
      return;
    }
    if (todaysPlan.length >= PLAN_LIMIT) {
      toast.error("Plan is full — max 5 lifts for today");
      return;
    }
    setTodaysPlan((prev) => [...prev, w]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (w: Workout) => {
    if (isInSaved(w.id)) {
      toast.info("Already saved");
      return;
    }
    setSaved((prev) => [...prev, w]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setTodaysPlan((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setTodaysPlan((prev) => prev.filter((w) => w.id !== id));
    toast.success("Marked as done 💪");
  };

  return (
    <PlanContext.Provider
      value={{
        todaysPlan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isInSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}