import { Link } from "@tanstack/react-router";
import { categoryPages } from "@/data/names";

const tools = [
  { to: "/navneforslag", label: "Navneforslag" },
  { to: "/populaere-navn", label: "Populære navn" },
  { to: "/navnestatistikk", label: "Navnestatistikk" },
  { to: "/favoritter", label: "Favoritter" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
            navne<span className="text-primary">tips</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Navn med betydning og opprinnelse – til barnet, valpen og kattungen.
          </p>
        </div>

        <nav>
          <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Navnelister</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categoryPages.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/${c.slug}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {c.h1
                    .split(" ")
                    .slice(-1)[0]!
                    .replace(/^./, (m) => m.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Verktøy</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {tools.map((t) => (
              <li key={t.to}>
                <Link to={t.to} className="text-foreground underline-offset-4 hover:underline">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h2 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Om</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                to="/"
                hash="tips"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Tips til navnevalget
              </Link>
            </li>
            <li>
              <Link
                to="/sok"
                search={{ q: "" }}
                className="text-foreground underline-offset-4 hover:underline"
              >
                Søk i alle navn
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-6 py-5 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Navnetips.no – navn til barn og kjæledyr.
        </p>
      </div>
    </footer>
  );
}
