import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/favorites";

export function FavoriteButton({
  name,
  size = "md",
  className = "",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { isFavorite, toggle } = useFavorites();
  const on = isFavorite(name);
  const box = size === "lg" ? "h-11 w-11" : size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const icon =
    size === "lg" ? "h-5.5 w-5.5" : size === "sm" ? "h-4 w-4" : "h-[1.15rem] w-[1.15rem]";

  return (
    <button
      type="button"
      onClick={() => toggle(name)}
      aria-pressed={on}
      aria-label={on ? `Fjern ${name} fra favoritter` : `Legg ${name} til i favoritter`}
      title={on ? "Fjern fra favoritter" : "Legg til i favoritter"}
      className={`grid ${box} shrink-0 place-items-center rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${
        on
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-transparent text-muted-foreground hover:border-border hover:bg-secondary hover:text-accent"
      } ${className}`}
    >
      <Heart className={`${icon} transition-transform ${on ? "scale-110 fill-current" : ""}`} />
    </button>
  );
}
