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
      <nav className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-square"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-2xl border border-base-300 bg-base-200 p-2"
            >
              <li>
                <Link href="/">Workouts</Link>
              </li>
              <li>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2 font-heading text-xl tracking-wide">
            <Dumbbell size={22} className="text-primary" />
            FitLog
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
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

        <div className="navbar-end gap-2">
          <Link href="/my-plan" aria-label="Today's plan" className="btn btn-ghost btn-sm gap-2">
            Plan
            <span className="badge badge-primary badge-sm">{todaysPlan.length}</span>
          </Link>
          <Link href="/my-plan" aria-label="Saved workouts" className="btn btn-ghost btn-sm gap-2">
            Saved
            <span className="badge badge-outline badge-sm">{saved.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}