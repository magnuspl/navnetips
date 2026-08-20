/**
 * Utleder tekst fra selve navnet.
 *
 * Poenget er at hver navneside skal ha eget innhold selv før noen har skrevet
 * en linje om den for hånd. Alt her regnes ut fra navnet, opphavet og
 * kategorien – ingenting er påstander som krever kilde.
 */
import type { Category, NameEntry } from "@/data/names";

/* ------------------------------------------------------------------- lyd -- */

const VOWELS = "aeiouyæøå";

/** Teller vokalgrupper. Treffer godt nok på norsk til å skille kort fra langt. */
export function syllables(name: string): number {
  const lower = name.toLowerCase();
  let count = 0;
  let inVowel = false;
  for (const ch of lower) {
    const isVowel = VOWELS.includes(ch);
    if (isVowel && !inVowel) count++;
    inVowel = isVowel;
  }
  return Math.max(1, count);
}

export const endsInVowel = (name: string) => VOWELS.includes(name.at(-1)!.toLowerCase());

export const hasNorwegianLetters = (name: string) => /[æøå]/i.test(name);

export const syllableWord = (n: number) =>
  n === 1 ? "én stavelse" : n === 2 ? "to stavelser" : n === 3 ? "tre stavelser" : `${n} stavelser`;

/* --------------------------------------------------------------- opphav -- */

export type OriginFamily =
  | "nordisk"
  | "norsk"
  | "bibelsk"
  | "gresk"
  | "latinsk"
  | "germansk"
  | "keltisk"
  | "romansk"
  | "slavisk"
  | "annet";

const FAMILY_BY_ORIGIN: Record<string, OriginFamily> = {
  Norrønt: "nordisk",
  Norsk: "norsk",
  Svensk: "nordisk",
  Dansk: "nordisk",
  Hebraisk: "bibelsk",
  Arameisk: "bibelsk",
  Gresk: "gresk",
  Latin: "latinsk",
  Germansk: "germansk",
  Engelsk: "keltisk",
  Irsk: "keltisk",
  Skotsk: "keltisk",
  Keltisk: "keltisk",
  Italiensk: "romansk",
  Spansk: "romansk",
  Fransk: "romansk",
  Slavisk: "slavisk",
  Russisk: "slavisk",
};

export const originFamily = (origin: string): OriginFamily => FAMILY_BY_ORIGIN[origin] ?? "annet";

/**
 * Kort språkhistorisk kontekst per opphavsgruppe.
 *
 * Formuleringene gjelder gruppen som helhet – hvordan navn med dette opphavet
 * kom i bruk i Norge – ikke det enkelte navnet. Det er etterprøvbar
 * språkhistorie, ikke påstander om nettopp dette navnet.
 */
const FAMILY_CONTEXT: Record<OriginFamily, string> = {
  nordisk:
    "Nordiske navn er den eldste laget i norsk navneskikk. Mange av dem har vært i sammenhengende bruk siden vikingtiden, og de fleste er satt sammen av to ledd som hver betyr noe for seg. Etter nasjonalromantikken på 1800-tallet ble en stor del av dem hentet fram igjen, og bølgen har kommet tilbake flere ganger siden.",
  norsk:
    "Norske ordnavn er hentet rett fra dagligspråket – et værord, en plante, en farge eller en lyd. De er ikke bygget som de norrøne toleddsnavnene, og de fleste er tatt i bruk som navn i nyere tid. Til gjengjeld er betydningen gjennomsiktig for alle som snakker norsk, og det er nettopp poenget med dem.",
  bibelsk:
    "Navn med hebraisk opphav kom til Norge med kristendommen og festet seg for alvor etter reformasjonen, da folk begynte å hente fornavn fra Bibelen. De har holdt seg stabilt i bruk siden, og flere av dem er blant navnene som går igjen i generasjon etter generasjon.",
  gresk:
    "Greske navn kom stort sett inn i norsk gjennom kirken, som helgennavn og navn fra tidlig kristen tradisjon. Mange av dem beskriver en egenskap – visdom, seier, ære – og det er ofte den betydningen som har holdt navnet i live.",
  latinsk:
    "Latinske navn kom til Norden via kirken og senere gjennom europeisk navnemote. En del av dem var opprinnelig romerske slektsnavn eller tilnavn før de ble fornavn.",
  germansk:
    "Germanske navn kom i stor grad inn i norsk gjennom kontakten med lavtysk i hansatiden, og senere med europeiske navnemoter. De ligner de norrøne i formen: to ledd satt sammen, ofte med betydninger knyttet til vern, kamp eller ære.",
  keltisk:
    "Navnet hører til laget som har kommet inn i norsk gjennom engelskspråklig kultur. Slike navn ble vanlige i Norge i løpet av 1900-tallet, og de fungerer godt på tvers av språkgrenser.",
  romansk:
    "Romanske navn har kommet til Norge gjennom europeisk navnemote. De har som regel åpen vokalklang og et mykt fall, som skiller dem tydelig fra de norrøne.",
  slavisk:
    "Slaviske navn er mindre vanlige i Norge enn de nordiske og bibelske, og skiller seg ofte ut i en norsk navneklasse uten å være vanskelige å uttale.",
  annet:
    "Navnet har opphav utenfor de store europeiske navnetradisjonene, og er dermed sjeldent i Norge uten å være vanskelig verken å skrive eller uttale.",
};

