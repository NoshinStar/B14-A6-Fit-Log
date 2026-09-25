import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 rounded-2xl border border-base-300 bg-base-200 p-8 lg:grid-cols-2 lg:p-12 max-w-6xl mx-auto mt-8 mx-4">
      <div className="space-y-5">
        <p className="font-heading text-sm tracking-[0.2em] text-primary">
          Workout Library
        </p>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          Train with intent. Log every set.
        </h1>
        <p className="max-w-md text-base-content/75">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a href="#library" className="btn btn-accent rounded-2xl">
          Browse Workouts
        </a>
      </div>
      <div className="relative w-full h-64 lg:h-80">
        <Image
          src="/banner.png"
          alt="Gym Illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}