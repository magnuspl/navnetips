/**
 * Skriver om enkeltoppføringer i src/data/name-details/.
 *
 * Brukes når innholdet for et navn skal fylles ut. Tar en fil med nye felt per
 * slug og bytter ut oppføringene, uten å røre resten av fila.
 *
 *   node scripts/apply-details.mjs <fil-med-nye-oppforinger.mjs>
 *
 * Inndatafila eksporterer default et objekt:
 *
 *   export default {
 *     bingo: {
 *       origin: "…",
 *       elements: [{ form: "…", sense: "…" }],
 *       variants: ["…"],
 *       sources: ["ETYM", "BTN"],   // navn på konstanter i målfila
 *     },
 *   };
 *
 * Felt som ikke er oppgitt, beholdes fra den eksisterende oppføringen.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DETAIL_DIR = path.join(root, "src/data/name-details");

const input = process.argv[2];
if (!input) {
  console.error("Bruk: node scripts/apply-details.mjs <fil>");
  process.exit(1);
}

const updates = (await import(pathToFileURL(path.resolve(input)).href)).default;

const q = (s) => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

/** Bygger kroppen til én oppføring. */
function render(slug, next, prev) {
  const parts = [];

  const elements = next.elements ?? prev.elements;
  if (elements?.length) {
    const inner = elements
      .map((e) => `      { form: ${q(e.form)}, sense: ${q(e.sense)} },`)
      .join("\n");
    parts.push(`    elements: [\n${inner}\n    ],`);
  }

  const origin = next.origin ?? prev.origin;
  if (origin) parts.push(`    origin:\n      ${q(origin)},`);

  const pron = next.pronunciation ?? prev.pronunciation;
  if (pron) parts.push(`    pronunciation: ${q(pron)},`);

  for (const key of ["variants", "shortForms", "related"]) {
    const list = next[key] ?? prev[key];
    if (list?.length) parts.push(`    ${key}: [${list.map(q).join(", ")}],`);
  }

  const sources = next.sources ?? prev.sources;
  if (sources?.length) parts.push(`    sources: [${sources.join(", ")}],`);

  return `  ${slug}: {\n${parts.join("\n")}\n  },\n`;
}

/** Leser ut feltene som allerede står i en oppføring. */
function parseExisting(body) {
  const out = {};

  const om = body.match(/origin:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  if (om) out.origin = om[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");

  const pm = body.match(/pronunciation:\s*"((?:[^"\\]|\\.)*)"/);
  if (pm) out.pronunciation = pm[1].replace(/\\"/g, '"');

  const em = body.match(/elements:\s*\[([\s\S]*?)\n\s{4}\],/);
  if (em) {
    out.elements = [...em[1].matchAll(/\{ form: "([^"]*)", sense: "([^"]*)" \}/g)].map((m) => ({
      form: m[1],
      sense: m[2],
    }));
  }

  for (const key of ["variants", "shortForms", "related"]) {
    const m = body.match(new RegExp(`${key}: \\[([^\\]]*)\\]`));
    if (m) out[key] = [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]);
  }

  const sm = body.match(/sources: \[([^\]]*)\]/);
  if (sm)
    out.sources = sm[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  return out;
}

const remaining = new Set(Object.keys(updates));
let changed = 0;

for (const file of fs.readdirSync(DETAIL_DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "types.ts") continue;

  const full = path.join(DETAIL_DIR, file);
  let src = fs.readFileSync(full, "utf8");
  const starts = [...src.matchAll(/^ {2}([a-z0-9]+): \{$/gm)];

  // Bakfra, så indeksene holder seg.
  for (let i = starts.length - 1; i >= 0; i--) {
    const slug = starts[i][1];
    if (!updates[slug]) continue;

    const from = starts[i].index;
    const to = i + 1 < starts.length ? starts[i + 1].index : src.lastIndexOf("};");
    const body = src.slice(from, to);

    src = src.slice(0, from) + render(slug, updates[slug], parseExisting(body)) + src.slice(to);
    remaining.delete(slug);
    changed++;
  }

  fs.writeFileSync(full, src, "utf8");
}

console.log(`Oppdaterte ${changed} oppføringer.`);
if (remaining.size) console.error(`Fant ikke: ${[...remaining].join(", ")}`);
