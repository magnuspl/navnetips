import type { NameDetail } from "./types";

/** Vanlige norske fornavn lagt til i andre runde. Alle har kilde. */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };

export const nyeRunde2: Record<string, NameDetail> = {
  anita: {
    origin:
      "Anita er en spansk kjæleform av Ana, altså Anna, dannet med diminutivendelsen -ita. Formen kom til Norden på 1900-tallet gjennom film og musikk, og var særlig populær i Norge på 1960- og 70-tallet.",
    related: ["Anna", "Anne"],
    sources: [NPL, BTN],
  },
  aron: {
    origin:
      "Aron er Moses' bror og den første ypperstepresten i Andre Mosebok – den som taler for Moses fordi Moses selv er tungebundet. Opphavet er usikkert og kanskje egyptisk, som Moses' eget navn. Den vanligste tolkningen knytter det til et ord for fjell.",
    variants: ["Aaron"],
    sources: [BTN, SNL],
  },
  bendik: {
    origin:
      "Bendik er en norsk form av Benedikt, av latin benedictus – den velsignede. Navnet er kjent fra folkevisen om Bendik og Årolilja, en av de mest sungne norske middelalderballadene, der de to elskende dør og det vokser en lilje opp av gravene deres.",
    variants: ["Benedikt", "Bent"],
    related: ["Bente"],
    sources: [NPL, SNL],
  },
  bjarte: {
    elements: [{ form: "bjartr", sense: "lys, skinnende" }],
    origin:
      "Bjarte kommer av norrønt bjartr, som betyr lys eller skinnende. Ordet er i slekt med engelsk bright og med andreleddet i Albert.",
    sources: [NPL, NORDIC],
  },
  edvard: {
    elements: [
      { form: "ead", sense: "rikdom, lykke" },
      { form: "weard", sense: "vokter" },
    ],
    origin:
      "Edvard er angelsaksisk og betyr den som vokter rikdommen. Edvard Bekjenneren var engelsk konge før normannerinvasjonen, og navnet er båret av åtte engelske konger etter ham.",
    variants: ["Edward"],
    sources: [NPL, BTN],
  },
  fredrik: {
    elements: [
      { form: "fridu", sense: "fred" },
      { form: "rik", sense: "hersker, mektig" },
    ],
    origin:
      "Fredrik betyr fredelig hersker. Navnet har vært kongenavn i Danmark-Norge gjennom flere hundre år, og Fredrikstad er oppkalt etter Fredrik II.",
    variants: ["Frederik", "Fredrick"],
    shortForms: ["Fredde"],
    sources: [NPL, SNL],
  },
  gaute: {
    elements: [{ form: "gautr", sense: "gaut, mann fra Gautland" }],
    origin:
      "Gaute viser til gautene, folket i Götaland i dagens Sverige. Gautr er også et av Odins mange tilnavn i norrøn diktning.",
    sources: [NPL, NORDIC],
  },
  henrik: {
    elements: [
      { form: "haim", sense: "hjem" },
      { form: "rik", sense: "hersker, mektig" },
    ],
    origin: [
      "Henrik er den nordiske formen av germansk Haimirich – den som rår over hjemmet eller arvegodset. Andreleddet rik er det samme som i Erik, Ulrik og Fredrik, og er i slekt med latin rex.",
      "Navnet ble kongelig over hele Europa: åtte engelske konger, sju tyske keisere og fire franske konger. Den engelske formen Henry ga også kortformene Harry og Hank.",
      "I Norge er navnet uløselig knyttet til to av 1800-tallets største forfattere, Henrik Ibsen og Henrik Wergeland – begge med samme fornavn, og begge blant landets mest siterte.",
      "Henrik har holdt seg jevnt blant de mest brukte guttenavnene i Norge gjennom hele nyere tid.",
    ],
    variants: ["Henry", "Heinrich"],
    shortForms: ["Henke"],
    related: ["Henry", "Hank"],
    sources: [NPL, BTN, SNL],
  },
  ingar: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Ingar er en norsk form i samme gruppe som Ingvar, dannet av gudenavnet Ing og hærleddet. Det hører til den store Ing-familien sammen med Ingrid og Ingeborg.",
    variants: ["Ingvar"],
    sources: [NPL, NORDIC],
  },
  jarle: {
    elements: [{ form: "jarl", sense: "jarl, høvding" }],
    origin:
      "Jarle bygger på tittelen jarl, som var rangen rett under kongen i norrøn samfunnsordning. Ordet er det samme som engelsk earl.",
    related: ["Erling"],
    sources: [NPL, NORDIC],
  },
  jo: {
    origin:
      "Jo er en norsk kortform av Johannes, i samme gruppe som Jon og John. Formen er særlig vanlig i Gudbrandsdalen og brukes ofte som første ledd i dobbeltnavn. I engelsktalende land er Jo derimot en kortform av Josephine, altså et kvinnenavn.",
    variants: ["Jon", "Johannes"],
    sources: [NPL, NORDIC],
  },
  jonatan: {
    elements: [
      { form: "jah", sense: "Jahve, Herren" },
      { form: "natan", sense: "han ga" },
    ],
    origin:
      "Jonatan er den norske skrivemåten av navnet på kong Sauls sønn, Davids nærmeste venn. Astrid Lindgrens Jonatan Løvehjerte har gjort formen kjent i hele Norden.",
    variants: ["Jonathan"],
    sources: [NPL, SNL],
  },
  kim: {
    origin:
      "Kim brukes i Norden både som kortform av Joakim og som selvstendig navn. I Norge er det først og fremst et guttenavn, mens det i Sverige og Danmark også brukes om jenter. Rudyard Kiplings roman «Kim» fra 1901 bidro til å spre det som selvstendig navn.",
    related: ["Joakim"],
    sources: [NPL, BTN],
  },
  kjetil: {
    elements: [{ form: "ketill", sense: "kjele, hjelm" }],
    origin:
      "Kjetil er den fulle norske formen av norrønt Ketill, der Kjell er den korte. Ordet betydde kjele, men ble i navn brukt om hjelmen.",
    variants: ["Kjell", "Ketil"],
    sources: [NPL, NORDIC],
  },
  mats: {
    elements: [
      { form: "mattan", sense: "gave" },
      { form: "jah", sense: "Jahve, Herren" },
    ],
    origin:
      "Mats er en nordisk kortform av Mattias, altså Guds gave. Formen er særlig vanlig i Sverige og Norge.",
    variants: ["Mathias", "Matz"],
    sources: [NPL, BTN],
  },
  peder: {
    elements: [{ form: "petros", sense: "stein, klippe" }],
    origin:
      "Peder er den nordiske skriftformen av Peter, mens Per er dagligformen. Apostelen fikk navnet av Jesus, som kalte ham klippen kirken skulle bygges på.",
    variants: ["Peter", "Per", "Petter"],
    sources: [NPL, SNL],
  },
  pal: {
    elements: [{ form: "paulus", sense: "liten, ringe" }],
    origin:
      "Pål er den norske formen av Paulus, som betyr den lille på latin. Apostelen Paulus tok navnet etter omvendelsen, der han het Saulus før. «Per og Pål» er blitt et fast uttrykk for hvem som helst.",
    variants: ["Paul", "Paulus"],
    sources: [NPL, SNL],
  },
  rasmus: {
    origin:
      "Rasmus er en kortform av Erasmus, av gresk erasmios – den elskede eller etterlengtede. Erasmus av Rotterdam var renessansens mest leste humanist. På norsk finnes uttrykket «å ta Rasmus», altså å falle i vannet, der Rasmus er en omskriving for sjøen selv.",
    variants: ["Erasmus"],
    sources: [NPL, SNL],
  },
  reidar: {
    elements: [
      { form: "reið", sense: "ritt, vogn" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Reidar kommer av norrønt Hreiðarr og tolkes som rytterkrigeren. Førsteleddet er i slekt med å ri, og med Tors kjørende vogn.",
    sources: [NPL, NORDIC],
  },
  sigve: {
    elements: [
      { form: "sigr", sense: "seier" },
      { form: "vé", sense: "helligdom, det viede" },
    ],
    origin:
      "Sigve setter seier sammen med det viede. Navnet hører til den store sigr-gruppen med Sigurd, Sigrid, Signe og Sigmund, og er særlig brukt på Sørvestlandet.",
    sources: [NPL, NORDIC],
  },
  stian: {
    elements: [{ form: "stígandi", sense: "den som stiger fram" }],
    origin:
      "Stian kommer av norrønt Stígandi, den som stiger eller går raskt fram. Navnet er nesten bare i bruk i Norge.",
    sources: [NPL, NORDIC],
  },
  tore: {
    elements: [{ form: "þórr", sense: "guden Tor, torden" }],
    origin:
      "Tore kommer av norrønt Þórir, dannet direkte av gudenavnet Tor. Det er ett av de mest brukte norske mannsnavnene gjennom hele 1900-tallet.",
    variants: ["Thore", "Tor"],
    sources: [NPL, NORDIC],
  },
  truls: {
    elements: [
      { form: "þórr", sense: "guden Tor, torden" },
      { form: "ketill", sense: "kjele, hjelm" },
    ],
    origin:
      "Truls er en sammentrukket form av Torkel, altså Tors hjelm. Sammentrekningen skjedde i dansk og svensk skriftspråk og kom derfra til norsk.",
    variants: ["Torkel", "Trulte"],
    sources: [NPL, NORDIC],
  },
  trym: {
    elements: [{ form: "þrymr", sense: "larm, drønn" }],
    origin:
      "Trym er jotunkongen som stjeler Tors hammer i Trymskvida, ett av de mest kjente eddadiktene. Ordet þrymr betyr larm eller drønn.",
    variants: ["Thrym"],
    sources: [SNL, NORDIC],
  },
  orjan: {
    elements: [
      { form: "ge", sense: "jord" },
      { form: "ergon", sense: "arbeid" },
    ],
    origin:
      "Ørjan er en norsk form av Georg, kommet inn via svensk Örjan. Det deler opphav med Jørgen og George: den som arbeider jorden.",
    variants: ["Jørgen", "Georg"],
    sources: [NPL, NORDIC],
  },

  anne: {
    elements: [{ form: "channah", sense: "nåde, velvilje" }],
    origin:
      "Anne er den norske formen av Anna, og var det aller vanligste kvinnenavnet i Norge gjennom flere hundre år. Det inngår i utallige dobbeltnavn: Anne Marie, Anne Lise, Anne Grete.",
    variants: ["Anna", "Ane"],
    sources: [NPL, BTN],
  },
  bente: {
    origin:
      "Bente er en dansk-norsk kvinnelig form av Bent, som er en kortform av Benedikt – den velsignede. Navnet var svært vanlig i Norge midt på 1900-tallet, og hører til den samme familien som Bendik og Benedikte.",
    related: ["Bendik"],
    sources: [NPL, NORDIC],
  },
  bergit: {
    origin:
      "Bergit er en norsk form av Birgitta, som går tilbake på det irske Brighid – navnet på en keltisk gudinne og senere på Irlands vernehelgen. Formen Bergit er særlig knyttet til Telemark og Hallingdal, og hører sammen med Berit og Birgit.",
    variants: ["Berit", "Birgit"],
    sources: [NPL, NORDIC],
  },
  bodil: {
    elements: [
      { form: "bót", sense: "bot, bedring" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Bodil kommer av norrønt Bóthildr. Førsteleddet bót betyr bot eller bedring – det samme ordet som i «å bøte på noe».",
    sources: [NPL, NORDIC],
  },
  camilla: {
    origin:
      "Camilla er hentet fra Vergils Aeneiden, der Camilla er en krigersk jomfru som er så rask at hun kan løpe over et kornåker uten å knekke stråene. Ordet camillus var i Roma betegnelsen på en ung tempeltjener. Camilla Collett gjorde navnet kjent i Norge.",
    variants: ["Kamilla"],
    sources: [BTN, SNL],
  },
  eli: {
    origin:
      "Eli brukes i Norge som kortform av Elisabet, og er dermed et kvinnenavn. Det bibelske Eli er noe helt annet: en mannlig prest i Samuelsboken. De to har ingen språklig forbindelse, og sammenfallet er tilfeldig.",
    related: ["Elisabeth", "Elise"],
    sources: [NPL, BTN],
  },
  elin: {
    elements: [{ form: "helene", sense: "fakkel, lys" }],
    origin:
      "Elin er den nordiske formen av Helena, og har vært i bruk i Norge siden middelalderen. Det hører sammen med Eline, Ellen og Helene.",
    variants: ["Eline", "Ellen"],
    sources: [NPL, BTN],
  },
  elisabeth: {
    elements: [
      { form: "eli", sense: "min Gud" },
      { form: "sheva", sense: "ed, løfte" },
    ],
    origin:
      "Elisabeth er mor til døperen Johannes i Lukasevangeliet. Navnet har gitt opphav til en uvanlig stor familie av kortformer: Elise, Lise, Bettina, Isabella, Eli og Ellie.",
    variants: ["Elisabet", "Elizabeth"],
    shortForms: ["Lise", "Elise", "Eli"],
    sources: [NPL, BTN],
  },
  grete: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Grete er en kortform av Margrete, av det greske ordet for perle. Formen er kjent fra eventyret om Hans og Grete.",
    variants: ["Grethe", "Margrete"],
    sources: [NPL, BTN],
  },
  hege: {
    elements: [{ form: "heilagr", sense: "hellig, viet" }],
    origin: "Hege er en norsk kortform av Helga. Navnet var svært populært i Norge på 1970-tallet.",
    variants: ["Helga", "Heidi"],
    sources: [NPL, NORDIC],
  },
  heidi: {
    elements: [{ form: "adal", sense: "edel, av god ætt" }],
    origin:
      "Heidi er en sveitsisk kortform av Adelheid, av germansk adal – edel. Johanna Spyris barnebok fra 1881 gjorde navnet kjent over hele verden.",
    related: ["Ada"],
    sources: [BTN, SNL],
  },
  iben: {
    origin:
      "Iben er et dansk navn som brukes om både kvinner og menn. Opphavet er omdiskutert: det knyttes både til et dialektord for bjørnebær og til den norrøne formen Ingbjørn. Ingen av forklaringene er sikre, og navnet er uansett først og fremst moderne dansk.",
    sources: [NPL, NORDIC],
  },
  inger: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "herr", sense: "hær, krigsflokk" },
    ],
    origin:
      "Inger er en nordisk form av Ingegerd og Ingrid, og var blant de mest brukte kvinnenavnene i Norge på 1900-tallet. Det inngår i mange dobbeltnavn: Inger Lise, Inger Johanne.",
    variants: ["Ingerd", "Ingjerd"],
    sources: [NPL, NORDIC],
  },
  ingvild: {
    elements: [
      { form: "Ingvi", sense: "guden Ing, Frøys eldre navn" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Ingvild kommer av norrønt Ingihildr og setter gudenavnet sammen med kampleddet. Det hører til Ing-gruppen med Ingrid, Ingeborg og Ingunn.",
    variants: ["Ingebjørg"],
    sources: [NPL, NORDIC],
  },
  jenny: {
    origin:
      "Jenny oppsto som en engelsk kjæleform av Jane, altså Johanna. Den svenske sopranen Jenny Lind, «den svenske nattergalen», turnerte USA på 1850-tallet og gjorde navnet populært i hele Norden. I eldre engelsk var jenny dessuten et alminnelig ord for hunndyr, som i spinning jenny.",
    related: ["Johannes"],
    sources: [NPL, BTN],
  },
  kaia: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Kaia er en skrivemåte av Kaja, som er en nordisk kortform av Katarina. Begge formene er i bruk i Norge i dag.",
    variants: ["Kaja"],
    sources: [NPL, NORDIC],
  },
  karoline: {
    elements: [{ form: "karl", sense: "fri mann" }],
    origin:
      "Karoline er en kvinnelig form av Karl, gjennom latinske Carolina. Navnet betyr dermed omtrent «fri kvinne».",
    variants: ["Caroline", "Karolina"],
    shortForms: ["Karo", "Lina"],
    sources: [NPL, BTN],
  },
  kjersti: {
    elements: [{ form: "christos", sense: "den salvede, Kristus" }],
    origin:
      "Kjersti er en norsk form av Kristina, slitt ned gjennom uttalen. Formen er særlig vanlig i innlandsbygdene.",
    variants: ["Kristine", "Kirsti"],
    sources: [NPL, NORDIC],
  },
  lene: {
    origin:
      "Lene brukes i Norden som kortform av både Helene og Magdalene. De to linjene har smeltet helt sammen, og i praksis skilles de ikke. Navnet var blant de mest populære i Norge på 1970- og 80-tallet.",
    variants: ["Lena"],
    related: ["Helene", "Malena"],
    sources: [NPL, NORDIC],
  },
  marie: {
    origin:
      "Marie er den franske og norske formen av Maria, og er det navnet som oftest inngår i norske dobbeltnavn – Anne Marie, Ann-Marie, Lise Marie. Betydningen av Maria er usikker: både «den elskede», «den opphøyde» og «den bitre» er foreslått, og opphavet er trolig egyptisk.",
    variants: ["Maria", "Mari"],
    sources: [NPL, BTN],
  },
  nina: {
    origin:
      "Nina brukes både som kortform av Anna og Antonina, og som selvstendig navn. I russisk og italiensk tradisjon er begge veier vanlige. Nina Grieg, som var gift med og fetter av Edvard Grieg, var sanger og urframførte mange av hans egne sanger.",
    related: ["Anne", "Anita"],
    sources: [NPL, BTN],
  },
  rita: {
    elements: [{ form: "margarites", sense: "perle" }],
    origin:
      "Rita er en italiensk kortform av Margherita, altså Margrete. Den hellige Rita av Cascia gjorde formen utbredt i katolske land.",
    related: ["Grete"],
    sources: [NPL, BTN],
  },
  susanne: {
    elements: [{ form: "shoshannah", sense: "lilje" }],
    origin:
      "Susanne kommer av hebraisk Shoshannah, lilje. Fortellingen om Susanna i badet er blant de mest gjengitte bibelmotivene i europeisk kunst.",
    variants: ["Susanna", "Sanne"],
    sources: [NPL, BTN],
  },
  synnove: {
    elements: [
      { form: "sunne", sense: "sol" },
      { form: "gifu", sense: "gave" },
    ],
    origin:
      "Synnøve er den norske formen av Sunniva, av angelsaksisk Sunngifu – solgave. Bjørnstjerne Bjørnsons «Synnøve Solbakken» gjorde navnet kjent over hele landet.",
    variants: ["Sunniva", "Synne"],
    sources: [NPL, SNL],
  },
  tone: {
    elements: [
      { form: "þórr", sense: "guden Tor, torden" },
      { form: "nýr", sense: "ny" },
    ],
    origin:
      "Tone kommer av norrønt Þórný, satt sammen av gudenavnet Tor og leddet ný. At navnet i dag leses som det norske ordet tone er en senere sammenblanding.",
    sources: [NPL, NORDIC],
  },
  torill: {
    elements: [
      { form: "þórr", sense: "guden Tor, torden" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Torill er en skrivemåte av Toril, som kommer av Torhild – Tors kamp. Begge formene er i bruk i Norge.",
    variants: ["Toril", "Torhild"],
    sources: [NPL, NORDIC],
  },
  trine: {
    elements: [{ form: "katharos", sense: "ren" }],
    origin:
      "Trine er en dansk-norsk kortform av Katrine, altså Katarina. Navnet var svært vanlig i Norge på 1970- og 80-tallet.",
    variants: ["Katrine"],
    related: ["Kari", "Kaja"],
    sources: [NPL, NORDIC],
  },
  gunhild: {
    elements: [
      { form: "gunnr", sense: "kamp, strid" },
      { form: "hildr", sense: "kamp, strid" },
    ],
    origin:
      "Gunhild er en skrivemåte med én n av Gunnhild. Begge leddene betyr kamp – en forsterkning som var vanlig i norrøn navngiving.",
    variants: ["Gunnhild"],
    sources: [NPL, NORDIC],
  },
};
