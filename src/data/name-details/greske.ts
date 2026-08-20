import type { NameDetail } from "./types";

/**
 * Greske navn.
 *
 * De fleste kom inn i norsk gjennom kirken, som helgennavn. En stor del av dem
 * er sammensatt av gjennomsiktige greske ord – theos for gud, nike for seier,
 * laos for folk – og de leddene binder navnene sammen på tvers.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

export const greske: Record<string, NameDetail> = {
  agnes: {
    elements: [{ form: "hagnos", sense: "ren, hellig" }],
    origin:
      "Agnes kommer av gresk hagnos, ren. Den hellige Agnes var en romersk martyr, og fordi navnet ligner latin agnus, lam, ble hun avbildet med et lam – en sammenblanding som har fulgt navnet siden.",
    variants: ["Agnete", "Agnete"],
    sources: [NPL, BTN],
  },
  anders: {
    elements: [{ form: "aner", sense: "mann" }],
    origin:
      "Anders er den nordiske formen av Andreas, apostelen som var Peters bror. Navnet kommer av det greske ordet for mann, og var lenge blant de aller vanligste mannsnavnene i Norge.",
    variants: ["Andreas", "Andres"],
    related: ["Andrea"],
    sources: [NPL, BTN],
  },
  andrea: {
    elements: [{ form: "aner", sense: "mann" }],
    origin:
      "Andrea er den kvinnelige formen av Andreas. I Italia er Andrea derimot et mannsnavn – det er den formen som svarer til norske Anders.",
    related: ["Anders"],
    sources: [NPL, BTN],
  },
  apollo: {
    origin:
      "Apollon er guden for lys, musikk, bueskyting, spådom og helbredelse i gresk mytologi, og en av de mest sammensatte skikkelsene i panteonet. Navnets egen opprinnelse er usikker og kanskje ikke gresk i det hele tatt – det kan være lånt fra Lilleasia. Orakelet i Delfi var viet ham.",
    sources: [SNL, BTN],
  },
  atlas: {
    origin:
      "Atlas er titanen som må holde himmelhvelvet oppe som straff etter titanenes krig mot gudene. Navnet knyttes til gresk tlēnai, å bære. Kartsamlinger fikk navn etter ham fordi Mercator satte et bilde av titanen på forsiden av verket sitt i 1595, og Atlanterhavet betyr «Atlas' hav».",
    sources: [SNL, ETYM],
  },
  chloe: {
    elements: [{ form: "chloe", sense: "grønt skudd, ungt løv" }],
    origin:
      "Chloe var et tilnavn for Demeter, gudinnen for korn og vekst, og viste til de første grønne skuddene om våren. Navnet nevnes også i Paulus' brev.",
    variants: ["Kloe"],
    pronunciation: "«kloe»",
    sources: [NPL, BTN],
  },
  echo: {
    origin:
      "Ekko er nymfen som ble straffet av Hera med å bare kunne gjenta det andre sa sist. Hun forelsket seg i Narkissos, ble avvist, og tæret bort til bare stemmen var igjen. Fortellingen står hos Ovid, og det er derfra vi har ordet ekko – i norsk som i de fleste europeiske språk.",
    sources: [SNL, ETYM],
  },
  elida: {
    origin:
      "Elida er av usikkert opphav. Navnet knyttes gjerne til landskapet Elis på Peloponnes, der de olympiske lekene ble holdt, men det kan like gjerne være dannet i Norden som en utvidelse av Eli eller Elin. Usikkerheten er reell, og bør ikke skjules bak én tolkning.",
    related: ["Eli", "Elin"],
    sources: [NPL, BTN],
  },
  eline: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Eline er en nordisk form av Helena. Navnet knyttes til det greske ordet for fakkel eller lys, og kom til Norden gjennom kirken i middelalderen.",
    variants: ["Elin", "Elina"],
    related: ["Helena"],
    sources: [NPL, BTN],
  },
  ellie: {
    origin:
      "Ellie er en engelsk kortform som kan gå tilbake på flere navn: Eleanor, Ellen, Elisabet og Helena. Den har vært brukt som selvstendig navn siden 1800-tallet, og de ulike opphavene skilles ikke lenger i praktisk bruk.",
    related: ["Helena", "Eline", "Ellinor"],
    sources: [BTN, NPL],
  },
  filip: {
    elements: [
      { form: "philos", sense: "venn, den som elsker" },
      { form: "hippos", sense: "hest" },
    ],
    origin:
      "Filip betyr hestevenn og var navnet på både en apostel og på Aleksander den stores far, Filip II av Makedonia. Førsteleddet philos er det samme som i filosofi.",
    variants: ["Philip", "Fillip"],
    sources: [NPL, BTN],
  },
  george: {
    elements: [
      { form: "ge", sense: "jord" },
      { form: "ergon", sense: "arbeid" },
    ],
    origin:
      "George kommer av Georgios, den som arbeider jorden – altså bonde. Sankt Georg, dragedreperen, er Englands vernehelgen, og den norske formen er Jørgen.",
    related: ["Jørgen"],
    sources: [NPL, BTN],
  },
  helena: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Helena av Troja er kvinnen hele Iliaden dreier seg om. Navnet knyttes til lys, og har gitt opphav til Elin, Eline, Elena og Ellen.",
    variants: ["Helene", "Elena"],
    related: ["Eline"],
    sources: [NPL, BTN],
  },
  kaja: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Kaja er en nordisk kortform av Katarina. Den hellige Katarina av Alexandria var en av middelalderens mest dyrkede helgener, og navnet spredte seg med henne.",
    variants: ["Kaia"],
    related: ["Kari"],
    sources: [NPL, BTN],
  },
  kari: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Kari er den norske formen av Katarina, slitt ned gjennom uttalen. Det var så vanlig i Norge at det ble stående som bildet på den norske kvinnen, i «Ola og Kari».",
    related: ["Kaja"],
    sources: [NPL, BTN],
  },
  kristian: {
    elements: [{ form: "christos", sense: "den salvede, Kristus" }],
    origin:
      "Kristian betyr rett og slett kristen. Navnet har vært kongenavn i Danmark-Norge gjennom flere hundre år, og byene Kristiansand og Kristiansund er oppkalt etter danske konger med navnet.",
    variants: ["Christian", "Kristian"],
    sources: [NPL, BTN],
  },
  kristoffer: {
    elements: [
      { form: "christos", sense: "den salvede, Kristus" },
      { form: "pherein", sense: "å bære" },
    ],
    origin:
      "Kristoffer betyr Kristus-bærer. Etter legenden bar Sankt Kristoffer et barn over en elv, og barnet viste seg å være Kristus. Han er de reisendes vernehelgen.",
    variants: ["Christopher", "Kristofer"],
    sources: [NPL, BTN],
  },
  leon: {
    elements: [{ form: "leon", sense: "løve" }],
    origin:
      "Leon er det greske ordet for løve. Det er i slekt med latin leo, og med navnet Leonard, som setter løven sammen med et germansk ledd for styrke.",
    related: ["Leo"],
    sources: [NPL, BTN],
  },
  linus: {
    origin:
      "Linus er i gresk mytologi sangeren som lærte Herakles musikk – og som ble drept av eleven sin med en lyre. Betydningen er usikker; navnet knyttes gjerne til linos, en klagesang som bar samme navn. Linus er også en av de tidlige biskopene i Roma, og figuren med kosetteppet i Knøttene.",
    sources: [BTN, SNL],
  },
  maggie: {
    origin:
      "Maggie er en engelsk kortform av Margaret, av gresk margarites – perle. Ordet kom til gresk fra et østlig språk, trolig via persisk. Den norske formen er Margrete, og hele familien omfatter Mette, Marit, Grete og Rita.",
    related: ["Mette", "Marit", "Grete"],
    sources: [BTN, NPL],
  },
  maja: {
    origin:
      "Maja har to linjer som har smeltet sammen i Norden. Den ene går til Maia, en av plejadene i gresk mytologi og mor til Hermes; måneden mai er oppkalt etter henne. Den andre er kortformen av Maria og Marja. I norsk bruk skilles de ikke.",
    variants: ["Maia", "Maya"],
    related: ["Marie", "Mia"],
    sources: [NPL, BTN],
  },
  melissa: {
    elements: [{ form: "melissa", sense: "honningbie" }],
    origin:
      "Melissa er det greske ordet for honningbie, av meli, honning. I mytologien er Melissa nymfen som fôret Zevs med honning da han var barn.",
    sources: [NPL, BTN],
  },
  mette: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Mette er en dansk-norsk kortform av Margrete, som går tilbake på det greske ordet for perle. Kortformen har vært selvstendig navn i Norden i flere hundre år.",
    related: ["Maggie"],
    sources: [NPL, BTN],
  },
  nikolai: {
    elements: [
      { form: "nike", sense: "seier" },
      { form: "laos", sense: "folk" },
    ],
    origin:
      "Nikolai betyr folkets seier. Sankt Nikolas av Myra, opphavet til julenissen, er den mest kjente bæreren, og navnet har vært svært utbredt i Russland.",
    variants: ["Nicolai", "Nikolas"],
    related: ["Nils"],
    sources: [NPL, BTN],
  },
  nils: {
    elements: [
      { form: "nike", sense: "seier" },
      { form: "laos", sense: "folk" },
    ],
    origin:
      "Nils er den nordiske kortformen av Nikolas, og har vært blant de vanligste mannsnavnene i Norge og Sverige. Det deler ledd med Nikolai.",
    variants: ["Niels", "Nils"],
    related: ["Nikolai"],
    sources: [NPL, BTN],
  },
  nyx: {
    origin:
      "Nyx er nattens gudinne i gresk mytologi, født av kaos og mor til både søvnen Hypnos og døden Thanatos. Hos Homer er hun en av de få gudene selv Zevs viker for. Navnet er det greske ordet for natt, i slekt med latin nox og norsk natt.",
    pronunciation: "«nyks»",
    related: ["Nox"],
    sources: [SNL, ETYM],
  },
  onyx: {
    origin:
      "Onyx er en svart eller stripet kvartsart. Det greske ordet betyr egentlig negl eller klo – steinen fikk navn etter fargelikheten med en neglrot. Etter en gresk myte klippet Eros neglene til Afrodite mens hun sov, og de falne bitene ble til stein.",
    sources: [ETYM, SNL],
  },
  per: {
    elements: [{ form: "petros", sense: "stein, klippe" }],
    origin:
      "Per er den norske kortformen av Peter, apostelen Jesus kalte klippen kirken skulle bygges på. Navnet er så innarbeidet i norsk at det brukes i uttrykk som «per se» og «Per og Pål».",
    variants: ["Peder", "Petter", "Peter"],
    sources: [NPL, BTN],
  },
  sander: {
    elements: [
      { form: "alexein", sense: "å verne" },
      { form: "aner", sense: "mann" },
    ],
    origin:
      "Sander er en kortform av Aleksander, som betyr den som verner menn. Aleksander den store gjorde navnet kjent over hele den kjente verden.",
    related: ["Aleksander"],
    sources: [NPL, BTN],
  },
  sebastian: {
    origin:
      "Sebastian kommer av gresk sebastos, ærverdig – som var den greske oversettelsen av den romerske keisertittelen Augustus. Sankt Sebastian var en romersk soldat som etter legenden overlevde å bli skutt med piler og deretter ble drept på nytt. Han er blant de mest avbildede helgenene i renessansekunsten.",
    shortForms: ["Sebbe"],
    sources: [BTN, SNL],
  },
  selina: {
    elements: [{ form: "selene", sense: "måne" }],
    origin:
      "Selina knyttes til Selene, månegudinnen i gresk mytologi. Navnet har samme betydning som latinske Luna.",
    variants: ["Selene", "Celina"],
    related: ["Luna"],
    sources: [BTN, SNL],
  },
  sofia: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sofia er det greske ordet for visdom. Hagia Sofia i Istanbul er viet den hellige visdommen, ikke en person med navnet. Sofia har vært blant de mest brukte jentenavnene i Norge de siste tiårene.",
    variants: ["Sophia", "Sofie"],
    sources: [NPL, BTN],
  },
  sofie: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin: [
      "Sofie er den nordiske formen av Sofia, av gresk sophia – visdom. Ordet er det samme som i filosofi, «kjærlighet til visdom», og i sofist, som opprinnelig betydde en lærd og først senere fikk klangen av ordkløver.",
      "Hagia Sofia i Konstantinopel er viet den hellige visdommen, ikke en helgen med navnet – en misforståelse som er lett å gjøre. Kirken sto ferdig i 537 og var verdens største bygning under kuppel i nesten tusen år.",
      "Navnet kom til Norden gjennom kirken og ble kongelig gjennom flere danske og svenske dronninger. Sofie og Sofia brukes side om side i Norge, og har begge ligget høyt på navnelistene i flere tiår.",
    ],
    variants: ["Sophie", "Sofia", "Sophia"],
    sources: [NPL, BTN, SNL],
  },
  sophia: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sophia er den internasjonale skrivemåten med ph, slik den greske bokstaven fi ble gjengitt på latin. Formen brukes over hele Europa.",
    variants: ["Sofia", "Sofie"],
    sources: [NPL, BTN],
  },
  sophie: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sophie er den franske og engelske formen av Sofia. Den brukes i Norge både som personnavn og, i økende grad, som hundenavn.",
    variants: ["Sofie", "Sofia"],
    sources: [NPL, BTN],
  },
  teodor: {
    elements: [
      { form: "theos", sense: "gud" },
      { form: "doron", sense: "gave" },
    ],
    origin:
      "Teodor betyr Guds gave. Leddet theos går igjen i Thea og Theo, og navnet har samme betydning som hebraiske Mathias og Nathanael.",
    variants: ["Theodor"],
    shortForms: ["Teo"],
    related: ["Thea", "Theo"],
    sources: [NPL, BTN],
  },
  thea: {
    elements: [{ form: "theos", sense: "gud" }],
    origin:
      "Thea brukes både som kortform av Dorothea og Teodora, og som selvstendig navn knyttet til det greske ordet for gudinne. Det har vært svært populært i Norge de siste tiårene.",
    related: ["Teodor", "Theo"],
    sources: [NPL, BTN],
  },
  theo: {
    origin:
      "Theo er en kortform av Teodor og andre navn på Theo-, av gresk theos, gud. Den brukes i dag som selvstendig navn i store deler av Europa, og deler førsteledd med Thea, Teodor og Teofil.",
    related: ["Teodor", "Thea"],
    sources: [BTN, NPL],
  },
  zephyr: {
    origin:
      "Zefyros er vestavinden i gresk mytologi, den mildeste av de fire vindene og den som varsler våren. Hos Homer er han far til Akhillevs' udødelige hester. Ordet lever videre i tekstilet sefyr, et lett bomullsstoff, og i engelsk zephyr om en lett bris.",
    sources: [SNL, ETYM],
  },
  zeus: {
    origin:
      "Zevs er den øverste guden i gresk mytologi, himmelens og tordenens hersker. Navnet går tilbake på den urindoeuropeiske roten dyeu – dagslys, himmel – som også ligger bak latin deus og dies, og bak sanskrit Dyaus. Det er dermed i fjern slekt med både «dag» og «guddom».",
    sources: [SNL, ETYM],
  },
  zoe: {
    elements: [{ form: "zoe", sense: "liv" }],
    origin:
      "Zoe er det greske ordet for liv. Navnet ble brukt av tidlige kristne i Alexandria som en gresk oversettelse av Eva, som betyr det samme på hebraisk.",
    variants: ["Zoey", "Zoë"],
    sources: [NPL, BTN],
  },
  zoey: {
    elements: [{ form: "zoe", sense: "liv" }],
    origin:
      "Zoey er den engelske skrivemåten av Zoe. De to formene uttales likt, og betydningen er den samme: liv.",
    variants: ["Zoe"],
    sources: [NPL, BTN],
  },
};
