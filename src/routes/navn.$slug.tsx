import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  categoryLabels,
  categoryPageFor,
  findBySlug,
  names,
  relatedNames,
  styleAdjective,
  styleLabels,
} from "@/data/names";
import { SITE } from "@/lib/site";
import { joinNo } from "@/lib/text";

export const Route = createFileRoute("/navn/$slug")({
  loader: ({ params }) => {
    const entry = findBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry, related: relatedNames(entry) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Navnet finnes ikke – Navnetips.no" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { entry } = loaderData;
    const kinds = entry.categories.map((c) => categoryLabels[c].toLowerCase());
    const kindText = kinds.length === 1 ? `et ${kinds[0]}` : `både ${joinNo(kinds)}`;

    const title = `${entry.name} – betydning og opprinnelse | Navnetips.no`;
    // «kommer fra latin/norrønt/hebraisk» fungerer for alle opphavene i
    // datasettet; «har latin opprinnelse» ville blitt ugrammatisk.
    const description = `${entry.name} betyr «${entry.meaning}» og kommer fra ${entry.origin.toLowerCase()}. Lær om betydningen, opprinnelsen og hvordan navnet brukes som ${kindText}.`;
    const url = `${SITE}/navn/${entry.slug}`;
    const parent = categoryPageFor(entry.categories[0]!);

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Navnetips", item: SITE },
              {
                "@type": "ListItem",
                position: 2,
                name: parent.h1,
                item: `${SITE}/${parent.slug}`,
              },
              { "@type": "ListItem", position: 3, name: entry.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: NameDetail,
});

function NameDetail() {
  const { entry, related } = Route.useLoaderData();
  const navigate = useNavigate();

  const randomName = () => {
    const other = names.filter((n) => n.slug !== entry.slug);
    const next = other[Math.floor(Math.random() * other.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  const parent = categoryPageFor(entry.categories[0]!);
  const usedAs = entry.categories.map((c) => categoryLabels[c].toLowerCase());

  return (
    <>
      <SiteHeader onRandom={randomName} />

      <div className="mx-auto max-w-3xl px-6 py-10">
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link to={`/${parent.slug}`}>
            <ArrowLeft /> Alle {parent.slug}
          </Link>
        </Button>

        <article className="mt-6 rounded-3xl border border-border bg-card p-8">
          <nav aria-label="Kategorier" className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
            {entry.categories.map((c, i) => (
              <span key={c} className="text-muted-foreground">
                {i > 0 && <span className="mr-2 text-muted-foreground/50">·</span>}
                <Link
                  to={`/${categoryPageFor(c).slug}`}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {categoryLabels[c]}
                </Link>
              </span>
            ))}
          </nav>

          <div className="mt-1 flex items-start justify-between gap-4">
            <h1 className="text-5xl">{entry.name}</h1>
            <FavoriteButton name={entry.name} size="lg" className="mt-2" />
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            {entry.name} betyr «{entry.meaning}» og kommer fra {entry.origin.toLowerCase()}. Navnet
            brukes som {joinNo(usedAs)}.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-secondary p-4">
              <dt className="text-xs text-muted-foreground">Betydning</dt>
              <dd className="mt-1 text-sm font-medium text-secondary-foreground">
                {entry.meaning}
              </dd>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <dt className="text-xs text-muted-foreground">Opprinnelse</dt>
              <dd className="mt-1 text-sm font-medium text-secondary-foreground">{entry.origin}</dd>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <dt className="text-xs text-muted-foreground">Stil</dt>
              <dd className="mt-1 text-sm font-medium text-secondary-foreground">
                {entry.styles.map((s) => styleLabels[s]).join(", ")}
              </dd>
            </div>
          </dl>

          {(entry.categories.includes("jente") || entry.categories.includes("gutt")) && (
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.styles.map((s) => {
                const target = entry.categories.includes("jente") ? "jentenavn" : "guttenavn";
                return (
                  <Link
                    key={s}
                    to={`/${target}/kategori/$style`}
                    params={{ style: s }}
                    className="rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
                  >
                    {styleAdjective[s]} {target}
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <h2 className="text-xl text-foreground">Passer navnet?</h2>
            <p>
              Si {entry.name} høyt noen ganger, sammen med etternavnet. Sjekk hvordan det klinger i
              hverdagen – på lekeplassen, i tur-kommandoer eller ved sengekanten.
            </p>
            <p>
              Skriv ned mulige kallenavn og initialer før du bestemmer deg, og la favoritten få
              hvile i en uke.
            </p>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl">Liknende navn</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((n) => (
                <li key={n.slug}>
                  <Link
                    to="/navn/$slug"
                    params={{ slug: n.slug }}
                    className="block rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="font-[family-name:var(--font-display)] text-xl">{n.name}</span>
                    <span className="block text-sm text-muted-foreground">{n.meaning}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <SiteFooter />
    </>
  );
}
