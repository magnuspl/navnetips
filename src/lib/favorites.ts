import { useCallback, useSyncExternalStore } from "react";

/**
 * Favoritter ligger i localStorage under samme nøkkel og samme format som i den
 * forrige versjonen av siden (en JSON-liste med navn, ikke slugs), slik at folk
 * som allerede har lagret navn beholder listen sin etter redesignet.
 */
const STORAGE_KEY = "favoriteNames";

let snapshot: string[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

const EMPTY: string[] = [];

function read(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

function write(next: string[]) {
  snapshot = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Privat modus eller full disk – favorittene lever videre i minnet.
  }
  for (const l of listeners) l();
}

function subscribe(listener: () => void) {
  if (!hydrated) {
    hydrated = true;
    snapshot = read();
  }
  listeners.add(listener);

  // Hold flere faner i synk.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    snapshot = read();
    for (const l of listeners) l();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => snapshot;
const getServerSnapshot = () => EMPTY;

export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((name: string) => {
    write(snapshot.includes(name) ? snapshot.filter((n) => n !== name) : [...snapshot, name]);
  }, []);

  const isFavorite = useCallback((name: string) => favorites.includes(name), [favorites]);

  const clear = useCallback(() => write([]), []);

  return { favorites, toggle, isFavorite, clear };
}