export const familyContext = (origin: string) => FAMILY_CONTEXT[originFamily(origin)];

/* ------------------------------------------------------- praktiske råd -- */

const isPet = (categories: Category[]) =>
  categories.includes("hund") || categories.includes("katt");

/**
 * Bygger avsnittet om hvordan navnet fungerer i praksis.
 *
 * Teksten settes sammen av trekk ved navnet – stavelser, endelse, lengde,
 * særnorske bokstaver – så to navn med ulik form får ulike avsnitt.
 */
export function practicalNotes(entry: NameEntry): string[] {
  const n = syllables(entry.name);
  const notes: string[] = [];
  const forPet = isPet(entry.categories);
  const forChild = entry.categories.includes("jente") || entry.categories.includes("gutt");

  if (n === 1) {
    notes.push(
      forPet
        ? `${entry.name} er på én stavelse, og det er omtrent så kort et dyrenavn kan bli. Det skjærer godt gjennom støy, men ligger også nær kommandoene i lyd – sjekk at det ikke minner om «sitt», «nei» eller «kom».`
        : `${entry.name} er på én stavelse. Korte fornavn får ofte best fall sammen med lengre etternavn, og de tåler å bli ropt.`,
    );
  } else if (n === 2) {
    notes.push(
      forPet
        ? `To stavelser med trykk på den første er den formen hunder og katter lærer raskest. ${entry.name} treffer den formen.`
        : `${entry.name} har to stavelser med trykket først, som er det vanligste mønsteret i norske fornavn. Det gjør navnet lett å si og lett å høre.`,
    );
  } else {
    notes.push(
      `${entry.name} har ${syllableWord(n)}. Lengre navn får som regel en kortform i hverdagen – det er verdt å tenke gjennom hvilken før du bestemmer deg.`,
    );
  }

  if (endsInVowel(entry.name)) {
    notes.push(
      forPet
        ? `Navnet slutter på vokal, og det bærer når du roper over avstand. Det er en av grunnene til at så mange dyrenavn ender slik.`
        : `Navnet slutter på vokal, som gir en åpen avslutning og gjør at det glir lett over i et etternavn.`,
    );
  } else {
    notes.push(
      `Navnet slutter på konsonant. Det gir en fastere avslutning, og det er verdt å si det høyt sammen med etternavnet – to harde konsonanter som møtes kan bli tunge å få fram.`,
    );
  }

  if (hasNorwegianLetters(entry.name)) {
    notes.push(
      `${entry.name} skrives med ${[...entry.name].filter((c) => "æøåÆØÅ".includes(c)).join(", ")}. Det er helt uproblematisk i Norge, men bokstaven forsvinner eller endrer seg i utenlandske skjemaer, e-postadresser og systemer som bare tåler engelske bokstaver.`,
    );
  }

  if (forChild) {
    notes.push(
      `Skriv navnet sammen med etternavnet og se på initialene før du bestemmer deg, og la favoritten få hvile noen dager.`,
    );
  }

  return notes;
}

/* -------------------------------------------------------------- kortform -- */

/** Sannsynlig kortform, brukt bare når ingen er oppgitt for hånd. */
export function guessShortForm(name: string): string | null {
  if (syllables(name) < 3) return null;
  const m = name.match(/^([^aeiouyæøå]*[aeiouyæøå]+[^aeiouyæøå]*)/i);
  const stem = m?.[1];
  if (!stem || stem.length < 2 || stem.length >= name.length) return null;
  return stem;
}
