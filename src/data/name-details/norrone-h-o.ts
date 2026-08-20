import type { NameDetail } from "./types";

/** Norrøne navn, H–O. */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

export const norroneHO: Record<string, NameDetail> = {
  haldor: {
    elements: [
      { form: "hallr", sense: "stein, helle" },
      { form: "þórr", sense: "guden Tor" },
    ],
    origin:
      "Haldor kommer av Halldórr og knytter steinen til tordenguden. Tor-navnene er den største enkeltgruppen i norrøn navngiving – Tor var den guden folk flest holdt seg til i det daglige.",
    variants: ["Halldor"],
    sources: [NPL, NORDIC],
  },
  hallbjorg: {
    elements: [
      { form: "hallr", sense: "stein, helle" },
      { form: "bjǫrg", sense: "berging, vern" },
    ],
    origin:
      "Hallbjørg setter sammen stein og vern, to ledd som begge peker mot noe fast og beskyttende. Andreleddet bjǫrg er det samme som i Bergljot, og betyr redning – ikke bjørn.",
    sources: [NPL, NORDIC],
  },
  hallvard: {
    elements: [
      { form: "hallr", sense: "stein, helle" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Hallvard er navnet på Oslos vernehelgen, Hallvard Vebjørnsson, som ble drept mens han forsvarte en kvinne. Han står fremdeles i Oslos byvåpen.",
    variants: ["Halvard", "Hallvar"],
    sources: [NPL, SNL],
  },
  halvdan: {
    elements: [
      { form: "halfr", sense: "halv" },
      { form: "danr", sense: "dansk, daner" },
    ],
    origin:
      "Halvdan betyr bokstavelig halvdansk, og ble brukt om folk med én dansk forelder. Halvdan Svarte, faren til Harald Hårfagre, er den mest kjente bæreren.",
    sources: [NPL, NORDIC],
  },
  harald: {
    elements: [
      { form: "herr", sense: "hær, krigsflokk" },
      { form: "valdr", sense: "hersker, den som rår" },
    ],
    origin:
      "Harald betyr hærfører, og er ett av de mest brukte kongenavnene i norsk historie – fra Harald Hårfagre og Harald Hardråde til Harald V. Andreleddet valdr går igjen i Ragnvald, Torvald og Ingvald.",
    sources: [NPL, SNL],
  },
  hedda: {
    elements: [{ form: "haðu", sense: "strid, kamp" }],
    origin:
      "Hedda er en nordisk kortform av Hedvig, som er germansk og bygget av to kampledd. Navnet er kjent fra Ibsens Hedda Gabler.",
    related: ["Hedvig"],
    sources: [NPL, BTN],
  },
  helga: {
    elements: [{ form: "heilagr", sense: "hellig, viet" }],
    origin:
      "Helga er den kvinnelige formen av Helge. Ordet heilagr betydde i norrøn tid noe som var viet eller under gudenes vern, før det fikk den kristne betydningen hellig.",
    sources: [NPL, NORDIC],
  },
  hervor: {
    elements: [
      { form: "herr", sense: "hær, krigsflokk" },
      { form: "vǫr", sense: "vokter, den varsomme" },
    ],
    origin:
      "Hervor er kjent fra Hervarar saga, der hun krever farens sverd tilbake fra gravhaugen. Navnet er ett av de tydeligste eksemplene på krigerske kvinnenavn i norrøn diktning.",
    sources: [NPL, SNL],
  },
  hilde: {
    elements: [{ form: "hildr", sense: "kamp, strid" }],
    origin:
      "Hilde er kampordet brukt alene. Hildr var navnet på en valkyrje, og leddet avslutter en lang rekke norrøne kvinnenavn – Gunnhild, Ragnhild, Brynhild og Alvhild hører alle til samme gruppe.",
    sources: [NPL, NORDIC],
  },
  hakon: {
    elements: [
      { form: "hár", sense: "høy, opphøyd" },
      { form: "konr", sense: "sønn, ætling" },
    ],
    origin:
      "Håkon betyr høybåren sønn, altså en av høy ætt. Det er ett av de mest brukte norske kongenavnene, fra Håkon den gode på 900-tallet til Håkon VII og kronprins Haakon.",
    variants: ["Haakon"],
    sources: [NPL, SNL],
  },
  haakon: {
    elements: [
      { form: "hár", sense: "høy, opphøyd" },
      { form: "konr", sense: "sønn, ætling" },
    ],
    origin:
      "Haakon er den eldre skrivemåten med dobbel a, brukt før å ble innført i norsk rettskriving i 1917. Kongehuset har beholdt formen – både Haakon VII og kronprins Haakon skrives slik.",
    variants: ["Håkon"],
    sources: [NPL, SNL],
  },
  havar: {
    elements: [
      { form: "hár", sense: "høy, opphøyd" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Håvar har samme førsteledd som Håkon og samme andreledd som Hallvard. Navnet er sjeldent, men følger et helt regelmessig norrønt mønster.",
    variants: ["Håvard"],
    sources: [NPL, NORDIC],
  },
  idun: {
    elements: [
      { form: "ið", sense: "på nytt, igjen" },
      { form: "unnr", sense: "å elske" },
    ],
    origin:
      "Idun vokter eplene som holder gudene unge i norrøn mytologi. Navnet tolkes som den som forynger, og hører til de mest brukte gudinnenavnene i moderne norsk.",
    variants: ["Idunn", "Iduna"],
    sources: [NPL, SNL],
  },
  idunn: {
    elements: [
      { form: "ið", sense: "på nytt, igjen" },
      { form: "unnr", sense: "å elske" },
    ],
    origin:
      "Idunn er skrivemåten som ligger nærmest den norrøne formen Iðunn, med dobbel n. Den brukes side om side med Idun i Norge i dag.",
    variants: ["Idun", "Iduna"],
    sources: [NPL, SNL],
  },
  inge: {
    elements: [{ form: "Ingvi", sense: "guden Ing, Frøys eldre navn" }],
    origin:
      "Inge bygger på gudenavnet Ing, et eldre navn på fruktbarhetsguden Frøy. Ynglingeætten, den eldste norske kongeslekten, regnet seg som etterkommere av ham.",
    related: ["Yngve"],
    sources: [NPL, NORDIC],
  },
  ingfrid: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Ingfrid følger det vanligste mønsteret blant Ing-navnene: gudenavnet først, et beskrivende ledd etter. Ingrid, Ingunn og Ingjerd er dannet på samme måte.",
    sources: [NPL, NORDIC],
  },
  ingjerd: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "garðr", sense: "gjerde, vern" },
    ],
    origin:
      "Ingjerd har garðr som andreledd, det samme vernordet som ligger i Gard og Gerd. Navnet er en norsk form av det norrøne Ingigerðr.",
    sources: [NPL, NORDIC],
  },
  ingrid: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Ingrid kommer av norrønt Ingiríðr og er blant de mest brukte kvinnenavnene i Norge gjennom hele nyere tid. Det deler andreledd med Astrid, Sigrid og Turid.",
    shortForms: ["Inga", "Ingri"],
    sources: [NPL, NORDIC],
  },
  ingunn: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "unnr", sense: "å elske" },
    ],
    origin:
      "Ingunn har unnr som andreledd, det samme som står alene i Unn. Ordet betyr å elske, og finnes også i Idunn og Jorunn.",
    sources: [NPL, NORDIC],
  },
  ingvald: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "valdr", sense: "hersker, den som rår" },
    ],
    origin:
      "Ingvald betyr den som rår i Ings navn. Andreleddet valdr er det samme som i Harald, Ragnvald og Torvald.",
    sources: [NPL, NORDIC],
  },
  ingvar: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Ingvar er dannet av gudenavnet og hærleddet. Navnet er godt kjent i Sverige, der det har vært i bruk sammenhengende siden vikingtiden.",
    sources: [NPL, NORDIC],
  },
  ivar: {
    elements: [
      { form: "ýr", sense: "barlind, bue" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Ivar knytter seg til barlinden, treet man laget de beste buene av. Navnet betyr dermed noe i retning av bueskytter eller bue-kriger.",
    variants: ["Iver"],
    sources: [NPL, NORDIC],
  },
  jarand: {
    elements: [
      { form: "jǫrð", sense: "jord" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Jarand er et telemarksnavn som har holdt seg lokalt gjennom lang tid. Førsteleddet knyttes til jorden, som også var navnet på Tors mor i norrøn mytologi.",
    sources: [NPL, NORDIC],
  },
  jofrid: {
    elements: [
      { form: "jór", sense: "hest, stridshest" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Jofrid har hesteleddet jór som førsteledd. Hesten hadde høy status i norrøn kultur, både som stridsdyr og i kult, og går igjen i Jomar og Jorunn.",
    sources: [NPL, NORDIC],
  },
  jomar: {
    elements: [
      { form: "jór", sense: "hest, stridshest" },
      { form: "mærr", sense: "berømt, herlig" },
    ],
    origin:
      "Jomar setter hesten sammen med berømmelse. Navnet er sjeldent og typisk norsk, og deler førsteledd med Jofrid og Jorunn.",
    sources: [NPL, NORDIC],
  },
  jorunn: {
    elements: [
      { form: "jór", sense: "hest, stridshest" },
      { form: "unnr", sense: "å elske" },
    ],
    origin:
      "Jorunn er satt sammen av hest og det å elske. Navnet har vært i bruk i Norge siden norrøn tid og er fortsatt tydelig norsk i klang.",
    sources: [NPL, NORDIC],
  },
  kine: {
    elements: [{ form: "kœnn", sense: "modig, dyktig" }],
    origin:
      "Kine brukes både som selvstendig navn og som kortform av navn som ender på -kine eller -ine. Navnet ble særlig populært i Norge på 1980- og 90-tallet.",
    sources: [NPL, NORDIC],
  },
  knut: {
    elements: [{ form: "knútr", sense: "knute" }],
    origin:
      "Knut kommer av ordet for knute. Det har vært kongenavn i Danmark og England – Knut den mektige rådde over begge deler på 1000-tallet – og er blant de mest brukte gamle mannsnavnene i Norge.",
    sources: [NPL, NORDIC],
  },
  kolbein: {
    elements: [
      { form: "kolr", sense: "kull, mørk" },
      { form: "bein", sense: "bein, legg" },
    ],
    origin:
      "Kolbein har kolr som førsteledd, som betyr kull og ble brukt om mørkt hår eller mørk hud. Samme ledd står i Kolbjørn.",
    sources: [NPL, NORDIC],
  },
  kolbjorn: {
    elements: [
      { form: "kolr", sense: "kull, mørk" },
      { form: "bjǫrn", sense: "bjørn" },
    ],
    origin:
      "Kolbjørn betyr den mørke bjørnen. Navnet hører til bjørnegruppen sammen med Bjørn, Bjarne, Torbjørn og Bjørnar.",
    sources: [NPL, NORDIC],
  },
  kare: {
    elements: [{ form: "kárr", sense: "krøllet, kruset" }],
    origin:
      "Kåre knyttes til ordet kárr, som beskriver krøllete eller kruset hår. I norrøn mytologi er Kári også navnet på vinden.",
    sources: [NPL, NORDIC],
  },
  leif: {
    elements: [{ form: "leifr", sense: "arving, etterkommer" }],
    origin:
      "Leif er kjent framfor alt gjennom Leiv Eiriksson, som etter sagaene kom til Nord-Amerika rundt år 1000. Leddet leifr avslutter navn som Torleif og Eilif.",
    variants: ["Leiv"],
    sources: [NPL, NORDIC],
  },
  leiv: {
    elements: [{ form: "leifr", sense: "arving, etterkommer" }],
    origin:
      "Leiv er den norske skrivemåten som ligger nærmest den norrøne formen Leifr. Leiv Eiriksson skrives oftest slik på norsk, mens Leif er vanligere ellers i Norden.",
    variants: ["Leif"],
    sources: [NPL, NORDIC],
  },
  liv: {
    elements: [{ form: "hlíf", sense: "vern, skjold" }],
    origin:
      "Liv kommer av norrønt Hlíf, som betyr vern eller skjold. At navnet i dag leses som det norske ordet liv er en senere sammenblanding – men den har gjort navnet enda mer brukt.",
    sources: [NPL, NORDIC],
  },
  liva: {
    elements: [{ form: "hlíf", sense: "vern, skjold" }],
    origin:
      "Liva er en utvidet form av Liv, dannet med den vanlige a-endelsen i nordiske kvinnenavn.",
    variants: ["Liv"],
    sources: [NPL, NORDIC],
  },
  loke: {
    elements: [{ form: "loki", sense: "den lukkende, knuten" }],
    origin:
      "Loke er den mest sammensatte skikkelsen i norrøn mytologi – både gudenes hjelper og deres motstander. Navnet knyttes gjerne til noe som lukker eller knytter sammen.",
    variants: ["Loki"],
    sources: [NPL, SNL],
  },
  loki: {
    elements: [{ form: "loki", sense: "den lukkende, knuten" }],
    origin:
      "Loki er den norrøne skrivemåten av gudenavnet, og den formen som er mest kjent internasjonalt. Som dyrenavn passer det på den som finner på påfunn.",
    variants: ["Loke"],
    sources: [NPL, SNL],
  },
  magnar: {
    elements: [
      { form: "magn", sense: "kraft, styrke" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Magnar setter kraft sammen med hær. Førsteleddet magn er det samme som i Magnhild og Magni, og betyr styrke i helt konkret forstand.",
    sources: [NPL, NORDIC],
  },
  magnhild: {
    elements: [
      { form: "magn", sense: "kraft, styrke" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Magnhild betyr sterk i kamp. Navnet er dannet på samme måte som Ragnhild og Gunnhild, med hildr som andreledd.",
    sources: [NPL, NORDIC],
  },
  magni: {
    elements: [{ form: "magn", sense: "kraft, styrke" }],
    origin:
      "Magni er sønn av Tor i norrøn mytologi, og den eneste som var sterk nok til å løfte jotnen Rungnes fot av faren sin. Navnet betyr rett og slett styrke.",
    sources: [NPL, SNL],
  },
  nanna: {
    elements: [{ form: "nanþ", sense: "modig, dristig" }],
    origin:
      "Nanna er Balders hustru i norrøn mytologi, som dør av sorg ved mannens likbål. Navnet knyttes til et gammelt ledd som betyr modig.",
    related: ["Balder"],
    sources: [NPL, SNL],
  },
  njal: {
    elements: [{ form: "Niall", sense: "kjempe, den som vinner" }],
    origin:
      "Njål kommer av det irske Niall og kom til Norden gjennom kontakten med Irland i vikingtiden. Njålssoga, oppkalt etter Njål Torgeirsson, regnes som den fremste av islendingesagaene.",
    sources: [BTN, SNL],
  },
  odd: {
    elements: [{ form: "oddr", sense: "spiss, spydspiss" }],
    origin:
      "Odd betyr spissen på et våpen. Leddet står først i Oddvar, Oddfrid og Oddveig, og er ett av flere norrøne navneledd hentet rett fra våpenspråket.",
    sources: [NPL, NORDIC],
  },
  oddfrid: {
    elements: [
      { form: "oddr", sense: "spiss, spydspiss" },
      { form: "fríðr", sense: "vakker, elsket" },
    ],
    origin:
      "Oddfrid setter spydspissen sammen med det vanligste vakre andreleddet i norrøne kvinnenavn. Kombinasjonen av våpen og skjønnhet er typisk for perioden.",
    sources: [NPL, NORDIC],
  },
  oddvar: {
    elements: [
      { form: "oddr", sense: "spiss, spydspiss" },
      { form: "vǫrðr", sense: "vokter, vakt" },
    ],
    origin:
      "Oddvar betyr den som vokter spydspissen, altså en våpenvokter. Andreleddet er det samme som i Hallvard og Håvar.",
    sources: [NPL, NORDIC],
  },
  oddveig: {
    elements: [
      { form: "oddr", sense: "spiss, spydspiss" },
      { form: "veig", sense: "styrke, kraft" },
    ],
    origin:
      "Oddveig har veig som andreledd, et ord som betyr styrke og som bare brukes i kvinnenavn – Solveig og Ranveig er dannet på samme måte.",
    sources: [NPL, NORDIC],
  },
  odin: {
    elements: [
      { form: "óðr", sense: "rasende, besatt, dikterisk" },
      { form: "-inn", sense: "den som er" },
    ],
    origin:
      "Odin er den øverste guden i norrøn mytologi, knyttet til visdom, diktekunst, runer og krig. Navnet kommer av óðr, som beskriver en tilstand av raseri eller poetisk henrykkelse.",
    variants: ["Oden"],
    sources: [NPL, SNL],
  },
  olav: {
    elements: [
      { form: "anu", sense: "forfader, ane" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Olav kommer av norrønt Óláfr og betyr forfedrenes arving. Olav den hellige gjorde navnet til ett av de mest utbredte i Norden, og det har vært kongenavn i Norge helt fram til Olav V.",
    variants: ["Olaf", "Ole", "Olaus"],
    sources: [NPL, SNL],
  },
  olava: {
    elements: [
      { form: "anu", sense: "forfader, ane" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Olava er den kvinnelige formen av Olav, dannet med a-endelse slik norsk lenge har laget kvinnenavn av mannsnavn – som i Petra, Johanna og Nikoline.",
    variants: ["Olave"],
    sources: [NPL, NORDIC],
  },
  ole: {
    elements: [
      { form: "anu", sense: "forfader, ane" },
      { form: "leifr", sense: "arving, etterkommer" },
    ],
    origin:
      "Ole er den norske dagligformen av Olav. Det var så vanlig at det ble stående som bildet på nordmannen selv, i «Ola nordmann» og i «Ola og Kari».",
    variants: ["Ola", "Olav"],
    sources: [NPL, SNL],
  },
};
