import type { NameDetail } from "./types";

/**
 * Hebraiske navn.
 *
 * Nesten alle kom til Norge gjennom Bibelen. Flere av dem inneholder et
 * gudsnavn som ledd – el for Gud, og jah eller jo for Jahve – og det er den
 * delen som gjør at navn som Elias, Gabriel og Jonatan henger sammen.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

export const hebraiske: Record<string, NameDetail> = {
  abby: {
    origin:
      "Abby er en engelsk kortform av Abigail, som i Første Samuelsbok er gift med den uforsonlige Nabal og senere blir en av kong Davids hustruer. Hun beskrives som klok og handlekraftig, og avverger blodsutgytelse ved å gå David i møte. Navnet betyr «min far er glede».",
    related: ["Abigail"],
    sources: [BTN, SNL],
  },
  aksel: {
    elements: [
      { form: "av", sense: "far" },
      { form: "shalom", sense: "fred" },
    ],
    origin:
      "Aksel er den nordiske formen av Absalom, som i Bibelen er kong Davids sønn. Navnet kom inn i dansk og norsk i middelalderen og har vært i bruk siden.",
    variants: ["Axel", "Aksel"],
    sources: [NPL, BTN],
  },
  ane: {
    origin:
      "Ane er en nordisk form av Anna, som går tilbake på hebraisk Channah – nåde. Formen uten sluttvokal er særlig vanlig i Danmark og på Vestlandet, og har vært i bruk i Norge siden middelalderen. Den brukes også som ledd i dobbeltnavn som Ane Marie.",
    variants: ["Anne", "Anna"],
    sources: [NPL, BTN],
  },
  anna: {
    elements: [{ form: "channah", sense: "nåde, velvilje" }],
    origin:
      "Anna kommer av hebraisk Hannah. I Det nye testamentet er Anna profetinnen som møter Jesusbarnet i tempelet, og etter tradisjonen het også Marias mor Anna. Navnet er blant de mest brukte kvinnenavnene i Europa gjennom hele historien.",
    variants: ["Anne", "Ane", "Hanna"],
    shortForms: ["Anni"],
    sources: [NPL, BTN],
  },
  benji: {
    elements: [
      { form: "ben", sense: "sønn" },
      { form: "jamin", sense: "høyre hånd, sør" },
    ],
    origin:
      "Benji er en engelsk kortform av Benjamin, Jakobs yngste sønn i Første Mosebok. Navnet betyr sønnen ved høyre hånd, altså den foretrukne.",
    related: ["Benjamin"],
    sources: [NPL, BTN],
  },
  dina: {
    origin:
      "Dina kommer av hebraisk Dinah, datteren til Jakob og Lea i Første Mosebok. Navnet knyttes til roten din, å dømme, og tolkes gjerne som den som har fått sin rett. I Norge er navnet også kjent fra Herbjørg Wassmos «Dinas bok».",
    sources: [BTN, SNL],
  },
  elias: {
    elements: [
      { form: "eli", sense: "min Gud" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Elias er den greske formen av Elia, profeten som etter Bibelen ble tatt opp til himmelen i en ildvogn. Navnet setter sammen begge gudsnavnene og betyr «Herren er min Gud».",
    variants: ["Elia", "Eli"],
    sources: [NPL, BTN],
  },
  elise: {
    elements: [
      { form: "eli", sense: "min Gud" },
      { form: "sheva", sense: "ed, løfte" },
    ],
    origin:
      "Elise er en kortform av Elisabet, som i Bibelen er mor til døperen Johannes. Navnet betyr at Gud er den man har sverget ved.",
    related: ["Elisabet"],
    sources: [NPL, BTN],
  },
  gabriel: {
    elements: [
      { form: "gever", sense: "mann, styrke" },
      { form: "el", sense: "Gud" },
    ],
    origin:
      "Gabriel er erkeengelen som forkynner fødselen til både døperen Johannes og Jesus. Navnet betyr Guds styrke, og el-leddet er det samme som i Mikael, Rafael og Daniel.",
    shortForms: ["Gabbe", "Gabi"],
    sources: [NPL, BTN],
  },
  hank: {
    origin:
      "Hank er en amerikansk kortform av Henry. Veien dit går om middelalderformen Hankin, en diminutiv av Han – som igjen var en kortform av Johan. Hank ble derfor først knyttet til Johannes-navnene, og først senere til Henry. Hank Williams og Hank Aaron er blant de kjente bærerne.",
    related: ["Henrik", "Henry"],
    sources: [BTN, ETYM],
  },
  hans: {
    origin:
      "Hans er den tyske og nordiske kortformen av Johannes, «Herren er nådig». Formen kom inn med lavtysk i hansatiden og ble et av de aller vanligste mannsnavnene i Norge. Den er så vanlig at den brukes generisk i uttrykk som «Hans og Grete» og i tyske «Hans im Glück».",
    related: ["Johannes", "Jon"],
    sources: [NPL, BTN],
  },
  isabella: {
    origin:
      "Isabella oppsto i middelalderen da Elisabet ble omformet i romanske språk: den innledende E-en ble oppfattet som en artikkel og falt bort, og resten ble tilpasset spansk og italiensk lydverk. Isabella av Castilla, som finansierte Columbus' ferd i 1492, gjorde navnet kongelig og europeisk.",
    variants: ["Isabel", "Isabelle"],
    related: ["Elisabeth", "Elise"],
    sources: [BTN, SNL],
  },
  isak: {
    elements: [{ form: "jitschaq", sense: "han ler" }],
    origin:
      "Isak er sønn av Abraham og Sara i Første Mosebok. Navnet viser til at Sara lo da hun fikk høre at hun skulle føde i høy alder – latteren er selve forklaringen på navnet i teksten.",
    variants: ["Isaac", "Isac"],
    sources: [NPL, BTN],
  },
  jack: {
    origin:
      "Jack er en engelsk kortform av John, altså Johannes. Den gikk veien om Jankin, en diminutiv av Jan. Formen ble så vanlig i middelalderen at den ble et allment ord for «kar» – derav jack of all trades, lumberjack og jack som betegnelse på både verktøy og spillkort.",
    related: ["Jon", "Johannes"],
    sources: [BTN, ETYM],
  },
  jackson: {
    origin:
      "Jackson betyr Jacks sønn, og er et engelsk etternavn som er tatt i bruk som fornavn. Endelsen -son er den samme som i norske etternavn på -sen. Navnet er også kjent fra byen Jackson i Mississippi og fra president Andrew Jackson.",
    related: ["Jack"],
    sources: [BTN, ETYM],
  },
  jacob: {
    elements: [{ form: "aqev", sense: "hæl" }],
    origin:
      "Jacob er den internasjonale skrivemåten av Jakob. I Første Mosebok holder han tvillingbroren Esau i hælen ved fødselen, og det er denne fortellingen navnet forklares ut fra.",
    variants: ["Jakob", "Jakop"],
    sources: [NPL, BTN],
  },
  jake: {
    origin:
      "Jake er en engelsk kortform av Jacob. Den korte formen med én stavelse og hard konsonant i begge ender gjør navnet spesielt godt egnet som hundenavn – det skjærer gjennom støy og forveksles ikke lett med kommandoord.",
    related: ["Jacob", "Jakob"],
    sources: [BTN, ETYM],
  },
  jakob: {
    elements: [{ form: "aqev", sense: "hæl" }],
    origin:
      "Jakob er stamfaren til Israels tolv stammer i Det gamle testamentet. Navnet forklares i teksten med at han holdt broren i hælen ved fødselen, og har vært i bruk i Norge siden middelalderen.",
    variants: ["Jacob"],
    shortForms: ["Jakke"],
    sources: [NPL, BTN],
  },
  jan: {
    origin:
      "Jan er en kortform av Johannes som kom til Norge via nederlandsk og tysk. Den var svært vanlig i Norge midt på 1900-tallet, ofte som førsteledd i dobbeltnavn: Jan Erik, Jan Ove, Jan Petter. I Nederland er Jan så alminnelig at det brukes generisk, som «Jan Modaal» – gjennomsnittsnordmannen.",
    related: ["Jon", "Johannes", "Hans"],
    sources: [NPL, BTN],
  },
  jesse: {
    origin:
      "Jesse er faren til kong David i Det gamle testamentet, på hebraisk Jisjai. Navnet tolkes som «Gud er til». Jesse rot er et fast motiv i kirkekunsten: et slektstre som vokser ut av Jesses side og ender i Kristus, framstilt i glassmalerier over hele Europa.",
    sources: [BTN, SNL],
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
    sources: [NPL, BTN],
  },
  jonathan: {
    elements: [
      { form: "jah", sense: "Jahve, Herren" },
      { form: "natan", sense: "han ga" },
    ],
    origin:
      "Jonatan er kong Sauls sønn og Davids nærmeste venn i Det gamle testamentet. Navnet betyr «Herren har gitt», og deler førsteledd med Jon og Johannes.",
    variants: ["Jonatan"],
    sources: [NPL, BTN],
  },
  leah: {
    origin:
      "Lea er Jakobs første hustru i Første Mosebok. Betydningen er omdiskutert: den vanligste tolkningen er «den trette», men navnet er også knyttet til et akkadisk ord for ku, som var et positivt bilde i datidens husdyrsamfunn.",
    variants: ["Lea"],
    sources: [NPL, BTN],
  },
  malena: {
    origin:
      "Malena er en nordisk form av Magdalena, som viser til Maria Magdalena fra byen Magdala ved Genesaretsjøen. Stedsnavnet kommer av migdal, tårn. Magdala var et fiskevær, og navnet knyttes til tårnene der fisken ble tørket.",
    related: ["Malin", "Magdalena"],
    sources: [NPL, BTN],
  },
  malin: {
    origin:
      "Malin er en kortform av Magdalena som har vært brukt i Norden siden middelalderen. Navnet viser til byen Magdala, og er i slekt med Malena og Lena. I Sverige er formen særlig vanlig.",
    related: ["Malena", "Lene"],
    sources: [NPL, BTN],
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
    sources: [NPL, BTN],
  },
  matheo: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Matheo er en nyere nordisk skrivemåte av Matteo, den italienske formen av Matteus. Evangelisten Matteus er den mest kjente bæreren.",
    variants: ["Matteo", "Mateo"],
    sources: [NPL, BTN],
  },
  mathias: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Mathias er en form av Mattias, apostelen som etter Apostlenes gjerninger ble valgt inn i stedet for Judas. Navnet er en kortere variant av Mattatja, «Herrens gave».",
    variants: ["Matias", "Mattias"],
    sources: [NPL, BTN],
  },
  mia: {
    origin:
      "Mia er en kortform av Maria som brukes som selvstendig navn i store deler av Europa. Betydningen av Maria er blant de mest omdiskuterte i navneforskningen: «den elskede», «den opphøyde» og «den bitre» er alle foreslått, og opphavet er trolig egyptisk snarere enn hebraisk. Ingen av tolkningene er sikkert fastslått.",
    related: ["Maria", "Marie", "Mari"],
    sources: [BTN, NPL],
  },
  mickey: {
    origin:
      "Mickey er en engelsk kjæleform av Michael. Navnet er uløselig knyttet til Mikke Mus, som fikk navnet i 1928 – Walt Disney hadde først kalt figuren Mortimer, men kona hans mente det lød for pretensiøst.",
    related: ["Mikkel", "Mikael"],
    sources: [BTN, SNL],
  },
  mikkel: {
    elements: [{ form: "mi ka el", sense: "hvem er som Gud" }],
    origin:
      "Mikkel er den nordiske formen av Mikael, erkeengelen som fører gudshæren mot dragen i Johannes' åpenbaring. Navnet er egentlig et spørsmål: hvem er som Gud?",
    variants: ["Mikael", "Michael"],
    sources: [NPL, BTN],
  },
  molly: {
    origin:
      "Molly er en engelsk kjæleform av Mary, altså Maria. Den gikk veien om Mally, med den l-for-r-vekslingen som også ga Sally av Sarah og Hal av Harry. Molly Bloom i Joyces «Ulysses» er blant de kjente bærerne.",
    related: ["Maria", "Mia"],
    sources: [BTN, ETYM],
  },
  noah: {
    elements: [{ form: "noach", sense: "hvile, trøst" }],
    origin:
      "Noah bygger arken i Første Mosebok og redder slektene gjennom storflommen. Navnet knyttes til hvile og trøst, og har vært blant de mest brukte guttenavnene i Norge de siste årene.",
    variants: ["Noa"],
    sources: [NPL, BTN],
  },
  noomi: {
    origin:
      "Noomi er svigermoren til Rut i Ruts bok, og navnet betyr «min glede». I teksten ber hun selv om å bli kalt Mara, «den bitre», etter å ha mistet mann og begge sønner – en av de sterkeste navnescenene i Bibelen, der hun forkaster sitt eget navn fordi det ikke lenger passer livet hennes.",
    variants: ["Naomi"],
    related: ["Ruth"],
    sources: [BTN, SNL],
  },
  ronja: {
    origin:
      "Ronja ble skapt av Astrid Lindgren til «Ronja Røverdatter» i 1981. Hun hentet navnet fra Ronjajaure, et vann i Lappland – forleddet er samisk. Boken gjorde navnet til et vanlig fornavn i hele Norden i løpet av få år, og det er et av de tydeligste eksemplene på at én bok kan innføre et navn.",
    sources: [NPL, SNL],
  },
  ruth: {
    origin:
      "Rut har sin egen bok i Det gamle testamentet, kjent for løftet til svigermoren Noomi: «Dit du går, vil jeg gå.» Hun er moabitt, altså utlending, og blir likevel oldemor til kong David – et poeng teksten selv legger vekt på. Navnet knyttes til et ord for vennskap og trofasthet.",
    variants: ["Rut"],
    related: ["Noomi"],
    sources: [BTN, SNL],
  },
  sadie: {
    origin:
      "Sadie er en engelsk kjæleform av Sarah, dannet med den samme -ie-endelsen som ga Katie og Maggie. Den ble selvstendig navn i USA på 1800-tallet og er i dag blant de vanligste hundenavnene i engelsktalende land.",
    related: ["Sara"],
    sources: [BTN, ETYM],
  },
  salem: {
    elements: [{ form: "shalom", sense: "fred" }],
    origin:
      "Salem kommer av samme rot som shalom, fred, og er det gamle navnet på Jerusalem. Som kattenavn er det best kjent fra katten i Sabrina.",
    sources: [BTN, ETYM],
  },
  sam: {
    origin:
      "Sam er en kortform av Samuel, profeten som salver både Saul og David til konge i Første Samuelsbok. Samuel tolkes som «Gud har hørt» – teksten knytter navnet til at Hanna fikk bønnen sin oppfylt. Sam brukes også som kortform av Samson.",
    variants: ["Sammy"],
    related: ["Samson"],
    sources: [BTN, SNL],
  },
  sammy: {
    origin:
      "Sammy er en kjæleform av Sam og Samuel. To stavelser med trykk først og vokal til slutt er den formen hunder og katter lærer inn raskest, og det er en av grunnene til at -y-formene er så vanlige som dyrenavn.",
    variants: ["Sam"],
    sources: [BTN, ETYM],
  },
  samson: {
    elements: [{ form: "shemesh", sense: "sol" }],
    origin:
      "Samson er dommeren i Det gamle testamentet som mister styrken når håret klippes. Navnet knyttes til det hebraiske ordet for sol.",
    sources: [NPL, BTN],
  },
  sara: {
    elements: [{ form: "sarah", sense: "fyrstinne, prinsesse" }],
    origin:
      "Sara er Abrahams hustru og Isaks mor i Første Mosebok. Hun het først Sarai, og fikk navnet endret til Sara som del av pakten med Gud.",
    variants: ["Sarah"],
    sources: [NPL, BTN],
  },
  tobias: {
    elements: [
      { form: "tov", sense: "god" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Tobias er hovedpersonen i Tobits bok, som følges av erkeengelen Rafael på reisen. Navnet betyr «Herren er god».",
    shortForms: ["Tobbe", "Toby"],
    sources: [NPL, BTN],
  },
  toby: {
    origin:
      "Toby er en engelsk kortform av Tobias, «Herren er god». Den har vært brukt som selvstendig navn i England siden 1600-tallet. En Toby jug er et engelsk ølkrus formet som en sittende mann med trekantet hatt, oppkalt etter navnet.",
    related: ["Tobias"],
    sources: [BTN, ETYM],
  },
};
