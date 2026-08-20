/**
 * Håndhever reglene i docs/legge-til-navn.md.
 *
 * Kjøres med `npm run navn:sjekk`. Feil gir exit-kode 1; kjente hull – navn
 * som lå inne før kildekravet – rapporteres som advarsel, så de ikke blokkerer
 * arbeid, men heller ikke blir usynlige.
 *
 * Skriptet leser kildefilene som tekst i stedet for å importere dem. Datafilene
 * bruker `@/`-alias og filendelsesløse importer som Node ikke kan slå opp på
 * egen hånd, og en tekstlesning holder til de reglene som skal håndheves her.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const errors = [];
const warnings = [];

/** Opphav som med vilje ikke har egen gruppe i FAMILY_BY_ORIGIN. */
const KNOWN_OTHER = new Set(["Japansk", "Swahili", "Afrikansk", "Persisk", "Arameisk"]);

const slugify = (name) =>
  name
    .toLowerCase()
    .replaceAll("æ", "ae")
    .replaceAll("ø", "o")
    .replaceAll("å", "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* ---------------------------------------------------------------- tabell -- */

const namesSrc = fs.readFileSync(path.join(root, "src/data/names.ts"), "utf8");

const rows = [
  ...namesSrc.matchAll(
    /\{ name: "([^"]*)", slug: "([^"]*)", categories: \[([^\]]*)\], meaning: "([^"]*)", origin: "([^"]*)", styles: \[([^\]]*)\] \}/g,
  ),
].map((m) => ({
  name: m[1],
  slug: m[2],
  categories: [...m[3].matchAll(/"([^"]*)"/g)].map((x) => x[1]),
  meaning: m[4],
  origin: m[5],
  styles: [...m[6].matchAll(/"([^"]*)"/g)].map((x) => x[1]),
}));

if (rows.length === 0) {
  console.error("Fant ingen navn i names.ts – har formatet på tabellen endret seg?");
  process.exit(1);
}

/** Opphavene som har egen tekst i name-content.ts. */
const familySrc = fs.readFileSync(path.join(root, "src/lib/name-content.ts"), "utf8");
const knownOrigins = new Set(
  [
    ...familySrc.matchAll(
      /^\s{2}([A-Za-zÆØÅæøå]+): "(?:nordisk|bibelsk|gresk|latinsk|germansk|keltisk|romansk|slavisk)"/gm,
    ),
  ].map((m) => m[1]),
);

const seen = new Map();

for (const entry of rows) {
  const where = `names.ts · ${entry.name}`;

  if (seen.has(entry.slug)) {
    errors.push(`${where}: slug «${entry.slug}» brukes også av ${seen.get(entry.slug)}`);
  }
  seen.set(entry.slug, entry.name);

  if (entry.slug !== slugify(entry.name)) {
    errors.push(`${where}: slug er «${entry.slug}», men skulle vært «${slugify(entry.name)}»`);
  }

  if (!entry.categories.length) errors.push(`${where}: mangler categories`);
  if (!entry.styles.length) errors.push(`${where}: mangler styles`);
  if (!entry.meaning.trim()) errors.push(`${where}: meaning er tom`);

  // Betydningen leses inn i «X betyr «…»». Da tåler den verken plusstegn
  // eller parenteser.
  if (entry.meaning.includes("+")) {
    errors.push(`${where}: meaning «${entry.meaning}» inneholder «+» – skriv det på vanlig norsk`);
  }
  if (/[()]/.test(entry.meaning)) {
    errors.push(`${where}: meaning «${entry.meaning}» inneholder parentes – flytt det til origin`);
  }

  if (!knownOrigins.has(entry.origin) && !KNOWN_OTHER.has(entry.origin)) {
    warnings.push(
      `${where}: opphavet «${entry.origin}» mangler i FAMILY_BY_ORIGIN – siden får standardteksten for ukjent opphav`,
    );
  }
}

/* --------------------------------------------------------------- detaljer -- */

