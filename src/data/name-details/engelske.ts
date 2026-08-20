import type { NameDetail } from "./types";

/**
 * Engelske navn – i hovedsak dyrenavn.
 *
 * De fleste av disse er vanlige engelske ord brukt som navn, ikke gamle
 * navneledd. Da er det mer nyttig å forklare hvor ordet kommer fra og hvordan
 * navnet fungerer å rope på, enn å konstruere en etymologi som ikke finnes.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

export const engelske: Record<string, NameDetail> = {
  ace: {
    origin:
      "Ace er det engelske ordet for esset i en kortstokk, og brukes i overført betydning om den fremste på et felt. Ordet kommer via fransk fra latin as, en romersk mynt- og vektenhet.",
    pronunciation: "«eis»",
    sources: [ETYM, BTN],
  },
  alfie: {
    origin:
      "Alfie er en engelsk kjæleform av Alfred. Slike -ie-former ble selvstendige navn i Storbritannia på 1800-tallet, og er svært vanlige som hundenavn.",
    related: ["Alfred"],
    sources: [NPL, BTN],
  },
  alfred: {
    elements: [
      { form: "ælf", sense: "alv" },
      { form: "ræd", sense: "råd" },
    ],
    origin:
      "Alfred er angelsaksisk og betyr den som får råd fra alvene. Alfred den store av Wessex, som holdt stand mot vikingene på 800-tallet, er den mest kjente bæreren.",
    shortForms: ["Alfie", "Fred"],
    sources: [NPL, BTN],
  },
  archie: {
    elements: [
      { form: "ercan", sense: "ekte, sann" },
      { form: "bald", sense: "modig, djerv" },
    ],
    origin:
      "Archie er en kortform av Archibald, som er germansk av opphav og kom til England med normannerne. Kortformen brukes i dag som selvstendig navn.",
    sources: [NPL, BTN],
  },
  ash: {
    origin:
      "Ash er det engelske ordet for både aske og asketre. Som dyrenavn passer det særlig på grå eller askefargede katter, og det er kort nok til å bli hørt tydelig.",
    related: ["Ask"],
    sources: [ETYM, BTN],
  },
  bailey: {
    origin:
      "Bailey kommer av det engelske bailiff, en forvalter eller ombudsmann, og brukes også om borggården innenfor en festningsmur. Navnet har ingenting med bøddel å gjøre, selv om de to ordene kan blandes sammen.",
    sources: [NPL, BTN],
  },
  baxter: {
    origin:
      "Baxter er et gammelt engelsk yrkesnavn som betyr baker. Endelsen -ster var opprinnelig kvinnelig, slik at en baxter var en kvinnelig baker – på samme måte som spinster og webster.",
    sources: [ETYM, BTN],
  },
  bear: {
    origin:
      "Bear er det engelske ordet for bjørn, i slekt med norsk bjørn gjennom felles germansk rot. Navnet brukes gjerne på store og lodne hunder.",
    pronunciation: "«bær»",
    related: ["Bjørn"],
    sources: [ETYM, BTN],
  },
  bentley: {
    elements: [
      { form: "beonet", sense: "bendelgress" },
      { form: "leah", sense: "eng, lysning" },
    ],
    origin:
      "Bentley er opprinnelig et engelsk stedsnavn som beskriver en eng med grovt gress. Endelsen -ley går igjen i mange engelske stedsnavn og betyr lysning eller eng.",
    related: ["Harley", "Marley"],
    sources: [ETYM, BTN],
  },
  bingo: {
    origin:
      "Bingo er kjent framfor alt fra barnesangen om hunden med det navnet. Ordet brukes som utrop når noe går i boks, og passer et navn som skal ropes.",
    sources: [ETYM, BTN],
  },
  blaze: {
    origin:
      "Blaze betyr flamme på engelsk, men brukes også om den hvite stripen i pannen på hester og hunder. Begge betydningene gir mening som dyrenavn.",
    sources: [ETYM, BTN],
  },
  blue: {
    origin:
      "Blue er fargen brukt som navn. Det er vanlig på hunder med blågrå pels, som weimaraner og blue heeler.",
    sources: [ETYM, BTN],
  },
  bolt: {
    origin:
      "Bolt betyr både lyn og det å sette av gårde i full fart. Navnet passer et raskt dyr, og er kort nok til å bli oppfattet umiddelbart.",
    sources: [ETYM, BTN],
  },
  buddy: {
    origin:
      "Buddy er amerikansk-engelsk for kompis. Ordet oppsto trolig som en barnlig uttale av brother, og er blant de mest brukte hundenavnene i engelsktalende land.",
    sources: [ETYM, BTN],
  },
  buster: {
    origin:
      "Buster er amerikansk slang for en som bryter eller sprenger noe, og ble brukt som vennlig tiltaleord til gutter. Navnet har en tydelig stavelse først som gjør det lett å rope.",
    sources: [ETYM, BTN],
  },
  champ: {
    origin:
      "Champ er kortform av champion, mester. Ordet kommer via fransk fra latin campus, slagmarken – en champion var opprinnelig den som kjempet på vegne av andre.",
    sources: [ETYM, BTN],
  },
  chance: {
    origin:
      "Chance betyr sjanse eller flaks, fra latin cadentia, det som faller – som terningkast. Navnet gis gjerne til dyr som har fått en ny start.",
    sources: [ETYM, BTN],
  },
  cooper: {
    origin:
      "Cooper er et engelsk yrkesnavn for tønnemaker. Yrket var blant de viktigste i middelalderen, siden alt fra øl til saltet fisk ble oppbevart i tønner.",
    sources: [ETYM, BTN],
  },
  daisy: {
    origin:
      "Daisy er prestekragen, og navnet kommer av gammelengelsk dæges eage – dagens øye. Blomsten lukker seg om natten og åpner seg om morgenen.",
    sources: [NPL, BTN],
  },
  diesel: {
    origin:
      "Diesel er oppkalt etter ingeniøren Rudolf Diesel, som utviklet motoren på 1890-tallet. Som hundenavn brukes det gjerne på kraftige raser.",
    sources: [ETYM, BTN],
  },
  duke: {
    origin:
      "Duke er den engelske tittelen hertug, fra latin dux, fører. Titteldyrenavn som Duke, King og Prince er en egen liten tradisjon i engelsktalende land.",
    related: ["King", "Prince"],
    sources: [ETYM, BTN],
  },
  ember: {
    origin:
      "Ember er den glødende resten i et bål etter at flammene har lagt seg. Navnet brukes gjerne på rødlige eller varmefargede katter.",
    sources: [ETYM, BTN],
  },
  fluffy: {
    origin:
      "Fluffy betyr lodden eller luftig på engelsk. Det er blant de mest brukte kattenavnene i engelsktalende land, og beskriver pelsen mer enn dyret.",
    sources: [ETYM, BTN],
  },
  frost: {
    origin:
      "Frost er det samme ordet på engelsk og norsk, fra felles germansk rot. Navnet brukes gjerne på hvite eller lysegrå dyr.",
    sources: [ETYM, BTN],
  },
  gizmo: {
    origin:
      "Gizmo er amerikansk slang for en dings eller innretning man ikke husker navnet på. Ordet ble kjent som figurnavn i filmen Gremlins.",
    sources: [ETYM, BTN],
  },
  harley: {
    elements: [
      { form: "hara", sense: "hare" },
      { form: "leah", sense: "eng, lysning" },
    ],
    origin:
      "Harley er et engelsk stedsnavn som betyr haren sin eng. I dag forbindes navnet like mye med motorsykkelmerket Harley-Davidson.",
    related: ["Bentley", "Marley"],
    sources: [ETYM, BTN],
  },
  hunter: {
    origin:
      "Hunter er det engelske yrkesnavnet for jeger. Som hundenavn er det særlig vanlig på jaktraser, men vær oppmerksom på at det ligger nær kommandoordet «hent».",
    sources: [ETYM, BTN],
  },
  jinx: {
    origin:
      "Jinx betyr forbannelse eller uflaks på engelsk, og kommer trolig av jynx, det latinske navnet på vendehalsen – en fugl brukt i trolldom i antikken.",
    sources: [ETYM, BTN],
  },
  king: {
    origin:
      "King er det engelske ordet for konge, i slekt med norsk konge og norrønt konungr gjennom felles germansk rot. Navnet er kort og bærer godt.",
    related: ["Duke", "Prince"],
    sources: [ETYM, BTN],
  },
  lily: {
    origin:
      "Lily er liljen, fra latin lilium. Blomsten er et gammelt symbol på renhet, og navnet har vært blant de mest populære blomsternavnene i engelsktalende land.",
    variants: ["Lilly", "Lilje"],
    sources: [NPL, BTN],
  },
  lucky: {
    origin:
      "Lucky betyr heldig. Navnet gis ofte til dyr som er blitt reddet eller har klart seg gjennom noe vanskelig.",
    sources: [ETYM, BTN],
  },
  marley: {
    elements: [
      { form: "mere", sense: "sjø, innsjø" },
      { form: "leah", sense: "eng, lysning" },
    ],
    origin:
      "Marley er et engelsk stedsnavn som beskriver engen ved vannet. Navnet ble kjent som hundenavn gjennom boken og filmen Marley & Me.",
    related: ["Bentley", "Harley"],
    sources: [ETYM, BTN],
  },
  misty: {
    origin:
      "Misty betyr tåkete på engelsk. Navnet brukes gjerne på gråblå katter, der pelsen har den samme dempede fargen.",
    sources: [ETYM, BTN],
  },
  moose: {
    origin:
      "Moose er det amerikanske ordet for elg, lånt fra algonkinske språk i Nord-Amerika. Som hundenavn brukes det med glimt i øyet på svært store – eller svært små – hunder.",
    sources: [ETYM, BTN],
  },
  ozzy: {
    origin:
      "Ozzy er en engelsk kortform av Oswald, som er angelsaksisk og betyr gudemakt. I dag forbindes navnet mest med musikeren Ozzy Osbourne.",
    related: ["Oswald"],
    sources: [NPL, BTN],
  },
  penny: {
    origin:
      "Penny er både den engelske mynten og en kortform av Penelope. Penelope er gresk og knyttes til veving – hun vevde og repte opp igjen mens hun ventet på Odyssevs.",
    related: ["Penelope"],
    sources: [NPL, BTN],
  },
  pixel: {
    origin:
      "Pixel er satt sammen av picture og element, og betyr det minste punktet i et digitalt bilde. Ordet ble laget på 1960-tallet, og som kattenavn er det helt moderne.",
    sources: [ETYM, BTN],
  },
  prince: {
    origin:
      "Prince er den engelske tittelen prins, fra latin princeps – den fremste. Navnet hører til den samme lille gruppen titteldyrenavn som Duke og King.",
    related: ["Duke", "King"],
    sources: [ETYM, BTN],
  },
  rusty: {
    origin:
      "Rusty betyr rustfarget, og brukes om dyr med rødbrun pels. Navnet er blant de vanligste for røde hunder og katter i engelsktalende land.",
    sources: [ETYM, BTN],
  },
  sable: {
    origin:
      "Sable er både sobelen, et mårdyr med mørk pels, og betegnelsen på svart i heraldikken. I hundeavl beskriver sable en pels med mørke hårtupper.",
    sources: [ETYM, BTN],
  },
  scout: {
    origin:
      "Scout betyr speider, fra gammelfransk escouter, å lytte. Navnet passer et årvåkent dyr, og er kjent fra Drep ikke en sangfugl.",
    sources: [ETYM, BTN],
  },
  shadow: {
    origin:
      "Shadow betyr skygge. Navnet brukes gjerne på mørke dyr, eller på en som følger tett etter eieren overalt.",
    sources: [ETYM, BTN],
  },
  sonny: {
    origin:
      "Sonny er engelsk tiltaleform til en gutt, av son. Ordet brukes som kjælenavn snarere enn som egentlig navn.",
    sources: [ETYM, BTN],
  },
  sparky: {
    origin:
      "Sparky kommer av spark, gnist, og beskriver et livlig og energisk dyr. Navnet har vært vanlig som hundenavn i USA gjennom hele 1900-tallet.",
    sources: [ETYM, BTN],
  },
  tigra: {
    origin:
      "Tigra er en form av tiger, som kom til europeiske språk via gresk og latin fra et persisk ord. Navnet brukes gjerne på stripete katter.",
    related: ["Tiger"],
    sources: [ETYM, BTN],
  },
  whisker: {
    origin:
      "Whisker er det engelske ordet for værhår, følehårene katter bruker til å måle avstander og kjenne luftstrømmer.",
    variants: ["Whiskers"],
    sources: [ETYM, BTN],
  },
  whiskers: {
    origin:
      "Whiskers er flertallsformen av whisker, og er blant de aller vanligste kattenavnene i engelsktalende land – nettopp fordi værhårene er så typiske for katter.",
    variants: ["Whisker"],
    sources: [ETYM, BTN],
  },
  winston: {
    elements: [
      { form: "wynn", sense: "glede" },
      { form: "stan", sense: "stein" },
    ],
    origin:
      "Winston er et angelsaksisk sted- og personnavn som betyr gledens stein. Winston Churchill er den mest kjente bæreren.",
    sources: [NPL, BTN],
  },
};
