import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryLabels, styleLabels, type Category, type Style } from "@/data/names";

/**
 * Skiller navn som først og fremst hører til kategorien fra navn som er lånt
 * inn fra en annen bruk. På /hundenavn er det forskjell på Pusur og Angus.
 */
export type UseKey = "alle" | "primar" | "ogsa";

export type LengthKey = "kort" | "middels" | "lang";
export type SortKey = "az" | "za" | "kortest" | "lengst";

export const lengthLabels: Record<LengthKey, string> = {
  kort: "Kort (1–4 bokstaver)",
  middels: "Middels (5–6)",
  lang: "Lang (7+)",
};

export const sortLabels: Record<SortKey, string> = {
  az: "Alfabetisk (A–Å)",
  za: "Alfabetisk (Å–A)",
  kortest: "Korteste først",
  lengst: "Lengste først",
};

export const lengthOf = (name: string): LengthKey =>
  name.length <= 4 ? "kort" : name.length <= 6 ? "middels" : "lang";

export type FilterState = {
  query: string;
  use: UseKey;
  letters: string[];
  origins: string[];
  styles: Style[];
  lengths: LengthKey[];
  sort: SortKey;
};

export const emptyFilters: FilterState = {
  query: "",
  use: "alle",
  letters: [],
  origins: [],
  styles: [],
  lengths: [],
  sort: "az",
};

export const countActive = (f: FilterState) =>
  (f.use === "alle" ? 0 : 1) +
  f.letters.length +
  f.origins.length +
  f.styles.length +
  f.lengths.length +
  (f.query.trim() ? 1 : 0);

type Props = {
  filters: FilterState;
  setFilters: (next: FilterState) => void;
  letters: string[];
  origins: string[];
  styles: Style[];
  /** Kategorien siden viser, brukes til å tekste «Bruk»-valget. */
  category: Category;
  /** Filtre som er låst av selve siden (f.eks. /guttenavn/kategori/norrønt). */
  lockedStyle?: Style;
  lockedLetter?: string;
  lockedLength?: LengthKey;
  activeCount: number;
  resultCount: number;
};

function toggle<T>(list: T[], value: T) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function NameFilters({
  filters,
  setFilters,
  letters,
  origins,
  styles,
  category,
  lockedStyle,
  lockedLetter,
  lockedLength,
  activeCount,
  resultCount,
}: Props) {
  const patch = (part: Partial<FilterState>) => setFilters({ ...filters, ...part });

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          <Filter className="h-4 w-4 text-primary" /> Filtrer
          {activeCount > 0 && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {activeCount}
            </span>
          )}
        </p>
        {activeCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => setFilters({ ...emptyFilters, sort: filters.sort })}
          >
            <X className="h-3.5 w-3.5" /> Nullstill
          </Button>
        )}
      </div>

      {(lockedStyle || lockedLetter || lockedLength) && (
        <p className="rounded-xl bg-secondary/70 px-3 py-2 text-xs text-secondary-foreground">
          Denne siden viser bare{" "}
          {lockedStyle ? <strong>{styleLabels[lockedStyle].toLowerCase()} navn</strong> : null}
          {lockedStyle && lockedLetter ? " " : null}
          {lockedLetter ? (
            <>
              navn på <strong>{lockedLetter}</strong>
            </>
          ) : null}
          {lockedLength ? <strong>{lengthLabels[lockedLength].toLowerCase()}</strong> : null}.
          Filtrene under gjelder innenfor det utvalget.
        </p>
      )}

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Søk</Label>
        <Input
          value={filters.query}
          onChange={(e) => patch({ query: e.target.value })}
          placeholder="Navn eller betydning…"
          className="bg-card"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Sorter</Label>
        <Select value={filters.sort} onValueChange={(v) => patch({ sort: v as SortKey })}>
          <SelectTrigger className="bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(sortLabels) as SortKey[]).map((k) => (
              <SelectItem key={k} value={k}>
                {sortLabels[k]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Bruk</Label>
        <Select value={filters.use} onValueChange={(v) => patch({ use: v as UseKey })}>
          <SelectTrigger className="bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alle">Alle {categoryLabels[category].toLowerCase()}</SelectItem>
            <SelectItem value="primar">
              Først og fremst {categoryLabels[category].toLowerCase()}
            </SelectItem>
            <SelectItem value="ogsa">
              Brukes også som {categoryLabels[category].toLowerCase()}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!lockedLetter && letters.length > 1 && (
        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Første bokstav
          </Label>
          <div className="flex flex-wrap gap-1.5">
            {letters.map((l) => {
              const on = filters.letters.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => patch({ letters: toggle(filters.letters, l) })}
                  aria-pressed={on}
                  className={`h-8 w-8 rounded-lg border text-sm transition-colors ${
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!lockedLength && (
        <FilterGroup
          label="Lengde"
          options={(Object.keys(lengthLabels) as LengthKey[]).map((k) => ({
            value: k,
            label: lengthLabels[k],
          }))}
          selected={filters.lengths}
          onToggle={(v) => patch({ lengths: toggle(filters.lengths, v) })}
        />
      )}

      {!lockedStyle && styles.length > 1 && (
        <FilterGroup
          label="Stil"
          options={styles.map((s) => ({ value: s, label: styleLabels[s] }))}
          selected={filters.styles}
          onToggle={(v) => patch({ styles: toggle(filters.styles, v) })}
        />
      )}

      <FilterGroup
        label="Opprinnelse"
        options={origins.map((o) => ({ value: o, label: o }))}
        selected={filters.origins}
        onToggle={(v) => patch({ origins: toggle(filters.origins, v) })}
      />

      <p className="border-t border-border pt-4 text-sm text-muted-foreground">
        {resultCount} navn i utvalget
      </p>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: { value: T; label: string }[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  if (options.length === 0) return null;

  return (
    <div className="space-y-2.5">
      <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</Label>
      <ul className="space-y-2">
        {options.map((o) => (
          <li key={o.value} className="flex items-center gap-2.5">
            <Checkbox
              id={`${label}-${o.value}`}
              checked={selected.includes(o.value)}
              onCheckedChange={() => onToggle(o.value)}
            />
            <Label htmlFor={`${label}-${o.value}`} className="text-sm font-normal">
              {o.label}
            </Label>
          </li>
        ))}
      </ul>
    </div>
  );
}
