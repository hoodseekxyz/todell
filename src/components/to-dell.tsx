import { TaleNav } from "@/components/tale-nav";
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
      <TaleNav />
      <section className="mx-auto flex max-h-screen justify-center">
        <div className="relative">
          <img
            src="/todel/tale.jpg"
            alt="A crayon road under a pale sun"
            className="block max-h-screen max-w-full"
          />
          <div className="pointer-events-none absolute inset-0 grid grid-rows-6 px-6 text-center">
            <p className="sign-to font-display row-start-2 self-center text-6xl sm:text-8xl">TO</p>
            <p className="sign-dell font-display row-start-5 self-end text-7xl sm:text-8xl">
              DELL
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-5 py-14">
        <p className="text-sm uppercase tracking-widest text-muted">6 Oct 2026</p>
        <h1 className="font-display mt-4 text-5xl leading-none sm:text-6xl">Once, a road.</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          <p>It crossed a hill. A sun sat on the hill. The road already knew its name.</p>
          <p>Someone drew it that way. He posted the drawing. This page is the telling.</p>
          <p>The pair is DELL. Not the company. Not the share.</p>
        </div>
      </section>

      <section id="pair" className="border-t border-line">
        <div className="mx-auto grid max-w-xl gap-4 px-5 py-12">
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

      <figure className="mx-auto max-w-sm px-5 pb-14">
        <img
          src="/todel/drawing.jpg"
          alt="The drawing that started the road"
          className="w-full border border-line"
        />
        <figcaption className="mt-3 text-sm leading-relaxed text-muted">
          The drawing. Shown once. The road above is the telling.
        </figcaption>
      </figure>

      <footer className="border-t border-line px-5 py-8 text-sm leading-relaxed text-muted">
        <p className="mx-auto max-w-xl">
          $TODELL is a meme on Robinhood Chain. It is not Dell Technologies, not an
          affiliate, and not the stock. The drawing is his.
        </p>
      </footer>
    </main>
  );
}
