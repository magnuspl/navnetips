import type { NameDetail } from "./types";

/**
 * Germanske navn.
 *
 * Bygget som de norrøne: to ledd satt sammen, med betydninger hentet fra vern,
 * kamp, ære og makt. De fleste kom inn i norsk gjennom lavtysk i hansatiden
 * eller senere gjennom europeisk navnemote.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

export const germanske: Record<string, NameDetail> = {
  ada: {
    elements: [{ form: "adal", sense: "edel, av god ætt" }],
    origin:
      "Ada er en kortform av germanske navn på Adal-, som Adelheid. Leddet adal betyr edel, og er det samme som i Albert og Adolf.",
    related: ["Albert"],
    sources: [NPL, BTN],
  },
  albert: {
    elements: [
      { form: "adal", sense: "edel, av god ætt" },
      { form: "beraht", sense: "lysende, strålende" },
    ],
    origin:
      "Albert betyr edel og strålende. Andreleddet beraht er det samme som i Robert og Herbert, og i det engelske ordet bright.",
    variants: ["Albrecht"],
    related: ["Ada"],
    sources: [NPL, BTN],
  },
  arnold: {
    elements: [
      { form: "arn", sense: "ørn" },
      { form: "wald", sense: "hersker, den som rår" },
    ],
    origin:
      "Arnold betyr ørnehersker. Førsteleddet arn er det germanske motstykket til norrønt ǫrn, og andreleddet wald svarer til norrønt valdr i Harald og Ragnvald.",
    sources: [NPL, BTN],
  },
  baron: {
    origin:
      "Baron er en adelstittel som kom inn i engelsk med normannerne, av et germansk ord for kriger eller fri mann. Som hundenavn hører det til gruppen med Duke, King og Prince.",
    related: ["Duke", "King"],
    sources: [BTN, ETYM],
  },
  bruno: {
    elements: [{ form: "brun", sense: "brun" }],
    origin:
      "Bruno kommer av det germanske ordet for brun, og ble brukt som tilnavn på folk med brunt hår. I middelalderens dyrefabler het bjørnen Bruno.",
    sources: [NPL, BTN],
  },
  carl: {
    elements: [{ form: "karl", sense: "fri mann, bonde" }],
    origin:
      "Carl er skrivemåten med C av Karl. Ordet betydde opprinnelig en fri mann av bondestand, i motsetning til trellen – i norrønt sto karl mellom jarl og træl.",
    variants: ["Karl", "Carl"],
    related: ["Karl", "Charlie"],
    sources: [NPL, BTN],
  },
  charlie: {
    elements: [{ form: "karl", sense: "fri mann, bonde" }],
    origin:
      "Charlie er en engelsk kjæleform av Charles, som er den franske formen av Karl. Det er blant de aller vanligste hundenavnene i engelsktalende land.",
    related: ["Carl", "Karl"],
    sources: [NPL, BTN],
  },
  conrad: {
    elements: [
      { form: "kuoni", sense: "djerv, modig" },
      { form: "rat", sense: "råd" },
    ],
    origin:
      "Conrad betyr den modige rådgiveren. Andreleddet rat er det samme som i Alfred og i norsk råd.",
    variants: ["Konrad"],
    sources: [NPL, BTN],
  },
  ella: {
    origin:
      "Ella er opprinnelig en kortform av germanske navn på Al-, som Alberta og Alfhild, men brukes i dag også som kortform av Eleonora og Elisabet. Det har vært blant de mest brukte jentenavnene i Norge.",
    related: ["Ellie"],
    sources: [NPL, BTN],
  },
  emma: {
    elements: [{ form: "ermin", sense: "hel, altomfattende" }],
    origin:
      "Emma er en kortform av germanske navn på Ermin-, som Ermintrude. Leddet knyttes til noe helt eller altomfattende, og navnet har ligget på toppen av norske navnelister i flere tiår.",
    sources: [NPL, BTN],
  },
  frankie: {
    origin:
      "Frankie er en engelsk kjæleform av Frank eller Francis. Frank viser til frankerne, folket som ga Frankrike navn, og ordet kom til å bety fri.",
    related: ["Carl"],
    sources: [BTN, ETYM],
  },
  gus: {
    origin:
      "Gus er en engelsk kortform av August eller Gustav. August kommer av latin augustus, opphøyd – tittelen den første romerske keiseren tok.",
    related: ["Gustav"],
    sources: [NPL, BTN],
  },
  hedvig: {
    elements: [
      { form: "hadu", sense: "strid" },
      { form: "wig", sense: "kamp" },
    ],
    origin:
      "Hedvig er satt sammen av to ledd som begge betyr kamp – samme mønster som i norrøne Gunnhild. Den hellige Hedvig av Schlesien gjorde navnet utbredt i Nord-Europa.",
    shortForms: ["Hedda"],
    related: ["Hedda"],
    sources: [NPL, BTN],
  },
  henry: {
    elements: [
      { form: "haim", sense: "hjem" },
      { form: "rik", sense: "hersker, mektig" },
    ],
    origin:
      "Henry er den engelske formen av Heinrich, hjemmets hersker. Den norske formen er Henrik, og navnet har vært båret av åtte engelske konger.",
    variants: ["Henrik", "Heinrich"],
    sources: [NPL, BTN],
  },
  herman: {
    elements: [
      { form: "heri", sense: "hær" },
      { form: "man", sense: "mann" },
    ],
    origin:
      "Herman betyr hærmann, altså kriger. Førsteleddet heri svarer til norrønt herr, som står i Einar, Gunnar og Ragnar.",
    variants: ["Hermann"],
    sources: [NPL, BTN],
  },
  ida: {
    elements: [{ form: "id", sense: "arbeid, virke" }],
    origin:
      "Ida er en kortform av germanske navn på Id-, knyttet til et ledd som betyr arbeid eller virke. Navnet er også kjent fra fjellet Ida på Kreta i gresk mytologi.",
    sources: [NPL, BTN],
  },
  karl: {
    elements: [{ form: "karl", sense: "fri mann, bonde" }],
    origin:
      "Karl betydde opprinnelig en fri mann av bondestand. Karl den store gjorde navnet til en tittel: ordene konge på slavisk og kral på sørslavisk kommer begge av navnet hans.",
    variants: ["Carl"],
    related: ["Carl", "Charlie"],
    sources: [NPL, BTN],
  },
  leonard: {
    elements: [
      { form: "leo", sense: "løve" },
      { form: "hard", sense: "hard, sterk" },
    ],
    origin:
      "Leonard setter det latinske ordet for løve sammen med et germansk ledd for styrke – en blanding som ble vanlig i middelalderen.",
    related: ["Leo", "Leon"],
    sources: [NPL, BTN],
  },
  louie: {
    elements: [
      { form: "hlod", sense: "berømt, navngjeten" },
      { form: "wig", sense: "kamp" },
    ],
    origin:
      "Louie er en engelsk skrivemåte av Louis, den franske formen av Ludvig. Atten franske konger bar navnet.",
    related: ["Ludvig"],
    sources: [NPL, BTN],
  },
  ludvig: {
    elements: [
      { form: "hlod", sense: "berømt, navngjeten" },
      { form: "wig", sense: "kamp" },
    ],
    origin:
      "Ludvig kommer av Hludwig, den berømte krigeren. Det er samme navn som Louis, Lewis og Clovis – Clovis var den frankiske kongen som først bar det.",
    variants: ["Ludwig", "Louis"],
    related: ["Louie"],
    sources: [NPL, BTN],
  },
  oda: {
    elements: [{ form: "aud", sense: "rikdom, eiendom" }],
    origin:
      "Oda er den kvinnelige formen av Odo, av et germansk ledd som betyr rikdom. Det svarer til norrønt auðr, som står i Aud og Audun.",
    related: ["Otto", "Aud"],
    sources: [NPL, BTN],
  },
  oscar: {
    elements: [
      { form: "os", sense: "gud" },
      { form: "gar", sense: "spyd" },
    ],
    origin:
      "Oscar tolkes vanligvis som gudespyd, av samme ledd som norrønt Ásgeirr. En annen forklaring knytter navnet til irsk os-cara, hjortevenn – Ossian-diktningen gjorde det populært i Norden på 1800-tallet.",
    variants: ["Oskar"],
    sources: [NPL, BTN],
  },
  otto: {
    elements: [{ form: "aud", sense: "rikdom, eiendom" }],
    origin:
      "Otto er en kortform av germanske navn på Od-, som Ottokar. Fire tysk-romerske keisere bar navnet.",
    related: ["Oda"],
    sources: [NPL, BTN],
  },
  rocco: {
    origin:
      "Rocco er den italienske formen av Rochus, trolig av et germansk ledd som betyr hvile eller ro. San Rocco er pestens vernehelgen i Italia.",
    variants: ["Rocko", "Rocky"],
    sources: [NPL, BTN],
  },
  rocky: {
    origin:
      "Rocky kommer av det engelske ordet rock, stein, og brukes om noe hardført. Navnet er uløselig knyttet til bokseren Rocky Balboa.",
    related: ["Rocco"],
    sources: [BTN, ETYM],
  },
  rudy: {
    elements: [
      { form: "hrod", sense: "ry, berømmelse" },
      { form: "wulf", sense: "ulv" },
    ],
    origin:
      "Rudy er en kortform av Rudolf, den berømte ulven. Førsteleddet hrod svarer til norrønt hróðr, som står i Roar og Roald.",
    related: ["Rudolf"],
    sources: [NPL, BTN],
  },
  teddy: {
    origin:
      "Teddy er en engelsk kjæleform av Theodore og Edward. Teddybjørnen har navn etter president Theodore Roosevelt, som nektet å skyte en bundet bjørn på jakt i 1902.",
    related: ["Teodor"],
    sources: [NPL, BTN],
  },
  ulrik: {
    elements: [
      { form: "uodal", sense: "arvegods, odel" },
      { form: "rik", sense: "hersker, mektig" },
    ],
    origin:
      "Ulrik betyr den som rår over arvegodset. Førsteleddet er det samme som i norsk odel – jorden som går i arv i slekten.",
    variants: ["Ulrich"],
    sources: [NPL, BTN],
  },
  william: {
    elements: [
      { form: "wil", sense: "vilje" },
      { form: "helm", sense: "hjelm, vern" },
    ],
    origin:
      "William betyr den som verner med vilje. Vilhelm Erobreren tok navnet med til England i 1066, og det ble raskt et av de vanligste navnene i landet.",
    variants: ["Vilhelm", "Wilhelm"],
    related: ["Liam"],
    sources: [NPL, BTN],
  },
  zelda: {
    origin:
      "Zelda forklares på to måter: som kortform av Griselda, av germansk gris og hild – grå kamp – eller som en jiddisk form av Selde, den velsignede. Navnet er i dag mest kjent fra spillserien.",
    related: ["Hedvig"],
    sources: [NPL, BTN],
  },
};
