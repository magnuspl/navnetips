/**
 * Spørsmål og svar til kategorisidene.
 *
 * Bygges ett sted, slik at synlig tekst og FAQPage-markup ikke kan sprike.
 * Svarene regnes ut av datasettet og av SSB-tallene, så de er riktige uten at
 * noen må huske å oppdatere dem.
 */
import {
  categoryLabels,
  lettersIn,
  namesIn,
  styleAdjective,
  styleOrder,
  type Category,
  type CategoryPage,
} from "@/data/names";
import { lengthOf } from "@/components/name-filters";
import { yearStats } from "@/data/stats";
import { joinNo } from "@/lib/text";

export type Faq = { q: string; a: string };

const isPerson = (c: Category): c is "jente" | "gutt" => c === "jente" || c === "gutt";

export function categoryFaq(page: CategoryPage): Faq[] {
  const pool = namesIn(page.category);
  const label = page.slug;
  const single = categoryLabels[page.category].toLowerCase().replace(/navn$/, "navn");
  const faq: Faq[] = [];

  // 1. Det mest brukte navnet – bare der SSB har tall.
  if (isPerson(page.category)) {
    const latest = yearStats[0];
    const top = latest?.[page.category][0];
    if (latest && top) {
      faq.push({
        q: `Hva er det mest populære ${label}et i Norge?`,
        a: `${top.name} var det mest brukte ${single}et i ${latest.year}, med ${top.count} nyfødte. Tallene er fra Statistisk sentralbyrå.`,
      });
    }
  }

  // 2. Korte navn – svarer på et søk mange gjør for seg.
  const korte = pool.filter((n) => lengthOf(n.name) === "kort");
  if (korte.length >= 5) {
    faq.push({
      q: `Hva er korte ${label}?`,
      a: `Korte ${label} har fire bokstaver eller færre. ${joinNo(
        korte.slice(0, 6).map((n) => n.name),
      )} er eksempler, og listen har ${korte.length} slike navn til sammen.`,
    });
  }

  // 3. Stil – finnes bare for jente- og guttenavn.
  if (isPerson(page.category)) {
    const norse = pool.filter((n) => n.styles.includes("norrønt"));
    if (norse.length >= 5) {
      faq.push({
        q: `Hvilke ${label} er norrøne?`,
        a: `${norse.length} av ${label}ene her er norrøne, blant dem ${joinNo(
          norse.slice(0, 5).map((n) => n.name),
        )}. Norrøne navn er som regel satt sammen av to ledd som hver betyr noe for seg.`,
      });
    }
  }

  // 4. Hvor mange navn siden dekker.
  faq.push({
    q: `Hvor mange ${label} finnes på Navnetips?`,
    a: `Listen har ${pool.length} ${label} med betydning og opprinnelse, fordelt på ${
      lettersIn(page.category).length
    } forbokstaver. Hvert navn har sin egen side med etymologi og kilder.`,
  });

  // 5. Betydning – selve grunnen folk søker.
  faq.push({
    q: `Hvor finner jeg betydningen av et ${single}?`,
    a: `Klikk på navnet i listen. Hver navneside forklarer hva navnet betyr, hvilke ledd det er satt sammen av, hvor det kommer fra, og hvilke kilder opplysningene kan etterprøves i.`,
  });

  if (isPerson(page.category)) {
    faq.push({
      q: `Hvilke stiler kan jeg velge mellom?`,
      a: `${joinNo(styleOrder.map((s) => `${styleAdjective[s].toLowerCase()} ${label}`))} har hver sin side, slik at du kan bla i én stil om gangen.`,
    });
  }

  return faq;
}