const detailDir = path.join(root, "src/data/name-details");
const details = new Map();

for (const file of fs.readdirSync(detailDir)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "types.ts") continue;
  const src = fs.readFileSync(path.join(detailDir, file), "utf8");

  // Kildene oppgis ofte gjennom en delt konstant (NPL, SNL, BTN) i stedet for
  // et inline-objekt. Slå dem opp, ellers ser sjekken en kilde uten tittel.
  const consts = new Map(
    [...src.matchAll(/^const (\w+) = \{ title: "([^"]*)"[^}]*\};$/gm)].map((m) => [m[1], m[2]]),
  );

  // Del opp på oppføringene: en topnivånøkkel er innrykket to mellomrom.
  const starts = [...src.matchAll(/^ {2}([a-z0-9]+): \{$/gm)];
  for (let i = 0; i < starts.length; i++) {
    const slug = starts[i][1];
    const from = starts[i].index;
    const to = i + 1 < starts.length ? starts[i + 1].index : src.length;
    if (details.has(slug)) {
      errors.push(`name-details: «${slug}» er definert to ganger`);
    }
    details.set(slug, { file, consts, body: src.slice(from, to) });
  }
}

for (const entry of rows) {
  const detail = details.get(entry.slug);
  if (!detail) {
    errors.push(`name-details: «${entry.name}» (${entry.slug}) mangler oppføring`);
    continue;
  }
  details.delete(entry.slug);

  const { body } = detail;

  if (!/sources:\s*\[/.test(body)) {
    warnings.push(`kilder: «${entry.name}» mangler kilde`);
  } else {
    const block = body.slice(body.indexOf("sources:"));
    const inline = [...block.matchAll(/title:\s*"([^"]*)"/g)].map((m) => m[1]);
    const viaConst = [...block.matchAll(/([A-Z][A-Z0-9_]+)/g)]
      .map((m) => detail.consts.get(m[1]))
      .filter(Boolean);
    const titles = [...inline, ...viaConst];
    if (titles.length === 0 || titles.some((t) => !t.trim())) {
      errors.push(`kilder: «${entry.name}» har en kilde uten tittel`);
    }
    for (const url of [...block.matchAll(/url:\s*"([^"]*)"/g)].map((m) => m[1])) {
      if (!/^https?:\/\//.test(url)) {
        errors.push(`kilder: «${entry.name}» har ugyldig URL «${url}»`);
      }
    }
  }

  for (const el of [...body.matchAll(/\{ form: "([^"]*)", sense: "([^"]*)" \}/g)]) {
    if (!el[1].trim() || !el[2].trim()) {
      errors.push(`ledd: «${entry.name}» har et ledd uten form eller betydning`);
    }
  }
}

for (const [orphan, { file }] of details) {
  errors.push(`name-details: «${orphan}» i ${file} finnes ikke i names.ts`);
}

/* --------------------------------------------------------------- utskrift -- */

const withSources = rows.filter((r) => {
  const d = details.get(r.slug);
  return d ? /sources:\s*\[/.test(d.body) : false;
}).length;

const missingSources = warnings.filter((w) => w.startsWith("kilder:")).length;
const haveSources = rows.length - missingSources;

console.log(`Navn i tabellen:  ${rows.length}`);
console.log(
  `Med kilder:       ${haveSources} (${Math.round((haveSources / rows.length) * 100)} %)`,
);
console.log("");

if (missingSources) {
  console.log(
    `⚠ ${missingSources} navn mangler kilde – kjent hull, se docs/legge-til-navn.md avsnitt 9`,
  );
}
for (const w of warnings.filter((w) => !w.startsWith("kilder:"))) console.log(`⚠ ${w}`);

if (errors.length) {
  console.log("");
  for (const e of errors) console.log(`✗ ${e}`);
  console.log(`\n${errors.length} feil.`);
  process.exit(1);
}

console.log("\nIngen feil.");
