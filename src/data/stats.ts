export type StatEntry = { name: string; count: number };

export type YearStats = {
  year: number;
  jente: StatEntry[];
  gutt: StatEntry[];
  note: string;
};

/**
 * TALLENE UNDER ER PLASSHOLDERE – IKKE OFFISIELL STATISTIKK.
 *
 * De fulgte med designutkastet og er ikke hentet fra SSB. De ligner ekte
 * navnetrender, men antallene er oppdiktede.
 *
 * Slik tar du siden i bruk på ordentlig:
 *  1. Hent «Navn til nyfødte» fra SSB (tabell 10467 / 10501 på ssb.no).
 *  2. Bytt ut listene under med de faktiske tallene.
 *  3. Sett `statsAreVerified` til true.
 *
 * Så lenge flagget er false viser siden en tydelig advarsel og ber
 * søkemotorer om å ikke indeksere den.
 */
export const statsAreVerified = false;

/** Kildehenvisning som vises på siden når tallene er verifisert. */
export const statsSource = {
  label: "Statistisk sentralbyrå (SSB)",
  url: "https://www.ssb.no/navn",
};

/**
 * Topp 10 jente- og guttenavn per år i Norge.
 * Tallene viser hvor mange nyfødte som fikk navnet som første fornavn.
 */
export const yearStats: YearStats[] = [
  {
    year: 2025,
    note: "Emma og Noah holder stand på toppen, mens naturnavn som Vår og Birk klatrer videre.",
    jente: [
      { name: "Emma", count: 340 },
      { name: "Nora", count: 312 },
      { name: "Olivia", count: 305 },
      { name: "Ella", count: 288 },
      { name: "Sofie", count: 271 },
      { name: "Maja", count: 259 },
      { name: "Frøya", count: 248 },
      { name: "Ingrid", count: 236 },
      { name: "Alma", count: 224 },
      { name: "Selma", count: 217 },
    ],
    gutt: [
      { name: "Noah", count: 352 },
      { name: "Oliver", count: 331 },
      { name: "Emil", count: 318 },
      { name: "Elias", count: 302 },
      { name: "Lucas", count: 289 },
      { name: "Aksel", count: 275 },
      { name: "Håkon", count: 262 },
      { name: "Iver", count: 251 },
      { name: "Birk", count: 240 },
      { name: "Odin", count: 228 },
    ],
  },
  {
    year: 2024,
    note: "Nora tok tilbake førsteplassen blant jentenavn, og Emil var årets største klatrer.",
    jente: [
      { name: "Nora", count: 336 },
      { name: "Emma", count: 329 },
      { name: "Olivia", count: 298 },
      { name: "Ella", count: 279 },
      { name: "Maja", count: 266 },
      { name: "Sofie", count: 258 },
      { name: "Ingrid", count: 244 },
      { name: "Frøya", count: 232 },
      { name: "Alma", count: 221 },
      { name: "Liv", count: 205 },
    ],
    gutt: [
      { name: "Noah", count: 345 },
      { name: "Emil", count: 327 },
      { name: "Oliver", count: 315 },
      { name: "Elias", count: 296 },
      { name: "Aksel", count: 281 },
      { name: "Lucas", count: 270 },
      { name: "Håkon", count: 255 },
      { name: "Odin", count: 243 },
      { name: "Iver", count: 234 },
      { name: "Noa", count: 219 },
    ],
  },
  {
    year: 2023,
    note: "Norrøne navn som Frøya og Odin fortsatte oppgangen etter flere år på listene.",
    jente: [
      { name: "Emma", count: 331 },
      { name: "Nora", count: 320 },
      { name: "Olivia", count: 292 },
      { name: "Ella", count: 271 },
      { name: "Sofie", count: 263 },
      { name: "Maja", count: 252 },
      { name: "Ingrid", count: 239 },
      { name: "Frøya", count: 225 },
      { name: "Selma", count: 212 },
      { name: "Alma", count: 201 },
    ],
    gutt: [
      { name: "Noah", count: 338 },
      { name: "Oliver", count: 322 },
      { name: "Emil", count: 309 },
      { name: "Elias", count: 291 },
      { name: "Lucas", count: 277 },
      { name: "Aksel", count: 264 },
      { name: "Odin", count: 248 },
      { name: "Håkon", count: 238 },
      { name: "Iver", count: 226 },
      { name: "Jakob", count: 214 },
    ],
  },
  {
    year: 2022,
    note: "Jakob og Filip lå tett bak toppen, mens Iben så vidt nådde topp ti for første gang.",
    jente: [
      { name: "Nora", count: 327 },
      { name: "Emma", count: 318 },
      { name: "Ella", count: 286 },
      { name: "Olivia", count: 274 },
      { name: "Sofie", count: 261 },
      { name: "Maja", count: 249 },
      { name: "Ingrid", count: 235 },
      { name: "Frøya", count: 218 },
      { name: "Iben", count: 204 },
      { name: "Alma", count: 197 },
    ],
    gutt: [
      { name: "Noah", count: 334 },
      { name: "Emil", count: 316 },
      { name: "Oliver", count: 303 },
      { name: "Elias", count: 288 },
      { name: "Aksel", count: 271 },
      { name: "Jakob", count: 258 },
      { name: "Lucas", count: 246 },
      { name: "Håkon", count: 233 },
      { name: "Filip", count: 221 },
      { name: "Odin", count: 209 },
    ],
  },
  {
    year: 2021,
    note: "Klassikerne dominerte, og Sofie/Sofia var samlet sett årets mest brukte jentenavn.",
    jente: [
      { name: "Nora", count: 322 },
      { name: "Emma", count: 310 },
      { name: "Sofie", count: 296 },
      { name: "Ella", count: 278 },
      { name: "Olivia", count: 265 },
      { name: "Maja", count: 247 },
      { name: "Ingrid", count: 231 },
      { name: "Selma", count: 214 },
      { name: "Frøya", count: 203 },
      { name: "Leah", count: 192 },
    ],
    gutt: [
      { name: "Jakob", count: 329 },
      { name: "Emil", count: 312 },
      { name: "Noah", count: 301 },
      { name: "Oliver", count: 287 },
      { name: "Elias", count: 273 },
      { name: "Aksel", count: 259 },
      { name: "Håkon", count: 241 },
      { name: "Lucas", count: 229 },
      { name: "Filip", count: 216 },
      { name: "Iver", count: 204 },
    ],
  },
  {
    year: 2020,
    note: "Nora og Jakob toppet listene, slik de gjorde gjennom mye av forrige tiår.",
    jente: [
      { name: "Nora", count: 318 },
      { name: "Emma", count: 305 },
      { name: "Sofie", count: 291 },
      { name: "Olivia", count: 262 },
      { name: "Ella", count: 254 },
      { name: "Maja", count: 243 },
      { name: "Ingrid", count: 228 },
      { name: "Sara", count: 211 },
      { name: "Selma", count: 199 },
      { name: "Frøya", count: 186 },
    ],
    gutt: [
      { name: "Jakob", count: 326 },
      { name: "Emil", count: 308 },
      { name: "Noah", count: 294 },
      { name: "Oliver", count: 281 },
      { name: "Elias", count: 268 },
      { name: "William", count: 252 },
      { name: "Aksel", count: 238 },
      { name: "Håkon", count: 224 },
      { name: "Lucas", count: 212 },
      { name: "Filip", count: 198 },
    ],
  },
];

export const statYears = yearStats.map((s) => s.year);
export const statsByYear = (year: number) => yearStats.find((s) => s.year === year);
