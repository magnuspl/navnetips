import type { NameDetail } from "./types";

/**
 * Hebraiske, greske, latinske og germanske navn lagt til etter at kildekravet
 * ble innført. Alle oppføringene her har kilde.
 */
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

export const internasjonaleNye: Record<string, NameDetail> = {
  /* ---------------------------------------------------------- hebraiske -- */

  adam: {
    elements: [{ form: "adamah", sense: "jord, jordbunn" }],
    origin:
      "Adam er det første mennesket i Første Mosebok. Navnet henger sammen med det hebraiske ordet for jord, adamah, og teksten spiller selv på sammenhengen: mennesket er formet av jorden.",
    sources: [BTN, SNL],
  },
  benjamin: {
    elements: [
      { form: "ben", sense: "sønn" },
      { form: "jamin", sense: "høyre hånd, sør" },
    ],
    origin:
      "Benjamin er Jakobs yngste sønn i Første Mosebok, og stamfar til en av Israels tolv stammer. Å sitte ved noens høyre hånd betydde å være den foretrukne.",
    shortForms: ["Ben", "Benji"],
    sources: [BTN, SNL],
  },
  daniel: {
    elements: [
      { form: "din", sense: "å dømme" },
      { form: "el", sense: "Gud" },
    ],
    origin:
      "Daniel har sin egen bok i Det gamle testamentet, og er kjent for natten i løvehulen. Navnet betyr «Gud er min dommer», og el-leddet er det samme som i Gabriel og Mikael.",
    shortForms: ["Dan"],
    sources: [BTN, SNL],
  },
  hanna: {
    elements: [{ form: "channah", sense: "nåde, velvilje" }],
    origin:
      "Hanna er grunnformen bak Anna, og er i Samuelsboken mor til profeten Samuel. De to formene brukes side om side i Norge i dag.",
    variants: ["Hannah", "Anna"],
    sources: [BTN, NPL],
  },
  johannes: {
    elements: [
      { form: "jah", sense: "Jahve, Herren" },
      { form: "chanan", sense: "å være nådig" },
    ],
    origin: [
      "Johannes er grunnformen bak en av Europas største navnefamilier. Jon, Jan, Hans, Jens, John, Jack, Juan, Giovanni, Ivan og Sean går alle tilbake på det samme hebraiske Jochanan – «Herren er nådig».",
      "To sentrale skikkelser i Det nye testamentet bærer navnet: døperen Johannes, som døper Jesus i Jordan, og evangelisten. Sankthans 24. juni er døperens fødselsdag, og selve ordet sankthans er en sammentrekning av «sankt Hans».",
      "I Norge har Johannes vært i bruk sammenhengende siden middelalderen. Etter en periode med lavere bruk på 1900-tallet har navnet steget markert igjen og ligger nå blant de mest brukte guttenavnene.",
    ],
    shortForms: ["Jon", "Hans", "Jens", "Jo"],
    sources: [BTN, SNL, NPL],
  },
  jonas: {
    elements: [{ form: "jonah", sense: "due" }],
    origin:
      "Jonas er profeten som blir slukt av en stor fisk i Jonas' bok. Navnet er det hebraiske ordet for due, og har vært blant de mest brukte guttenavnene i Norge de siste tiårene.",
    sources: [BTN, SNL],
  },
  mari: {
    origin:
      "Mari er den norske formen av Maria, i bruk her siden middelalderen. Mariakulten sto sterkt i norsk middelalder, og en rekke stedsnavn og merkedager bærer navnet – Marimesse, Marisokk og Marihøne, som egentlig er «Marias høne».",
    variants: ["Marie", "Maria"],
    sources: [NPL, SNL],
  },
  mikael: {
    elements: [{ form: "mi ka el", sense: "hvem er som Gud" }],
    origin:
      "Mikael er erkeengelen som fører gudshæren mot dragen i Johannes' åpenbaring. Navnet er egentlig et retorisk spørsmål, og den norske folkeformen er Mikkel.",
    variants: ["Michael", "Mikkel"],
    sources: [BTN, SNL],
  },
  simen: {
    elements: [{ form: "shama", sense: "å høre" }],
    origin:
      "Simen er en norsk form av Simon, som betyr «han hørte» – i Første Mosebok om at Gud hørte Leas bønn. Formen med -en er særlig norsk.",
    variants: ["Simon", "Simon"],
    sources: [NPL, BTN],
  },

  /* -------------------------------------------------------------- greske -- */

  aleksander: {
    elements: [
      { form: "alexein", sense: "å verne" },
      { form: "aner", sense: "mann" },
    ],
    origin:
      "Aleksander betyr den som verner menn. Aleksander den store spredte navnet fra Hellas til India, og det finnes i dag i tilnærmet alle europeiske språk.",
    shortForms: ["Sander", "Aleks"],
    sources: [BTN, SNL],
  },
  andreas: {
    elements: [{ form: "aner", sense: "mann" }],
    origin:
      "Andreas er apostelen som var Peters bror, og Skottlands og Russlands vernehelgen. Den norske kortformen er Anders.",
    variants: ["Anders", "Andres"],
    sources: [BTN, SNL],
  },
  ellinor: {
    origin:
      "Ellinor er en nordisk form av Eleonora. Opphavet er omdiskutert – navnet knyttes både til gresk og til oksitansk, og en gammel forklaring om «den andre Aenor» regnes i dag som folkeetymologi. Eleonora av Aquitaine, dronning i både Frankrike og England på 1100-tallet, brakte navnet til Nord-Europa.",
    variants: ["Eleonora", "Elinor"],
    related: ["Nora", "Ellie"],
    sources: [BTN, SNL],
  },
  helene: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Helene er den norske formen av Helena. Navnet knyttes til det greske ordet for fakkel, og har gitt oss Elin, Eline og Ellen.",
    variants: ["Helena", "Elena"],
    sources: [BTN, NPL],
  },
  jorgen: {
    elements: [
      { form: "ge", sense: "jord" },
      { form: "ergon", sense: "arbeid" },
    ],
    origin:
      "Jørgen er den nordiske formen av Georgios, den som arbeider jorden. Navnet kom inn via lavtysk Jürgen i hansatiden.",
    variants: ["Georg", "Jørn"],
    sources: [NPL, BTN],
  },
  kristine: {
    elements: [{ form: "christos", sense: "den salvede, Kristus" }],
    origin:
      "Kristine er den kvinnelige formen av Kristian, og betyr kristen. Kristin Lavransdatter i Sigrid Undsets romantrilogi har gjort formen Kristin kjent langt utenfor Norge.",
    variants: ["Kristin", "Christine"],
    sources: [NPL, SNL],
  },
  marit: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Marit er den norske formen av Margareta, som går tilbake på det greske ordet for perle. Formen har vært svært vanlig i Norge, særlig i innlandsbygdene.",
    variants: ["Margrete", "Mareta"],
    sources: [NPL, BTN],
  },
  nikolas: {
    elements: [
      { form: "nike", sense: "seier" },
      { form: "laos", sense: "folk" },
    ],
    origin:
      "Nikolas betyr folkets seier. Sankt Nikolas av Myra, som ga gaver i hemmelighet, er opphavet til julenissen. Den nordiske kortformen er Nils.",
    variants: ["Nikolai", "Niklas"],
    shortForms: ["Nils"],
    sources: [BTN, SNL],
  },
  theodor: {
    elements: [
      { form: "theos", sense: "gud" },
      { form: "doron", sense: "gave" },
    ],
    origin: [
      "Theodor betyr Guds gave. Skrivemåten med th gjengir den greske bokstaven theta, som latin ikke hadde noe eget tegn for. Førsteleddet theos går igjen i Thea, Theo, Teofil og Dorothea – det siste er de samme to leddene i omvendt rekkefølge.",
      "Navnet har samme betydning som hebraiske Mattias og Natanael, og som Bogdan i slaviske språk. At tre ubeslektede språkfamilier har laget det samme navnet sier noe om hvor nærliggende tanken var.",
      "Teddybjørnen har navn etter president Theodore Roosevelt, som i 1902 nektet å skyte en bundet bjørn på jakt.",
      "Theodor og Teodor har til sammen steget kraftig i Norge de siste tiårene og ligger nå blant de mest brukte guttenavnene.",
    ],
    variants: ["Teodor"],
    shortForms: ["Theo", "Teo"],
    related: ["Thea", "Theo"],
    sources: [BTN, NPL, SNL],
  },
  julie: {
    origin:
      "Julie kommer av det romerske slektsnavnet Julius, som Julius Cæsar tilhørte. Slekten regnet seg som etterkommere av Aeneas' sønn Ascanius, også kalt Iulus, og dermed av gudinnen Venus. Måneden juli er oppkalt etter Cæsar. Shakespeares Julie gjorde navnet kjent i hele Europa.",
    variants: ["Julia", "Juliane"],
    sources: [BTN, SNL],
  },
  maren: {
    origin:
      "Maren er en nordisk form av Marina, av latin marinus – som hører havet til. Navnet blandes ofte sammen med Maria, og de to linjene har delvis smeltet sammen i Norden. Maren har vært i bruk i Norge siden middelalderen.",
    variants: ["Marin", "Marina"],
    related: ["Marie"],
    sources: [NPL, BTN],
  },
  morten: {
    origin:
      "Morten er den nordiske formen av Martin, avledet av krigsguden Mars. Mortensdagen 11. november er oppkalt etter Sankt Martin av Tours, og markeres med gås i Danmark – etter legenden gjemte Martin seg i en gåsefjøs for å slippe å bli biskop, men gjessene røpet ham.",
    variants: ["Martin"],
    sources: [NPL, SNL],
  },
  amalie: {
    elements: [{ form: "amal", sense: "arbeid, virke" }],
    origin:
      "Amalie bygger på det germanske leddet amal, som betyr arbeid eller strev. Amalerne var den østgotiske kongeslekten, og navnet deres kommer av samme rot.",
    variants: ["Amalia", "Amelie"],
    sources: [BTN, NPL],
  },
  mathilde: {
    elements: [
      { form: "maht", sense: "makt, styrke" },
      { form: "hild", sense: "kamp, strid" },
    ],
    origin:
      "Mathilde er satt sammen av makt og kamp. Andreleddet hild er det germanske motstykket til norrønt hildr, som avslutter Gunnhild og Ragnhild.",
    variants: ["Matilda", "Mathilda"],
    shortForms: ["Tilde"],
    sources: [BTN, NPL],
  },
  oskar: {
    elements: [
      { form: "os", sense: "gud" },
      { form: "gar", sense: "spyd" },
    ],
    origin: [
      "Oskar tolkes vanligvis som gudespyd, av de samme leddene som norrønt Ásgeirr. En annen forklaring knytter navnet til irsk os-cara, hjortevenn.",
      "Den irske linjen er grunnen til at navnet ble mote i Norden: i Macphersons Ossian-dikt er Oscar sønnesønn av Fingal, og Napoleon – som var glad i diktene – ga navnet til sin gudsønn, som senere ble Oscar I av Sverige og Norge. Derfra kom det inn i det svenske og norske kongehuset.",
      "Oscar Wilde er den mest kjente internasjonale bæreren, og Oscar-statuetten fikk etter tradisjonen navnet fordi en bibliotekar ved akademiet syntes den lignet onkelen hennes.",
      "Oskar og Oscar har til sammen ligget stabilt blant de mest brukte guttenavnene i Norge.",
    ],
    variants: ["Oscar"],
    sources: [NPL, BTN, SNL],
  },
  kasper: {
    origin:
      "Kasper går tilbake på persisk gizbar, skattmester. Etter tradisjonen er Kaspar en av de tre vise menn, men Matteusevangeliet verken navngir dem eller sier at de var tre – tallet kommer av at det var tre gaver. Navnene dukker først opp i en tekst fra 500-tallet.",
    variants: ["Casper", "Jesper"],
    related: ["Jasper", "Jesper"],
    sources: [BTN, SNL],
  },
  marte: {
    elements: [{ form: "marta", sense: "frue, herskerinne" }],
    origin:
      "Marte er en norsk form av Marta, søsteren til Maria og Lasarus i evangeliene. Navnet er arameisk og betyr frue eller husets herskerinne.",
    variants: ["Marta", "Martha"],
    sources: [NPL, SNL],
  },
};
