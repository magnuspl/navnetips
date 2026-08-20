import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Baby, PawPrint, Search, Shuffle } from "lucide-react";
import {
  categoryLabels,
  categoryPages,
  names,
  namesIn,
  tips,
  type Category,
  type NameEntry,
} from "@/data/names";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NameCard } from "@/components/name-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";

// Navneplasser spredt rundt i heroen. Hver plass bytter navn for seg, slik at
// navnene dukker opp som ildfluer i stedet for i takt.
const nameSlots = [
  { top: "13%", left: "10%", color: "oklch(0.6 0.16 45)" },
  { top: "17%", left: "77%", color: "oklch(0.62 0.18 28)" },
  { top: "44%", left: "5%", color: "oklch(0.7 0.15 70)" },
  { top: "45%", left: "85%", color: "oklch(0.58 0.19 25)" },
  { top: "75%", left: "19%", color: "oklch(0.66 0.16 40)" },
  { top: "77%", left: "71%", color: "oklch(0.56 0.16 55)" },
];

function pickNext(pool: NameEntry[], currentSlug: string): NameEntry {
  let next = pool[Math.floor(Math.random() * pool.length)]!;
  let guard = 0;
  while (next.slug === currentSlug && guard < 10) {
    next = pool[Math.floor(Math.random() * pool.length)]!;
    guard++;
  }
  return next;
}

