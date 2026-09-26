import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 rounded-2xl border border-base-300 bg-base-200 p-8 lg:grid-cols-2 lg:p-12 max-w-6xl mx-4 lg:mx-auto mt-8">
      <div className="space-y-5">
        <p className="font-heading text-sm tracking-[0.2em] text-primary">
          Workout Library
        </p>
        <h1 className="text-4xl leading-tight sm:text-5xl uppercase font-bold">
          Train with intent. Log every set.
        </h1>
        <p className="max-w-md text-base-content/75">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a href="#library" className="btn btn-accent rounded-2xl">
          BROWSE WORKOUTS
        </a>
      </div>
      
      <div className="w-full flex justify-center md:justify-end">
        <Image
          src="/assets/banner.png"
          alt="Gym Illustration"
          width={500}
          height={400}
          priority
          className="w-full max-w-[500px] h-auto object-contain"
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>
    </section>
  );
}
