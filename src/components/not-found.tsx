import { Link } from "@tanstack/react-router";

const suggestions = [
  { to: "/", label: "Forsiden" },
  { to: "/jentenavn", label: "Jentenavn" },
  { to: "/guttenavn", label: "Guttenavn" },
  { to: "/hundenavn", label: "Hundenavn" },
  { to: "/kattenavn", label: "Kattenavn" },
] as const;

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-[family-name:var(--font-display)] text-7xl text-primary">404</p>
        <h1 className="mt-4 text-2xl">Denne siden fant vi ikke</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Siden finnes ikke, eller så har den flyttet. Prøv en av navnelistene i stedet.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {suggestions.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
