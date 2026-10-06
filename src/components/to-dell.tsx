import { useState } from "react";

const CA = "";
const STOCK = "0x941AE714EC6D8130c7B75d67160Ca08f1e7d11Dd";

export function ToDell() {
  const [copied, setCopied] = useState<"ca" | "pair" | null>(null);

  async function copy(value: string, which: "ca" | "pair") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="bg-paper text-ink">
      <section className="mx-auto flex max-h-screen justify-center">
        <div className="relative">
          <img
            src="/todel/drawing.jpg"
            alt="The drawing he posted. A road, a sun, and the words TO DELL."
            className="block max-h-screen max-w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-sm uppercase tracking-widest text-muted">6 Oct 2026</p>
        <h1 className="font-display mt-3 text-5xl leading-none sm:text-6xl">The road says it.</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          He posted this drawing today. A sun, a hill, two words. The pair is DELL.
          Not the company. Not the share.
        </p>
      </section>

      <section id="pair" className="border-t border-line">
        <div className="mx-auto grid max-w-3xl gap-4 px-5 py-12">
          <article className="rounded-card border border-line bg-paper p-5">
            <p className="text-sm text-muted">CA</p>
            <p className="font-display mt-2 break-all text-3xl">{CA || "Not deployed"}</p>
            {CA ? (
              <button
                type="button"
                onClick={() => copy(CA, "ca")}
                className="mt-5 min-h-11 rounded-full bg-ink px-5 text-sm text-paper"
              >
                {copied === "ca" ? "Copied" : "Copy"}
              </button>
            ) : null}
          </article>
          <article className="rounded-card border border-line bg-paper p-5">
            <p className="text-sm text-muted">DELL · Robinhood Token</p>
            <p className="mt-3 break-all text-sm leading-relaxed">{STOCK}</p>
            <button
              type="button"
              onClick={() => copy(STOCK, "pair")}
              className="mt-5 min-h-11 rounded-full bg-crayon px-5 text-sm text-ink"
            >
              {copied === "pair" ? "Copied" : "Copy the pair"}
            </button>
          </article>
          <p className="text-sm leading-relaxed text-muted">
            Long lists DELL. The token address lands in the box above after the deploy.
          </p>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-sm leading-relaxed text-muted">
        <p className="mx-auto max-w-3xl">
          $TODELL is a meme on Robinhood Chain. It is not Dell Technologies, not an
          affiliate, and not the stock. The page is the drawing he posted.
        </p>
      </footer>
    </main>
  );
}
