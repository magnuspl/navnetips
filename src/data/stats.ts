// Navnestatistikk for Norge.
//
// GENERERT AV scripts/fetch-stats.mjs – ikke rediger for hånd.
// Kjør `npm run stats:hent` for å hente nye tall.
//
// KILDE
// -----
// Statistisk sentralbyrå, tabell 10467 «Fødte, etter jentenavn og guttenavn».
// Tallene viser hvor mange nyfødte som fikk navnet som første fornavn.
//
// To forbehold fra SSB, som også står på siden: navn med færre enn fire
// forekomster publiseres ikke, og tallene gjelder navngivingsår fra og med
// 2021, mens de før 2021 gjelder fødselsår.
//
// Data fra SSB er lisensiert som CC BY 4.0.

export type StatEntry = { name: string; count: number };

export type YearStats = {
  year: number;
  jente: StatEntry[];
  gutt: StatEntry[];
};

/**
 * Settes av generatoren. Er den false, viser siden en advarsel og ber
 * søkemotorer om å ikke indeksere – se historikken bak dette flagget.
 */
export const statsAreVerified = true;

export const statsSource = {
  label: "Statistisk sentralbyrå, tabell 10467",
  url: "https://www.ssb.no/statbank/table/10467",
};

export const yearStats: YearStats[] = [
  {
    year: 2025,
    jente: [
      { name: "Emma", count: 386 },
      { name: "Olivia", count: 368 },
      { name: "Nora", count: 357 },
      { name: "Ella", count: 348 },
      { name: "Frida", count: 337 },
      { name: "Sofie", count: 336 },
      { name: "Ellinor", count: 308 },
      { name: "Alma", count: 297 },
      { name: "Astrid", count: 296 },
      { name: "Hedda", count: 296 },
    ],
    gutt: [
      { name: "Noah", count: 460 },
      { name: "Emil", count: 405 },
      { name: "William", count: 368 },
      { name: "Elias", count: 357 },
      { name: "Oliver", count: 343 },
      { name: "Isak", count: 320 },
      { name: "Liam", count: 314 },
      { name: "Johannes", count: 305 },
      { name: "Jakob", count: 297 },
      { name: "Olav", count: 285 },
    ],
  },
  {
    year: 2024,
    jente: [
      { name: "Emma", count: 379 },
      { name: "Nora", count: 366 },
      { name: "Olivia", count: 330 },
      { name: "Ella", count: 324 },
      { name: "Selma", count: 291 },
      { name: "Sofie", count: 287 },
      { name: "Hedda", count: 277 },
      { name: "Alma", count: 268 },
      { name: "Ellinor", count: 268 },
      { name: "Frida", count: 264 },
    ],
    gutt: [
      { name: "Oliver", count: 398 },
      { name: "Emil", count: 396 },
      { name: "Noah", count: 382 },
      { name: "William", count: 360 },
      { name: "Liam", count: 330 },
      { name: "Johannes", count: 322 },
      { name: "Elias", count: 319 },
      { name: "Theodor", count: 305 },
      { name: "Olav", count: 298 },
      { name: "Henrik", count: 292 },
    ],
  },
  {
    year: 2023,
    jente: [
      { name: "Emma", count: 360 },
      { name: "Olivia", count: 355 },
      { name: "Ella", count: 341 },
      { name: "Nora", count: 304 },
      { name: "Alma", count: 288 },
      { name: "Ada", count: 287 },
      { name: "Sofie", count: 285 },
      { name: "Selma", count: 265 },
      { name: "Frida", count: 258 },
      { name: "Iben", count: 258 },
    ],
    gutt: [
      { name: "Noah", count: 391 },
      { name: "Oliver", count: 366 },
      { name: "Elias", count: 345 },
      { name: "Emil", count: 345 },
      { name: "William", count: 328 },
      { name: "Isak", count: 327 },
      { name: "Johannes", count: 311 },
      { name: "Liam", count: 304 },
      { name: "Theodor", count: 287 },
      { name: "Magnus", count: 285 },
    ],
  },
  {
    year: 2022,
    jente: [
      { name: "Nora", count: 338 },
      { name: "Emma", count: 337 },
      { name: "Olivia", count: 331 },
      { name: "Ella", count: 326 },
      { name: "Sofie", count: 279 },
      { name: "Frida", count: 269 },
      { name: "Iben", count: 266 },
      { name: "Ingrid", count: 253 },
      { name: "Alma", count: 249 },
      { name: "Selma", count: 247 },
    ],
    gutt: [
      { name: "Emil", count: 405 },
      { name: "Noah", count: 400 },
      { name: "Oliver", count: 382 },
      { name: "Isak", count: 348 },
      { name: "William", count: 348 },
      { name: "Jakob", count: 298 },
      { name: "Liam", count: 282 },
      { name: "Johannes", count: 280 },
      { name: "Elias", count: 277 },
      { name: "Theodor", count: 272 },
    ],
  },
  {
    year: 2021,
    jente: [
      { name: "Nora", count: 397 },
      { name: "Emma", count: 369 },
      { name: "Olivia", count: 311 },
      { name: "Ella", count: 302 },
      { name: "Sofie", count: 292 },
      { name: "Frida", count: 276 },
      { name: "Ingrid", count: 273 },
      { name: "Ada", count: 272 },
      { name: "Alma", count: 261 },
      { name: "Emilie", count: 259 },
    ],
    gutt: [
      { name: "Noah", count: 383 },
      { name: "Oliver", count: 367 },
      { name: "Emil", count: 346 },
      { name: "Isak", count: 315 },
      { name: "William", count: 313 },
      { name: "Aksel", count: 292 },
      { name: "Elias", count: 283 },
      { name: "Liam", count: 282 },
      { name: "Magnus", count: 275 },
      { name: "Tobias", count: 275 },
    ],
  },
  {
    year: 2020,
    jente: [
      { name: "Nora", count: 398 },
      { name: "Emma", count: 362 },
      { name: "Ella", count: 337 },
      { name: "Olivia", count: 315 },
      { name: "Emilie", count: 306 },
      { name: "Frida", count: 268 },
      { name: "Sofie", count: 268 },
      { name: "Ingrid", count: 267 },
      { name: "Selma", count: 241 },
      { name: "Ada", count: 239 },
    ],
    gutt: [
      { name: "Emil", count: 369 },
      { name: "Oliver", count: 354 },
      { name: "Noah", count: 333 },
      { name: "William", count: 293 },
      { name: "Liam", count: 273 },
      { name: "Henrik", count: 254 },
      { name: "Elias", count: 249 },
      { name: "Magnus", count: 245 },
      { name: "Johannes", count: 235 },
      { name: "Jakob", count: 229 },
    ],
  },
];

export const statYears = yearStats.map((s) => s.year);
export const statsByYear = (year: number) => yearStats.find((s) => s.year === year);
