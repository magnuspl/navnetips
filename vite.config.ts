// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { categoryPages, lettersIn, names, styleOrder } from "./src/data/names";
import { SITE } from "./src/lib/site";

/**
 * Alle sidene som skal bygges som ferdig HTML.
 *
 * Navnetips har ingen brukerdata på serveren, så hele siden prerendres til
 * statiske filer. Det gir søkemotorene ferdig HTML og lar siden ligge på et
 * helt vanlig statisk hosting-oppsett.
 */
function staticPages() {
  const pages: { path: string; sitemap?: { exclude?: boolean; priority?: number } }[] = [
    { path: "/", sitemap: { priority: 1 } },
    { path: "/populaere-navn", sitemap: { priority: 0.9 } },
    { path: "/navneforslag", sitemap: { priority: 0.8 } },
    // Personlige eller tynne sider: bygges, men holdes utenfor sitemap.
    { path: "/favoritter", sitemap: { exclude: true } },
    // Ingen rute treffer /404, så ruteren rendrer notFoundComponent. Filen
    // kopieres til dist/client/404.html av scripts/post-build.mjs.
    { path: "/404", sitemap: { exclude: true } },
    { path: "/sok", sitemap: { exclude: true } },
    { path: "/navnestatistikk", sitemap: { exclude: true } },
  ];

  for (const c of categoryPages) {
    pages.push({ path: `/${c.slug}`, sitemap: { priority: 0.9 } });

    for (const letter of lettersIn(c.category)) {
      pages.push({
        path: `/${c.slug}/bokstav/${letter.toLowerCase()}`,
        sitemap: { priority: 0.6 },
      });
    }

    // Stilsider finnes bare for jente- og guttenavn.
    if (c.category === "jente" || c.category === "gutt") {
      for (const style of styleOrder) {
        pages.push({ path: `/${c.slug}/kategori/${style}`, sitemap: { priority: 0.7 } });
      }
    }
  }

  for (const n of names) {
    pages.push({ path: `/navn/${n.slug}`, sitemap: { priority: 0.7 } });
  }

  return pages;
}

export default defineConfig({
  // Hele siden prerendres, så det bygges ingen serverbundle. Uten dette ville
  // Nitro oppdaget Netlify under bygg og lagt inn en funksjon med en egen
  // «/* → server»-regel, som ville overstyrt omdirigeringene i _redirects.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: staticPages(),
    prerender: {
      enabled: true,
      // Sidene listes eksplisitt over; crawling ville i tillegg fulgt lenker
      // inn i sider vi bevisst har utelatt.
      crawlLinks: false,
      concurrency: 8,
      failOnError: true,
    },
    sitemap: {
      enabled: true,
      host: SITE,
    },
  },
});
