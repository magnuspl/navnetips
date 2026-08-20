import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { findByName, names } from "@/data/names";
import {
  statYears,
  statsAreVerified,
  statsByYear,
  statsSource,
  yearStats,
  type StatEntry,
} from "@/data/stats";
import { SITE } from "@/lib/site";

const title = "Navnestatistikk – mest brukte navn per år | Navnetips.no";
const description =
  "Se navnestatistikk for Norge: de mest brukte jentenavnene og guttenavnene år for år, med antall nyfødte som fikk hvert navn.";

export const Route = createFileRoute("/navnestatistikk")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/navnestatistikk` },
      { name: "twitter:card", content: "summary_large_image" },
      // Så lenge tallene er plassholdere skal siden holdes utenfor søkeindeksen.
      ...(statsAreVerified ? [] : [{ name: "robots", content: "noindex, follow" }]),
    ],
    links: [{ rel: "canonical", href: `${SITE}/navnestatistikk` }],
    // Dataset-markup ville påstått at tallene er ekte, så den legges bare på
    // når de faktisk er verifisert.
    scripts: statsAreVerified
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              name: "Navnestatistikk for Norge",
              description,
              url: `${SITE}/navnestatistikk`,
              temporalCoverage: `${Math.min(...statYears)}/${Math.max(...statYears)}`,
              creator: { "@type": "Organization", name: statsSource.label },
            }),
          },
        ]
      : [],
  }),
  component: StatsPage,
});

function StatList({ heading, entries }: { heading: string; entries: StatEntry[] }) {
  const max = Math.max(...entries.map((e) => e.count));

  return (
    <section className="rounded-3xl border border-border bg-card p-6">
      <h2 className="text-2xl">{heading}</h2>
      <ol className="mt-5 space-y-3">
        {entries.map((e, i) => {
          const known = findByName(e.name);
          return (
            <li key={e.name} className="flex items-center gap-3">
              <span className="w-6 shrink-0 text-sm tabular-nums text-muted-foreground">
                {i + 1}.
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  {known ? (
                    <Link
                      to="/navn/$slug"
                      params={{ slug: known.slug }}
                      className="truncate font-medium underline-offset-4 hover:text-primary hover:underline"
                    >
                      {e.name}
                    </Link>
                  ) : (
                    <span className="truncate font-medium">{e.name}</span>
                  )}
                  <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {e.count}
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary/70 transition-[width] duration-500"
                    style={{ width: `${(e.count / max) * 100}%` }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function StatsPage() {
  const [year, setYear] = useState(statYears[0]!);
  const stats = statsByYear(year) ?? yearStats[0]!;
  const navigate = useNavigate();

  const randomize = () => {
    const next = names[Math.floor(Math.random() * names.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <>
      <SiteHeader onRandom={randomize} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Navnetips
        </Link>

        <h1 className="mt-6 text-4xl leading-[1.06] md:text-5xl">Navnestatistikk</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          De mest brukte jentenavnene og guttenavnene i Norge, år for år. Velg et årstall for å se
          topp ti og hvor mange nyfødte som fikk navnet som første fornavn.
        </p>

        {!statsAreVerified && (
          <div
            role="note"
            className="mt-8 flex max-w-2xl gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-5"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div className="text-sm">
              <p className="font-medium text-foreground">
                Eksempeltall – ikke offisiell statistikk
              </p>
              <p className="mt-1 text-muted-foreground">
                Tallene på denne siden er plassholdere fra designutkastet og viser hvordan siden vil
                se ut. De er ikke hentet fra{" "}
                <a
                  href={statsSource.url}
                  className="text-primary underline-offset-4 hover:underline"
                  rel="noreferrer"
                >
                  {statsSource.label}
                </a>{" "}
                og skal ikke brukes som kilde.
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Velg årstall">
          {statYears.map((y) => (
            <button
              key={y}
              role="tab"
              aria-selected={y === year}
              onClick={() => setYear(y)}
              className={`rounded-full border px-4 py-2 text-sm tabular-nums transition-colors ${
                y === year
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Oppsummeringen regnes ut av tallene, så den kan ikke komme i utakt
            med tabellen under. */}
        <p className="mt-6 max-w-2xl text-muted-foreground">
          I {stats.year} var {stats.jente[0]!.name} det mest brukte jentenavnet, med{" "}
          {stats.jente[0]!.count} nyfødte, og {stats.gutt[0]!.name} det mest brukte guttenavnet, med{" "}
          {stats.gutt[0]!.count}. Til sammen fikk{" "}
          {(
            stats.jente.reduce((a, e) => a + e.count, 0) +
            stats.gutt.reduce((a, e) => a + e.count, 0)
          ).toLocaleString("nb-NO")}{" "}
          barn ett av de tjue navnene på listene under.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <StatList heading={`Jentenavn ${stats.year}`} entries={stats.jente} />
          <StatList heading={`Guttenavn ${stats.year}`} entries={stats.gutt} />
        </div>

        {statsAreVerified && (
          <p className="mt-8 text-sm text-muted-foreground">
            Kilde:{" "}
            <a
              href={statsSource.url}
              className="text-primary underline-offset-4 hover:underline"
              rel="noreferrer"
            >
              {statsSource.label}
            </a>
            . Tallene viser antall nyfødte som fikk navnet som første fornavn.
          </p>
        )}

        <div className="mt-10 border-t border-border pt-8">
          <Link to="/populaere-navn" className="text-primary underline-offset-4 hover:underline">
            Se topp 10-listene for i år →
          </Link>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
