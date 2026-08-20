/** «a», «a og b», «a, b og c» – norsk oppramsing. */
export function joinNo(parts: string[]): string {
  if (parts.length <= 1) return parts[0] ?? "";
  return `${parts.slice(0, -1).join(", ")} og ${parts.at(-1)}`;
}
