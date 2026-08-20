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

const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

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
      "Baron er en adelstittel som kom inn i engelsk med normannerne, av et frankisk ord for fri mann eller kriger. I det norske adelssystemet var friherre den tilsvarende tittelen. Som hundenavn hører det til gruppen titteldyrenavn sammen med Duke, King og Prince.",
    related: ["Duke", "King", "Prince"],
    sources: [ETYM, BTN],
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
      "Ella har flere opphav som er smeltet sammen. Det eldste er en kortform av germanske navn på Ali- og Adal-, som Alberta og Adelheid. I moderne bruk fungerer det like mye som kortform av Eleonora, Gabriella og Isabella. Ella Fitzgerald er blant de mest kjente bærerne.",
    related: ["Ellie", "Ellinor"],
    sources: [BTN, NPL],
  },
  emma: {
    elements: [{ form: "ermin", sense: "hel, altomfattende" }],
    origin:
      "Emma er en kortform av germanske navn på Ermin-, som Ermintrude. Leddet knyttes til noe helt eller altomfattende, og navnet har ligget på toppen av norske navnelister i flere tiår.",
    sources: [NPL, BTN],
  },
  frankie: {
    origin:
      "Frankie er en engelsk kjæleform av Frank eller Francis, og brukes om både menn og kvinner. Frank viser til frankerne, det germanske folket som ga Frankrike navn. Fordi frankerne var de frie i det erobrede Gallia, kom ordet til å bety fri – som i «frankly» og i norsk «franko».",
    related: ["Karl", "Charlie"],
    sources: [ETYM, BTN],
  },
  gus: {
    origin:
      "Gus er en engelsk kortform av August eller Gustav. August kommer av latin augustus, opphøyd eller ærverdig – tittelen den første romerske keiseren tok i stedet for et navn, og som ga oss måneden august.",
    related: ["Gustav"],
    sources: [BTN, ETYM],
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
      "Louie er en engelsk skrivemåte av Louis, den franske formen av Ludvig. Atten franske konger bar navnet, fra Ludvig I til Ludvig XVIII, og det er trolig det mest brukte kongenavnet i europeisk historie.",
    related: ["Ludvig"],
    sources: [BTN, NPL],
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
    origin:
      "Otto er en kortform av germanske navn på Od-, som Ottokar, av et ledd som betyr rikdom og arvegods. Fire tysk-romerske keisere bar navnet, og Otto I la grunnlaget for riket i 962. Leddet svarer til norrønt auðr, som står i Aud og Audun.",
    related: ["Oda", "Aud"],
    sources: [BTN, NPL],
  },
  rocco: {
    origin:
      "Rocco er den italienske formen av Rochus, trolig av et germansk ledd som betyr ro eller hvile. San Rocco er pestens vernehelgen i Italia, og framstilles nesten alltid med en hund – etter legenden brakte hunden ham brød mens han lå syk i skogen.",
    variants: ["Rocko", "Rocky"],
    sources: [BTN, SNL],
  },
  rocky: {
    origin:
      "Rocky kommer av det engelske ordet rock, stein, og brukes om noe hardført. Navnet er uløselig knyttet til bokseren Rocky Balboa fra 1976, som igjen var inspirert av Rocky Marciano – den eneste tungvektsmesteren som la opp uten et eneste tap.",
    related: ["Rocco"],
    sources: [ETYM, BTN],
  },
  rudy: {
    elements: [
      { form: "hrod", sense: "ry, berømmelse" },
      { form: "wulf", sense: "ulv" },
    ],
    origin:
      "Rudy er en kortform av Rudolf, «den berømte ulven». Førsteleddet hrod svarer til norrønt hróðr, som står i Roar og Roald, og andreleddet er ulven – samme dyr som i Ulf og Ylva. Rudolf med den røde nesen er fra en amerikansk reklamefortelling fra 1939.",
    related: ["Roar", "Roald", "Ulf"],
    sources: [BTN, NPL],
  },
  teddy: {
    origin:
      "Teddy er en engelsk kjæleform av Theodore og Edward. Teddybjørnen har navn etter president Theodore Roosevelt, som i 1902 nektet å skyte en bundet bjørn på jakt – episoden ble en avistegning, og en leketøysprodusent spurte presidenten om lov til å bruke navnet.",
    related: ["Teodor", "Edvard"],
    sources: [ETYM, SNL],
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
      "Zelda har to forklaringer som begge er i bruk. Den ene er kortform av Griselda, av germansk gris, grå, og hild, kamp. Den andre er en jiddisk form av Selde, den velsignede. Navnet er i dag mest kjent fra spillserien, der prinsessen ble oppkalt etter Zelda Fitzgerald.",
    related: ["Hedvig"],
    sources: [BTN, ETYM],
  },
};
