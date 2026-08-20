import { Link } from "@tanstack/react-router";
import { findByName, type Category } from "@/data/names";
import { statsSource, yearStats } from "@/data/stats";

/**
 * «De mest brukte jentenavnene i 2025» – SSB-tallene rett på kategorisiden.
 *
 * Dette er det kategorisidene har som en listeartikkel ikke kan skrive seg til:
 * tall som må hentes, med kilde, og som endrer seg hvert år. Det treffer også
 * søk på «populære jentenavn», som er et helt annet søk enn «jentenavn».
 *
 * Finnes bare for jente og gutt – SSB fører ikke statistikk over dyrenavn.
 */
export function CategoryPopularity({
  category,
}: {
  category: Extract<Category, "jente" | "gutt">;
}) {
  const latest = yearStats[0];
  if (!latest) return null;

  const entries = latest[category];
  const label = category === "jente" ? "jentenavnene" : "guttenavnene";
  const born = category === "jente" ? "jenter" : "gutter";
  const max = Math.max(...entries.map((e) => e.count));
  const total = entries.reduce((a, e) => a + e.count, 0);

  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="text-3xl">
        De mest brukte {label} i {latest.year}
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {entries[0]!.name} var det mest brukte{" "}
        {category === "jente" ? "jentenavnet" : "guttenavnet"} i Norge i {latest.year}, med{" "}
        {entries[0]!.count} nyfødte. Til sammen fikk {total.toLocaleString("nb-NO")} {born} ett av
        de ti navnene under.
      </p>

      <ol className="mt-6 space-y-2.5">
        {entries.map((entry, i) => {
          const known = findByName(entry.name);
          return (
            <li key={entry.name} className="flex items-center gap-3">
              <span className="w-6 shrink-0 text-sm tabular-nums text-muted-foreground">
                {i + 1}.
              </span>
              <span className="w-28 shrink-0 truncate font-medium">
                {known ? (
                  <Link
                    to="/navn/$slug"
                    params={{ slug: known.slug }}
                    className="underline-offset-4 hover:text-primary hover:underline"
                  >
                    {entry.name}
                  </Link>
                ) : (
                  entry.name
                )}
              </span>
              <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary/70"
                  style={{ width: `${(entry.count / max) * 100}%` }}
                />
              </div>
              <span className="w-12 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
                {entry.count}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mt-5 text-sm text-muted-foreground">
        Tallene viser hvor mange nyfødte som fikk navnet som første fornavn. Kilde:{" "}
        <a
          href={statsSource.url}
          className="text-primary underline-offset-4 hover:underline"
          rel="noreferrer"
        >
          {statsSource.label}
        </a>
        .{" "}
        <Link to="/navnestatistikk" className="text-primary underline-offset-4 hover:underline">
          Se hele statistikken år for år
        </Link>
        .
      </p>
    </section>
  );
}
