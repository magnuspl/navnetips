import type { NameDetail } from "./types";

/**
 * Hebraiske navn.
 *
 * Nesten alle kom til Norge gjennom Bibelen. Flere av dem inneholder et
 * gudsnavn som ledd – el for Gud, og jah eller jo for Jahve – og det er den
 * delen som gjør at navn som Elias, Gabriel og Jonatan henger sammen.
 */
export const hebraiske: Record<string, NameDetail> = {
  abby: {
    origin:
      "Abby er en engelsk kortform av Abigail, som i Bibelen er en av kong Davids hustruer. Navnet betyr «min far er glede».",
    related: ["Abigail"],
  },
  aksel: {
    elements: [
      { form: "av", sense: "far" },
      { form: "shalom", sense: "fred" },
    ],
    origin:
      "Aksel er den nordiske formen av Absalom, som i Bibelen er kong Davids sønn. Navnet kom inn i dansk og norsk i middelalderen og har vært i bruk siden.",
    variants: ["Axel", "Aksel"],
  },
  ane: {
    origin:
      "Ane er en nordisk form av Anna, som går tilbake på hebraisk Hannah. Formen uten sluttvokal er særlig vanlig i Danmark og Norge.",
    variants: ["Anne", "Anna"],
  },
  anna: {
    elements: [{ form: "channah", sense: "nåde, velvilje" }],
    origin:
      "Anna kommer av hebraisk Hannah. I Det nye testamentet er Anna profetinnen som møter Jesusbarnet i tempelet, og etter tradisjonen het også Marias mor Anna. Navnet er blant de mest brukte kvinnenavnene i Europa gjennom hele historien.",
    variants: ["Anne", "Ane", "Hanna"],
    shortForms: ["Anni"],
  },
  benji: {
    elements: [
      { form: "ben", sense: "sønn" },
      { form: "jamin", sense: "høyre hånd, sør" },
    ],
    origin:
      "Benji er en engelsk kortform av Benjamin, Jakobs yngste sønn i Første Mosebok. Navnet betyr sønnen ved høyre hånd, altså den foretrukne.",
    related: ["Benjamin"],
  },
  dina: {
    origin:
      "Dina kommer av hebraisk Dinah, datteren til Jakob og Lea i Første Mosebok. Navnet knyttes til roten din, som betyr å dømme, og tolkes gjerne som den som har fått sin rett.",
  },
  elias: {
    elements: [
      { form: "eli", sense: "min Gud" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Elias er den greske formen av Elia, profeten som etter Bibelen ble tatt opp til himmelen i en ildvogn. Navnet setter sammen begge gudsnavnene og betyr «Herren er min Gud».",
    variants: ["Elia", "Eli"],
  },
  elise: {
    elements: [
      { form: "eli", sense: "min Gud" },
      { form: "sheva", sense: "ed, løfte" },
    ],
    origin:
      "Elise er en kortform av Elisabet, som i Bibelen er mor til døperen Johannes. Navnet betyr at Gud er den man har sverget ved.",
    related: ["Elisabet"],
  },
  gabriel: {
    elements: [
      { form: "gever", sense: "mann, styrke" },
      { form: "el", sense: "Gud" },
    ],
    origin:
      "Gabriel er erkeengelen som forkynner fødselen til både døperen Johannes og Jesus. Navnet betyr Guds styrke, og el-leddet er det samme som i Mikael, Rafael og Daniel.",
    shortForms: ["Gabbe", "Gabi"],
  },
  hank: {
    origin:
      "Hank er en amerikansk kortform av Henry, som opprinnelig gikk via Hendrick og Hankin. Som hundenavn er det kort og bærer godt.",
    related: ["Henrik"],
  },
  hans: {
    origin:
      "Hans er den tyske og nordiske kortformen av Johannes, «Gud er nådig». Formen kom inn med lavtysk i hansatiden og ble et av de aller vanligste mannsnavnene i Norge.",
    related: ["Johannes", "Jon"],
  },
  isabella: {
    origin:
      "Isabella er en italiensk og spansk form av Elisabet, som oppsto i middelalderen da Elisabet ble omformet i romanske språk. Navnet ble kongelig i Spania og spredte seg derfra.",
    variants: ["Isabel", "Isabelle"],
    related: ["Elise"],
  },
  isak: {
    elements: [{ form: "jitschaq", sense: "han ler" }],
    origin:
      "Isak er sønn av Abraham og Sara i Første Mosebok. Navnet viser til at Sara lo da hun fikk høre at hun skulle føde i høy alder – latteren er selve forklaringen på navnet i teksten.",
    variants: ["Isaac", "Isac"],
  },
  jack: {
    origin:
      "Jack er en engelsk kortform av John, altså Johannes. Formen oppsto i middelalderen via Jankin og ble så vanlig at den ble et allment ord for «kar».",
    related: ["Jon", "Johannes"],
  },
  jackson: {
    origin:
      "Jackson betyr Jacks sønn, og er et engelsk etternavn som er tatt i bruk som fornavn. Endelsen -son er den samme som i norske etternavn på -sen.",
    related: ["Jack"],
  },
  jacob: {
    elements: [{ form: "aqev", sense: "hæl" }],
    origin:
      "Jacob er den internasjonale skrivemåten av Jakob. I Første Mosebok holder han tvillingbroren Esau i hælen ved fødselen, og det er denne fortellingen navnet forklares ut fra.",
    variants: ["Jakob", "Jakop"],
  },
  jake: {
    origin:
      "Jake er en engelsk kortform av Jacob. Den korte formen med én stavelse gjør navnet spesielt godt egnet som hundenavn.",
    related: ["Jacob"],
  },
  jakob: {
    elements: [{ form: "aqev", sense: "hæl" }],
    origin:
      "Jakob er stamfaren til Israels tolv stammer i Det gamle testamentet. Navnet forklares i teksten med at han holdt broren i hælen ved fødselen, og har vært i bruk i Norge siden middelalderen.",
    variants: ["Jacob"],
    shortForms: ["Jakke"],
  },
  jan: {
    origin:
      "Jan er en kortform av Johannes som kom til Norge via nederlandsk og tysk. Den var svært vanlig i Norge midt på 1900-tallet, ofte i dobbeltnavn som Jan Erik og Jan Ove.",
    related: ["Jon", "Johannes"],
  },
  jesse: {
    origin:
      "Jesse er faren til kong David i Det gamle testamentet, på hebraisk Jisjai. Navnet tolkes som «Gud er til».",
  },
  jon: {
    elements: [
      { form: "jah", sense: "Jahve, Herren" },
      { form: "chanan", sense: "å være nådig" },
    ],
    origin:
      "Jon er den norske kortformen av Johannes og betyr «Herren er nådig». Det har vært blant de vanligste mannsnavnene i Norge i århundrer, og finnes i formene Jon, John og Jo.",
    variants: ["John", "Jo"],
    related: ["Hans", "Jan"],
  },
  jonathan: {
    elements: [
      { form: "jah", sense: "Jahve, Herren" },
      { form: "natan", sense: "han ga" },
    ],
    origin:
      "Jonatan er kong Sauls sønn og Davids nærmeste venn i Det gamle testamentet. Navnet betyr «Herren har gitt», og deler førsteledd med Jon og Johannes.",
    variants: ["Jonatan"],
  },
  leah: {
    origin:
      "Lea er Jakobs første hustru i Første Mosebok. Betydningen er omdiskutert: den vanligste tolkningen er «den trette», men navnet er også knyttet til et akkadisk ord for ku, som var et positivt bilde i datidens husdyrsamfunn.",
    variants: ["Lea"],
  },
  malena: {
    origin:
      "Malena er en nordisk form av Magdalena, som viser til Maria Magdalena fra byen Magdala ved Genesaretsjøen. Stedsnavnet betyr tårn.",
    related: ["Malin", "Magdalena"],
  },
  malin: {
    origin:
      "Malin er en kortform av Magdalena som har vært brukt i Norden siden middelalderen. Navnet viser til byen Magdala, og er i slekt med Malena og Lena.",
    related: ["Malena"],
  },
  mathea: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Mathea er den kvinnelige formen av Mattias eller Matteus, og betyr Guds gave. Navnet deler betydning med de greske Teodor og Thea.",
    variants: ["Matea", "Mathea"],
    related: ["Mathias", "Teodor"],
  },
  matheo: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Matheo er en nyere nordisk skrivemåte av Matteo, den italienske formen av Matteus. Evangelisten Matteus er den mest kjente bæreren.",
    variants: ["Matteo", "Mateo"],
  },
  mathias: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Mathias er en form av Mattias, apostelen som etter Apostlenes gjerninger ble valgt inn i stedet for Judas. Navnet er en kortere variant av Mattatja, «Herrens gave».",
    variants: ["Matias", "Mattias"],
  },
  mia: {
    origin:
      "Mia er en kortform av Maria som brukes som selvstendig navn i store deler av Europa. Betydningen av Maria er usikker – både «den elskede», «den opphøyde» og «den bitre» er foreslått, og ingen av dem er sikkert fastslått.",
    related: ["Maria"],
  },
  mickey: {
    origin:
      "Mickey er en engelsk kjæleform av Michael. Navnet er uløselig knyttet til Mikke Mus, som het Mickey Mouse fra 1928.",
    related: ["Mikkel"],
  },
  mikkel: {
    elements: [{ form: "mi ka el", sense: "hvem er som Gud" }],
    origin:
      "Mikkel er den nordiske formen av Mikael, erkeengelen som fører gudshæren mot dragen i Johannes' åpenbaring. Navnet er egentlig et spørsmål: hvem er som Gud?",
    variants: ["Mikael", "Michael"],
  },
  molly: {
    origin:
      "Molly er en engelsk kjæleform av Mary, altså Maria. Den gikk veien om Mally og Molly, på samme måte som Sally kom av Sarah.",
    related: ["Mia", "Maria"],
  },
  noah: {
    elements: [{ form: "noach", sense: "hvile, trøst" }],
    origin:
      "Noah bygger arken i Første Mosebok og redder slektene gjennom storflommen. Navnet knyttes til hvile og trøst, og har vært blant de mest brukte guttenavnene i Norge de siste årene.",
    variants: ["Noa"],
  },
  noomi: {
    origin:
      "Noomi er svigermoren til Rut i Ruts bok. Navnet betyr «min glede», og i teksten ber hun selv om å bli kalt Mara, «den bitre», etter å ha mistet mann og sønner – en av de sterkeste navnescenene i Bibelen.",
    variants: ["Naomi"],
    related: ["Ruth"],
  },
  ronja: {
    origin:
      "Ronja ble skapt av Astrid Lindgren til Ronja Røverdatter i 1981. Lindgren hentet navnet fra Ronjajaure, et vann i Lappland, og det ble tatt i bruk som fornavn i hele Norden etter boken.",
  },
  ruth: {
    origin:
      "Rut har sin egen bok i Det gamle testamentet, kjent for løftet til svigermoren Noomi: «Dit du går, vil jeg gå.» Navnet knyttes til et ord for vennskap og trofasthet.",
    variants: ["Rut"],
    related: ["Noomi"],
  },
  sadie: {
    origin:
      "Sadie er en engelsk kjæleform av Sarah. Navnet ble selvstendig i USA på 1800-tallet og brukes i dag mye som hundenavn.",
    related: ["Sara"],
  },
  salem: {
    elements: [{ form: "shalom", sense: "fred" }],
    origin:
      "Salem kommer av samme rot som shalom, fred, og er det gamle navnet på Jerusalem. Som kattenavn er det best kjent fra katten i Sabrina.",
  },
  sam: {
    origin:
      "Sam er en kortform av Samuel, profeten som salver både Saul og David til konge. Samuel tolkes som «Gud har hørt».",
    variants: ["Sammy"],
    related: ["Samson"],
  },
  sammy: {
    origin:
      "Sammy er en kjæleform av Sam og Samuel. De to stavelsene med vokal til slutt gjør navnet lett å lære inn for både hund og katt.",
    variants: ["Sam"],
  },
  samson: {
    elements: [{ form: "shemesh", sense: "sol" }],
    origin:
      "Samson er dommeren i Det gamle testamentet som mister styrken når håret klippes. Navnet knyttes til det hebraiske ordet for sol.",
  },
  sara: {
    elements: [{ form: "sarah", sense: "fyrstinne, prinsesse" }],
    origin:
      "Sara er Abrahams hustru og Isaks mor i Første Mosebok. Hun het først Sarai, og fikk navnet endret til Sara som del av pakten med Gud.",
    variants: ["Sarah"],
  },
  tobias: {
    elements: [
      { form: "tov", sense: "god" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Tobias er hovedpersonen i Tobits bok, som følges av erkeengelen Rafael på reisen. Navnet betyr «Herren er god».",
    shortForms: ["Tobbe", "Toby"],
  },
  toby: {
    origin:
      "Toby er en engelsk kortform av Tobias. Den har vært brukt som selvstendig navn i England siden 1600-tallet, og er i dag et av de vanligste hundenavnene.",
    related: ["Tobias"],
  },
};
