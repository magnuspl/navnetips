import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, RotateCcw, Sparkles, X } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  categoryLabels,
  namesIn,
  styleAdjective,
  styleLabels,
  styleOrder,
  type Category,
  type NameEntry,
  type Style,
} from "@/data/names";
import { useFavorites } from "@/lib/favorites";
import { SITE } from "@/lib/site";

const description =
  "Få personlige navneforslag: velg om du leter etter jentenavn, guttenavn, hundenavn eller kattenavn, huk av stilene du liker, og bla deg gjennom navn ett om gangen.";

export const Route = createFileRoute("/navneforslag")({
  head: () => ({
    meta: [
      { title: "Navneforslag – finn navn som passer deg | Navnetips.no" },
      { name: "description", content: description },
      { property: "og:title", content: "Navneforslag | Navnetips.no" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/navneforslag` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/navneforslag` }],
  }),
  component: Navneforslag,
});

const types: Category[] = ["jente", "gutt", "hund", "katt"];

const styleDescriptions: Record<Style, string> = {
  norrønt: "Navn med røtter i vikingtiden og norrøn mytologi",
  klassisk: "Tradisjonelle navn som har stått sterkt gjennom generasjoner",
  moderne: "Populære navn i dagens samfunn",
  unikt: "Sjeldne og spesielle navn som skiller seg ut",
};

function shuffle(list: NameEntry[]) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

function Navneforslag() {
  const navigate = useNavigate();
  const { isFavorite, toggle } = useFavorites();

  const [type, setType] = useState<Category | null>(null);
  const [styles, setStyles] = useState<Style[]>([]);
  const [deck, setDeck] = useState<NameEntry[]>([]);
  const [index, setIndex] = useState(0);

  const matching = useMemo(() => {
    if (!type || styles.length === 0) return [];
    return namesIn(type).filter((n) => n.styles.some((s) => styles.includes(s)));
  }, [type, styles]);

  const started = deck.length > 0;
  const current = deck[index];
  const done = started && !current;

  const start = () => {
    setDeck(shuffle(matching));
    setIndex(0);
  };

  const reset = () => {
    setDeck([]);
    setIndex(0);
  };

  const toggleStyle = (s: Style) => {
    setStyles((prev) => (prev.includes(s) ? prev.filter((v) => v !== s) : [...prev, s]));
    reset();
  };

  const randomize = () => {
    const pool = matching.length ? matching : namesIn("jente");
    const next = pool[Math.floor(Math.random() * pool.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <>
      <SiteHeader onRandom={randomize} />

      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" /> Navneforslag
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl">La oss finne navnet sammen</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Velg hvem navnet er til og hvilke stiler du liker. Så blar du deg gjennom forslagene ett
          om gangen og hjerter dem du vil ta vare på.
        </p>

        {!started && (
          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                1. Hvem er navnet til?
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setType(t);
                      reset();
                    }}
                    aria-pressed={type === t}
                    className={`rounded-2xl border p-4 text-left transition-colors ${
                      type === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    <span className="font-[family-name:var(--font-display)] text-xl">
                      {categoryLabels[t]}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        type === t ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {namesIn(t).length} navn
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                2. Hvilken stil?
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {styleOrder.map((s) => {
                  const on = styles.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggleStyle(s)}
                      aria-pressed={on}
                      className={`rounded-2xl border p-4 text-left transition-colors ${
                        on
                          ? "border-accent bg-accent/10"
                          : "border-border bg-card hover:bg-secondary"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-[family-name:var(--font-display)] text-xl">
                          {styleAdjective[s]} navn
                        </span>
                        {on && <Check className="h-4 w-4 text-accent" />}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {styleDescriptions[s]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <Button size="lg" disabled={matching.length === 0} onClick={start}>
                Start <ArrowRight />
              </Button>
              <p className="text-sm text-muted-foreground">
                {!type
                  ? "Velg hvem navnet er til for å komme i gang."
                  : styles.length === 0
                    ? "Velg minst én stil."
                    : `${matching.length} navn passer utvalget ditt.`}
              </p>
            </div>
          </div>
        )}

        {started && current && (
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">
              Navn {index + 1} av {deck.length}
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((index + 1) / deck.length) * 100}%` }}
              />
            </div>

            <article className="mt-6 rounded-3xl border border-border bg-card p-8 text-center">
              <h2 className="text-5xl">
                <Link
                  to="/navn/$slug"
                  params={{ slug: current.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {current.name}
                </Link>
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">{current.meaning}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                  {current.origin}
                </span>
                {current.styles.map((s) => (
                  <span key={s} className="rounded-full bg-sage px-2.5 py-1 text-sage-foreground">
                    {styleLabels[s]}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <Button variant="outline" size="lg" onClick={() => setIndex((i) => i + 1)}>
                  <X /> Neste
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    if (!isFavorite(current.name)) toggle(current.name);
                    setIndex((i) => i + 1);
                  }}
                >
                  <Check /> Lagre favoritt
                </Button>
              </div>
            </article>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <Button variant="ghost" size="sm" onClick={reset}>
                <RotateCcw /> Endre valg
              </Button>
              <Link
                to="/favoritter"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Se favorittene mine
              </Link>
            </div>
          </div>
        )}

        {done && (
          <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center">
            <h2 className="text-3xl">Der var alle {deck.length}</h2>
            <p className="mt-3 text-muted-foreground">
              Du har blitt gjennom hele utvalget. Se favorittene dine, eller prøv en annen
              kombinasjon.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/favoritter">Se favorittene mine</Link>
              </Button>
              <Button variant="outline" onClick={start}>
                <RotateCcw /> Bla gjennom på nytt
              </Button>
              <Button variant="ghost" onClick={reset}>
                Endre valg
              </Button>
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </>
  );
}
