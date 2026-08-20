import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Shuffle, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NameCard } from "@/components/name-card";
import { EditorialBlock } from "@/components/editorial";
import {
  NameFilters,
  countActive,
  emptyFilters,
  lengthOf,
  type FilterState,
} from "@/components/name-filters";
import {
  categoryPages,
  firstLetter,
  namesIn,
  styleAdjective,
  styleOrder,
  type CategoryPage,
  type Style,
} from "@/data/names";
import type { Editorial } from "@/data/content";
import { SITE } from "@/lib/site";

export type CategoryViewProps = {
  page: CategoryPage;
  /** Overstyrer H1 og ingress på stil- og bokstavsider. */
  heading?: string;
  intro?: string;
  editorial?: Editorial;
  lockedStyle?: Style;
  lockedLetter?: string;
  breadcrumb?: { label: string; to: string }[];
};

export function CategoryPageView({
  page,
  heading,
  intro,
  editorial,
  lockedStyle,
  lockedLetter,
}: CategoryViewProps) {
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const navigate = useNavigate();

  const pool = useMemo(() => {
    let list = namesIn(page.category);
    if (lockedStyle) list = list.filter((n) => n.styles.includes(lockedStyle));
    if (lockedLetter) list = list.filter((n) => firstLetter(n.name) === lockedLetter);
    return list;
  }, [page.category, lockedStyle, lockedLetter]);

  const letters = useMemo(
    () =>
      [...new Set(pool.map((n) => firstLetter(n.name)))].sort((a, b) => a.localeCompare(b, "nb")),
    [pool],
  );
  const origins = useMemo(
    () => [...new Set(pool.map((n) => n.origin))].sort((a, b) => a.localeCompare(b, "nb")),
    [pool],
  );
  const styles = useMemo(
    () => styleOrder.filter((s) => pool.some((n) => n.styles.includes(s))),
    [pool],
  );

  const activeCount = countActive(filters);

  const list = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const result = pool.filter((n) => {
      if (
        q &&
        !n.name.toLowerCase().includes(q) &&
        !n.meaning.toLowerCase().includes(q) &&
        !n.origin.toLowerCase().includes(q)
      )
        return false;
      if (filters.letters.length && !filters.letters.includes(firstLetter(n.name))) return false;
      if (filters.origins.length && !filters.origins.includes(n.origin)) return false;
      if (filters.styles.length && !filters.styles.some((s) => n.styles.includes(s))) return false;
      if (filters.lengths.length && !filters.lengths.includes(lengthOf(n.name))) return false;
      return true;
    });

    return result.sort((a, b) => {
      switch (filters.sort) {
        case "za":
          return b.name.localeCompare(a.name, "nb");
        case "kortest":
          return a.name.length - b.name.length || a.name.localeCompare(b.name, "nb");
        case "lengst":
          return b.name.length - a.name.length || a.name.localeCompare(b.name, "nb");
        default:
          return a.name.localeCompare(b.name, "nb");
      }
    });
  }, [pool, filters]);

  const randomize = () => {
    const source = list.length ? list : pool;
    const next = source[Math.floor(Math.random() * source.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  // Bare jente- og guttenavn har egne stilsider; det holder også `to`-verdien
  // under smal nok type for den typede ruteren.
  const stylePageSlug =
    page.category === "jente" ? "jentenavn" : page.category === "gutt" ? "guttenavn" : null;

  const filterPanel = (
    <NameFilters
      filters={filters}
      setFilters={setFilters}
      letters={letters}
      origins={origins}
      styles={styles}
      {...(lockedStyle ? { lockedStyle } : {})}
      {...(lockedLetter ? { lockedLetter } : {})}
      activeCount={activeCount}
      resultCount={list.length}
    />
  );

  return (
    <>
      <SiteHeader onRandom={randomize} />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav aria-label="Brødsmuler" className="flex flex-wrap items-center gap-2 text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Navnetips
          </Link>
          {(lockedStyle || lockedLetter) && (
            <>
              <span className="text-muted-foreground/60">/</span>
              <Link
                to={`/${page.slug}`}
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {page.h1.split(" ").slice(-1)[0]}
              </Link>
            </>
          )}
        </nav>

        <h1 className="mt-6 text-4xl leading-[1.06] md:text-5xl">{heading ?? page.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro ?? page.intro}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[16rem_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-border bg-card p-5">
              {filterPanel}
            </div>
          </aside>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-3xl">{list.length} navn</h2>
              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal /> Filtre{activeCount > 0 ? ` (${activeCount})` : ""}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[19rem] overflow-y-auto p-6">
                    <SheetTitle className="mb-5 text-xl">Filtrer navn</SheetTitle>
                    {filterPanel}
                  </SheetContent>
                </Sheet>
                <Button variant="outline" size="sm" onClick={randomize}>
                  <Shuffle /> Tilfeldig
                </Button>
              </div>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((n) => (
                <NameCard key={n.slug} entry={n} />
              ))}
            </ul>
            {list.length === 0 && (
              <p className="mt-6 text-muted-foreground">
                Ingen navn matchet filtrene dine.{" "}
                <button
                  onClick={() => setFilters({ ...emptyFilters, sort: filters.sort })}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Nullstill filtrene
                </button>
              </p>
            )}

            {!lockedLetter && (
              <nav aria-label="Bla etter bokstav" className="mt-10 border-t border-border pt-6">
                <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Bla etter bokstav
                </h2>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {letters.map((l) => (
                    <li key={l}>
                      <Link
                        to={`/${page.slug}/bokstav/$letter`}
                        params={{ letter: l.toLowerCase() }}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-sm transition-colors hover:bg-secondary"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {stylePageSlug && !lockedStyle && (
              <nav aria-label="Bla etter stil" className="mt-8">
                <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Bla etter stil
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {styles.map((s) => (
                    <li key={s}>
                      <Link
                        to={`/${stylePageSlug}/kategori/$style`}
                        params={{ style: s }}
                        className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-secondary"
                      >
                        {styleAdjective[s]} {page.slug}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        {editorial && (
          <div className="mt-16 border-t border-border pt-10">
            <div className="max-w-3xl">
              <p className="text-lg text-foreground/90">{editorial.lead}</p>
              <div className="mt-10">
                <EditorialBlock content={editorial} />
              </div>
            </div>
          </div>
        )}

        <nav className="mt-14 border-t border-border pt-8">
          <h2 className="text-2xl">Andre navnelister</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {categoryPages
              .filter((c) => c.slug !== page.slug)
              .map((c) => (
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

export function categoryHead(page: CategoryPage) {
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/${page.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/${page.slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: page.h1,
          description: page.description,
          url: `${SITE}/${page.slug}`,
        }),
      },
    ],
  };
}
