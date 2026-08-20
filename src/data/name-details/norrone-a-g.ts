import type { NameDetail } from "./types";

/**
 * Norrøne navn, A–G.
 *
 * Leddene er skrevet i normalisert norrøn form (bjǫrn, hildr, geirr). Det er
 * den formen navneforskningen bruker, og det er den som gjør slektskapet
 * mellom navnene synlig: Torbjørn, Kolbjørn og Bjørnar deler bjǫrn.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

const ORDBOK = { title: "Bokmålsordboka", publisher: "Språkrådet og Universitetet i Bergen" };

export const norroneAG: Record<string, NameDetail> = {
  alf: {
    elements: [{ form: "alfr", sense: "alv" }],
    origin:
      "Alf er ett av de korteste norrøne navnene som fortsatt er i bruk. Alvene var egne vesener i norrøn tro, og leddet alfr går igjen i en hel rekke navn – både først i navnet, som i Alvhild, og sist, som i Torolv.",
    variants: ["Alv"],
    sources: [NPL, NORDIC],
  },
  alvar: {
    elements: [
      { form: "alfr", sense: "alv" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Alvar er en svensk-norsk form som har holdt seg jevnt i bruk. Andreleddet herr går igjen i mange germanske og norrøne navn, og betyr opprinnelig en flokk væpnede menn.",
    sources: [NPL, NORDIC],
  },
  alvhild: {
    elements: [
      { form: "alfr", sense: "alv" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Alvhild er bygget som de fleste norrøne kvinnenavn: to ledd, der andreleddet hildr betyr kamp. Hildr var også navnet på en valkyrje, og leddet er ett av de aller vanligste i norrøne kvinnenavn.",
    variants: ["Alvilde"],
    sources: [NPL, NORDIC],
  },
  alvilde: {
    elements: [
      { form: "alfr", sense: "alv" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Alvilde er en dansk-påvirket skrivemåte av samme navn som Alvhild. Formen med -ilde kom inn gjennom dansk skriftspråk i unionstiden.",
    variants: ["Alvhild"],
    sources: [NPL, NORDIC],
  },
  arna: {
    elements: [{ form: "ǫrn", sense: "ørn" }],
    origin:
      "Arna er en kvinnelig form dannet av ørneleddet som ellers står først i navn som Arnfinn og Arnhild. Ørnen var et rovfuglbilde med høy status i norrøn navngiving.",
    sources: [NPL, NORDIC],
  },
  arnfinn: {
    elements: [
      { form: "ǫrn", sense: "ørn" },
      { form: "finnr", sense: "same, folkeslaget finner" },
    ],
    origin:
      "Arnfinn setter sammen ørnen med finnr, et ledd som viste til samene eller til nordlige folkeslag. Kombinasjonen er typisk norrøn: et dyr og et folk satt sammen til ett navn.",
    sources: [NPL, NORDIC],
  },
  arvid: {
    elements: [
      { form: "ǫrn", sense: "ørn" },
      { form: "viðr", sense: "tre, skog" },
    ],
    origin:
      "Arvid tolkes tradisjonelt som «ørnetre». Andreleddet viðr betyr tre eller skog, og går igjen i flere norrøne mannsnavn.",
    sources: [NPL, NORDIC],
  },
  ask: {
    elements: [{ form: "askr", sense: "asketre" }],
    origin:
      "Ask er navnet på den første mannen i den norrøne skapelsesberetningen, formet av et oppskylt tre sammen med Embla. Navnet er samtidig det helt vanlige ordet for asketreet.",
    related: ["Embla"],
    sources: [NPL, SNL],
  },
  aslak: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "leikr", sense: "lek, kamplek" },
    ],
    origin:
      "Aslak kommer av Áslákr. Førsteleddet áss viser til æsene, gudeslekten i norrøn tro, og går igjen i en lang rekke navn – Åsmund, Åshild, Åsa og Aslak hører alle til samme gruppe.",
    sources: [NPL, NORDIC],
  },
  asta: {
    elements: [{ form: "áss", sense: "gud, æsene" }],
    origin:
      "Asta er en kortform av lengre navn som begynte på Ás-, særlig Ástríðr. Slike kortformer ble etter hvert selvstendige navn i sin egen rett.",
    variants: ["Åsta"],
    sources: [NPL, NORDIC],
  },
  astrid: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin: [
      "Astrid kommer av norrønt Ástríðr. Førsteleddet áss viser til æsene, gudeslekten i norrøn tro, og andreleddet fríðr betyr vakker eller elsket – det samme leddet som avslutter Ingrid, Sigrid og Turid.",
      "Navnet har vært kongelig i Norden i tusen år. Astrid Olavsdatter var datter av Olav Skötkonung og gift med Olav den hellige, og i nyere tid har både prinsesse Astrid av Norge og dronning Astrid av Belgia båret det.",
      "Astrid Lindgren er den mest kjente bæreren i moderne tid. Hun het Ericsson som ugift, tok mannens etternavn, og skrev Pippi Langstrømpe etter at datteren Karin – syk i sengen – ba om en historie om noen med det navnet.",
      "Astrid har holdt seg jevnt i bruk i Norge gjennom hele nyere tid og ligger fortsatt blant de mest brukte jentenavnene.",
    ],
    shortForms: ["Asta", "Assi"],
    sources: [NPL, NORDIC, SNL],
  },
  aud: {
    elements: [{ form: "auðr", sense: "rikdom, lykke" }],
    origin:
      "Aud er kjent fra Aud den djupauðga i Laksdøla saga, en av de mest omtalte kvinnene i sagalitteraturen. Leddet auðr betyr både rikdom og lykke, og går igjen i Audun og Audhild.",
    sources: [NPL, SNL],
  },
  audun: {
    elements: [
      { form: "auðr", sense: "rikdom, lykke" },
      { form: "vinr", sense: "venn" },
    ],
    origin:
      "Audun kommer av Auðun. Andreleddet vinr betyr venn, og finnes i flere norrøne navn der det beskriver en som er venn av noe – her av rikdom og lykke.",
    sources: [NPL, NORDIC],
  },
  balder: {
    elements: [{ form: "baldr", sense: "herre, den lyse guden" }],
    origin:
      "Balder er navnet på lysguden i norrøn mytologi, sønn av Odin og Frigg. Fortellingen om Balders død er en av de mest kjente i den norrøne gudeverdenen.",
    variants: ["Baldur"],
    sources: [NPL, SNL],
  },
  bergljot: {
    elements: [
      { form: "bjarg", sense: "vern, berg" },
      { form: "ljót", sense: "lysende" },
    ],
    origin:
      "Bergljot er satt sammen av bjarg, som betyr vern eller berg, og ljót, som betyr lysende. Førsteleddet er det samme som i Bergit og Bergtora, og har ingenting med bjørn å gjøre selv om skrivemåten kan minne om det.",
    sources: [NPL, NORDIC],
  },
  berit: {
    elements: [{ form: "bjarg", sense: "vern, berg" }],
    origin:
      "Berit er en nordisk form av Birgitta, som igjen går tilbake på det irske Brighid. Navnet festet seg tidlig i Norden gjennom helgenen Birgitta av Vadstena.",
    variants: ["Berit", "Birgit", "Berith"],
    sources: [NPL, BTN],
  },
  birger: {
    elements: [{ form: "bjarga", sense: "å berge, å hjelpe" }],
    origin:
      "Birger kommer av det norrøne verbet bjarga, å berge eller redde. Navnet betyr altså den som berger – en hjelper. Det var i bruk som kongenavn i Sverige i middelalderen.",
    sources: [NPL, NORDIC],
  },
  birk: {
    elements: [{ form: "bjǫrk", sense: "bjørk" }],
    origin: [
      "Birk er et naturnavn hentet rett fra treet. Bjørka er det treslaget som først vender tilbake etter isbreer og skogbrann, og den går lengst nord og høyest til fjells av alle norske løvtrær – et bilde på nøysomhet og seighet.",
      "Ordet er felles germansk og går tilbake på en indoeuropeisk rot som betyr lys eller skinnende, etter den hvite barken. Samme rot ligger bak norrønt bjartr, som gir navnet Bjarte.",
      "Navnet er også kjent fra Astrid Lindgrens «Ronja Røverdatter», der Birk Borkason er Ronjas venn.",
      "Trenavn har fått en tydelig oppsving i Norden de siste tiårene, og Birk ligger nå blant de mest brukte guttenavnene i Norge.",
    ],
    related: ["Bjørk", "Ask", "Bjarte"],
    sources: [NPL, NORDIC, ORDBOK],
  },
  bjarne: {
    elements: [{ form: "bjǫrn", sense: "bjørn" }],
    origin:
      "Bjarne er en avledning av bjǫrn og hører til den samme gruppen som Bjørn, Bjørnar og Torbjørn. Bjørnen var det sterkeste dyret i nordisk fauna, og leddet ble brukt for å ønske barnet styrke.",
    sources: [NPL, NORDIC],
  },
  bjorn: {
    elements: [{ form: "bjǫrn", sense: "bjørn" }],
    origin:
      "Bjørn er ett av de få norrøne navnene som fortsatt er et helt vanlig norsk ord. Det er også ett av de mest produktive navneleddene i norrønt: en lang rekke navn ender eller begynner på bjǫrn.",
    pronunciation: "med tjukk bj-lyd, «bjørn» som dyret",
    sources: [NPL, NORDIC],
  },
  bjornar: {
    elements: [
      { form: "bjǫrn", sense: "bjørn" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Bjørnar er en nyere norsk utvidelse av Bjørn, dannet med det gamle leddet herr. Navnet ble særlig vanlig i Norge på 1900-tallet.",
    sources: [NPL, NORDIC],
  },
  bo: {
    elements: [{ form: "búa", sense: "å bo, å bygge" }],
    origin:
      "Bo kommer av det norrøne verbet búa, å bo eller bosette seg, og betyr den som bor på gården. Navnet er vanligst i Danmark og Sverige, men brukes også i Norge.",
    sources: [NPL, NORDIC],
  },
  brage: {
    elements: [{ form: "bragr", sense: "dikt, det fremste" }],
    origin:
      "Brage er skaldekunstens gud i norrøn mytologi. Ordet bragr betyr både dikt og det fremste eller beste – å være «bragð» var å utmerke seg.",
    variants: ["Bragi"],
    sources: [NPL, SNL],
  },
  brynhild: {
    elements: [
      { form: "brynja", sense: "brynje, ringbrynje" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Brynhild er navnet på valkyrjen i Volsungesagaen, en av de mest kjente kvinneskikkelsene i norrøn diktning. Begge leddene hører til krigsspråket: en brynje og en kamp.",
    variants: ["Brynhilde"],
    sources: [NPL, SNL],
  },
  dag: {
    elements: [{ form: "dagr", sense: "dag, lys" }],
    origin:
      "Dag er både et vanlig norsk ord og et gammelt navn. I norrøn mytologi er Dagr sønn av natten, og kjører over himmelen med hesten Skinfakse. Leddet står først i en hel rekke navn.",
    sources: [NPL, NORDIC],
  },
  dagalv: {
    elements: [
      { form: "dagr", sense: "dag, lys" },
      { form: "alfr", sense: "alv" },
    ],
    origin:
      "Dagalv setter sammen to av de mest brukte norrøne leddene: dagen og alven. Navnet er sjeldent i dag, men følger et helt vanlig norrønt mønster.",
    sources: [NPL, NORDIC],
  },
  dagfinn: {
    elements: [
      { form: "dagr", sense: "dag, lys" },
      { form: "finnr", sense: "same, folkeslaget finner" },
    ],
    origin:
      "Dagfinn er dannet på samme måte som Arnfinn og Torfinn, med finnr som andreledd. Navnet har vært jevnt i bruk i Norge gjennom hele 1900-tallet.",
    sources: [NPL, NORDIC],
  },
  dagfrid: {
    elements: [
      { form: "dagr", sense: "dag, lys" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Dagfrid er kvinnenavnet som svarer til Dagfinn, med fríðr som andreledd. Kombinasjonen dag + vakker gir en av de lysere betydningene i det norrøne navneforrådet.",
    sources: [NPL, NORDIC],
  },
  dagmar: {
    elements: [
      { form: "dagr", sense: "dag, lys" },
      { form: "mærr", sense: "berømt, herlig" },
    ],
    origin:
      "Dagmar ble kjent i Norden gjennom den danske dronning Dagmar på 1200-tallet. Andreleddet mærr betyr berømt, og finnes også i navn som Gudmar og Ingmar.",
    sources: [NPL, NORDIC],
  },
  dagrun: {
    elements: [
      { form: "dagr", sense: "dag, lys" },
      { form: "rún", sense: "hemmelighet, runeskrift" },
    ],
    origin:
      "Dagrun har rún som andreledd. Rún betyr hemmelighet eller fortrolig kunnskap, og er det samme ordet som ligger bak runene – tegnene var opprinnelig noe hemmelig.",
    sources: [NPL, NORDIC],
  },
  disa: {
    elements: [{ form: "dís", sense: "gudinne, kvinnelig vette" }],
    origin:
      "Disa kommer av dís, som var betegnelsen på kvinnelige guddommer og skytsvesener i norrøn tro. Diser ble dyrket i egne blot, og ordet går igjen som andreledd i navn som Vigdis og Hjørdis.",
    related: ["Vigdis"],
    sources: [NPL, SNL],
  },
  egil: {
    elements: [{ form: "agi", sense: "egg, spiss, skarphet" }],
    origin:
      "Egil er kjent framfor alt gjennom Egil Skallagrimsson, hovedpersonen i Egilssoga og en av de største skaldene i norrøn litteratur. Navnet knyttes til ordet for egg eller skarp kant.",
    sources: [NPL, SNL],
  },
  eilif: {
    elements: [
      { form: "ei", sense: "alltid, evig" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Eilif betyr den som alltid er arving. Andreleddet leifr er det samme som står alene i Leif, og som avslutter navn som Torleif.",
    variants: ["Eiliv"],
    sources: [NPL, NORDIC],
  },
  einar: {
    elements: [
      { form: "einn", sense: "en, alene" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Einar tolkes som den som kjemper alene, eller den fremste i hæren. I norrøn tro var einherjar de falne krigerne som Odin samlet i Valhall – samme ord.",
    sources: [NPL, NORDIC],
  },
  eir: {
    elements: [{ form: "eir", sense: "nåde, hjelp" }],
    origin:
      "Eir er legekunstens gudinne i norrøn mytologi, den fremste av alle leger etter Snorres framstilling. Navnet er kort, sjeldent og har fått fornyet interesse de siste årene.",
    sources: [NPL, SNL],
  },
  eivind: {
    elements: [
      { form: "ey", sense: "lykke, alltid" },
      { form: "vindr", sense: "vinner, den som vinner" },
    ],
    origin:
      "Eivind kommer av norrønt Eyvindr. Førsteleddet ey betyr lykke eller alltid – det er ikke ordet for øy, selv om skrivemåten Øyvind kan gi det inntrykket. Navnet skrives i dag både Eivind, Eyvind og Øyvind.",
    variants: ["Eyvind", "Øyvind"],
    sources: [NPL, NORDIC],
  },
  eyvind: {
    elements: [
      { form: "ey", sense: "lykke, alltid" },
      { form: "vindr", sense: "vinner, den som vinner" },
    ],
    origin:
      "Eyvind er den skrivemåten som ligger nærmest den norrøne formen Eyvindr. Skalden Eyvindr Skáldaspillir ved Håkon den godes hoff er den mest kjente bæreren fra norrøn tid.",
    variants: ["Eivind", "Øyvind"],
    sources: [NPL, NORDIC],
  },
  oyvind: {
    elements: [
      { form: "ey", sense: "lykke, alltid" },
      { form: "vindr", sense: "vinner, den som vinner" },
    ],
    origin:
      "Øyvind er den mest brukte norske skrivemåten av navnet. Førsteleddet er norrønt ey, som betyr lykke – ikke øy, selv om Ø-en i moderne norsk gjør at mange leser det slik.",
    variants: ["Eivind", "Eyvind"],
    sources: [NPL, NORDIC],
  },
  eivor: {
    elements: [
      { form: "ey", sense: "lykke, alltid" },
      { form: "vǫr", sense: "vokter, den varsomme" },
    ],
    origin:
      "Eivor har samme førsteledd som Eivind. Andreleddet vǫr betyr en som vokter eller er årvåken, og finnes også i Gunvor og Ranveig sine slektsnavn.",
    sources: [NPL, NORDIC],
  },
  eldar: {
    elements: [{ form: "eldr", sense: "ild, flamme" }],
    origin:
      "Eldar knyttes til det norrøne ordet for ild. Navnet er sjeldent i Norge og har en tydelig naturbetydning, i samme familie som Eldrid.",
    sources: [NPL, NORDIC],
  },
  eldrid: {
    elements: [
      { form: "eldr", sense: "ild, flamme" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Eldrid er satt sammen av ild og fríðr. Navnet hører til en gruppe norrøne kvinnenavn der et naturelement møter det samme vakre andreleddet – som i Solfrid og Dagfrid.",
    sources: [NPL, NORDIC],
  },
  embla: {
    elements: [{ form: "embla", sense: "alm, slyngtre" }],
    origin:
      "Embla er den første kvinnen i den norrøne skapelsesberetningen, formet sammen med Ask. Ordet knyttes oftest til almetreet eller til en slyngplante.",
    related: ["Ask"],
    sources: [NPL, SNL],
  },
  erik: {
    elements: [
      { form: "ein", sense: "en, alene" },
      { form: "ríkr", sense: "hersker, mektig" },
    ],
    origin:
      "Erik kommer av norrønt Eiríkr og tolkes som eneveldig hersker. Det har vært kongenavn i både Norge, Sverige og Danmark, og Eirik Raude er en av de mest kjente bærerne.",
    variants: ["Eirik", "Eirikr"],
    sources: [NPL, SNL],
  },
  erle: {
    elements: [{ form: "erla", sense: "linerle, fuglen" }],
    origin:
      "Erle er et av de norske fuglenavnene som har blitt fornavn, etter linerla. Navnet brukes også som kortform av navn som begynner på Er-.",
    sources: [NPL, NORDIC],
  },
  erlend: {
    elements: [{ form: "erlendr", sense: "fremmed, utenlandsk" }],
    origin:
      "Erlend kommer av norrønt Erlendr, som betyr den fremmede eller den som kommer utenfra. Navnet er kjent fra Kristin Lavransdatter, der Erlend Nikulaussøn er en av hovedpersonene.",
    sources: [NPL, NORDIC],
  },
  erling: {
    elements: [{ form: "jarl", sense: "jarl, høvding" }],
    origin:
      "Erling betyr jarlens sønn eller etterkommer, dannet med den vanlige -ing-endelsen som markerer avstamning. Erling Skjalgsson fra Sola er den mest kjente bæreren fra norrøn tid.",
    sources: [NPL, NORDIC],
  },
  eskil: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "ketill", sense: "kjele, hjelm" },
    ],
    origin:
      "Eskil kommer av Áskell. Andreleddet ketill betydde opprinnelig kjele, men ble i navn brukt i betydningen hjelm – noe man setter på hodet til vern. Samme ledd finnes i Torkel.",
    sources: [NPL, NORDIC],
  },
  finn: {
    elements: [{ form: "finnr", sense: "same, folkeslaget finner" }],
    origin:
      "Finn viste opprinnelig til samene eller til folk fra nord. Leddet er svært produktivt i norrøn navngiving og avslutter navn som Arnfinn, Dagfinn og Torfinn.",
    sources: [NPL, NORDIC],
  },
  freya: {
    elements: [{ form: "freyja", sense: "frue, herskerinne" }],
    origin:
      "Freya er kjærlighetsgudinnen i norrøn mytologi. Navnet er egentlig en tittel: freyja betyr frue eller herskerinne, på samme måte som Frøy betyr herre.",
    variants: ["Frøya", "Freja"],
    sources: [NPL, SNL],
  },
  froya: {
    elements: [{ form: "freyja", sense: "frue, herskerinne" }],
    origin:
      "Frøya er den norske skrivemåten av gudinnenavnet. Hun rådde over kjærlighet og fruktbarhet, og fikk halvparten av de falne i kamp – den andre halvparten gikk til Odin.",
    variants: ["Freya", "Freja"],
    sources: [NPL, SNL],
  },
  frida: {
    elements: [{ form: "fríðr", sense: "vakker, elsket" }],
    origin: [
      "Frida bygger på leddet fríðr, som avslutter en lang rekke norrøne kvinnenavn – Astrid, Sigrid, Ingrid og Turid ender alle på det samme. Ordet betyr vakker eller elsket, og skal ikke forveksles med friðr, fred, som ligner til forveksling.",
      "Navnet kan også ses som en kortform av germanske navn som Frideborg og Alfrida. I Norden har begge linjene vært i bruk side om side i lang tid.",
      "Frida Kahlo har gjort navnet internasjonalt kjent. Hun het egentlig Frieda, med tysk skrivemåte etter faren, men droppet e-en på 1930-tallet – etter noen framstillinger fordi navnet lignet for mye på tysk Freude i en tid da det ikke var behagelig å virke tysk.",
      "I Norge har Frida steget markert de siste årene og ligger nå blant de mest brukte jentenavnene.",
    ],
    variants: ["Frida", "Frieda"],
    sources: [NPL, NORDIC, BTN],
  },
  frode: {
    elements: [{ form: "fróðr", sense: "vis, kunnskapsrik" }],
    origin:
      "Frode kommer av fróðr, som betyr vis eller lærd. Ordet henger sammen med å ha fått kunnskap overlevert, og går igjen i sagalitteraturen som hedersbetegnelse på kloke menn.",
    sources: [NPL, NORDIC],
  },
  gard: {
    elements: [{ form: "garðr", sense: "gjerde, vern, gård" }],
    origin:
      "Gard kommer av garðr, som betyr både gjerde, vern og gård. Det er samme ord som i Midgard og Åsgard – innhegningen som beskytter det som er innenfor.",
    sources: [NPL, NORDIC],
  },
  geir: {
    elements: [{ form: "geirr", sense: "spyd" }],
    origin:
      "Geir betyr spyd og er ett av de mest produktive leddene i norrønt. Det står først i Geirmund og Geirhild, og sist i navn som Torgeir og Holger. Odins spyd Gungne gjorde våpenet til et symbol med gudetilknytning.",
    sources: [NPL, NORDIC],
  },
  geirhild: {
    elements: [
      { form: "geirr", sense: "spyd" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Geirhild setter sammen to rene krigsledd: spydet og kampen. Slike navn var vanlige for kvinner i norrøn tid, der leddene beskrev ønsket styrke snarere enn yrke.",
    sources: [NPL, NORDIC],
  },
  geirmund: {
    elements: [
      { form: "geirr", sense: "spyd" },
      { form: "mundr", sense: "vern, beskyttelse" },
    ],
    origin:
      "Geirmund har mundr som andreledd, som betyr vern eller beskyttelse. Det samme leddet står i Åsmund, Gudmund og Vermund – ikke i betydningen munn eller hånd, men vern.",
    variants: ["Gjermund"],
    sources: [NPL, NORDIC],
  },
  gjermund: {
    elements: [
      { form: "geirr", sense: "spyd" },
      { form: "mundr", sense: "vern, beskyttelse" },
    ],
    origin:
      "Gjermund er den norske skrivemåten som følger uttalen, mens Geirmund ligger nærmere den norrøne formen. Begge er samme navn: spyd og vern.",
    variants: ["Geirmund"],
    sources: [NPL, NORDIC],
  },
  gerd: {
    elements: [{ form: "garðr", sense: "gjerde, inngjerdet plass" }],
    origin:
      "Gerd er navnet på jotunkvinnen Gerðr, som guden Frøy forelsket seg i. Navnet henger sammen med garðr, den inngjerdede plassen, og er i slekt med Gard.",
    related: ["Gard"],
    sources: [NPL, SNL],
  },
  gisken: {
    elements: [{ form: "gísl", sense: "gissel, edsvoren følgesvenn" }],
    origin:
      "Gisken er en nordnorsk form knyttet til leddet gísl. I norrøn tid var et gissel ikke bare en fange, men også en som ble sendt for å garantere en avtale mellom to slekter.",
    related: ["Gisle"],
    sources: [NPL, NORDIC],
  },
  gisle: {
    elements: [{ form: "gísl", sense: "gissel, edsvoren følgesvenn" }],
    origin:
      "Gisle er kjent fra Gisle Sursson, hovedpersonen i en av islendingesagaene. Leddet gísl viste til den som ble stilt som sikkerhet mellom stridende slekter – en betrodd rolle, ikke en ydmykende.",
    sources: [NPL, SNL],
  },
  gro: {
    elements: [{ form: "gróa", sense: "å gro, å vokse" }],
    origin:
      "Gro kommer av verbet gróa, å vokse eller gro. I norrøn mytologi er Gróa en volve som leser trolldom over Tor. Navnet er kort, gammelt og fortsatt i bruk.",
    sources: [NPL, NORDIC],
  },
  gudny: {
    elements: [
      { form: "guð", sense: "gud" },
      { form: "nýr", sense: "ny" },
    ],
    origin:
      "Gudny har guð som førsteledd, det samme som i Gudrun og Gudmund. Andreleddet nýr betyr ny, og finnes også i Signy og Dagny.",
    sources: [NPL, NORDIC],
  },
  gudrun: {
    elements: [
      { form: "guð", sense: "gud" },
      { form: "rún", sense: "hemmelighet, runeskrift" },
    ],
    origin:
      "Gudrun er en av de store kvinneskikkelsene i norrøn diktning, både i Volsungesagaen og i Laksdøla saga. Navnet betyr gudenes hemmelighet, med det samme rún-leddet som i Sigrun og Dagrun.",
    sources: [NPL, SNL],
  },
  gunn: {
    elements: [{ form: "gunnr", sense: "kamp, strid" }],
    origin:
      "Gunn er selve kampordet, brukt alene som navn. Gunnr var også navnet på en valkyrje. Leddet er ett av de vanligste i norrøne kvinnenavn og står i Gunnhild, Gunvor og Gunnar.",
    sources: [NPL, NORDIC],
  },
  gunnar: {
    elements: [
      { form: "gunnr", sense: "kamp, strid" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Gunnar er kjent fra Njålssoga og fra Volsungesagaen. Begge leddene hører til krigsspråket, og navnet har vært i sammenhengende bruk i Norge siden vikingtiden.",
    sources: [NPL, NORDIC],
  },
  gunnhild: {
    elements: [
      { form: "gunnr", sense: "kamp, strid" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Gunnhild er satt sammen av to ledd som begge betyr kamp. Slik forsterkning var ikke uvanlig i norrøn navngiving, der leddene ofte ble valgt for klang og slektstradisjon like mye som for samlet betydning.",
    sources: [NPL, NORDIC],
  },
  gunvor: {
    elements: [
      { form: "gunnr", sense: "kamp, strid" },
      { form: "vǫr", sense: "vokter, den varsomme" },
    ],
    origin:
      "Gunvor har det samme vokterleddet som Eivor. Navnet er i slekt med Gunnhild og Gunn gjennom førsteleddet gunnr.",
    sources: [NPL, NORDIC],
  },
};
