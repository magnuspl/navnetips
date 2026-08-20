import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { NameCard } from "@/components/name-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Input } from "@/components/ui/input";
import { categoryPages, names } from "@/data/names";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sok")({
  // q utelates når den er tom, ellers omdirigerer ruteren /sok til /sok?q=
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    const q = typeof search["q"] === "string" ? search["q"] : "";
    return q ? { q } : {};
  },
  head: () => ({
    meta: [
      { title: "Søk i alle navn | Navnetips.no" },
      {
        name: "description",
        content:
          "Søk gjennom alle navnene på Navnetips – etter navn, betydning eller opprinnelse, på tvers av jente-, gutte-, hunde- og kattenavn.",
      },
      // Søkeresultater er tynt innhold for søkemotorer.
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/sok` }],
  }),
  component: Sok,
});

const LIMIT = 60;

function Sok() {
  const { q } = Route.useSearch();
  const navigate = useNavigate({ from: "/sok" });
  const [value, setValue] = useState(q ?? "");

  const results = useMemo(() => {
    const needle = value.trim().toLowerCase();
    if (needle.length < 2) return [];
    return names
      .filter(
        (n) =>
          n.name.toLowerCase().includes(needle) ||
          n.meaning.toLowerCase().includes(needle) ||
          n.origin.toLowerCase().includes(needle),
      )
      .sort((a, b) => {
        // Navn som starter med søkeordet er nesten alltid det folk leter etter.
        const aStarts = a.name.toLowerCase().startsWith(needle) ? 0 : 1;
        const bStarts = b.name.toLowerCase().startsWith(needle) ? 0 : 1;
        return aStarts - bStarts || a.name.localeCompare(b.name, "nb");
      });
  }, [value]);

  const shown = results.slice(0, LIMIT);

  const randomize = () => {
    const pool = results.length ? results : names;
    const next = pool[Math.floor(Math.random() * pool.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  return (
    <>
      <SiteHeader onRandom={randomize} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl md:text-5xl">Søk i alle navn</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Søk etter navn, betydning eller opprinnelse på tvers av alle {names.length} navnene.
        </p>

        <form
          className="mt-8 max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ search: { q: value }, replace: true });
          }}
        >
          <label htmlFor="sok" className="sr-only">
            Søk
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="sok"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Skriv et navn, en betydning eller et opphav…"
              className="bg-card pl-10"
              autoComplete="off"
            />
          </div>
        </form>

        {value.trim().length >= 2 ? (
          <>
            <p className="mt-8 text-sm text-muted-foreground">
              {results.length === 0
                ? `Ingen treff på «${value.trim()}».`
                : `${results.length} treff på «${value.trim()}»${
                    results.length > LIMIT ? ` – viser de ${LIMIT} første` : ""
                  }.`}
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((n) => (
                <NameCard key={n.slug} entry={n} showCategories />
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">Skriv minst to tegn for å søke.</p>
        )}

        <nav className="mt-14 border-t border-border pt-8">
          <h2 className="text-2xl">Bla i stedet</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
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
        </nav>
      </div>

      <SiteFooter />
    </>
  );
}
