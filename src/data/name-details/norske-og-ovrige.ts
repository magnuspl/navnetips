import type { NameDetail } from "./types";

/**
 * Norske navn og de mindre opphavsgruppene.
 *
 * De norske dyrenavnene er stort sett vanlige ord brukt som navn. Der er det
 * ordets egen historie som er interessant, ikke en konstruert etymologi.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };
const ORDBOK = { title: "Bokmålsordboka", publisher: "Språkrådet og Universitetet i Bergen" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

export const norskeOgOvrige: Record<string, NameDetail> = {
  /* ------------------------------------------------------------- norske -- */

  blomst: {
    origin:
      "Blomst er det norske ordet brukt rett som navn. Ordet er i slekt med engelsk bloom og latin flos, og går tilbake på en indoeuropeisk rot for å blomstre.",
    sources: [ORDBOK, NPL],
  },
  bris: {
    origin:
      "Bris er en lett vind. Ordet kom inn i norsk fra nederlandsk sjøspråk, sammen med en rekke andre værord seilskutetiden ga oss.",
    sources: [ORDBOK, NPL],
  },
  gull: {
    origin:
      "Gull brukes både om metallet og som kjælenavn på norsk – «gullet mitt». Det er den siste betydningen som gjør det til et dyrenavn.",
    related: ["Gulltass"],
    sources: [ORDBOK, NPL],
  },
  gulltass: {
    origin:
      "Gulltass setter sammen gull med tass, et koseord for pote eller for en liten skapning. Sammensetningen finnes bare på norsk.",
    related: ["Gull", "Tassen"],
    sources: [ORDBOK, NPL],
  },
  linnea: {
    origin:
      "Linnea er oppkalt etter linnea, den lille rosa skogblomsten Carl von Linné valgte som sin egen. Botanikeren ga blomsten navn etter seg selv, og blomsten ga senere navn til tusenvis av jenter i Norden.",
    variants: ["Linnéa", "Linea"],
    sources: [NPL, NORDIC],
  },
  liten: {
    origin:
      "Liten brukt som navn er typisk for katter som beholder kattungestørrelsen – eller som ironisk navn på en stor katt. Ordet er felles nordisk og svært gammelt.",
    sources: [ORDBOK, NPL],
  },
  lykke: {
    origin:
      "Lykke kom inn i norsk fra lavtysk lucke i seinmiddelalderen, og betydde først tilfeldighet eller hell. Som fornavn er det først og fremst dansk og norsk.",
    sources: [NPL, NORDIC],
  },
  mille: {
    origin:
      "Mille brukes i Norden som kortform av Emilie, Camilla og Mildrid. Den korte formen har vært selvstendig navn i Danmark og Norge i lang tid.",
    related: ["Emilie"],
    sources: [NPL, BTN],
  },
  myk: {
    origin:
      "Myk er det norske ordet brukt som kattenavn, og beskriver pelsen. Ordet er felles nordisk og i slekt med engelsk meek.",
    sources: [ORDBOK, NPL],
  },
  mane: {
    origin:
      "Måne er både himmellegemet og den hvite flekken mange dyr har i pannen. I norrøn mytologi er Måne bror til Sol, og kjører månevogna over himmelen.",
    related: ["Luna", "Sol"],
    sources: [SNL, NPL],
  },
  nora: {
    origin:
      "Nora er en kortform av Eleonora og Honoria som er blitt selvstendig navn i hele Norden. Ibsens Nora i Et dukkehjem heter egentlig Eleonora, og navnet har vært blant de aller mest brukte i Norge i nyere tid.",
    related: ["Eleonora"],
    sources: [NPL, BTN],
  },
  purre: {
    origin:
      "Purre er lyden en katt lager når den koser seg – det norske ordet for det engelske purr. Ordet er lydmalende, laget etter selve lyden.",
    sources: [ORDBOK, NPL],
  },
  pusur: {
    origin:
      "Pusur er den norske oversettelsen av Garfield, og er blitt stående som selve arketypen på et norsk kattenavn. Det bygger på pus, som er lokkeordet til katter i hele Norden.",
    sources: [ORDBOK, NPL],
  },
  selma: {
    origin:
      "Selma ble gjort kjent gjennom James Macphersons Ossian-dikt på 1700-tallet, der Selma er navnet på en borg. Navnet knyttes også til Anselma, av germansk ans, gud, og helm, vern – som gir betydningen «vernet av Gud».",
    sources: [NPL, BTN],
  },
  skygge: {
    origin:
      "Skygge er det norske ordet brukt som navn, og gis gjerne til mørke katter eller til en som følger etter overalt. Det norske motstykket til Shadow.",
    related: ["Shadow"],
    sources: [ORDBOK, NPL],
  },
  smule: {
    origin:
      "Smule er en liten bit, gjerne av brød. Som kattenavn brukes det om de aller minste i kullet.",
    sources: [ORDBOK, NPL],
  },
  snute: {
    origin:
      "Snute er nesepartiet på et dyr. Ordet kom inn i norsk fra lavtysk, og brukes som kjælenavn like mye som beskrivelse.",
    sources: [ORDBOK, NPL],
  },
  sno: {
    origin:
      "Snø brukes som navn på hvite dyr. Ordet er felles germansk og går tilbake på den samme indoeuropeiske roten som latin nix og engelsk snow.",
    sources: [ORDBOK, NPL],
  },
  spragle: {
    origin:
      "Spragle er et norsk dialektord for noe flekkete eller flerfarget, i slekt med sprakle og spraglete. Det brukes særlig om trefargede katter.",
    sources: [ORDBOK, NPL],
  },
  tassen: {
    origin:
      "Tassen er den bestemte formen av tass, et norsk koseord for pote og for en liten skapning. Det er blant de mest brukte norske hundenavnene.",
    related: ["Gulltass"],
    sources: [ORDBOK, NPL],
  },
  turbo: {
    origin:
      "Turbo kommer av latin turbo, virvelvind. Ordet ble tatt i bruk om turbinmotorer på 1900-tallet, og brukes i dag om alt som går fort.",
    sources: [ORDBOK, NPL],
  },
  vilja: {
    origin:
      "Vilja er det norske ordet vilje i en eldre form. Navnet er nyere i bruk og hører til de norske ordnavnene sammen med Lykke og Frida.",
    sources: [NPL, NORDIC],
  },

  /* --------------------------------------------------------------- irsk -- */

  casey: {
    origin:
      "Casey kommer av irsk cathasaigh, den årvåkne eller stridbare. Førsteleddet cath betyr kamp og går igjen i mange irske navn.",
    sources: [NPL, BTN],
  },
  cody: {
    origin:
      "Cody kommer av irsk Ó Cuidighthigh, etterkommer av den hjelpsomme. Navnet ble kjent gjennom Buffalo Bill Cody.",
    sources: [NPL, BTN],
  },
  kevin: {
    origin:
      "Kevin kommer av irsk Caoimhín, av caomh – mild, vakker, kjær. Sankt Kevin grunnla klosteret i Glendalough og er en av Dublins vernehelgener.",
    sources: [NPL, BTN],
  },
  liam: {
    origin:
      "Liam er en irsk kortform av Uilliam, som er den irske formen av William. Kortformen har blitt et av de mest brukte guttenavnene i den engelsktalende verden.",
    related: ["William"],
    sources: [NPL, BTN],
  },
  murphy: {
    origin:
      "Murphy kommer av irsk Ó Murchadha, etterkommer av sjøkjemperen. Det er det aller vanligste etternavnet i Irland.",
    sources: [NPL, BTN],
  },
  riley: {
    origin:
      "Riley kommer enten av irsk Ó Raghallaigh eller av et engelsk stedsnavn som betyr rugeng. De to linjene har smeltet sammen i moderne bruk.",
    sources: [NPL, BTN],
  },

  /* ---------------------------------------------------------- italiensk -- */

  aria: {
    origin:
      "Aria er den italienske betegnelsen på en solosang i opera, og betyr egentlig luft. Ordet kommer fra gresk aer, og er det samme som ligger i norsk «arie».",
    sources: [NPL, BTN],
  },
  bandit: {
    origin:
      "Bandit kommer av italiensk bandito, en som er lyst fredløs – bannlyst. Som hundenavn brukes det med glimt i øyet om den som stjeler sokker.",
    sources: [BTN, ETYM],
  },
  bella: {
    elements: [{ form: "bella", sense: "vakker" }],
    origin:
      "Bella er italiensk for vakker, av latin bellus. Navnet brukes også som kortform av Isabella, og er blant de vanligste hunde- og kattenavnene i Norge.",
    related: ["Isabella"],
    sources: [NPL, BTN],
  },
  rocko: {
    origin:
      "Rocko er en skrivemåte av Rocco, den italienske formen av Rochus. Navnet knyttes til et germansk ledd som betyr ro.",
    variants: ["Rocco", "Rocky"],
    sources: [BTN, ETYM],
  },
  romeo: {
    origin:
      "Romeo betydde opprinnelig en pilegrim på vei til Roma. Shakespeare gjorde navnet til selve bildet på en elsker, og det brukes i dag mest med et smil.",
    sources: [BTN, SNL],
  },

  /* ------------------------------------------------------------ japansk -- */

  mimi: {
    origin:
      "Mimi betyr ører på japansk, men brukes i mange språk som et lydmalende kjælenavn. Gjentakelsen av samme stavelse gjør det lett å oppfatte for katter.",
    sources: [BTN, ETYM],
  },
  miso: {
    origin:
      "Miso er den japanske gjærede soyabønnepastaen som misosuppe lages av. Matnavn er en egen liten tradisjon blant kattenavn.",
    sources: [BTN, ETYM],
  },
  neko: {
    origin:
      "Neko er rett og slett det japanske ordet for katt. Maneki-neko, den vinkende katten som står i butikkvinduer, bærer samme ord i navnet.",
    sources: [BTN, ETYM],
  },

  /* ------------------------------------------------------------- spansk -- */

  coco: {
    origin:
      "Coco er kokosnøtten på spansk og portugisisk. Ordet betydde opprinnelig et skummelt ansikt – sjømenn syntes de tre hullene i nøtten lignet et hode.",
    sources: [BTN, ETYM],
  },
  lola: {
    origin:
      "Lola er en spansk kortform av Dolores, «Vår frue av sorgene», et av jomfru Marias tilnavn. Kortformen har mistet det tunge og brukes i dag lett og leken.",
    sources: [NPL, BTN],
  },

  /* ------------------------------------------------------------ persisk -- */

  jasper: {
    origin:
      "Jasper kommer av persisk gizbar, skattmester, og er den engelske formen av Kaspar – en av de tre vise menn. Det er også navnet på en flerfarget steinart.",
    related: ["Jesper"],
    sources: [NPL, BTN],
  },
  jesper: {
    origin:
      "Jesper er den danske og norske formen av Kaspar, som går tilbake på persisk gizbar, skattmester. Kaspar er en av de tre vise menn i juleevangeliets tradisjon.",
    related: ["Jasper"],
    sources: [NPL, BTN],
  },

  /* ------------------------------------------------------------ russisk -- */

  kira: {
    origin:
      "Kira er den kvinnelige formen av Kyros, den persiske kongen som gresk og russisk tradisjon kjenner som Kyros den store. Navnet knyttes til et ord for herre.",
    sources: [NPL, BTN],
  },
  sasha: {
    origin:
      "Sasha er den russiske kjæleformen av Aleksander og Aleksandra, og brukes om både gutter og jenter. Aleksander betyr den som verner menn.",
    related: ["Sander"],
    sources: [NPL, BTN],
  },

  /* ------------------------------------------------------------ swahili -- */

  simba: {
    origin:
      "Simba er swahili for løve. Navnet er kjent verden over gjennom Løvenes konge, og brukes både på hunder og katter.",
    sources: [SNL, BTN],
  },
  zuri: {
    origin:
      "Zuri betyr vakker eller god på swahili. Det er et av de swahili-ordene som har blitt vanlige som navn utenfor Øst-Afrika.",
    sources: [NPL, BTN],
  },

  /* ------------------------------------------------------------ diverse -- */

  angus: {
    origin:
      "Angus kommer av gælisk Aonghas, av aon – én – og gus – valg eller kraft. Aengus er kjærlighetsguden i irsk mytologi, og navnet bæres også av en skotsk region og en storferase.",
    sources: [NPL, BTN],
  },
  arthur: {
    origin:
      "Arthur er av usikkert opphav. Den vanligste forklaringen knytter navnet til walisisk arth, bjørn, men det kan også komme av det romerske slektsnavnet Artorius. Kong Arthur-sagnene gjorde navnet kjent i hele Europa.",
    sources: [NPL, BTN],
  },
  bruce: {
    origin:
      "Bruce er et normannisk stedsnavn fra Frankrike som fulgte med til Skottland. Robert the Bruce ble skotsk konge i 1306.",
    sources: [NPL, BTN],
  },
  even: {
    elements: [
      { form: "ey", sense: "lykke, alltid" },
      { form: "vindr", sense: "vinner, den som vinner" },
    ],
    origin:
      "Even er en norsk form av det norrøne Eyvindr, i slekt med Eivind og Øyvind. Formen er særlig vanlig på Østlandet.",
    variants: ["Eivind", "Øyvind"],
    sources: [NPL, NORDIC],
  },
  gustav: {
    origin:
      "Gustav kommer av gammelsvensk Gøtstaf. Betydningen er omdiskutert – den vanligste tolkningen er «goternes stav», altså goternes støtte. Seks svenske konger har båret navnet.",
    variants: ["Gustaf", "Gøsta"],
    related: ["Gus"],
    sources: [NPL, NORDIC],
  },
  milo: {
    origin:
      "Milo knyttes til slavisk mil, som betyr mild og kjær, men kan også komme av det germanske Milo. Navnet er blant de mest brukte kattenavnene i Norge.",
    sources: [NPL, BTN],
  },
  nala: {
    origin:
      "Nala betyr gave på swahili og er kjent fra Løvenes konge. Navnet finnes også i indisk tradisjon, der Nala er en konge i Mahabharata.",
    sources: [BTN, SNL],
  },
  thomas: {
    elements: [{ form: "te'oma", sense: "tvilling" }],
    origin:
      "Thomas kommer av arameisk te'oma, tvilling. Apostelen Tomas ga oss uttrykket «tvilende Tomas», etter at han ikke ville tro på oppstandelsen før han fikk se selv.",
    variants: ["Tomas", "Thomas"],
    sources: [NPL, BTN],
  },
};
