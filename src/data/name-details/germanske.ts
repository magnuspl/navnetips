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
    origin: [
      "Ella har flere opphav som har smeltet sammen, og det er ikke mulig å skille dem i moderne bruk. Det eldste er en germansk kortform av navn på Ali- og Adal-, som Adelheid – leddet adal betyr edel. Normannerne tok formen med til England på 1000-tallet.",
      "I dag fungerer navnet like mye som kortform av Eleonora, Gabriella og Isabella, der -ella er endelsen snarere enn stammen. Begge veier er like gyldige.",
      "Ella Fitzgerald gjorde navnet kjent langt utenfor navnelistene. Hun ble oppdaget i en amatørkonkurranse på Apollo Theater i 1934, der hun egentlig hadde meldt seg på som danser og byttet til sang i siste liten.",
      "Navnet har vært blant de mest brukte jentenavnene i Norge de siste tiårene.",
    ],
    related: ["Ellie", "Ellinor", "Isabella"],
    sources: [BTN, NPL],
  },
  emma: {
    elements: [{ form: "ermin", sense: "hel, altomfattende" }],
    origin: [
      "Emma begynte som en kortform av germanske navn på Ermin- og Irmin-, som Ermintrude og Irmgard. Leddet ermin knyttes til noe helt eller altomfattende, og var også navnet på en guddom hos de kontinentale germanerne – Irminsul var en hellig søyle sakserne dyrket, som Karl den store lot hogge ned i 772.",
      "Navnet kom til England med Emma av Normandie, som ble dronning to ganger på 1000-tallet: først gift med Ethelred den rådville, deretter med Knut den mektige. Hun er en av få kvinner fra perioden med sin egen samtidige biografi.",
      "I nyere tid er navnet uløselig knyttet til Jane Austens roman «Emma» fra 1815, der hovedpersonen er en velmenende, men litt for selvsikker ekteskapsmekler. Austen skal selv ha sagt at hun skrev en heltinne «ingen andre enn jeg selv kommer til å like særlig godt».",
      "Emma har ligget helt i toppen av norsk navnestatistikk gjennom hele 2000-tallet, og har vært det mest brukte jentenavnet flere år på rad.",
    ],
    variants: ["Emmy", "Ema"],
    sources: [NPL, BTN, SNL],
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
    origin: [
      "Ludvig kommer av frankisk Hludwig, «den berømte krigeren». Det er samme navn som Louis, Lewis, Luigi og Clovis – Clovis er bare en latinisert form av det samme, og han var den frankiske kongen som først bar det, på 400-tallet.",
      "Atten franske konger hette Louis, flere enn noe annet kongenavn i Europa. Ludvig XIV satt på tronen i 72 år, lengre enn noen annen europeisk monark.",
      "Beethoven er den mest kjente bæreren av den tyske formen. I Norge er navnet også kjent fra Kardemomme by, der Ludvig er den ene av de tre røverne.",
      "Ludvig har steget markert i Norge de siste tiårene og ligger nå blant de mest brukte guttenavnene.",
    ],
    variants: ["Ludwig", "Louis"],
    related: ["Louie"],
    sources: [NPL, BTN, SNL],
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
    origin: [
      "William er germansk og satt sammen av vilje og hjelm – altså den som verner med vilje og besluttsomhet. Andreleddet helm er det samme ordet som norsk hjelm, og finnes også i Anselm og Vilhelm.",
      "Vilhelm Erobreren tok navnet med til England i 1066, og det ble raskt så vanlig at rundt en femtedel av alle engelske menn skal ha hett William på 1200-tallet. Derfra kommer også mengden kortformer: Will, Bill, Billy, Liam og walisiske Gwilym.",
      "Shakespeare er den mest kjente bæreren, og fire engelske konger har hett William – den siste tronarvingen inkludert.",
      "I Norge kom navnet for alvor på 1990-tallet og har siden ligget stabilt blant de mest brukte guttenavnene.",
    ],
    variants: ["Vilhelm", "Wilhelm"],
    shortForms: ["Will", "Liam"],
    related: ["Liam"],
    sources: [BTN, NPL, SNL],
  },
  zelda: {
    origin:
      "Zelda har to forklaringer som begge er i bruk. Den ene er kortform av Griselda, av germansk gris, grå, og hild, kamp. Den andre er en jiddisk form av Selde, den velsignede. Navnet er i dag mest kjent fra spillserien, der prinsessen ble oppkalt etter Zelda Fitzgerald.",
    related: ["Hedvig"],
    sources: [BTN, ETYM],
  },
};
