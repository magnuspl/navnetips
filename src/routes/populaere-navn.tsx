import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { findByName, names } from "@/data/names";
import { statsSource, yearStats, type StatEntry } from "@/data/stats";
import { SITE } from "@/lib/site";

// Samme kilde som /navnestatistikk. Tidligere lå det en håndskrevet topp
// ti-liste her, og den var ikke i takt med SSB – to sider på samme nettsted
// sa ulike ting om samme år.
const latest = yearStats[0]!;

const description = `De mest populære navnene i Norge i ${latest.year}. Topp 10 jente- og guttenavn med antall nyfødte, betydning og opprinnelse. Tall fra Statistisk sentralbyrå.`;

export const Route = createFileRoute("/populaere-navn")({
  head: () => {
    const title = `Mest populære navn ${latest.year} – topp 10 liste | Navnetips.no`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE}/populaere-navn` },
      ],
      links: [{ rel: "canonical", href: `${SITE}/populaere-navn` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Mest populære navn ${latest.year}`,
            itemListElement: [...latest.jente, ...latest.gutt].map((n, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: n.name,
            })),
          }),
        },
      ],
    };
  },
  component: PopulaereNavn,
});

function TopList({ heading, entries }: { heading: string; entries: StatEntry[] }) {
  return (
    <section>
      <h2 className="text-3xl">{heading}</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, i) => {
          const known = findByName(entry.name);
          return (
            <li
              key={entry.name}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-[family-name:var(--font-display)] text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-2xl">
                    {known ? (
                      <Link
                        to="/navn/$slug"
                        params={{ slug: known.slug }}
                        className="transition-colors hover:text-primary"
                      >
                        {entry.name}
                      </Link>
                    ) : (
                      entry.name
                    )}
                  </h3>
                </div>
                <FavoriteButton name={entry.name} />
              </div>

              {known && <p className="mt-1 text-sm text-muted-foreground">{known.meaning}</p>}

              <p className="mt-3 text-sm text-foreground">
                <span className="tabular-nums font-medium">{entry.count}</span>{" "}
                <span className="text-muted-foreground">nyfødte</span>
              </p>

              {known && (
                <span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                  {known.origin}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function PopulaereNavn() {
  const navigate = useNavigate();

  const randomize = () => {
    const next = names[Math.floor(Math.random() * names.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <>
      <SiteHeader onRandom={randomize} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4 text-accent" /> Årets navn
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl">Mest populære navn {latest.year}</h1>
        <div className="mt-5 max-w-2xl space-y-4 text-lg text-muted-foreground">
          <p>
            Leter du etter det perfekte navnet til barnet ditt? Her er navnene flest foreldre i
            Norge valgte i {latest.year}, med tall fra Statistisk sentralbyrå.
          </p>
          <p>
            Navnetrender endrer seg over tid, men noen navn forblir tidløse favoritter. Tallene
            viser hvor mange nyfødte som fikk navnet som første fornavn.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          <TopList heading={`Topp 10 jentenavn i ${latest.year}`} entries={latest.jente} />
          <TopList heading={`Topp 10 guttenavn i ${latest.year}`} entries={latest.gutt} />
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
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

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <Button asChild variant="outline">
            <Link to="/navnestatistikk">Se navnestatistikk år for år</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/navneforslag">Få personlige navneforslag</Link>
          </Button>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
