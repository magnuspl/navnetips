/**
 * Kobler navn sammen via navneledd.
 *
 * Torbjørn, Kolbjørn og Bjørnar deler leddet «bjǫrn». Den koblingen er ekte
 * etymologi, den er nyttig for folk som liker ett navn og vil se slektningene
 * av det, og den gir intern lenking mellom sider som faktisk hører sammen.
 */
import { names, type NameEntry } from "@/data/names";
import { nameDetails } from "@/data/name-details";

/** form (normalisert) → slugs som har leddet */
const byElement = new Map<string, string[]>();

const normalize = (form: string) => form.toLowerCase().replace(/[^a-zæøåǫþðáéíóúýǽœ]/g, "");

for (const [slug, detail] of Object.entries(nameDetails)) {
  for (const el of detail.elements ?? []) {
    const key = normalize(el.form);
    if (!key) continue;
    const list = byElement.get(key);
    if (list) list.push(slug);
    else byElement.set(key, [slug]);
  }
}

const bySlug = new Map(names.map((n) => [n.slug, n]));

export type ElementRelation = {
  form: string;
  sense: string;
  names: NameEntry[];
};

/** Navn som deler minst ett ledd med dette, gruppert per ledd. */
export function sharedElementNames(slug: string, limit = 8): ElementRelation[] {
  const detail = nameDetails[slug];
  if (!detail?.elements) return [];

  const out: ElementRelation[] = [];

  for (const el of detail.elements) {
    const siblings = (byElement.get(normalize(el.form)) ?? [])
      .filter((s) => s !== slug)
      .map((s) => bySlug.get(s))
      .filter((n): n is NameEntry => Boolean(n))
      .sort((a, b) => a.name.localeCompare(b.name, "nb"))
      .slice(0, limit);

    if (siblings.length) out.push({ form: el.form, sense: el.sense, names: siblings });
  }

  return out;
}

/** Andre navn med samme opphav, til intern lenking når ledd mangler. */
export function sameOriginNames(entry: NameEntry, limit = 8): NameEntry[] {
  return names
    .filter(
      (n) =>
        n.slug !== entry.slug &&
        n.origin === entry.origin &&
        n.categories.some((c) => entry.categories.includes(c)),
    )
    .sort((a, b) => a.name.localeCompare(b.name, "nb"))
    .slice(0, limit);
}
