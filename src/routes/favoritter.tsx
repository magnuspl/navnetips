import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Heart, Shuffle, Trash2 } from "lucide-react";
import { NameCard } from "@/components/name-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { categoryPages, findByName, names } from "@/data/names";
import { useFavorites } from "@/lib/favorites";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/favoritter")({
  head: () => ({
    meta: [
      { title: "Mine favorittnavn | Navnetips.no" },
      {
        name: "description",
        content:
          "Navnene du har markert som favoritter, samlet på ett sted. Listen lagres i nettleseren din.",
      },
      // Personlig side uten eget innhold for søkemotorer.
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/favoritter` }],
  }),
  component: Favoritter,
});

function Favoritter() {
  const { favorites, clear } = useFavorites();
  const navigate = useNavigate();

  // Favorittene lagres som navn; slå dem opp mot datasettet og hopp over
  // eventuelle navn som ikke finnes lenger.
  const entries = favorites
    .map((name) => findByName(name))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .sort((a, b) => a.name.localeCompare(b.name, "nb"));

  const randomize = () => {
    const pool = entries.length ? entries : names;
    const next = pool[Math.floor(Math.random() * pool.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <>
      <SiteHeader onRandom={randomize} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl md:text-5xl">Mine favoritter</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          {entries.length > 0
            ? `Du har ${entries.length} ${entries.length === 1 ? "navn" : "navn"} i listen. Favorittene lagres i nettleseren din, så de er her neste gang du kommer tilbake.`
            : "Her samles navnene du markerer med hjertet. Listen lagres i nettleseren din."}
        </p>

        {entries.length > 0 ? (
          <>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={randomize}>
                <Shuffle /> Tilfeldig favoritt
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (window.confirm("Vil du tømme favorittlisten?")) clear();
                }}
              >
                <Trash2 /> Tøm listen
              </Button>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entries.map((n) => (
                <NameCard key={n.slug} entry={n} showCategories />
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center">
            <Heart className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">
              Ingen favoritter ennå. Trykk på hjertet ved et navn for å legge det til.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {categoryPages.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/${c.slug}`}
                    className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-secondary"
                  >
                    {c.slug.replace(/^./, (m) => m.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <SiteFooter />
    </>
  );
}
