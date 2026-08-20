import { Link } from "@tanstack/react-router";
import { Menu, Shuffle, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const lists = [
  { to: "/jentenavn", label: "Jentenavn" },
  { to: "/guttenavn", label: "Guttenavn" },
  { to: "/hundenavn", label: "Hundenavn" },
  { to: "/kattenavn", label: "Kattenavn" },
] as const;

const tools = [
  { to: "/navneforslag", label: "Navneforslag" },
  { to: "/populaere-navn", label: "Populære navn" },
  { to: "/navnestatistikk", label: "Statistikk" },
  { to: "/favoritter", label: "Favoritter" },
] as const;

const linkClass =
  "rounded-full px-3.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";
const activeClass = { className: "rounded-full bg-secondary px-3.5 py-1.5 text-foreground" };

export function SiteHeader({
  onRandom,
  transparent,
}: {
  onRandom?: () => void;
  transparent?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        solid
          ? "border-b border-border/60 bg-background/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
            <Tag className="h-[1.15rem] w-[1.15rem]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground">
              navne<span className="text-primary">tips</span>
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              navn med mening
            </span>
          </span>
        </Link>

        <nav
          aria-label="Hovedmeny"
          className="hidden items-center gap-1 rounded-full border border-border bg-card/70 p-1 text-sm lg:flex"
        >
          {lists.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass} activeProps={activeClass}>
              {l.label}
            </Link>
          ))}
          <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
          <Link to="/navneforslag" className={linkClass} activeProps={activeClass}>
            Forslag
          </Link>
          <Link to="/favoritter" className={linkClass} activeProps={activeClass}>
            Favoritter
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {onRandom && (
            <Button size="sm" variant="outline" onClick={onRandom} className="rounded-full">
              <Shuffle /> <span className="hidden sm:inline">Tilfeldig</span>
            </Button>
          )}

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline" className="rounded-full lg:hidden">
                <Menu />
                <span className="sr-only">Meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[17rem] overflow-y-auto p-6">
              <SheetTitle className="mb-6 text-xl">Meny</SheetTitle>
              <nav aria-label="Mobilmeny" className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Navnelister
                  </p>
                  <ul className="mt-3 space-y-1">
                    {lists.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-foreground transition-colors hover:bg-secondary"
                          activeProps={{
                            className: "block rounded-lg bg-secondary px-3 py-2 text-foreground",
                          }}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Verktøy
                  </p>
                  <ul className="mt-3 space-y-1">
                    {tools.map((t) => (
                      <li key={t.to}>
                        <Link
                          to={t.to}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-foreground transition-colors hover:bg-secondary"
                          activeProps={{
                            className: "block rounded-lg bg-secondary px-3 py-2 text-foreground",
                          }}
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
