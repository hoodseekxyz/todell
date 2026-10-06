import { useEffect, useState } from "react";
import { TaleNav } from "@/components/tale-nav";

const STOPS = [
  { name: "The sun", row: "row-start-2" },
  { name: "The hill", row: "row-start-3" },
  { name: "The bend", row: "row-start-4" },
  { name: "The grass", row: "row-start-5" },
  { name: "DELL", row: "row-start-6" },
] as const;

export function TheRoad() {
  const [step, setStep] = useState(0);
  const stop = STOPS[step];
  const last = step === STOPS.length - 1;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        setStep((n) => Math.min(STOPS.length - 1, n + 1));
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        setStep((n) => Math.max(0, n - 1));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="flex min-h-svh flex-col bg-paper text-ink">
      <TaleNav />
      <section className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-8">
        <p className="text-sm uppercase tracking-widest text-muted">Five steps</p>
        <h1 className="font-display mt-2 text-4xl leading-none sm:text-5xl">
          The road only goes to DELL.
        </h1>
        <p className="font-display mt-4 text-3xl">{stop.name}</p>
        <p className="mt-1 text-sm text-muted">
          {last ? "The road knew." : "Walk. The last step does not change."}
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => setStep((n) => Math.max(0, n - 1))}
            disabled={step === 0}
            className="min-h-11 rounded-full border border-line px-5 text-sm disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((n) => Math.min(STOPS.length - 1, n + 1))}
            disabled={last}
            className="min-h-11 rounded-full bg-ink px-5 text-sm text-paper disabled:opacity-40"
          >
            {last ? "Here" : "Walk"}
          </button>
        </div>
        <div className="relative mx-auto mt-6 w-fit max-w-full">
          <img
            src="/todel/tale.jpg"
            alt="The road, waiting"
            className="road-plate block max-w-full"
          />
          <div className="pointer-events-none absolute inset-0 grid grid-rows-6">
            <div className={`${stop.row} flex items-center justify-center`}>
              <span className="size-8 rounded-full border-4 border-ink bg-crayon" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