function SwappingNames() {
  // Bare korte navn, ellers kolliderer de med overskriften på smale skjermer.
  const poolRef = useRef(names.filter((n) => n.name.length <= 7));
  const [shown, setShown] = useState(() =>
    nameSlots.map((_, i) => poolRef.current[(i * 37) % poolRef.current.length]!),
  );

  useEffect(() => {
    // Rolig takt: ett navn bytter omtrent hvert 4,5. sekund.
    const id = window.setInterval(() => {
      setShown((s) => {
        const i = Math.floor(Math.random() * nameSlots.length);
        return s.map((n, idx) => (idx === i ? pickNext(poolRef.current, n.slug) : n));
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 hidden sm:block">
      {nameSlots.map((s, i) => (
        <span
          key={i}
          className="absolute font-[family-name:var(--font-display)] text-2xl md:text-3xl"
          style={{ top: s.top, left: s.left }}
        >
          <Link
            key={shown[i]!.slug}
            to="/navn/$slug"
            params={{ slug: shown[i]!.slug }}
            className="animate-name-pop group inline-flex items-center rounded-full px-2 py-0.5 transition-colors hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            style={{ color: s.color }}
          >
            {shown[i]!.name}
            <span className="ml-1 text-base opacity-0 transition-opacity group-hover:opacity-70">
              →
            </span>
          </Link>
        </span>
      ))}
    </div>
  );
}

const description =
  "Finn det perfekte navnet til barnet eller kjæledyret. Utforsk over 400 navn med betydning og opprinnelse – jentenavn, guttenavn, hundenavn og kattenavn.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navnetips.no – din guide til perfekte navn" },
      { name: "description", content: description },
      { property: "og:title", content: "Navnetips.no – din guide til perfekte navn" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Navnetips",
          url: SITE,
          description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE}/sok?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const categories: Category[] = ["jente", "gutt", "hund", "katt"];

const icons: Record<Category, typeof Baby> = {
  jente: Baby,
  gutt: Baby,
  hund: PawPrint,
  katt: PawPrint,
};

const PREVIEW_COUNT = 12;

function Index() {
  const navigate = useNavigate();
  const [active, setActive] = useState<Category>("jente");
  const [query, setQuery] = useState("");

  const pool = useMemo(() => namesIn(active), [active]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matched = q
      ? pool.filter((n) => n.name.toLowerCase().includes(q) || n.meaning.toLowerCase().includes(q))
      : pool;
    return matched.slice(0, PREVIEW_COUNT);
  }, [pool, query]);

  const total = pool.length;

  const randomize = () => {
    const next = names[Math.floor(Math.random() * names.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader onRandom={randomize} transparent />

      <section className="relative isolate -mt-[72px] overflow-hidden pt-[72px]">
        {/* Drivende fargeflekker og lysglimt */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage/70 blur-3xl animate-blob" />
          <div
            className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-clay/50 blur-3xl animate-blob"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob"
            style={{ animationDelay: "-12s" }}
          />
          <div
            className="absolute left-[38%] top-[6%] h-56 w-56 rounded-full bg-accent/30 blur-3xl animate-blob"
            style={{ animationDelay: "-3s" }}
          />
          <div
            className="absolute left-[12%] top-[58%] h-64 w-64 rounded-full bg-sage/40 blur-3xl animate-blob"
            style={{ animationDelay: "-9s" }}
          />
          <div
            className="absolute left-[22%] top-[28%] h-40 w-40 rounded-full blur-2xl animate-blob"
            style={{
              animationDelay: "-4s",
              background:
                "radial-gradient(circle, oklch(0.95 0.12 70) 0%, oklch(0.95 0.12 70 / 0) 70%)",
            }}
          />
          <div
            className="absolute left-[68%] top-[62%] h-32 w-32 rounded-full blur-2xl animate-blob"
            style={{
              animationDelay: "-10s",
              background:
                "radial-gradient(circle, oklch(0.92 0.14 45) 0%, oklch(0.92 0.14 45 / 0) 70%)",
            }}
          />
          <div
            className="absolute left-[55%] top-[14%] h-24 w-24 rounded-full blur-xl animate-blob"
            style={{
              animationDelay: "-7s",
              background:
                "radial-gradient(circle, oklch(0.96 0.1 95) 0%, oklch(0.96 0.1 95 / 0) 70%)",
            }}
          />
          {/* Ton flekkene ut mot bunnen så heroen glir over i navnelistene */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 45%, var(--background) 92%)",
            }}
          />
        </div>

        <SwappingNames />

        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1
            className="animate-headline text-5xl leading-[1.04] text-foreground md:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Finn navnet
            <br />
            som passer.
          </h1>
          <p
            className="animate-headline mx-auto mt-6 max-w-xl text-lg text-foreground/80 md:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            Navnetips gir deg gjennomtenkte forslag til barnet, valpen eller kattungen – med
            betydning, opprinnelse og gode råd på veien.
          </p>
          <div
            className="animate-headline mt-8 flex flex-wrap justify-center gap-3"
            style={{ animationDelay: "0.24s" }}
          >
            <Button asChild size="lg">
              <a href="#navn">Utforsk {names.length} navn</a>
            </Button>
            <Button variant="outline" size="lg" onClick={randomize}>
              <Shuffle /> Tilfeldig navn
            </Button>
          </div>
        </div>
      </section>

      <section id="navn" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl">Navnelister</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categoryPages.map((c) => (
            <li key={c.slug}>
              <Link
                to={`/${c.slug}`}
                className="block h-full rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span className="font-[family-name:var(--font-display)] text-xl text-foreground">
                  {categoryLabels[c.category]}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {namesIn(c.category).length} navn
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{c.description}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {categories.map((c) => {
            const Icon = icons[c];
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-4 w-4" />
                {categoryLabels[c]}
              </button>
            );
          })}
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Søk navn eller betydning…"
            className="max-w-xs bg-card"
          />
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((n) => (
            <NameCard key={n.slug} entry={n} />
          ))}
        </ul>

        {list.length === 0 && (
          <p className="mt-6 text-muted-foreground">
            Ingen navn matchet søket ditt.{" "}
            <Link to="/sok" search={{ q: query }} className="text-primary hover:underline">
              Søk i alle kategorier
            </Link>
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to={`/${categoryPages.find((c) => c.category === active)!.slug}`}>
              Se alle {total} {categoryLabels[active].toLowerCase()}
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/sok" search={{}}>
              <Search /> Søk i alle navn
            </Link>
          </Button>
        </div>
      </section>

      <section id="tips" className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl">Seks tips før du bestemmer deg</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((t, i) => (
              <article key={t.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-[family-name:var(--font-display)] text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
