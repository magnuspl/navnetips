import { Link } from "@tanstack/react-router";
import { FavoriteButton } from "@/components/favorite-button";
import { categoryLabels, styleLabels, type NameEntry } from "@/data/names";

export function NameCard({
  entry,
  showCategories = false,
}: {
  entry: NameEntry;
  showCategories?: boolean;
}) {
  return (
    <li className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl">
          <Link
            to="/navn/$slug"
            params={{ slug: entry.slug }}
            className="transition-colors hover:text-primary"
          >
            {entry.name}
          </Link>
        </h3>
        <FavoriteButton name={entry.name} />
      </div>

      <p className="mt-1 text-sm text-muted-foreground">{entry.meaning}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
          {entry.origin}
        </span>
        {entry.styles
          // Norrønt er både et opphav og en stil; vis brikken bare én gang.
          .filter((s) => styleLabels[s] !== entry.origin)
          .map((s) => (
            <span key={s} className="rounded-full bg-sage px-2.5 py-1 text-sage-foreground">
              {styleLabels[s]}
            </span>
          ))}
        {showCategories &&
          entry.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border px-2.5 py-1 text-muted-foreground"
            >
              {categoryLabels[c]}
            </span>
          ))}
      </div>
    </li>
  );
}
