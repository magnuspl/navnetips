import type { NameDetail } from "./types";

/**
 * Norrøne navn lagt til etter at kildekravet ble innført.
 *
 * Alle oppføringene her har kilde, slik docs/legge-til-navn.md krever.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

export const norroneNye: Record<string, NameDetail> = {
  alva: {
    elements: [{ form: "alfr", sense: "alv" }],
    origin:
      "Alva er den kvinnelige formen av Alv, dannet med a-endelse slik nordiske kvinnenavn lenge er blitt laget av mannsnavn. Navnet deler ledd med Alvhild og Alvilde.",
    sources: [NPL, NORDIC],
  },
  amund: {
    elements: [
      { form: "agi", sense: "ærefrykt, redsel" },
      { form: "mundr", sense: "vern, beskyttelse" },
    ],
    origin:
      "Amund kommer av norrønt Agmundr. Andreleddet mundr betyr vern, det samme som i Åsmund og Gudmund, og førsteleddet agi beskriver den respekten en mektig mann ble møtt med.",
    variants: ["Åmund"],
    sources: [NPL, NORDIC],
  },
  are: {
    elements: [{ form: "ari", sense: "ørn" }],
    origin:
      "Are er ørnen brukt som navn, i samme gruppe som Arne og Arna. Are Frode, som skrev Islendingabók på 1100-tallet, regnes som den første islandske historieskriveren.",
    sources: [NPL, SNL],
  },
  arne: {
    elements: [{ form: "ǫrn", sense: "ørn" }],
    origin:
      "Arne er en kortform av navn som begynner på Arn-, som Arnfinn og Arnbjørn, og er senere blitt selvstendig navn. Det var blant de aller vanligste mannsnavnene i Norge på 1900-tallet.",
    sources: [NPL, NORDIC],
  },
  asbjorn: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "bjǫrn", sense: "bjørn" },
    ],
    origin:
      "Asbjørn setter gudeleddet sammen med bjørnen, og hører dermed både til Ås-gruppen med Åsmund og Åshild, og til bjørnegruppen med Torbjørn og Kolbjørn.",
    variants: ["Espen", "Asbjørn"],
    sources: [NPL, NORDIC],
  },
  aslaug: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "laug", sense: "viet, lovet" },
    ],
    origin:
      "Aslaug er i Volsungesagaen datteren til Sigurd Fåvnesbane og Brynhild, og senere gift med Ragnar Lodbrok. Andreleddet knyttes til det å være viet eller lovet bort.",
    sources: [NPL, SNL],
  },
  bard: {
    elements: [
      { form: "baðu", sense: "kamp" },
      { form: "friðr", sense: "fred, vern" },
    ],
    origin:
      "Bård kommer av norrønt Bárðr, satt sammen av et kampledd og et fredsledd. Sammenstillingen av kamp og fred er vanlig i norrøne navn, der leddene beskriver ønskede egenskaper snarere enn en samlet setning.",
    sources: [NPL, NORDIC],
  },
  borghild: {
    elements: [
      { form: "borg", sense: "borg, vern" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Borghild er kjent fra Volsungesagaen som Sigmunds første hustru. Førsteleddet borg betyr befestning eller vern, det samme ordet som i moderne norsk borg.",
    sources: [NPL, SNL],
  },
  brede: {
    elements: [{ form: "breiðr", sense: "bred" }],
    origin:
      "Brede kommer av det norrøne ordet for bred, brukt som tilnavn på store menn før det ble fornavn. Navnet er særlig norsk og er fortsatt sjeldent.",
    sources: [NPL],
  },
  eirik: {
    elements: [
      { form: "ein", sense: "en, alene" },
      { form: "ríkr", sense: "hersker, mektig" },
    ],
    origin:
      "Eirik er den skrivemåten som ligger nærmest den norrøne formen Eiríkr. Eirik Raude, som grunnla den norrøne bosetningen på Grønland, skrives oftest slik på norsk, mens Erik er vanligere i resten av Norden.",
    variants: ["Erik"],
    sources: [NPL, SNL],
  },
  espen: {
    elements: [
      { form: "áss", sense: "gud, æsene" },
      { form: "bjǫrn", sense: "bjørn" },
    ],
    origin:
      "Espen er en norsk dagligform av Asbjørn, slitt ned gjennom uttalen. Espen Askeladd i eventyrsamlingen til Asbjørnsen og Moe har gjort formen kjent for alle som har vokst opp i Norge.",
    variants: ["Asbjørn"],
    sources: [NPL, SNL],
  },
  gudmund: {
    elements: [
      { form: "guð", sense: "gud" },
      { form: "mundr", sense: "vern, beskyttelse" },
    ],
    origin:
      "Gudmund betyr den som er vernet av gudene. Det deler førsteledd med Gudrun og Gudny, og andreledd med Åsmund og Amund.",
    sources: [NPL, NORDIC],
  },
  guro: {
    elements: [
      { form: "guð", sense: "gud" },
      { form: "rún", sense: "hemmelighet, runeskrift" },
    ],
    origin:
      "Guro er en norsk form av Gudrun, slitt ned gjennom uttalen på samme måte som Sjur kom av Sigurd. Formen er særlig vanlig i innlandsbygdene.",
    variants: ["Gudrun"],
    sources: [NPL, NORDIC],
  },
  halvor: {
    elements: [
      { form: "hallr", sense: "stein, helle" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Halvor er en norsk form av Hallvard, med samme betydning: den som vokter steinen. Formen er særlig utbredt på Østlandet og i Telemark.",
    variants: ["Hallvard", "Halvard"],
    sources: [NPL, NORDIC],
  },
  havard: {
    elements: [
      { form: "hár", sense: "høy, opphøyd" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Håvard kommer av norrønt Hávarðr og betyr den høye vokteren. Det er den vanligste skrivemåten i Norge i dag, ved siden av den kortere formen Håvar.",
    variants: ["Håvar"],
    sources: [NPL, NORDIC],
  },
  ingeborg: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "borg", sense: "borg, vern" },
    ],
    origin:
      "Ingeborg betyr den som er vernet av guden Ing. Navnet er båret av flere norske og danske dronninger i middelalderen, og hører til den store Ing-gruppen sammen med Ingrid og Ingunn.",
    shortForms: ["Inga", "Borghild"],
    sources: [NPL, SNL],
  },
  iver: {
    elements: [
      { form: "ýr", sense: "barlind, bue" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Iver er den norske formen av Ivar. Begge går tilbake på barlinden, treet de beste buene ble laget av, og betyr dermed noe i retning av bueskytter.",
    variants: ["Ivar"],
    sources: [NPL, NORDIC],
  },
  kjell: {
    elements: [{ form: "ketill", sense: "kjele, hjelm" }],
    origin:
      "Kjell kommer av norrønt Ketill. Ordet betydde kjele, men i navn ble det brukt om hjelmen – vernet man setter på hodet. Samme ledd står sist i Torkel og Eskil.",
    variants: ["Kjetil"],
    sources: [NPL, NORDIC],
  },
  live: {
    elements: [{ form: "hlíf", sense: "vern, skjold" }],
    origin:
      "Live er en norsk form av Liv, som kommer av norrønt Hlíf – vern eller skjold. At navnet i dag leses som det norske ordet liv er en senere sammenblanding.",
    variants: ["Liv", "Liva"],
    sources: [NPL, NORDIC],
  },
  malfrid: {
    elements: [
      { form: "mál", sense: "tale, sak" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Målfrid er satt sammen av mál, som betyr tale eller rettssak, og fríðr. Førsteleddet er det samme som i moderne norsk mål og målsak.",
    variants: ["Målfrid", "Malfrid"],
    sources: [NPL, NORDIC],
  },
  ola: {
    elements: [
      { form: "anu", sense: "forfader, ane" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Ola er den norske dagligformen av Olav, ved siden av Ole. Den står som selve bildet på nordmannen i «Ola nordmann» og i paret «Ola og Kari».",
    variants: ["Ole", "Olav"],
    sources: [NPL, SNL],
  },
  oline: {
    elements: [
      { form: "anu", sense: "forfader, ane" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Oline er en kvinnelig form av Ole, dannet med den latinske endelsen -ine slik en rekke norske kvinnenavn ble laget på 1800-tallet – som Nikoline, Josefine og Karoline.",
    variants: ["Olina"],
    sources: [NPL, NORDIC],
  },
  ragna: {
    elements: [{ form: "regin", sense: "råd, makter, gudene" }],
    origin:
      "Ragna er en kortform av navn på Ragn-, som Ragnhild og Ragnfrid. Førsteleddet regin viste til de rådende maktene – det samme ordet som i ragnarok.",
    shortForms: ["Ragnhild"],
    sources: [NPL, NORDIC],
  },
  reidun: {
    elements: [
      { form: "hreiðr", sense: "rede, bosted" },
      { form: "unnr", sense: "å elske, bølge" },
    ],
    origin:
      "Reidun har unnr som andreledd, det samme som står alene i Unn og sist i Ingunn og Jorunn. Førsteleddet knyttes til rede eller bosted.",
    sources: [NPL, NORDIC],
  },
  roald: {
    elements: [
      { form: "hróðr", sense: "ry, berømmelse" },
      { form: "valdr", sense: "hersker, den som rår" },
    ],
    origin:
      "Roald deler førsteledd med Roar og andreledd med Harald og Ragnvald. Polfareren Roald Amundsen er den mest kjente bæreren.",
    sources: [NPL, SNL],
  },
  rune: {
    elements: [{ form: "rún", sense: "hemmelighet, runeskrift" }],
    origin:
      "Rune er rún brukt som mannsnavn, og den mannlige motsvarigheten til Runa. Ordet betydde hemmelighet eller fortrolig kunnskap – runene fikk navn etter det, ikke omvendt.",
    variants: ["Runar"],
    sources: [NPL, NORDIC],
  },
  signe: {
    elements: [
      { form: "sigr", sense: "seier" },
      { form: "nýr", sense: "ny" },
    ],
    origin:
      "Signe er en nordisk form av Signy, som er kjent fra Volsungesagaen. Seiersleddet sigr står først i Sigrid, Sigrun, Sigurd og Sigmund.",
    variants: ["Signy"],
    sources: [NPL, NORDIC],
  },
  sigmund: {
    elements: [
      { form: "sigr", sense: "seier" },
      { form: "mundr", sense: "vern, beskyttelse" },
    ],
    origin:
      "Sigmund er far til Sigurd Fåvnesbane i Volsungesagaen, han som trekker sverdet ut av stammen i Volsungenes hall. Navnet setter seier sammen med vern.",
    sources: [NPL, SNL],
  },
  sindre: {
    elements: [{ form: "sindri", sense: "gnist, den gnistrende" }],
    origin:
      "Sindre er dvergen som smir Tors hammer Mjølne og Odins ring Draupne i norrøn mytologi. Navnet knyttes til gnisten fra smia, og er i slekt med det norske ordet sindre.",
    sources: [NPL, SNL],
  },
  sivert: {
    elements: [
      { form: "sigr", sense: "seier" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Sivert er en norsk form i samme gruppe som Sigvard og Sigurd, kommet inn via lavtysk Siewert. Formen har vært særlig vanlig langs kysten.",
    variants: ["Sigvard", "Syvert"],
    sources: [NPL, NORDIC],
  },
  svein: {
    elements: [{ form: "sveinn", sense: "ung mann, tjener" }],
    origin:
      "Svein kommer av sveinn, som betydde ung mann eller den som tjente hos en høvding. Ordet lever videre i norsk «svenn», som i håndverkersvenn.",
    variants: ["Sven", "Svend"],
    sources: [NPL, NORDIC],
  },
  terje: {
    elements: [
      { form: "þórr", sense: "guden Tor" },
      { form: "geirr", sense: "spyd" },
    ],
    origin:
      "Terje er en norsk form av Torgeir, slitt ned gjennom uttalen på samme måte som Tarjei i Telemark. Ibsens «Terje Vigen» er den mest kjente bæreren i norsk litteratur.",
    variants: ["Torgeir", "Tarjei"],
    sources: [NPL, SNL],
  },
  torfinn: {
    elements: [
      { form: "þórr", sense: "guden Tor" },
      { form: "finnr", sense: "same, folkeslaget finner" },
    ],
    origin:
      "Torfinn hører til den store Tor-gruppen, og har samme andreledd som Arnfinn og Dagfinn. Torfinn Karlsevne er kjent fra sagaene om ferdene til Vinland.",
    sources: [NPL, SNL],
  },
  torgeir: {
    elements: [
      { form: "þórr", sense: "guden Tor" },
      { form: "geirr", sense: "spyd" },
    ],
    origin:
      "Torgeir betyr Tors spyd, og er grunnformen bak både Terje og Tarjei. Spydleddet geirr står også i Geirmund, Geirhild og Roar.",
    variants: ["Terje", "Tarjei"],
    sources: [NPL, NORDIC],
  },
  vebjorn: {
    elements: [
      { form: "vé", sense: "helligdom, det viede" },
      { form: "bjǫrn", sense: "bjørn" },
    ],
    origin:
      "Vebjørn setter det viede stedet sammen med bjørnen. Førsteleddet vé står også i Vegard og Vemund, og viser til et innviet sted der blot ble holdt.",
    sources: [NPL, NORDIC],
  },
  vegar: {
    elements: [
      { form: "vé", sense: "helligdom, det viede" },
      { form: "garðr", sense: "gjerde, vern" },
    ],
    origin:
      "Vegar er en kortere skrivemåte av Vegard, med samme betydning: den som verner helligdommen. Begge formene er i bruk i Norge.",
    variants: ["Vegard"],
    sources: [NPL, NORDIC],
  },
};
