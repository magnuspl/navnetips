// Topp 10-listene som lå på Navnetips før redesignet, uendret.
//
// Oppdater året og listene når SSB publiserer nye navnetall.

export type PopularEntry = { name: string; meaning: string; origin: string };

export const popularYear = 2024;

export const popularBoyNames: PopularEntry[] = [
  { name: "Lucas", meaning: "Lysbringer", origin: "Latin" },
  { name: "Noah", meaning: "Hvile, fred", origin: "Hebraisk" },
  { name: "Oliver", meaning: "Oliventre, fredens symbol", origin: "Latin" },
  { name: "Emil", meaning: "Ivrig, flittig", origin: "Latin" },
  { name: "Jakob", meaning: "Han som følger etter", origin: "Hebraisk" },
  { name: "William", meaning: "Besluttsom beskytter", origin: "Germansk" },
  { name: "Theodor", meaning: "Guds gave", origin: "Gresk" },
  { name: "Ludvig", meaning: "Berømt kriger", origin: "Germansk" },
  { name: "Liam", meaning: "Sterk beskytter", origin: "Irsk" },
  { name: "Johannes", meaning: "Gud er nådig", origin: "Hebraisk" },
];

export const popularGirlNames: PopularEntry[] = [
  { name: "Nora", meaning: "Lys, ære", origin: "Norrønt" },
  { name: "Emma", meaning: "Hel, universal", origin: "Germansk" },
  { name: "Olivia", meaning: "Oliventre, fredens symbol", origin: "Latin" },
  { name: "Sofie", meaning: "Visdom", origin: "Gresk" },
  { name: "Ella", meaning: "Lys, skinnende", origin: "Germansk" },
  { name: "Maja", meaning: "Den store", origin: "Norrønt" },
  { name: "Sofia", meaning: "Visdom", origin: "Gresk" },
  { name: "Leah", meaning: "Trett, utmattet", origin: "Hebraisk" },
  { name: "Selma", meaning: "Guddommelig beskyttelse", origin: "Arabisk" },
  { name: "Ellinor", meaning: "Lys, strålende", origin: "Gresk" },
];
