/**
 * Genererer public/_redirects for Netlify.
 *
 * Redesignet flyttet navnesidene fra /guttenavn/<navn> til /navn/<slug>. Alle de
 * gamle adressene er indeksert, så hver av dem må svare med en 301 til den nye.
 *
 * To ting krever eksplisitte regler i stedet for en enkelt jokerregel:
 *
 *  1. Navn med æ/ø/å. Den gamle URL-en var navnet i små bokstaver
 *     (/guttenavn/bjørn), mens den nye slugen er translitterert (/navn/bjorn).
 *     En jokerregel ville sendt «bjørn» videre uendret og landet på en 404.
 *  2. Navn som finnes i flere kategorier, der de gamle adressene pekte på hver
 *     sin side. De samles nå på én side, som jokerregelen håndterer fint.
 *
 * Kjøres av `npm run build` før Vite, så filen alltid er i takt med datasettet.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { categoryPages, categorySlugs, names, styleOrder } from "../src/data/names.ts";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/** Slik så segmentet ut i de gamle URL-ene: navnet i små bokstaver. */
const oldSegment = (name) => name.toLowerCase();

const lines = [
  "# GENERERT AV scripts/build-redirects.mjs – ikke rediger for hånd.",
  "# Kjør `npm run redirects` (eller `npm run build`) for å bygge filen på nytt.",
  "",
  "# ---------------------------------------------------------------------------",
  "# Navnesider flyttet fra /<kategori>/<navn> til /navn/<slug> i redesignet.",
  "#",
  "# Reglene er ikke tvungne (ingen «!»), så Netlify serverer den prerendrede",
  "# filen når den finnes. Det er det som gjør at /guttenavn/bokstav/a og",
  "# /guttenavn/kategori/norrønt fortsatt treffer sine egne sider.",
  "# ---------------------------------------------------------------------------",
  "",
];

// 1. Navn der det gamle segmentet ikke er identisk med den nye slugen.
const special = names.filter((n) => oldSegment(n.name) !== n.slug);

lines.push("# Navn med æ/ø/å – slugen er translitterert, så disse må listes eksplisitt.");
lines.push("# Både dekodet og prosentkodet form, så regelen treffer uansett hvordan");
lines.push("# forespørselen kommer inn.");
for (const n of special) {
  for (const category of n.categories) {
    const segment = oldSegment(n.name);
    const from = `/${categorySlugs[category]}/${segment}`;
    lines.push(`${from}  /navn/${n.slug}  301`);
    const encoded = `/${categorySlugs[category]}/${encodeURIComponent(segment)}`;
    if (encoded !== from) lines.push(`${encoded}  /navn/${n.slug}  301`);
  }
}

lines.push("");
lines.push("# Alle andre navn: segmentet er allerede identisk med slugen.");
for (const slug of Object.values(categorySlugs)) {
  lines.push(`/${slug}/:navn  /navn/:navn  301`);
}

lines.push("");
lines.push("# Stilsidene beholder de indekserte adressene med æ/ø/å. ASCII-varianten");
lines.push("# finnes som alias, så lenker uten særnorske tegn også lander riktig.");
for (const c of categoryPages) {
  if (c.category !== "jente" && c.category !== "gutt") continue;
  for (const style of styleOrder) {
    const ascii = style.replaceAll("æ", "ae").replaceAll("ø", "o").replaceAll("å", "a");
    if (ascii === style) continue;
    lines.push(`/${c.slug}/kategori/${ascii}  /${c.slug}/kategori/${style}  301`);
  }
}

lines.push("");
lines.push("# Søkesiden byttet adresse og parameternavn.");
lines.push("/search  search=:q  /sok?q=:q  301");
lines.push("/search  /sok  301");

lines.push("");
lines.push("# Gamle kategorinavn på engelsk, i tilfelle noe lenker dit.");
lines.push("/boy/*  /guttenavn  301");
lines.push("/girl/*  /jentenavn  301");
lines.push("/dog/*  /hundenavn  301");
lines.push("/cat/*  /kattenavn  301");
lines.push("");

const out = path.join(root, "public", "_redirects");
fs.writeFileSync(out, lines.join("\n"), "utf8");

console.log(
  `[redirects] ${out} – ${special.length} eksplisitte navneregler, ${special.reduce((a, n) => a + n.categories.length, 0)} linjer for æ/ø/å`,
);
