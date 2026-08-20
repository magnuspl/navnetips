import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";

/**
 * Egen rute for /404 slik at prerenderen får en side med 200-status å bygge.
 * scripts/post-build.mjs kopierer resultatet til dist/client/404.html, som er
 * dokumentet Netlify serverer – med riktig 404-status – for ukjente adresser.
 */
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Siden finnes ikke – Navnetips.no" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFound,
});
