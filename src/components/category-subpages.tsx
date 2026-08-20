import { notFound } from "@tanstack/react-router";
import { CategoryPageView } from "@/components/category-page-view";
import { lengthOf, type LengthKey } from "@/components/name-filters";
import { styleEditorial, type StylePageCategory } from "@/data/content";
import {
  categoryPageBySlug,
  firstLetter,
  namesIn,
  styleAdjective,
  styleOrder,
  type CategoryPage,
  type CategorySlug,
  type Style,
} from "@/data/names";
import { SITE } from "@/lib/site";

const page = (slug: CategorySlug): CategoryPage => categoryPageBySlug(slug)!;

const head = ({
  title,
  description,
  path,
  name,
}: {
  title: string;
  description: string;
  path: string;
  name: string;
}) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE}${path}` },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: `${SITE}${path}` }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: `${SITE}${path}`,
      }),
    },
  ],
});

/* ---------------------------------------------------------------- bokstav -- */

/** Kaster 404 for bokstaver ingen navn i kategorien begynner på. */
export function loadLetter(slug: CategorySlug, raw: string) {
  const letter = raw.toLocaleUpperCase("nb");
  const count = namesIn(page(slug).category).filter((n) => firstLetter(n.name) === letter).length;
  if (!count) throw notFound();
  return { letter, count };
}

export function letterHead(slug: CategorySlug, raw: string) {
  const p = page(slug);
  const letter = raw.toLocaleUpperCase("nb");
  const label = p.slug.replace(/^./, (m) => m.toUpperCase());
  return head({
    title: `${label} på ${letter} – navn med betydning | Navnetips.no`,
    description: `Alle ${p.slug} som begynner på ${letter}, med betydning og opprinnelse. Filtrer på lengde, stil og opphav.`,
    path: `/${p.slug}/bokstav/${raw.toLowerCase()}`,
    name: `${label} på ${letter}`,
  });
}

export function LetterPage({ slug, letter }: { slug: CategorySlug; letter: string }) {
  const p = page(slug);
  const label = p.slug.replace(/^./, (m) => m.toUpperCase());
  return (
    <CategoryPageView
      page={p}
      heading={`${label} på ${letter}`}
      intro={`Her er alle ${p.slug} som begynner på ${letter}, med betydning og opprinnelse.`}
      lockedLetter={letter}
    />
  );
}

/* --------------------------------------------------------------- kategori -- */

const isStyle = (v: string): v is Style => (styleOrder as string[]).includes(v);

export function loadStyle(slug: CategorySlug, raw: string) {
  const decoded = decodeURIComponent(raw).toLowerCase();
  if (!isStyle(decoded)) throw notFound();
  const count = namesIn(page(slug).category).filter((n) => n.styles.includes(decoded)).length;
  if (!count) throw notFound();
  return { style: decoded, count };
}

export function styleHead(slug: CategorySlug, raw: string) {
  const p = page(slug);
  const decoded = decodeURIComponent(raw).toLowerCase();
  const style = isStyle(decoded) ? decoded : "klassisk";
  const label = styleAdjective[style];
  return head({
    title: `${label} ${p.slug} – navn med betydning | Navnetips.no`,
    description: `${label} ${p.slug} med betydning og opprinnelse. Se hele utvalget og filtrer på bokstav, lengde og opphav.`,
    path: `/${p.slug}/kategori/${decoded}`,
    name: `${label} ${p.slug}`,
  });
}

export function StylePage({ slug, style }: { slug: CategorySlug; style: Style }) {
  const p = page(slug);
  const label = styleAdjective[style];
  const editorial = styleEditorial[p.category as StylePageCategory]?.[style];

  return (
    <CategoryPageView
      page={p}
      heading={`${label} ${p.slug}`}
      intro={editorial?.lead ?? `${label} ${p.slug} med betydning og opprinnelse.`}
      {...(editorial ? { editorial } : {})}
      lockedStyle={style}
    />
  );
}

/* ---------------------------------------------------------------- lengde -- */

/**
 * «Korte jentenavn» og «lange guttenavn» er søk folk gjør for seg, og filteret
 * regnet det ut fra før uten at det fantes en side å lenke til.
 */
const LENGTHS: Record<string, LengthKey> = { korte: "kort", lange: "lang" };

const lengthWord = (key: LengthKey) => (key === "kort" ? "Korte" : "Lange");

export function loadLength(slug: CategorySlug, raw: string) {
  const key = LENGTHS[raw.toLowerCase()];
  if (!key) throw notFound();
  const count = namesIn(page(slug).category).filter((n) => lengthOf(n.name) === key).length;
  if (!count) throw notFound();
  return { length: key, count };
}

export function lengthHead(slug: CategorySlug, raw: string) {
  const p = page(slug);
  const key = LENGTHS[raw.toLowerCase()] ?? "kort";
  const word = lengthWord(key);
  const rule = key === "kort" ? "fire bokstaver eller færre" : "sju bokstaver eller flere";

  return head({
    title: `${word} ${p.slug} – navn med betydning | Navnetips.no`,
    description: `${word} ${p.slug} med betydning og opprinnelse – alle på ${rule}. Se hele utvalget og filtrer på bokstav, stil og opphav.`,
    path: `/${p.slug}/lengde/${raw.toLowerCase()}`,
    name: `${word} ${p.slug}`,
  });
}

export function LengthPage({ slug, length }: { slug: CategorySlug; length: LengthKey }) {
  const p = page(slug);
  const word = lengthWord(length);
  const rule =
    length === "kort"
      ? "Korte navn er lette å rope, tåler lange etternavn og blir sjelden forkortet."
      : "Lange navn gir rom for kortformer, og de får som regel en egen dagligform i familien.";

  return (
    <CategoryPageView
      page={p}
      heading={`${word} ${p.slug}`}
      intro={`${word} ${p.slug} med betydning og opprinnelse. ${rule}`}
      lockedLength={length}
    />
  );
}
