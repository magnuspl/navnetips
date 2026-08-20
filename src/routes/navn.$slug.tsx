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
  primaryCategory,
  relatedNames,
  spansKinds,
  styleLabels,
  type NameEntry,
} from "@/data/names";
import { nameDetails, type NameDetail } from "@/data/name-details";
import { popularityFor } from "@/data/name-popularity";
import { NamePopularity } from "@/components/name-popularity";
import { SITE } from "@/lib/site";
import { joinNo } from "@/lib/text";
import {
  familyContext,
  guessShortForm,
  hasNorwegianLetters,
  practicalNotes,
  syllableWord,
  syllables,
} from "@/lib/name-content";
import { sameOriginNames, sharedElementNames } from "@/lib/name-relations";

export const Route = createFileRoute("/navn/$slug")({
  loader: ({ params }) => {
    const entry = findBySlug(params.slug);
    if (!entry) throw notFound();
    return {
      entry,
      detail: nameDetails[entry.slug] ?? {},
      popularity: popularityFor(entry.slug) ?? null,
      related: relatedNames(entry),
      elementRelations: sharedElementNames(entry.slug),
      sameOrigin: sameOriginNames(entry),
    };
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

    const { entry, detail } = loaderData;
    const kinds = entry.categories.map((c) => categoryLabels[c].toLowerCase());
    const url = `${SITE}/navn/${entry.slug}`;
    const parent = categoryPageFor(entry.categories[0]!);

    // Tittelen legger seg tett på det folk faktisk skriver i søkefeltet:
    // «<navn> betydning» og «hva betyr <navn>».
    const title = `${entry.name} – betydning, opprinnelse og opphav | Navnetips.no`;

    // Beskrivelsen svarer på spørsmålet med én gang, og tar med navneleddene
    // når de finnes, slik at hvert utdrag i søkeresultatet blir forskjellig.
    const elementText = detail.elements?.length
      ? ` Satt sammen av ${joinNo(detail.elements.map((e) => `${e.form} («${e.sense}»)`))}.`
      : "";
    const description =
      `Hva betyr ${entry.name}? ${entry.name} betyr «${entry.meaning}» og kommer fra ${entry.origin.toLowerCase()}.${elementText} Se betydning, opprinnelse, uttale og kortformer.`.slice(
        0,
        320,
      );

    const faq = buildFaq({ entry, detail });

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
        {
          // Spørsmålene og svarene står synlig på siden; markeringen gjentar
          // bare det som allerede er der.
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${entry.name} – betydning og opprinnelse`,
            about: { "@type": "Thing", name: entry.name, description: entry.meaning },
            inLanguage: "nb-NO",
            isPartOf: { "@type": "WebSite", name: "Navnetips", url: SITE },
            mainEntityOfPage: url,
            keywords: [
              `${entry.name} betydning`,
              `${entry.name} navn`,
              `hva betyr ${entry.name}`,
              ...kinds,
            ].join(", "),
          }),
        },
      ],
    };
  },

  component: NameDetail,
});

/** origin kan være ett avsnitt eller flere. */
const originParagraphs = (origin: string | string[] | undefined): string[] =>
  origin === undefined ? [] : Array.isArray(origin) ? origin : [origin];

/** Spørsmålene bygges ett sted, så synlig tekst og markering ikke kan sprike. */
function buildFaq({ entry, detail }: { entry: NameEntry; detail: NameDetail }) {
  const faq: { q: string; a: string }[] = [];

  const elementText = detail.elements?.length
    ? ` Navnet er satt sammen av ${joinNo(
        detail.elements.map((e) => `${e.form}, som betyr «${e.sense}»`),
      )}.`
    : "";

  faq.push({
    q: `Hva betyr navnet ${entry.name}?`,
    a: `${entry.name} betyr «${entry.meaning}».${elementText}`,
  });

  faq.push({
    q: `Hvor kommer navnet ${entry.name} fra?`,
    // «kommer fra norrønt» framfor «har norrønt opprinnelse»: opphavene er
    // substantiv (Norrønt, Latin, Gresk) og bøyes ikke som adjektiv.
    a: originParagraphs(detail.origin).length
      ? `${entry.name} kommer fra ${entry.origin.toLowerCase()}. ${originParagraphs(detail.origin)[0]}`
      : `${entry.name} kommer fra ${entry.origin.toLowerCase()}.`,
  });

  const kinds = entry.categories.map((c) => categoryLabels[c].toLowerCase());
  const isGirl = entry.categories.includes("jente");
  const isBoy = entry.categories.includes("gutt");

  if (isGirl || isBoy) {
    faq.push({
      q: `Er ${entry.name} et jentenavn eller guttenavn?`,
      a:
        isGirl && isBoy
          ? `${entry.name} brukes både som jentenavn og guttenavn i Norge.`
          : `${entry.name} brukes som ${isGirl ? "jentenavn" : "guttenavn"} i Norge.${
              kinds.length > 1 ? ` Navnet brukes også som ${joinNo(kinds.slice(1))}.` : ""
            }`,
    });
  } else {
    faq.push({
      q: `Passer ${entry.name} som ${joinNo(kinds)}?`,
      a: `${entry.name} er et ${joinNo(kinds)} på ${syllableWord(syllables(entry.name))}${
        detail.shortForms?.length ? `, med kortformen ${detail.shortForms[0]}` : ""
      }.`,
    });
  }

  if (detail.pronunciation) {
    faq.push({
      q: `Hvordan uttales ${entry.name}?`,
      a: `${entry.name} uttales ${detail.pronunciation}.`,
    });
  }

  if (detail.variants?.length) {
    faq.push({
      q: `Hvordan skrives ${entry.name} ellers?`,
      a: `Andre skrivemåter av ${entry.name} er ${joinNo(detail.variants)}.`,
    });
  }

  return faq;
}

function NameDetail() {
  const { entry, detail, related, elementRelations, sameOrigin, popularity } =
    Route.useLoaderData();
  const navigate = useNavigate();

  const randomName = () => {
    const other = names.filter((n) => n.slug !== entry.slug);
    const next = other[Math.floor(Math.random() * other.length)];
    if (next) navigate({ to: "/navn/$slug", params: { slug: next.slug } });
  };

  const parent = categoryPageFor(entry.categories[0]!);
  const usedAs = entry.categories.map((c) => categoryLabels[c].toLowerCase());
  const faq = buildFaq({ entry, detail });
  const notes = practicalNotes(entry);
  const shortForms = detail.shortForms ?? [];
  const guessed = shortForms.length ? null : guessShortForm(entry.name);

  return (
    <>
      <SiteHeader onRandom={randomName} />

      <div className="mx-auto max-w-3xl px-6 py-10">
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link to={`/${parent.slug}`}>
            <ArrowLeft /> Alle {parent.slug}
          </Link>
        </Button>

        <article className="mt-6">
          <div className="rounded-3xl border border-border bg-card p-8">
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
              {entry.name} betyr «{entry.meaning}» og kommer fra {entry.origin.toLowerCase()}.{" "}
              {spansKinds(entry) ? (
                <>
                  Navnet brukes først og fremst som{" "}
                  {categoryLabels[primaryCategory(entry)].toLowerCase()}, men også som{" "}
                  {joinNo(usedAs.slice(1))}.
                </>
              ) : (
                <>Navnet brukes som {joinNo(usedAs)}.</>
              )}
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
                <dd className="mt-1 text-sm font-medium text-secondary-foreground">
                  {entry.origin}
                </dd>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <dt className="text-xs text-muted-foreground">Stil</dt>
                <dd className="mt-1 text-sm font-medium text-secondary-foreground">
                  {entry.styles.map((s) => styleLabels[s]).join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          {/* --------------------------------------------------- betydning -- */}

          <section className="mt-12">
            <h2 className="text-3xl">Hva betyr {entry.name}?</h2>
            <p className="mt-4 text-muted-foreground">
              {entry.name} betyr «{entry.meaning}».
              {/* Ett ledd er ikke «satt sammen» av noe – da må setningen være en annen. */}
              {detail.elements?.length === 1
                ? " Navnet går tilbake på ett enkelt ledd:"
                : detail.elements?.length
                  ? ` Navnet er satt sammen av ${
                      detail.elements.length === 2 ? "to ledd" : `${detail.elements.length} ledd`
                    }, og betydningen følger av hva leddene betyr hver for seg:`
                  : ""}
            </p>

            {detail.elements?.length ? (
              <dl className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {detail.elements.map((el) => (
                  <div key={el.form} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 p-4">
                    <dt className="font-[family-name:var(--font-display)] text-xl">{el.form}</dt>
                    <dd className="text-muted-foreground">{el.sense}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </section>

          {/* ------------------------------------------------------ opphav -- */}

          <section className="mt-12">
            <h2 className="text-3xl">Hvor kommer {entry.name} fra?</h2>
            {originParagraphs(detail.origin).map((text) => (
              <p key={text} className="mt-4 text-muted-foreground">
                {text}
              </p>
            ))}
            <p className="mt-4 text-muted-foreground">{familyContext(entry.origin)}</p>
          </section>

          {popularity && <NamePopularity name={entry.name} series={popularity} />}

          {/* ---------------------------------------- uttale og skrivemåte -- */}

          <section className="mt-12">
            <h2 className="text-3xl">Uttale, skrivemåter og kortformer</h2>
            <dl className="mt-4 space-y-3">
              {detail.pronunciation && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Uttale
                  </dt>
                  <dd className="mt-1 text-muted-foreground">
                    {entry.name} uttales {detail.pronunciation}.
                  </dd>
                </div>
              )}
              {detail.variants?.length ? (
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Andre skrivemåter
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{joinNo(detail.variants)}</dd>
                </div>
              ) : null}
              {shortForms.length ? (
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Kortformer
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{joinNo(shortForms)}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Form</dt>
                <dd className="mt-1 text-muted-foreground">
                  {entry.name} har {syllableWord(syllables(entry.name))} og {entry.name.length}{" "}
                  bokstaver.
                  {guessed ? ` I dagligtale blir navnet ofte kortet til ${guessed}.` : ""}
                  {hasNorwegianLetters(entry.name)
                    ? " Skrivemåten bruker særnorske bokstaver, som kan bli endret i utenlandske systemer."
                    : ""}
                </dd>
              </div>
            </dl>
          </section>

          {/* ----------------------------------------- navn med samme ledd -- */}

          {elementRelations.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl">Navn i slekt med {entry.name}</h2>
              {elementRelations.map((rel) => (
                <div key={rel.form} className="mt-5">
                  <p className="text-sm text-muted-foreground">
                    Navn som deler leddet{" "}
                    <span className="font-[family-name:var(--font-display)] text-foreground">
                      {rel.form}
                    </span>{" "}
                    («{rel.sense}»):
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {rel.names.map((n) => (
                      <li key={n.slug}>
                        <Link
                          to="/navn/$slug"
                          params={{ slug: n.slug }}
                          className="inline-block rounded-full border border-border bg-card px-3.5 py-1.5 text-sm transition-colors hover:bg-secondary"
                        >
                          {n.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* ---------------------------------------------------- praktisk -- */}

          <section className="mt-12">
            <h2 className="text-3xl">Passer {entry.name}?</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </section>

          {/* --------------------------------------------------------- faq -- */}

          <section className="mt-12">
            <h2 className="text-3xl">Spørsmål om navnet {entry.name}</h2>
            <dl className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {faq.map((f) => (
                <div key={f.q} className="p-5">
                  <dt className="font-medium text-foreground">{f.q}</dt>
                  <dd className="mt-1.5 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ------------------------------------------------------- kilder -- */}

          {detail.sources?.length ? (
            <section className="mt-12">
              <h2 className="text-2xl">Kilder</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Opplysningene om {entry.name} kan etterprøves her:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {detail.sources.map((source) => (
                  <li key={`${source.title}-${source.publisher ?? ""}`} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                    />
                    <span className="text-muted-foreground">
                      {source.url ? (
                        <a
                          href={source.url}
                          className="text-foreground underline underline-offset-4 hover:text-primary"
                          rel="noreferrer"
                        >
                          {source.title}
                        </a>
                      ) : (
                        <span className="text-foreground">{source.title}</span>
                      )}
                      {source.publisher ? ` – ${source.publisher}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>

        {/* --------------------------------------------------- samme opphav -- */}

        {sameOrigin.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl">Flere navn fra {entry.origin.toLowerCase()}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sameOrigin.map((n) => (
                <li key={n.slug}>
                  <Link
                    to="/navn/$slug"
                    params={{ slug: n.slug }}
                    className="inline-block rounded-full border border-border bg-card px-3.5 py-1.5 text-sm transition-colors hover:bg-secondary"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
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
