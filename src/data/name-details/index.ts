/**
 * Samler de redaksjonelle navnedetaljene.
 *
 * Innholdet ligger i én fil per gruppe, delt etter opphav og alfabet, slik at
 * ingen enkeltfil blir uhåndterlig. Nøkkelen er alltid navnets slug.
 */
import type { NameDetail } from "./types";
import { norroneAG } from "./norrone-a-g";
import { norroneHO } from "./norrone-h-o";
import { norronePAA } from "./norrone-p-aa";
import { engelske } from "./engelske";
import { hebraiske } from "./hebraiske";
import { greske } from "./greske";
import { latinske } from "./latinske";
import { germanske } from "./germanske";
import { norskeOgOvrige } from "./norske-og-ovrige";
import { norroneNye } from "./norrone-nye";
import { internasjonaleNye } from "./internasjonale-nye";
import { nyeRunde2 } from "./nye-runde-2";

export type { NameDetail, NameElement, NameSource } from "./types";

export const nameDetails: Record<string, NameDetail> = {
  ...norroneAG,
  ...norroneHO,
  ...norronePAA,
  ...engelske,
  ...hebraiske,
  ...greske,
  ...latinske,
  ...germanske,
  ...norskeOgOvrige,
  ...norroneNye,
  ...internasjonaleNye,
  ...nyeRunde2,
};
