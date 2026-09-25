"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import { Menu, Dumbbell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan, saved } = usePlan();

  const isActive = (href: string) =>
    pathname === href ? "bg-base-200 font-semibold text-accent" : "";

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <nav className="navbar mx-auto max-w-6xl px-2 sm:px-4">
        <div className="navbar-start gap-1 sm:gap-2 min-w-0 flex-1">
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost btn-square btn-xs sm:btn-sm">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <ul className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <Link href="/" className={isActive("/")}>
                  Workouts
                </Link>
              </li>

              <li>
                <Link href="/my-plan" className={isActive("/my-plan")}>
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="flex items-center gap-1 font-bold text-base sm:text-xl tracking-wide whitespace-nowrap"
          >
            <Dumbbell className="h-4 w-4 sm:h-6 sm:w-6 text-primary shrink-0" />
            <span>FITLOG</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link href="/" className={isActive("/")}>
                Workouts
              </Link>
            </li>

            <li>
              <Link href="/my-plan" className={isActive("/my-plan")}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-0 sm:gap-1 shrink-0">
          <Link
            href="/my-plan"
            className="btn btn-ghost btn-xs min-h-0 h-7 sm:h-8 px-1.5 sm:px-3 gap-1"
            aria-label={`Plan ${todaysPlan.length}`}
          >
            <span>Plan</span>
            <span className="badge badge-primary badge-xs">
              {todaysPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="btn btn-ghost btn-xs min-h-0 h-7 sm:h-8 px-1.5 sm:px-3 gap-1"
            aria-label={`Saved ${saved.length}`}
          >
            <span>Saved</span>
            <span className="badge badge-outline badge-xs">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
