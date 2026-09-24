import { Dumbbell } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="flex-1">
        <p className="text-[#ccff00] text-sm font-semibold tracking-widest mb-3">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
          Train With Intent. Log Every Set.
        </h1>

        <p className="text-gray-400 max-w-md mb-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <a
          href="#library"
          className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          <Dumbbell size={18} />
          BROWSE WORKOUTS
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-600">
          <img src="assets/banner.png" alt="Workout"></img>
        </div>
      </div>
    </section>
  );
}
