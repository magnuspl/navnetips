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
      "Blomst er det norske ordet brukt rett som navn, av norrønt blómstr. Det er i slekt med engelsk bloom og blossom og med latin flos, som ligger bak flora. Alle går tilbake på en indoeuropeisk rot som betyr å svelle eller springe ut. Som dyrenavn hører det til den norske ordgruppen sammen med Bris, Snø og Lykke.",
    related: ["Bris", "Snø"],
    sources: [ORDBOK, NPL],
  },
  bris: {
    origin:
      "Bris er en lett vind, og ordet kom inn i norsk fra nederlandsk gjennom sjømannsspråket – i samme bølge som kai, kabel, matros og skipper. Nederlandsk var Europas ledende sjøfartsspråk på 1600-tallet, og norsk hentet en stor del av værordene sine derfra. På Beaufort-skalaen dekker bris flere trinn, fra svak bris til stiv kuling.",
    related: ["Storm"],
    sources: [ORDBOK, NPL],
  },
  gull: {
    origin:
      "Gull er både metallet og et av de vanligste kjæleordene på norsk – «gullet mitt». Ordet er felles germansk og i slekt med gul, etter fargen. Det er den overførte betydningen som gjør det til et dyrenavn: gull brukes om det man setter høyest, ikke om metallet.",
    related: ["Gulltass"],
    sources: [ORDBOK, NPL],
  },
  gulltass: {
    origin:
      "Gulltass setter sammen gull med tass. Tass er et norsk koseord som betyr både pote og liten skapning, og som brukes om barn like ofte som om dyr. Sammensetningen finnes bare på norsk, og hører til en liten familie kjælenavn med Tassen, Smule og Liten.",
    related: ["Gull", "Tassen"],
    sources: [ORDBOK, NPL],
  },
  linnea: {
    origin:
      "Linnea er oppkalt etter linnea, den lille rosa skogblomsten Carl von Linné valgte som sin egen. Botanikeren som ga alle verdens arter tonavnssystemet, ga blomsten navn etter seg selv – Linnaea borealis. Blomsten er liten og lettoversett, og Linné skal ha valgt den nettopp derfor. Som fornavn ble Linnea vanlig i Norden fra slutten av 1800-tallet.",
    variants: ["Linnéa", "Linea"],
    sources: [NPL, SNL],
  },
  liten: {
    origin:
      "Liten brukt som navn er typisk for katter som beholder kattungestørrelsen – eller det gis ironisk til en svært stor katt. Ordet er felles nordisk, av norrønt lítill, og er i slekt med engelsk little. Som navn hører det til den samme norske gruppen som Smule og Tassen.",
    related: ["Smule", "Tassen"],
    sources: [ORDBOK, NPL],
  },
  lykke: {
    origin:
      "Lykke kom inn i norsk fra lavtysk lucke i seinmiddelalderen og betydde først tilfeldighet eller hell – ikke den følelsen vi mener i dag. Det er samme ord som engelsk luck. Som fornavn er det først og fremst dansk og norsk, og det brukes både på barn og hunder.",
    related: ["Lucky"],
    sources: [NPL, NORDIC],
  },
  mille: {
    origin:
      "Mille brukes i Norden som kortform av flere navn: Emilie, Camilla og Mildrid. Den korte formen har vært selvstendig navn i Danmark og Norge i lang tid, og hører til en gruppe toleddede kjæleformer med Tilde, Nille og Bolle.",
    related: ["Emilie", "Camilla"],
    sources: [NPL, BTN],
  },
  myk: {
    origin:
      "Myk er det norske ordet brukt som kattenavn, av norrønt mjúkr. Det er i slekt med engelsk meek, som i dag betyr saktmodig – begge går tilbake på en betydning «bøyelig, ettergivende». Som navn beskriver det pelsen mer enn dyret.",
    sources: [ORDBOK, NPL],
  },
  mane: {
    origin:
      "Måne er både himmellegemet og den hvite flekken mange dyr har i pannen. I norrøn mytologi er Måne bror til Sol, og de to kjører hver sin vogn over himmelen jaget av ulvene Hate og Skoll. Ordet er i slekt med latin mensis, måned – månefasene var den eldste kalenderen.",
    related: ["Luna", "Sol"],
    sources: [SNL, ORDBOK],
  },
  nora: {
    origin: [
      "Nora er en kortform av Eleonora og Honoria som er blitt selvstendig navn i hele Norden. Begge de lange formene er selv omdiskuterte: Eleonora knyttes både til gresk og til oksitansk, mens Honoria kommer av latin honor, ære.",
      "Ibsens «Et dukkehjem» fra 1879 gjorde navnet kjent over hele verden. Nora Helmer heter egentlig Eleonora, og sluttscenen der hun går ut og lukker døren bak seg regnes som et av de mest omtalte øyeblikkene i europeisk teaterhistorie – den ble så omstridt at Ibsen motvillig skrev en alternativ slutt for tyske teatre.",
      "I Norge har Nora ligget helt i toppen av navnestatistikken i flere tiår, og var det mest brukte jentenavnet flere år på rad rundt 2020.",
    ],
    variants: ["Norah"],
    related: ["Ellinor"],
    sources: [NPL, SNL, BTN],
  },
  purre: {
    origin:
      "Purre er lyden katten lager når den koser seg, det norske ordet for det engelske purr. Ordet er lydmalende – laget etter selve lyden, slik som knurre, mumle og suse. Lyden oppstår ved at strupehodet vibrerer både når katten puster inn og ut, og den er ett av få kattelydene som ikke har noen parallell hos store kattedyr.",
    sources: [ORDBOK, NPL],
  },
  pusur: {
    origin:
      "Pusur er den norske oversettelsen av tegneseriekatten Garfield, og er blitt stående som selve arketypen på et norsk kattenavn. Det bygger på pus, som er lokkeordet til katter i hele Norden og trolig lydmalende av seg selv – pus-pus er lyden man lokker med, ikke en beskrivelse av dyret.",
    sources: [ORDBOK, NPL],
  },
  selma: {
    origin: [
      "Selma har to forklaringer, og begge er i bruk. Den ene går til James Macphersons Ossian-dikt fra 1760-tallet, der Selma er navnet på kong Fingals borg. Diktene ble utgitt som oversettelser av gammel gælisk poesi, men var i stor grad Macphersons eget verk – en av litteraturhistoriens mest omtalte forfalskninger, og samtidig en av de mest innflytelsesrike bøkene i europeisk romantikk.",
      "Den andre forklaringen knytter navnet til Anselma, av germansk ans, gud, og helm, vern – altså «vernet av Gud».",
      "Selma Lagerlöf gjorde navnet kjent i Norden. Hun ble i 1909 den første kvinnen som fikk Nobelprisen i litteratur, og «Nils Holgerssons underbara resa» ble opprinnelig skrevet som lærebok i geografi for svenske skolebarn.",
      "I Norge har Selma steget markert siden 1990-tallet og ligger nå blant de mest brukte jentenavnene.",
    ],
    related: ["Anselm"],
    sources: [NPL, BTN, SNL],
  },
  skygge: {
    origin:
      "Skygge er det norske ordet brukt som navn, av norrønt skuggi. Det er i slekt med engelsk shadow og tysk Schatten. Navnet gis gjerne til mørke katter, eller til den som følger etter gjennom hele huset – akkurat som det engelske Shadow.",
    related: ["Shadow"],
    sources: [ORDBOK, NPL],
  },
  smule: {
    origin:
      "Smule er en liten bit, gjerne av brød, av lavtysk smole. Ordet brukes også som mengdeord: «en smule bedre». Som kattenavn gis det til den minste i kullet, og hører til den norske kjælenavngruppen med Liten, Tassen og Snute.",
    related: ["Liten", "Tassen"],
    sources: [ORDBOK, NPL],
  },
  snute: {
    origin:
      "Snute er nesepartiet på et dyr, av lavtysk snute – samme rot som engelsk snout og snoop. Ordet brukes like mye som kjælenavn som beskrivelse, og på norsk kan man kalle noen «snuten min» uten at det handler om nese i det hele tatt.",
    sources: [ORDBOK, NPL],
  },
  sno: {
    origin:
      "Snø er felles germansk og går tilbake på den indoeuropeiske roten sneigwh, som også ligger bak latin nix, engelsk snow og tysk Schnee – ett av de ordene som har holdt seg nesten uendret i flere tusen år. Som navn brukes det på hvite dyr, og hører sammen med Frost og Misty.",
    related: ["Frost"],
    sources: [ORDBOK, NPL],
  },
  spragle: {
    origin:
      "Spragle er et norsk dialektord for noe flekkete eller flerfarget, i slekt med spraglete og sprakle. Det brukes særlig om trefargede katter – skilpaddekatter – som nesten alltid er hunnkatter, fordi fargegenene sitter på X-kromosomet.",
    sources: [ORDBOK, NPL],
  },
  tassen: {
    origin:
      "Tassen er den bestemte formen av tass, et norsk koseord for pote og for en liten skapning. Ordet er trolig lydmalende, etter lyden av myke poter mot gulv – å tasse er å gå stille. Det er blant de mest brukte norske hundenavnene.",
    related: ["Gulltass", "Liten"],
    sources: [ORDBOK, NPL],
  },
  turbo: {
    origin:
      "Turbo kommer av latin turbo, virvelvind eller snurrebass, av turbare – å røre opp. Ordet ble tatt i bruk om turbinmotorer på 1900-tallet, der en turbolader utnytter eksosen til å presse mer luft inn i motoren. I dagligtale brukes det om alt som går fort.",
    related: ["Diesel", "Bolt"],
    sources: [ORDBOK, ETYM],
  },
  vilja: {
    origin:
      "Vilja er det norske ordet vilje i en eldre form, av norrønt vili. Navnet er nyere i bruk og hører til de norske ordnavnene sammen med Lykke og Frida. I norrøn mytologi er Vile dessuten navnet på en av Odins brødre.",
    related: ["Lykke"],
    sources: [NPL, NORDIC],
  },
  casey: {
    origin:
      "Casey kommer av irsk Ó Cathasaigh, etterkommer av den årvåkne eller stridbare. Førsteleddet cath betyr kamp og går igjen i en rekke irske navn, blant dem Cathal og Cathleen. Navnet brukes i dag om både gutter og jenter i engelsktalende land.",
    sources: [BTN, NPL],
  },
  cody: {
    origin:
      "Cody kommer av irsk Ó Cuidighthigh, etterkommer av den hjelpsomme. Navnet ble kjent gjennom William «Buffalo Bill» Cody, som turnerte Europa med sitt Wild West-show på 1880- og 90-tallet. Det brukes i dag mest som fornavn i USA.",
    sources: [BTN, NPL],
  },
  kevin: {
    origin:
      "Kevin kommer av irsk Caoimhín, av caomh – mild, vakker, kjær – med diminutivendelsen -ín. Sankt Kevin grunnla klosteret i Glendalough på 500-tallet og er en av Dublins vernehelgener. Navnet spredte seg ut av Irland først på 1900-tallet, og var svært populært i Norge på 1990-tallet.",
    sources: [BTN, NPL],
  },
  liam: {
    origin: [
      "Liam er en irsk kortform av Uilliam, den irske formen av William. Det betyr dermed det samme: den som verner med vilje og besluttsomhet.",
      "Kortformen fulgte den irske utvandringen til USA og Storbritannia, og gikk fra å være et innenirsk kjælenavn til et selvstendig navn i løpet av 1900-tallet. De siste tiårene har det steget usedvanlig raskt – i USA har det vært det mest brukte guttenavnet flere år på rad.",
      "I Norge kom navnet for alvor på 2010-tallet og ligger nå blant de mest brukte guttenavnene.",
    ],
    related: ["William"],
    sources: [BTN, NPL],
  },
  murphy: {
    origin:
      "Murphy kommer av irsk Ó Murchadha, etterkommer av Murchadh – sjøkjemperen, av muir, hav, og cath, kamp. Det er det aller vanligste etternavnet i Irland. Uttrykket «Murphys lov» stammer fra en amerikansk ingeniør på 1940-tallet og har ingen forbindelse til navnets betydning.",
    sources: [BTN, NPL],
  },
  riley: {
    origin:
      "Riley har to opphav som har smeltet sammen: irsk Ó Raghallaigh, og et engelsk stedsnavn av gammelengelsk ryge leah – rugengen. I moderne bruk skilles de ikke, og navnet brukes om både gutter og jenter.",
    sources: [BTN, NPL],
  },
  aria: {
    origin:
      "Aria er den italienske betegnelsen på en solosang i opera, og betyr egentlig luft. Ordet kommer fra gresk aer, som også ligger bak norsk «arie» og «aerodynamisk». I musikken ble aria fra 1600-tallet betegnelsen på det lyriske partiet der handlingen stopper og følelsen får plass.",
    sources: [ETYM, BTN],
  },
  bandit: {
    origin:
      "Bandit kommer av italiensk bandito, «lyst i band» – altså bannlyst eller fredløs. Det er samme rot som norsk bann og bannlyse. En bandit var opprinnelig ikke en røver, men en som var utstøtt av samfunnet og dermed uten rettsvern. Som hundenavn brukes det med glimt i øyet om den som stjeler sokker.",
    sources: [ETYM, BTN],
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
      "Rocko er en skrivemåte av Rocco, den italienske formen av Rochus. Navnet knyttes til et germansk ledd som betyr ro eller hvile. San Rocco er pestens vernehelgen i Italia, ofte avbildet med en hund som brakte ham brød mens han var syk – en detalj som gjør navnet passende for nettopp en hund.",
    variants: ["Rocco", "Rocky"],
    sources: [BTN, SNL],
  },
  romeo: {
    origin:
      "Romeo betydde opprinnelig en pilegrim på vei til Roma, av italiensk romeo. Shakespeare gjorde navnet til selve bildet på en ung elsker i «Romeo og Julie» fra 1590-tallet, og i dag brukes det knapt uten et snev av ironi – også når det settes på en hund.",
    sources: [BTN, ETYM],
  },
  mimi: {
    origin:
      "Mimi betyr ører på japansk, men brukes i mange språk som et lydmalende kjælenavn uten fast betydning. Gjentakelsen av samme stavelse gjør navnet lett å oppfatte for katter, og det samme mønsteret går igjen i Coco, Lola og Bobo. Mimì er dessuten hovedpersonen i Puccinis «La Bohème».",
    sources: [BTN, ETYM],
  },
  miso: {
    origin:
      "Miso er den japanske gjærede soyabønnepastaen som misosuppe lages av. Pastaen fermenteres med muggsoppen kōji i alt fra noen uker til flere år, og jo lengre den står, desto mørkere og saltere blir den. Matnavn er en egen liten tradisjon blant kattenavn, sammen med Kanel, Pepper og Smule.",
    sources: [ETYM, ORDBOK],
  },
  neko: {
    origin:
      "Neko er rett og slett det japanske ordet for katt. Maneki-neko, den vinkende katten som står i butikkvinduer over hele Asia, bærer samme ord i navnet – maneki betyr å vinke eller invitere. Figuren skal lokke til seg kunder og lykke.",
    sources: [ETYM, SNL],
  },
  coco: {
    origin:
      "Coco er kokosnøtten på spansk og portugisisk. Ordet betydde opprinnelig et skummelt ansikt eller et busemann-liknende vesen – portugisiske sjømenn syntes de tre hullene i nøttens skall lignet et hode med øyne og munn, og kalte den derfor coco. Navnet forbindes også med moteskaperen Coco Chanel.",
    sources: [ETYM, BTN],
  },
  lola: {
    origin:
      "Lola er en spansk kortform av Dolores, som er hentet fra Maria-tittelen Nuestra Señora de los Dolores – Vår frue av sorgene. Kortformen har mistet alt det tunge i opphavet og brukes i dag lett og leken, blant annet som hundenavn.",
    related: ["Dolores"],
    sources: [BTN, NPL],
  },
  jasper: {
    origin:
      "Jasper kommer av persisk gizbar, skattmester, og er den engelske formen av Kaspar. Etter tradisjonen er Kaspar en av de tre vise menn, selv om Matteusevangeliet verken navngir dem eller sier hvor mange de var. Jasper er også navnet på en flerfarget kvartsart.",
    related: ["Jesper", "Kasper"],
    sources: [BTN, SNL],
  },
  jesper: {
    origin:
      "Jesper er den danske og norske formen av Kaspar, som går tilbake på persisk gizbar – skattmester. Navnet kom til Norden i middelalderen gjennom helligtrekongersspillene, der de tre vise menn var faste figurer.",
    related: ["Jasper", "Kasper"],
    sources: [NPL, BTN],
  },
  kira: {
    origin:
      "Kira er den kvinnelige formen av Kyros, den persiske storkongen som grunnla akemenideriket på 500-tallet før vår tidsregning. Navnet knyttes til et gammelpersisk ord for herre. I russisk tradisjon har formen Kira vært i bruk siden middelalderen.",
    sources: [BTN, SNL],
  },
  sasha: {
    origin:
      "Sasha er den russiske kjæleformen av Aleksander og Aleksandra, og brukes om både gutter og jenter. Russisk har et rikt system av kjæleformer der ett navn kan ha et titalls avledninger med hver sin nyanse – Aleksander gir også Sanja, Sasjenka og Sjura.",
    related: ["Sander", "Aleksander"],
    sources: [BTN, NPL],
  },
  simba: {
    origin:
      "Simba er swahili for løve. Ordet er kjent verden over gjennom Løvenes konge fra 1994, der de fleste personnavnene er vanlige swahili-ord: Rafiki betyr venn, Pumbaa betyr dumrian, og Sarabi betyr luftspeiling. Navnet brukes både på hunder og katter.",
    related: ["Nala"],
    sources: [BTN, SNL],
  },
  zuri: {
    origin:
      "Zuri betyr vakker eller god på swahili. Swahili er et bantuspråk med et stort lag av arabiske lånord, og fungerer som fellesspråk for over hundre millioner mennesker i Øst-Afrika. Zuri er blant de swahili-ordene som er blitt vanlige som navn også utenfor regionen.",
    sources: [BTN, ETYM],
  },
  angus: {
    origin:
      "Angus kommer av gælisk Aonghas, av aon – én – og gus – valg eller kraft, altså «det ene valget». Aengus er kjærlighetsguden i irsk mytologi, en av Tuatha Dé Danann. Navnet bæres også av en skotsk region og av storferasen Aberdeen Angus, som er grunnen til at mange nordmenn kjenner ordet uten å kjenne navnet.",
    sources: [BTN, SNL],
  },
  arthur: {
    origin:
      "Arthur er av usikkert opphav, og det er verdt å si tydelig. Den vanligste forklaringen knytter navnet til walisisk arth, bjørn, eventuelt med -gwr, mann. En annen utleder det av det romerske slektsnavnet Artorius. Sagnene om kong Arthur, samlet av Geoffrey av Monmouth på 1100-tallet, gjorde navnet kjent i hele Europa.",
    sources: [BTN, SNL],
  },
  bruce: {
    origin:
      "Bruce er et normannisk stedsnavn fra Frankrike, trolig Brix i Normandie, som fulgte med en adelsslekt til Skottland etter 1066. Robert the Bruce ble skotsk konge i 1306 og sikret uavhengigheten ved Bannockburn i 1314. Navnet gikk over fra etternavn til fornavn på 1900-tallet.",
    sources: [BTN, SNL],
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
      "Gustav kommer av gammelsvensk Gøtstaf. Betydningen er omdiskutert: den vanligste tolkningen er «goternes stav», altså goternes støtte, men andre leser førsteleddet som guð, gud. Seks svenske konger har båret navnet, og Gustav Vasa gjorde det til et av Nordens mest kjente kongenavn.",
    variants: ["Gustaf", "Gøsta"],
    related: ["Gus"],
    sources: [NPL, SNL],
  },
  milo: {
    origin:
      "Milo har to mulige opphav som har smeltet sammen: slavisk mil, som betyr mild og kjær og går igjen i navn som Miloš og Ljudmila, og det germanske Milo, som kan henge sammen med et ord for nådig. Navnet er blant de mest brukte katte- og hundenavnene i Norge.",
    sources: [BTN, NPL],
  },
  nala: {
    origin:
      "Nala betyr gave på swahili, og er kjent fra Løvenes konge. Navnet finnes også i indisk tradisjon: i Mahabharata er Nala en konge, og fortellingen om Nala og Damayanti er en av de mest gjenfortalte kjærlighetshistoriene i sanskritlitteraturen.",
    related: ["Simba"],
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
