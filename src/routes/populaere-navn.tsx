import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { findByName, names } from "@/data/names";
import { popularBoyNames, popularGirlNames, popularYear, type PopularEntry } from "@/data/popular";
import { SITE } from "@/lib/site";

const description = `Utforsk de mest populære navnene i ${popularYear}. Topp 10 gutte- og jentenavn med betydning og opprinnelse – finn trendene for årets navn.`;

export const Route = createFileRoute("/populaere-navn")({
  head: () => {
    const title = `Mest populære navn ${popularYear} – topp 10 liste | Navnetips.no`;
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
            name: `Mest populære navn ${popularYear}`,
            itemListElement: [...popularGirlNames, ...popularBoyNames].map((n, i) => ({
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

function TopList({ heading, entries }: { heading: string; entries: PopularEntry[] }) {
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
              <p className="mt-1 text-sm text-muted-foreground">{entry.meaning}</p>
              <span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {entry.origin}
              </span>
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
        <h1 className="mt-2 text-4xl md:text-5xl">Mest populære navn {popularYear}</h1>
        <div className="mt-5 max-w-2xl space-y-4 text-lg text-muted-foreground">
          <p>
            Leter du etter det perfekte navnet til barnet ditt? Her finner du de mest populære
            navnene i {popularYear}.
          </p>
          <p>
            Navnetrender endrer seg over tid, men noen navn forblir tidløse favoritter. Utforsk
            listene over de mest populære gutte- og jentenavnene.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          <TopList heading={`Topp 10 jentenavn i ${popularYear}`} entries={popularGirlNames} />
          <TopList heading={`Topp 10 guttenavn i ${popularYear}`} entries={popularBoyNames} />
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-8">
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
