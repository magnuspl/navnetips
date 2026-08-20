/**
 * Etterarbeid på den prerendrede utgaven i dist/client.
 *
 * 1. Skriver 404.html. Netlify serverer den filen med riktig 404-status for
 *    adresser som ikke finnes, i stedet for sin egen standardside.
 * 2. Rydder opp i sitemap.xml:
 *      - Navnerommet skrives som http://www.sitemaps.org/schemas/sitemap/0.9.
 *        Det er ikke en lenke, men en identifikator sitemap-standarden krever
 *        tegn for tegn, og strenge validatorer avviser https-varianten.
 *      - Kategorisidene havner i lista både med og uten skråstrek på slutten
 *        (/guttenavn og /guttenavn/) fordi prerenderen legger til en
 *        mappevariant. Duplikatene fjernes, så hver side står én gang.
 * 3. Fjerner pages.json, som bare er byggemetadata og ikke skal ligge offentlig.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const clientDir = path.join(root, "dist", "client");

if (!fs.existsSync(clientDir)) {
  console.error(`[post-build] Fant ikke ${clientDir} – hoppet over.`);
  process.exit(0);
}

/* ------------------------------------------------------------------ 404 -- */

const source = path.join(clientDir, "404", "index.html");
const target = path.join(clientDir, "404.html");

if (fs.existsSync(source)) {
  fs.copyFileSync(source, target);
  console.log("[post-build] 404.html skrevet fra den prerendrede /404-siden.");
} else {
  console.warn("[post-build] Fant ingen prerendret /404-side – 404.html ble ikke skrevet.");
}

/* -------------------------------------------------------------- sitemap -- */

const sitemapPath = path.join(clientDir, "sitemap.xml");

if (fs.existsSync(sitemapPath)) {
  let xml = fs.readFileSync(sitemapPath, "utf8");

  xml = xml.replace(
    "https://www.sitemaps.org/schemas/sitemap/0.9",
    "http://www.sitemaps.org/schemas/sitemap/0.9",
  );

  const blocks = [...xml.matchAll(/[ \t]*<url>[\s\S]*?<\/url>\n?/g)].map((m) => m[0]);
  const locOf = (block) => block.match(/<loc>([^<]*)<\/loc>/)?.[1] ?? "";

  const canonical = new Set(blocks.map(locOf).filter(Boolean));
  const seen = new Set();
  let dropped = 0;

  const kept = blocks.filter((block) => {
    const loc = locOf(block);

    // "…/guttenavn/" er samme side som "…/guttenavn". Behold varianten uten
    // skråstrek. Forsiden ("https://navnetips.no/") har ingen slik variant.
    const withoutSlash = loc.endsWith("/") ? loc.slice(0, -1) : loc;
    if (loc !== withoutSlash && withoutSlash.includes("/", 8) && canonical.has(withoutSlash)) {
      dropped++;
      return false;
    }

    if (seen.has(loc)) {
      dropped++;
      return false;
    }
    seen.add(loc);
    return true;
  });

  const head = xml.slice(0, xml.indexOf("<url>"));
  fs.writeFileSync(sitemapPath, `${head}${kept.join("")}</urlset>\n`, "utf8");

  console.log(
    `[post-build] sitemap.xml: ${kept.length} adresser (${dropped} duplikat fjernet), navnerom normalisert.`,
  );
}

/* ------------------------------------------------------------ opprydding -- */

const pagesJson = path.join(clientDir, "pages.json");
if (fs.existsSync(pagesJson)) {
  fs.rmSync(pagesJson);
  console.log("[post-build] Fjernet pages.json (byggemetadata).");
}
