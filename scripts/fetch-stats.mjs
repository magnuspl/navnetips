/**
 * Henter navnestatistikk fra SSB og skriver src/data/stats.ts.
 *
 * Kjøres med `npm run stats:hent`. Kjør den når SSB har publisert et nytt år.
 *
 * Kilde: SSB tabell 10467, «Fødte, etter jentenavn og guttenavn», hentet over
 * PxWebApi. Rangeringen regnes ut her – ingen tall skrives av for hånd, og
 * ingen tall skal legges inn manuelt i stats.ts.
 *
 * Data fra SSB er lisensiert som CC BY 4.0.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(root, "src/data/stats.ts");

/** Årene siden vise. Legg til nye år her når SSB publiserer dem. */
const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];

const url =
  "https://data.ssb.no/api/pxwebapi/v2-beta/tables/10467/data" +
  "?lang=no&outputFormat=csv" +
  "&valueCodes%5BContentsCode%5D=Personer" +
  `&valueCodes%5BTid%5D=${YEARS.join(",")}` +
  "&valueCodes%5BFornavn%5D=*";

console.log("Henter fra SSB …");
const res = await fetch(url);
if (!res.ok) {
  console.error(`SSB svarte ${res.status} ${res.statusText}`);
  process.exit(1);
}
const csv = await res.text();

