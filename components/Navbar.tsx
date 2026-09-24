"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan, saved } = usePlan();

  const linkClass = (href: string) =>
    pathname === href
      ? "bg-[#ccff00] text-black px-4 py-1.5 rounded-full font-medium"
      : "text-gray-300 hover:text-white px-4 py-1.5";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-white">
        FITLOG
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/" className={linkClass("/")}>
          Workouts
        </Link>
        <Link href="/my-plan" className={linkClass("/my-plan")}>
          My Plan
        </Link>
      </div>

      <Link href="/my-plan" className="flex items-center gap-3 text-sm">
        <span className="flex items-center gap-1 text-gray-300">
          Plan
          <span className="bg-[#ccff00] text-black rounded-full px-2 py-0.5 text-xs font-bold">
            {todaysPlan.length}
          </span>
        </span>
        <span className="flex items-center gap-1 text-gray-300">
          Saved
          <span className="border border-gray-500 rounded-full px-2 py-0.5 text-xs font-bold">
            {saved.length}
          </span>
        </span>
      </Link>
    </nav>
  );
}