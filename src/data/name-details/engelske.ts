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
      "Ace er esset i kortstokken, og i overført betydning den fremste på et felt. Ordet kom inn i engelsk fra gammelfransk as, som igjen kommer av latin as – en romersk mynt og vektenhet, den minste av dem. At det laveste kortet ble det høyeste er en senere snuoperasjon i spillereglene. Under første verdenskrig ble ace tittelen på jagerflygere med minst fem nedskytinger, og det er den betydningen som gjør navnet til et rovdyrnavn.",
    pronunciation: "«eis»",
    sources: [ETYM, BTN],
  },
  alfie: {
    origin:
      "Alfie er en engelsk kjæleform av Alfred, dannet med -ie-endelsen som ble mote i Storbritannia på 1800-tallet. Slike former var først barnenavn i familien, men gled over til å bli selvstendige navn i kirkebøkene. I dag er Alfie blant de vanligste hundenavnene i Storbritannia, og det brukes også som guttenavn.",
    shortForms: ["Alf"],
    related: ["Alfred"],
    sources: [BTN, NPL],
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
      "Ash er både aske og asketre på engelsk, og de to betydningene har ulik rot: treet heter æsc på gammelengelsk, mens asken heter æsce. Som dyrenavn spiller det oftest på fargen, og passer grå eller askefargede katter. Ordet for treet er i slekt med norrønt askr, som ligger bak navnet Ask.",
    related: ["Ask"],
    sources: [ETYM, BTN],
  },
  bailey: {
    origin:
      "Bailey har to linjer som har smeltet sammen. Den ene er yrkesnavnet bailiff, av latin baiulus – en forvalter eller ombudsmann. Den andre er borggården, den åpne plassen innenfor festningsmuren, som i Old Bailey i London. Navnet har ingenting med bøddel å gjøre, selv om de to ordene lett blandes sammen på norsk.",
    sources: [ETYM, BTN],
  },
  baxter: {
    origin:
      "Baxter er et gammelt engelsk yrkesnavn som betyr baker. Endelsen -ster var opprinnelig hunkjønn i gammelengelsk, slik at en bæcestre var en kvinnelig baker – på samme måte som spinster var en kvinne som spant og webster en som vevde. Endelsen mistet kjønnsbetydningen i middelalderen, og ordet ble stående som etternavn for begge kjønn.",
    sources: [ETYM, BTN],
  },
  bear: {
    origin:
      "Bear er det engelske ordet for bjørn, og går tilbake på germansk bero – den brune. Det er samme omskriving som ligger bak norsk bjørn: i mange indoeuropeiske språk unngikk man det opprinnelige ordet for dyret og kalte det heller «den brune» eller «honningeteren», trolig fordi det å nevne bjørnen ved navn ble regnet som farlig.",
    pronunciation: "«bær»",
    related: ["Bjørn", "Bruno"],
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
      "Bingo er kjent framfor alt fra barnesangen om bonden som hadde en hund, der navnet staves ut bokstav for bokstav. Sangen er trykket i England allerede på 1700-tallet. Ordet brukes også som utrop når noe går i boks, og selve spillet fikk navnet på 1920-tallet. Som hundenavn er det kort, har trykk på første stavelse og ender på vokal – tre ting som gjør det lett å rope.",
    sources: [ETYM, BTN],
  },
  blaze: {
    origin:
      "Blaze betyr flamme, av gammelengelsk blæse. Men ordet har en annen betydning som passer dyr bedre: den hvite stripen ned pannen på hester, hunder og storfe kalles også en blaze. Det er samme ord som i «å blaze a trail», å merke stien med hvite hakk i barken.",
    sources: [ETYM, BTN],
  },
  blue: {
    origin:
      "Blue er fargen brukt som navn. Ordet kom inn i engelsk fra normannisk-fransk bleu og fortrengte det hjemlige hæwen. Som hundenavn viser det til pelsfarge: en «blå» hund er egentlig gråblå, og betegnelsen brukes om raser som weimaraner, blue heeler og kerry blue terrier.",
    sources: [ETYM, BTN],
  },
  bolt: {
    origin:
      "Bolt betydde opprinnelig en kort, tykk pil til armbrøst – derav uttrykket «å skyte sin siste bolt». Fra pilens fart kom betydningen å sette av gårde, og fra lynets form kom lightning bolt. Alle tre betydningene passer et raskt dyr, og navnet er kort nok til å bli oppfattet med én gang.",
    sources: [ETYM, BTN],
  },
  buddy: {
    origin:
      "Buddy er amerikansk-engelsk for kompis, og oppsto trolig som en barnlig uttale av brother – på samme måte som bud og bub. Ordet er belagt fra midten av 1800-tallet og ble raskt et vennlig tiltaleord til gutter og menn man ikke kjente navnet på. Det er blant de aller vanligste hundenavnene i USA.",
    sources: [ETYM, BTN],
  },
  buster: {
    origin:
      "Buster er amerikansk slang for en som bryter eller sprenger noe, av bust, en dialektform av burst. Fra slutten av 1800-tallet ble det brukt som vennlig tiltaleord til gutter, omtrent som «kompis», og fra 1900-tallet også irettesettende: «now listen here, buster». Stumfilmkomikeren Buster Keaton fikk kallenavnet som barn etter et fall i en trapp.",
    sources: [ETYM, BTN],
  },
  champ: {
    origin:
      "Champ er kortform av champion. Ordet kom via gammelfransk fra latin campio, en som kjemper på slagmarken – campus betydde slette og dermed også kampplass. En champion var opprinnelig en som kjempet på vegne av andre i en rettslig tvekamp, ikke en vinner av en konkurranse.",
    sources: [ETYM, BTN],
  },
  chance: {
    origin:
      "Chance kommer av latin cadentia, «det som faller» – som terningkast. Ordet kom inn i engelsk via fransk og betydde først tilfeldighet, senere mulighet. Navnet gis gjerne til dyr som er blitt omplassert eller har klart seg gjennom noe vanskelig, og bærer da hele historien i én stavelse.",
    sources: [ETYM, BTN],
  },
  cooper: {
    origin:
      "Cooper er et engelsk yrkesnavn for tønnemaker, av lavtysk kūper, avledet av kūpe – kar eller tønne. Yrket var blant de viktigste i middelalderen: alt fra øl og vin til saltet fisk og krutt ble fraktet og lagret i tønner, og en dårlig tønne kunne ødelegge hele lasten. Det er blant de vanligste engelske yrkesetternavnene.",
    sources: [ETYM, BTN],
  },
  daisy: {
    origin:
      "Daisy er prestekragen, og navnet kommer av gammelengelsk dæges eage – dagens øye. Blomsten lukker kronbladene om natten og åpner dem igjen om morgenen, og det er den bevegelsen navnet beskriver. Som fornavn ble Daisy dessuten brukt som kjæleform av Margaret, fordi den franske marguerite betyr nettopp prestekrage.",
    related: ["Mette", "Grete"],
    sources: [ETYM, BTN],
  },
  diesel: {
    origin:
      "Diesel er oppkalt etter den tyske ingeniøren Rudolf Diesel, som patenterte motoren i 1892. Etternavnet hans er et sørtysk stedsnavn. Som hundenavn brukes det gjerne på kraftige raser, og hører til en liten gruppe motornavn sammen med Turbo og Bolt.",
    related: ["Turbo"],
    sources: [ETYM, BTN],
  },
  duke: {
    origin:
      "Duke er den engelske tittelen hertug, av latin dux – fører, av ducere, å lede. Samme ord ligger bak italiensk duce og bak norsk «å dosere». Duke er blant de eldste registrerte hundenavnene i engelsktalende land, og hører til gruppen titteldyrenavn sammen med King, Prince og Baron.",
    related: ["King", "Prince", "Baron"],
    sources: [ETYM, BTN],
  },
  ember: {
    origin:
      "Ember er den glødende resten i et bål etter at flammene har lagt seg, av gammelengelsk æmerge. Ordet beskriver noe som fortsatt varmer lenge etter at det synlige er borte. Som kattenavn brukes det på rødlige og varmefargede dyr, og b-en i moderne engelsk er en senere innskutt lyd som ikke fantes i det gamle ordet.",
    sources: [ETYM, BTN],
  },
  fluffy: {
    origin:
      "Fluffy betyr lodden eller luftig, av fluff – som trolig er en lydmalende omdanning av flue, ulldott. Ordet er belagt fra 1700-tallet. Det er blant de aller vanligste kattenavnene i engelsktalende land, og beskriver pelsen mer enn dyret som bærer den.",
    sources: [ETYM, BTN],
  },
  frost: {
    origin:
      "Frost er det samme ordet på engelsk og norsk, fra felles germansk rot knyttet til å fryse. Som dyrenavn brukes det på hvite og lysegrå dyr, og hører sammen med Snø, Misty og Blue i den lille gruppen værnavn.",
    related: ["Snø", "Misty"],
    sources: [ETYM, BTN],
  },
  gizmo: {
    origin:
      "Gizmo er amerikansk slang for en dings eller innretning man ikke husker navnet på. Ordet er belagt fra 1940-tallet i det amerikanske forsvaret, der det ble brukt om utstyr ingen hadde et bedre navn på. Opphavet er ukjent. Figuren Gizmo i filmen Gremlins fra 1984 gjorde ordet til et vanlig kjæledyrnavn.",
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
      "Hunter er det engelske yrkesnavnet for jeger, av gammelengelsk huntian. Som hundenavn er det særlig brukt på jaktraser. Én praktisk innvending: navnet ligger nær kommandoordet «hent» i lyd, og det kan gjøre innlæringen vanskeligere enn nødvendig.",
    sources: [ETYM, BTN],
  },
  jinx: {
    origin:
      "Jinx betyr forbannelse eller uflaks. Ordet kommer trolig av jynx, det latinske navnet på vendehalsen – en spettefugl som ble brukt i kjærlighetstrolldom i antikken, bundet til et hjul som ble snurret rundt. Fra fuglen kom ordet til å bety selve trolldommen. Som kattenavn passer det svarte katter, med et blunk til overtroen.",
    sources: [ETYM, BTN],
  },
  king: {
    origin:
      "King er det engelske ordet for konge, av gammelengelsk cyning. Det er i slekt med norrønt konungr og norsk konge, og henger sammen med kyn – ætt. En konge var altså opprinnelig «ættens mann», den fremste i slekten. Navnet er kort, har hard konsonant i begge ender og bærer godt over avstand.",
    related: ["Duke", "Prince", "Håkon"],
    sources: [ETYM, BTN],
  },
  lily: {
    origin:
      "Lily er liljen, av latin lilium. Blomsten er et av de eldste symbolene på renhet i europeisk kunst, og går igjen i framstillinger av jomfru Maria. Navnet ble tatt i bruk som fornavn i England på 1800-tallet, i samme bølge som Rose, Violet og Daisy.",
    variants: ["Lilly", "Lilje"],
    related: ["Daisy"],
    sources: [BTN, ETYM],
  },
  lucky: {
    origin:
      "Lucky betyr heldig, av luck – som kom inn i engelsk fra nederlandsk luk i seinmiddelalderen, trolig gjennom spill og veddemål. Det er samme ord som norsk lykke. Navnet gis ofte til dyr som er blitt reddet eller har overlevd noe, og bærer historien sin i seg.",
    related: ["Lykke"],
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
      "Misty betyr tåkete, av gammelengelsk mist. Som kattenavn brukes det gjerne på gråblå dyr, der pelsen har den samme dempede, uskarpe fargen. Navnet hører til den samme gruppen værnavn som Frost, Storm og Snø.",
    related: ["Frost"],
    sources: [ETYM, BTN],
  },
  moose: {
    origin:
      "Moose er det nordamerikanske ordet for elg, lånt på 1600-tallet fra et algonkinsk språk – trolig av moos, «han som barker av», etter elgens vane med å gnage bark av trær. Det europeiske elk viser til samme dyr, men ble i Amerika brukt om wapitihjorten, og derfor trengtes et eget ord. Som hundenavn brukes det med glimt i øyet, både på svært store og svært små hunder.",
    sources: [ETYM, BTN],
  },
  ozzy: {
    origin:
      "Ozzy er en engelsk kortform av Oswald, som er angelsaksisk og satt sammen av os – gud – og weald – makt. Førsteleddet er det samme som i norrønt áss, gudeslekten, og finnes også i Oscar og Osmund. I dag forbindes navnet mest med musikeren Ozzy Osbourne.",
    related: ["Oscar", "Åsmund"],
    sources: [BTN, NPL],
  },
  penny: {
    origin:
      "Penny er den engelske mynten, av gammelengelsk penig, i slekt med tysk Pfennig. Navnet brukes også som kortform av Penelope, som er gresk og knyttes til pēnē, veften i en vev – Penelope vevde og repte opp igjen samme stykke mens hun ventet på Odyssevs. De to linjene har smeltet sammen i moderne bruk.",
    related: ["Penelope"],
    sources: [ETYM, BTN],
  },
  pixel: {
    origin:
      "Pixel er satt sammen av picture element, og ble laget av forskere ved Jet Propulsion Laboratory på 1960-tallet for å beskrive det minste punktet i et digitalt bilde. Det er dermed et av de yngste ordene som brukes som dyrenavn – knapt seksti år gammelt, mot flere tusen for Luna og Bjørn.",
    sources: [ETYM],
  },
  prince: {
    origin:
      "Prince er den engelske tittelen prins, av latin princeps – «den som tar førsteplassen», av primus og capere. I Roma var princeps tittelen keiseren brukte for å slippe å kalle seg konge. Navnet hører til gruppen titteldyrenavn sammen med Duke, King og Baron.",
    related: ["Duke", "King", "Baron"],
    sources: [ETYM, BTN],
  },
  rusty: {
    origin:
      "Rusty betyr rustfarget, av rust – som er i slekt med red og med norsk rust. Ordet beskriver den rødbrune fargen jern får når det oksiderer. Som dyrenavn er det blant de vanligste for røde og rødbrune hunder og katter i engelsktalende land.",
    sources: [ETYM, BTN],
  },
  sable: {
    origin:
      "Sable er sobelen, et mårdyr med svært mørk og tett pels, og ordet kom til engelsk via fransk fra slavisk sobol. Fordi pelsen var mørk, ble sable også betegnelsen på svart i heraldikken. I hundeavl betyr sable noe annet igjen: en pels der hvert hår har mørk tupp, som hos schäfer og collie.",
    sources: [ETYM, BTN],
  },
  scout: {
    origin:
      "Scout betyr speider, av gammelfransk escouter – å lytte, av latin auscultare. En speider var altså opprinnelig en som lyttet, ikke en som så. Navnet passer et årvåkent dyr, og er kjent fra Scout Finch i «Drep ikke en sangfugl».",
    sources: [ETYM, BTN],
  },
  shadow: {
    origin:
      "Shadow er skygge, av gammelengelsk sceadu – samme rot som norsk skygge og tysk Schatten. Navnet brukes både på mørke dyr og på dem som følger tett etter eieren gjennom hele huset. Det norske motstykket er Skygge.",
    related: ["Skygge"],
    sources: [ETYM, BTN],
  },
  sonny: {
    origin:
      "Sonny er en engelsk tiltaleform til en gutt, av son med kjæleendelsen -y. Ordet er belagt fra 1800-tallet og brukes som kjælenavn snarere enn som egentlig fornavn – på samme måte som Buddy og Bub.",
    related: ["Buddy"],
    sources: [ETYM, BTN],
  },
  sparky: {
    origin:
      "Sparky kommer av spark, gnist, med kjæleendelsen -y. Ordet ble brukt som kallenavn på elektrikere og telegrafister i amerikansk og britisk militærslang, og gikk derfra over til å beskrive en livlig og energisk skapning. Det har vært et vanlig hundenavn i USA gjennom hele 1900-tallet.",
    sources: [ETYM, BTN],
  },
  tigra: {
    origin:
      "Tigra er en form av tiger. Ordet kom til europeiske språk gjennom gresk tigris, som trolig er lånt fra et iransk språk der det betydde «pil» – etter dyrets fart. Elven Tigris har navn av samme rot. Som kattenavn brukes det på stripete dyr.",
    related: ["Tiger"],
    sources: [ETYM, BTN],
  },
  whisker: {
    origin:
      "Whisker er værhåret, av whisk – å feie eller stryke raskt. Værhårene er ikke vanlige hår: de sitter dypt i huden, er omgitt av nerveender, og katten bruker dem til å måle åpninger og kjenne luftstrømmer i mørket. Ordet ble brukt om ansiktshår på mennesker før det ble knyttet til dyr.",
    variants: ["Whiskers"],
    sources: [ETYM, BTN],
  },
  whiskers: {
    origin:
      "Whiskers er flertallsformen av whisker, og er blant de aller vanligste kattenavnene i engelsktalende land. Grunnen er enkel: værhårene er det mest karakteristiske ved kattens ansikt, og de er samtidig et presisjonsinstrument – en katt med avklipte værhår mister evnen til å bedømme om den kommer gjennom en åpning.",
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