const lines = csv.trim().split(/\r?\n/);
const header = lines[0].split(",").map((c) => c.replace(/"/g, "").trim());
const years = header.slice(1).map((h) => Number(h.replace("Personer ", "")));

if (years.some((y) => !Number.isFinite(y))) {
  console.error("Klarte ikke lese årstallene fra CSV-overskriften:", header);
  process.exit(1);
}

/** "1NORA" → "Nora". SSB skriver kodene med store bokstaver. */
const titleCase = (code) =>
  code
    .slice(1)
    .toLowerCase()
    .replace(/(^|[\s-])([a-zæøå])/g, (_m, sep, ch) => sep + ch.toUpperCase());

const rows = [];
for (const line of lines.slice(1)) {
  const m = line.match(/^"([^"]*)",(.*)$/);
  if (!m) continue;
  rows.push({
    gender: m[1][0] === "1" ? "jente" : "gutt",
    name: titleCase(m[1]),
    values: m[2].split(",").map((v) => {
      const t = v.replace(/"/g, "").trim();
      return t === "" || t === "." || t === ".." ? null : Number(t);
    }),
  });
}

if (rows.length < 100) {
  console.error(`Fikk bare ${rows.length} navn fra SSB – noe er galt med spørringen.`);
  process.exit(1);
}

const byYear = years
  .map((year, i) => {
    const top = (gender) =>
      rows
        .filter((r) => r.gender === gender && Number.isFinite(r.values[i]))
        .sort((a, b) => b.values[i] - a.values[i] || a.name.localeCompare(b.name, "nb"))
        .slice(0, 10)
        .map((r) => ({ name: r.name, count: r.values[i] }));
    return { year, jente: top("jente"), gutt: top("gutt") };
  })
  .reverse(); // nyeste år først

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const list = (entries) =>
  entries.map((e) => `      { name: "${esc(e.name)}", count: ${e.count} },`).join("\n");

const blocks = byYear
  .map(
    (y) => `  {
    year: ${y.year},
    jente: [
${list(y.jente)}
    ],
    gutt: [
${list(y.gutt)}
    ],
  },`,
  )
  .join("\n");

const file = `// Navnestatistikk for Norge.
//
// GENERERT AV scripts/fetch-stats.mjs – ikke rediger for hånd.
// Kjør \`npm run stats:hent\` for å hente nye tall.
//
// KILDE
// -----
// Statistisk sentralbyrå, tabell 10467 «Fødte, etter jentenavn og guttenavn».
// Tallene viser hvor mange nyfødte som fikk navnet som første fornavn.
//
// To forbehold fra SSB, som også står på siden: navn med færre enn fire
// forekomster publiseres ikke, og tallene gjelder navngivingsår fra og med
// 2021, mens de før 2021 gjelder fødselsår.
//
// Data fra SSB er lisensiert som CC BY 4.0.

export type StatEntry = { name: string; count: number };

export type YearStats = {
  year: number;
  jente: StatEntry[];
  gutt: StatEntry[];
};

/**
 * Settes av generatoren. Er den false, viser siden en advarsel og ber
 * søkemotorer om å ikke indeksere – se historikken bak dette flagget.
 */
export const statsAreVerified = true;

export const statsSource = {
  label: "Statistisk sentralbyrå, tabell 10467",
  url: "https://www.ssb.no/statbank/table/10467",
};

export const yearStats: YearStats[] = [
${blocks}
];

export const statYears = yearStats.map((s) => s.year);
export const statsByYear = (year: number) => yearStats.find((s) => s.year === year);
`;

fs.writeFileSync(OUT, file, "utf8");

/* ------------------------------------------------- popularitet per navn -- */

/**
 * Samme datasett, men snudd: hvor mange fikk hvert enkelt navn, år for år.
 *
 * Dette er tall vi allerede har hentet, og det gir hver navneside noe ingen
 * andre sider har – hvor vanlig akkurat det navnet er, med kilde.
 *
 * SSB fører navnet under kjønnet det er registrert på. Et navn som brukes om
 * begge, får to serier.
 */
const slugify = (name) =>
  name
    .toLowerCase()
    .replaceAll("æ", "ae")
    .replaceAll("ø", "o")
    .replaceAll("å", "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const namesTs = fs.readFileSync(path.join(root, "src/data/names.ts"), "utf8");
const ourSlugs = new Set([...namesTs.matchAll(/slug: "([^"]*)"/g)].map((m) => m[1]));

const popularity = new Map();
for (const r of rows) {
  const slug = slugify(r.name);
  if (!ourSlugs.has(slug)) continue;
  // Ta bare med navn som faktisk har tall i minst ett år.
  if (!r.values.some((v) => Number.isFinite(v))) continue;
  const list = popularity.get(slug) ?? [];
  list.push({ gender: r.gender, counts: r.values });
  popularity.set(slug, list);
}

const popBlocks = [...popularity.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], "nb"))
  .map(([slug, series]) => {
    const inner = series
      .map(
        (s) =>
          `    { gender: "${s.gender}", counts: [${s.counts
            .map((c) => (Number.isFinite(c) ? c : "null"))
            .join(", ")}] },`,
      )
      .join("\n");
    return `  ${slug}: [\n${inner}\n  ],`;
  })
  .join("\n");

const popFile = `// Hvor mange nyfødte som fikk hvert navn, år for år.
//
// GENERERT AV scripts/fetch-stats.mjs – ikke rediger for hånd.
//
// Samme kilde som stats.ts: SSB tabell 10467. Bare navn som finnes i
// names.ts er tatt med, og bare de som har tall i minst ett år.
//
// SSB publiserer ikke tall under fire, og navnelista deres omfatter navn som
// er i bruk av minst 200 personer. Navn som mangler her, er altså for
// sjeldne til å bli publisert – ikke ubrukte.

export type PopularitySeries = {
  /** Kjønnet SSB fører navnet under. */
  gender: "jente" | "gutt";
  /** Ett tall per år i \`popularityYears\`. null der SSB ikke oppgir tall. */
  counts: (number | null)[];
};

/** Årene seriene dekker, eldste først. */
export const popularityYears = [${years.join(", ")}];

export const namePopularity: Record<string, PopularitySeries[]> = {
${popBlocks}
};

export const popularityFor = (slug: string) => namePopularity[slug];
`;

fs.writeFileSync(path.join(root, "src/data/name-popularity.ts"), popFile, "utf8");
console.log(`Skrev popularitet for ${popularity.size} navn`);

console.log(`Skrev ${OUT}`);
for (const y of byYear) {
  console.log(
    `  ${y.year}  ${y.jente[0].name} ${y.jente[0].count} · ${y.gutt[0].name} ${y.gutt[0].count}`,
  );
}
