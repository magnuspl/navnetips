import type { NameDetail } from "./types";

/**
 * Greske navn.
 *
 * De fleste kom inn i norsk gjennom kirken, som helgennavn. En stor del av dem
 * er sammensatt av gjennomsiktige greske ord – theos for gud, nike for seier,
 * laos for folk – og de leddene binder navnene sammen på tvers.
 */
export const greske: Record<string, NameDetail> = {
  agnes: {
    elements: [{ form: "hagnos", sense: "ren, hellig" }],
    origin:
      "Agnes kommer av gresk hagnos, ren. Den hellige Agnes var en romersk martyr, og fordi navnet ligner latin agnus, lam, ble hun avbildet med et lam – en sammenblanding som har fulgt navnet siden.",
    variants: ["Agnete", "Agnete"],
  },
  anders: {
    elements: [{ form: "aner", sense: "mann" }],
    origin:
      "Anders er den nordiske formen av Andreas, apostelen som var Peters bror. Navnet kommer av det greske ordet for mann, og var lenge blant de aller vanligste mannsnavnene i Norge.",
    variants: ["Andreas", "Andres"],
    related: ["Andrea"],
  },
  andrea: {
    elements: [{ form: "aner", sense: "mann" }],
    origin:
      "Andrea er den kvinnelige formen av Andreas. I Italia er Andrea derimot et mannsnavn – det er den formen som svarer til norske Anders.",
    related: ["Anders"],
  },
  apollo: {
    origin:
      "Apollon er guden for lys, musikk, bueskyting og spådom i gresk mytologi. Navnets egen opprinnelse er usikker, og er kanskje ikke gresk i det hele tatt.",
  },
  atlas: {
    origin:
      "Atlas er titanen som holder himmelen oppe i gresk mytologi. Navnet ble senere brukt om kartverk, fordi tidlige kartsamlinger hadde et bilde av ham på forsiden.",
  },
  chloe: {
    elements: [{ form: "chloe", sense: "grønt skudd, ungt løv" }],
    origin:
      "Chloe var et tilnavn for Demeter, gudinnen for korn og vekst, og viste til de første grønne skuddene om våren. Navnet nevnes også i Paulus' brev.",
    variants: ["Kloe"],
    pronunciation: "«kloe»",
  },
  echo: {
    origin:
      "Ekko er nymfen som mistet evnen til å si annet enn det andre sa sist, og som tæret bort til bare stemmen var igjen. Det er derfra vi har ordet ekko.",
  },
  elida: {
    origin:
      "Elida knyttes gjerne til landskapet Elis på Peloponnes, men opphavet er usikkert. Navnet kan også være dannet som en utvidelse av Eli eller Elin i Norden.",
  },
  eline: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Eline er en nordisk form av Helena. Navnet knyttes til det greske ordet for fakkel eller lys, og kom til Norden gjennom kirken i middelalderen.",
    variants: ["Elin", "Elina"],
    related: ["Helena"],
  },
  ellie: {
    origin:
      "Ellie er en engelsk kortform av navn som Eleanor, Ellen og Elisabet. Den har vært brukt som selvstendig navn siden 1800-tallet.",
    related: ["Helena", "Eline"],
  },
  filip: {
    elements: [
      { form: "philos", sense: "venn, den som elsker" },
      { form: "hippos", sense: "hest" },
    ],
    origin:
      "Filip betyr hestevenn og var navnet på både en apostel og på Aleksander den stores far, Filip II av Makedonia. Førsteleddet philos er det samme som i filosofi.",
    variants: ["Philip", "Fillip"],
  },
  george: {
    elements: [
      { form: "ge", sense: "jord" },
      { form: "ergon", sense: "arbeid" },
    ],
    origin:
      "George kommer av Georgios, den som arbeider jorden – altså bonde. Sankt Georg, dragedreperen, er Englands vernehelgen, og den norske formen er Jørgen.",
    related: ["Jørgen"],
  },
  helena: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Helena av Troja er kvinnen hele Iliaden dreier seg om. Navnet knyttes til lys, og har gitt opphav til Elin, Eline, Elena og Ellen.",
    variants: ["Helene", "Elena"],
    related: ["Eline"],
  },
  kaja: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Kaja er en nordisk kortform av Katarina. Den hellige Katarina av Alexandria var en av middelalderens mest dyrkede helgener, og navnet spredte seg med henne.",
    variants: ["Kaia"],
    related: ["Kari"],
  },
  kari: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Kari er den norske formen av Katarina, slitt ned gjennom uttalen. Det var så vanlig i Norge at det ble stående som bildet på den norske kvinnen, i «Ola og Kari».",
    related: ["Kaja"],
  },
  kristian: {
    elements: [{ form: "christos", sense: "den salvede, Kristus" }],
    origin:
      "Kristian betyr rett og slett kristen. Navnet har vært kongenavn i Danmark-Norge gjennom flere hundre år, og byene Kristiansand og Kristiansund er oppkalt etter danske konger med navnet.",
    variants: ["Christian", "Kristian"],
  },
  kristoffer: {
    elements: [
      { form: "christos", sense: "den salvede, Kristus" },
      { form: "pherein", sense: "å bære" },
    ],
    origin:
      "Kristoffer betyr Kristus-bærer. Etter legenden bar Sankt Kristoffer et barn over en elv, og barnet viste seg å være Kristus. Han er de reisendes vernehelgen.",
    variants: ["Christopher", "Kristofer"],
  },
  leon: {
    elements: [{ form: "leon", sense: "løve" }],
    origin:
      "Leon er det greske ordet for løve. Det er i slekt med latin leo, og med navnet Leonard, som setter løven sammen med et germansk ledd for styrke.",
    related: ["Leo"],
  },
  linus: {
    origin:
      "Linus er en skikkelse i gresk mytologi, sangeren som lærte Herakles musikk. Betydningen er usikker; navnet knyttes gjerne til en klagesang som bar samme navn.",
  },
  maggie: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Maggie er en engelsk kortform av Margaret, som kommer av det greske ordet for perle. Den norske formen er Margrete.",
    related: ["Mette"],
  },
  maja: {
    origin:
      "Maja knyttes til Maia, en av plejadene i gresk mytologi og mor til Hermes. Navnet brukes i Norden også som kortform av Maria og Marja, og de to linjene har smeltet sammen.",
    variants: ["Maia", "Maya"],
  },
  melissa: {
    elements: [{ form: "melissa", sense: "honningbie" }],
    origin:
      "Melissa er det greske ordet for honningbie, av meli, honning. I mytologien er Melissa nymfen som fôret Zevs med honning da han var barn.",
  },
  mette: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Mette er en dansk-norsk kortform av Margrete, som går tilbake på det greske ordet for perle. Kortformen har vært selvstendig navn i Norden i flere hundre år.",
    related: ["Maggie"],
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
  },
  nyx: {
    origin:
      "Nyx er nattens gudinne i gresk mytologi, født av kaos og mor til både søvnen og døden. Navnet er det greske ordet for natt.",
    pronunciation: "«nyks»",
  },
  onyx: {
    origin:
      "Onyx er en svart edelsten. Det greske ordet betyr egentlig negl eller klo – steinen fikk navn etter fargelikheten med en neglrot.",
  },
  per: {
    elements: [{ form: "petros", sense: "stein, klippe" }],
    origin:
      "Per er den norske kortformen av Peter, apostelen Jesus kalte klippen kirken skulle bygges på. Navnet er så innarbeidet i norsk at det brukes i uttrykk som «per se» og «Per og Pål».",
    variants: ["Peder", "Petter", "Peter"],
  },
  sander: {
    elements: [
      { form: "alexein", sense: "å verne" },
      { form: "aner", sense: "mann" },
    ],
    origin:
      "Sander er en kortform av Aleksander, som betyr den som verner menn. Aleksander den store gjorde navnet kjent over hele den kjente verden.",
    related: ["Aleksander"],
  },
  sebastian: {
    origin:
      "Sebastian kommer av gresk sebastos, ærverdig – den greske oversettelsen av den romerske tittelen Augustus. Sankt Sebastian var en romersk soldat og martyr.",
    shortForms: ["Sebbe"],
  },
  selina: {
    elements: [{ form: "selene", sense: "måne" }],
    origin:
      "Selina knyttes til Selene, månegudinnen i gresk mytologi. Navnet har samme betydning som latinske Luna.",
    variants: ["Selene", "Celina"],
    related: ["Luna"],
  },
  sofia: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sofia er det greske ordet for visdom. Hagia Sofia i Istanbul er viet den hellige visdommen, ikke en person med navnet. Sofia har vært blant de mest brukte jentenavnene i Norge de siste tiårene.",
    variants: ["Sophia", "Sofie"],
  },
  sofie: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sofie er den nordiske formen av Sofia. Begge skrivemåtene brukes mye i Norge, og de har ligget tett på hverandre på navnestatistikken i lang tid.",
    variants: ["Sophie", "Sofia"],
  },
  sophia: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sophia er den internasjonale skrivemåten med ph, slik den greske bokstaven fi ble gjengitt på latin. Formen brukes over hele Europa.",
    variants: ["Sofia", "Sofie"],
  },
  sophie: {
    elements: [{ form: "sophia", sense: "visdom" }],
    origin:
      "Sophie er den franske og engelske formen av Sofia. Den brukes i Norge både som personnavn og, i økende grad, som hundenavn.",
    variants: ["Sofie", "Sofia"],
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
  },
  thea: {
    elements: [{ form: "theos", sense: "gud" }],
    origin:
      "Thea brukes både som kortform av Dorothea og Teodora, og som selvstendig navn knyttet til det greske ordet for gudinne. Det har vært svært populært i Norge de siste tiårene.",
    related: ["Teodor", "Theo"],
  },
  theo: {
    elements: [{ form: "theos", sense: "gud" }],
    origin:
      "Theo er en kortform av Teodor og andre navn på Theo-. Den brukes i dag som selvstendig navn i store deler av Europa.",
    related: ["Teodor", "Thea"],
  },
  zephyr: {
    origin:
      "Zefyros er vestavinden i gresk mytologi, den mildeste av vindene og den som bringer våren. Ordet lever videre i tekstilet zefyr.",
  },
  zeus: {
    origin:
      "Zevs er den øverste guden i gresk mytologi, himmelens og tordenens hersker. Navnet går tilbake på en urindoeuropeisk rot for dagslys og himmel, den samme som ligger bak latin deus.",
  },
  zoe: {
    elements: [{ form: "zoe", sense: "liv" }],
    origin:
      "Zoe er det greske ordet for liv. Navnet ble brukt av tidlige kristne i Alexandria som en gresk oversettelse av Eva, som betyr det samme på hebraisk.",
    variants: ["Zoey", "Zoë"],
  },
  zoey: {
    elements: [{ form: "zoe", sense: "liv" }],
    origin:
      "Zoey er den engelske skrivemåten av Zoe. De to formene uttales likt, og betydningen er den samme: liv.",
    variants: ["Zoe"],
  },
};
