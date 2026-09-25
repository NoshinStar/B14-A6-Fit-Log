export default function Footer() {
  return (
    <footer className="mt-auto border-t border-base-300 bg-base-200">
      {" "}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        {" "}
        <span className="font-bold text-lg text-base-content">
          {" "}
          FITLOG{" "}
        </span>{" "}
        <p className="text-sm text-base-content/70">
          {" "}
          © 2026 FitLog — Workout Library. Train hard, log honest.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
}
