import { categoryLabels } from "@/data/names";
import { popularityYears, type PopularitySeries } from "@/data/name-popularity";
import { statsSource } from "@/data/stats";

/**
 * «Hvor vanlig er navnet?» – SSB-tallene for ett navn, år for år.
 *
 * Dette er den eneste delen av navnesiden som er ren måling. Alt annet er
 * etymologi og språkhistorie; her står det hvor mange som faktisk fikk navnet.
 */
export function NamePopularity({ name, series }: { name: string; series: PopularitySeries[] }) {
  const max = Math.max(
    ...series.flatMap((s) => s.counts.filter((c): c is number => Number.isFinite(c))),
  );

  return (
    <section className="mt-12">
      <h2 className="text-3xl">Hvor vanlig er {name}?</h2>

      {series.map((s) => {
        const counts = s.counts;
        const first = counts.find((c) => Number.isFinite(c)) ?? null;
        const last = [...counts].reverse().find((c) => Number.isFinite(c)) ?? null;
        const firstYear = popularityYears[counts.findIndex((c) => Number.isFinite(c))];
        const lastYear =
          popularityYears[
            counts.length - 1 - [...counts].reverse().findIndex((c) => Number.isFinite(c))
          ];

        // Retningen skrives bare ut når endringen er stor nok til å bety noe.
        const change =
          first !== null && last !== null && first > 0
            ? Math.round(((last - first) / first) * 100)
            : null;
        const direction =
          change === null ? null : change >= 10 ? "opp" : change <= -10 ? "ned" : "stabilt";

        return (
          <div key={s.gender} className="mt-6">
            <p className="text-muted-foreground">
              I {lastYear} fikk <span className="text-foreground">{last}</span> nyfødte{" "}
              {s.gender === "jente" ? "jenter" : "gutter"} navnet {name}.
              {direction === "stabilt" && ` Bruken har holdt seg jevn siden ${firstYear}.`}
              {direction === "opp" &&
                ` Det er ${change} prosent flere enn i ${firstYear}, da ${first} fikk navnet.`}
              {direction === "ned" &&
                ` Det er ${Math.abs(change!)} prosent færre enn i ${firstYear}, da ${first} fikk navnet.`}
            </p>

            {series.length > 1 && (
              <p className="mt-1 text-xs text-muted-foreground">
                Tallene gjelder navnet brukt som {categoryLabels[s.gender].toLowerCase()}.
              </p>
            )}

            <ol className="mt-5 space-y-2.5">
              {popularityYears.map((year, i) => {
                const value = counts[i];
                return (
                  <li key={year} className="flex items-center gap-3">
                    <span className="w-12 shrink-0 text-sm tabular-nums text-muted-foreground">
                      {year}
                    </span>
                    <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary/70"
                        style={{
                          width: Number.isFinite(value)
                            ? `${((value as number) / max) * 100}%`
                            : "0%",
                        }}
                      />
                    </div>
                    <span className="w-12 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
                      {Number.isFinite(value) ? value : "–"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}

      <p className="mt-5 text-sm text-muted-foreground">
        Tallene viser hvor mange nyfødte som fikk navnet som første fornavn. Kilde:{" "}
        <a
          href={statsSource.url}
          className="text-primary underline-offset-4 hover:underline"
          rel="noreferrer"
        >
          {statsSource.label}
        </a>
        . SSB publiserer ikke tall under fire.
      </p>
    </section>
  );
}
