import type { NameDetail } from "./types";

/**
 * Latinske navn.
 *
 * Mange av disse var romerske slektsnavn eller tilnavn før de ble fornavn.
 * Det er verdt å vite når man leser betydningen: et romersk slektsnavn hadde
 * ofte mistet den opprinnelige meningen lenge før noen het det.
 */
const NPL = { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" };
const BTN = { title: "Behind the Name", publisher: "behindthename.com" };
const SNL = { title: "Store norske leksikon", publisher: "snl.no" };
const ETYM = { title: "Online Etymology Dictionary", publisher: "etymonline.com" };

const NORDIC = { title: "Nordic Names", publisher: "nordicnames.de" };

export const latinske: Record<string, NameDetail> = {
  adrian: {
    origin:
      "Adrian betyr «fra Hadria», en havneby ved det som derfor heter Adriaterhavet. Keiser Hadrian, som bygde muren tvers over Nord-England, bar samme navn. Seks paver har hett Adrian, blant dem den eneste engelske: Adrian IV, som ga Norge sin egen erkebiskop i Nidaros i 1153.",
    variants: ["Adrian", "Adrien"],
    sources: [NPL, SNL],
  },
  alma: {
    elements: [{ form: "almus", sense: "nærende, god" }],
    origin: [
      "Alma kommer av latin almus, som betyr nærende eller godgjørende – det samme ordet som i alma mater, «den nærende moren», om universitetet man er utdannet ved. På spansk og italiensk betyr alma dessuten sjel, av latin anima, og de to linjene blandes ofte.",
      "Navnet fikk et uventet oppsving i England etter slaget ved Almaelven på Krim i 1854, der britiske og franske styrker vant over russerne. Elvenavnet har ingen forbindelse til det latinske ordet, men sammenfallet gjorde navnet mote.",
      "Alma Mahler var en av Wienerkretsens mest omtalte skikkelser, gift etter tur med komponisten Gustav Mahler, arkitekten Walter Gropius og forfatteren Franz Werfel.",
      "I Norge har Alma steget jevnt siden 2000-tallet og ligger nå blant de mest brukte jentenavnene.",
    ],
    sources: [NPL, BTN, SNL],
  },
  anton: {
    origin:
      "Anton kommer av det romerske slektsnavnet Antonius, som Marcus Antonius tilhørte. Betydningen er ukjent og trolig etruskisk – romerske slektsnavn hadde ofte mistet meningen lenge før noen het det. Tolkningen «uvurderlig» kom til i renessansen, ved en sammenblanding med gresk anthos, blomst, og har ingen språklig dekning.",
    variants: ["Antonius", "Anthon"],
    sources: [BTN, NPL],
  },
  aurora: {
    elements: [{ form: "aurora", sense: "morgenrøde, daggry" }],
    origin: [
      "Aurora er morgenrødens gudinne i romersk mytologi, søster til solen Sol og månen Luna. Hos grekerne heter hun Eos. Etter myten åpner hun himmelporten hver morgen så solvognen kan kjøre ut.",
      "Nordlyset heter aurora borealis – den nordlige morgenrøden – etter henne. Navnet ble gitt av Galileo Galilei på 1600-tallet, og motstykket på sørhalvkulen heter aurora australis.",
      "I Norge er navnet også kjent gjennom artisten Aurora Aksnes, og det har steget jevnt på navnelistene siden 2000-tallet.",
    ],
    sources: [BTN, SNL],
  },
  celine: {
    origin:
      "Celine er en fransk form av Caelina, avledet av det romerske slektsnavnet Caelius, som knyttes til latin caelum – himmel. Navnet brukes også som kortform av Marceline. Sankta Celine var etter tradisjonen mor til Sankt Remigius.",
    variants: ["Céline", "Selina"],
    sources: [BTN, NPL],
  },
  dexter: {
    origin:
      "Dexter er latin for høyre, og i overført betydning behendig eller dyktig – vi har samme tanke i norsk «å være hendig». Motstykket sinister, venstre, fikk den motsatte utviklingen og betyr i dag illevarslende. Ordet lever videre i ambidekster, den som er like god med begge hender.",
    sources: [ETYM, BTN],
  },
  emil: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin: [
      "Emil kommer av det romerske slektsnavnet Aemilius, en av de eldste patrisierslektene i Roma. Navnet knyttes til aemulus – den som kappes eller strever – som også ligger bak norsk «emulere».",
      "Slekten har satt varige spor: veien Via Aemilia, bygget i 187 f.Kr. fra Rimini til Piacenza, går fortsatt i samme trasé, og den italienske regionen Emilia-Romagna har navn etter den.",
      "Astrid Lindgrens «Emil i Lønneberget» fra 1963 har gjort navnet kjent i hele Norden. Bøkene ble til fordi Lindgren skulle roe et sint barnebarn, og hun begynte å fortelle om en gutt som gjorde ugagn.",
      "Emil har ligget blant de aller mest brukte guttenavnene i Norge i mange år, og var på topp i både 2020 og 2022.",
    ],
    variants: ["Emile"],
    related: ["Emilie", "Emilia"],
    sources: [NPL, BTN, SNL],
  },
  emilia: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emilia er den kvinnelige formen av Aemilius. Navnet er kjent fra Shakespeares Othello, og har vært blant de mest brukte jentenavnene i Norge de siste årene.",
    variants: ["Emilie", "Emelia"],
    related: ["Emil"],
    sources: [NPL, BTN],
  },
  emilian: {
    origin:
      "Emilian er en utvidet form av Aemilius, dannet med den latinske endelsen -ianus, som markerte at noen hørte til en slekt. Via Aemilia har samme navn gitt den italienske regionen Emilia-Romagna og veien Via Aemilia, bygget i 187 f.Kr.",
    related: ["Emil", "Emilie"],
    sources: [NPL, BTN],
  },
  emilie: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emilie er den franske og nordiske formen av Emilia. Den har ligget høyt på norske navnelister i flere tiår.",
    variants: ["Emilia", "Emely"],
    related: ["Emil"],
    sources: [NPL, BTN],
  },
  felix: {
    elements: [{ form: "felix", sense: "lykkelig, heldig" }],
    origin:
      "Felix betyr lykkelig på latin, og ble brukt som tilnavn på romere som hadde hellet med seg – blant andre diktatoren Sulla. Navnet er også vanlig som kattenavn.",
    sources: [NPL, BTN],
  },
  gracie: {
    origin:
      "Gracie er en engelsk kjæleform av Grace, av latin gratia – nåde, ynde og takknemlighet. Gratiene var de tre gudinnene for sjarm og skjønnhet i romersk mytologi, framstilt sammen i en av renessansens mest gjengitte grupper. Grace ble tatt i bruk som fornavn av puritanerne, som dydsnavn.",
    related: ["Grace"],
    sources: [BTN, ETYM],
  },
  lars: {
    origin:
      "Lars er den nordiske kortformen av Laurentius, «mannen fra Laurentum». Byen fikk trolig navn etter laurbærtrærne, og derfor er laurbærkransen knyttet til navnet. Sankt Laurentius ble etter legenden stekt på en rist, og Larsok 10. august var en av middelalderens store merkedager i Norge.",
    variants: ["Lauritz", "Laurits"],
    related: ["Lasse"],
    sources: [NPL, SNL],
  },
  leo: {
    origin:
      "Leo er latin for løve, og har vært pavenavn tretten ganger – flere enn de fleste. Leo I møtte Attila utenfor Roma i 452 og skal ha overtalt ham til å snu. Navnet er i slekt med greske Leon og inngår i Leonard, Leopold og stjernetegnet Løven.",
    related: ["Leon", "Leonard"],
    sources: [NPL, SNL],
  },
  livia: {
    origin:
      "Livia kommer av det romerske slektsnavnet Livius. Betydningen er usikker; den vanligste tolkningen knytter navnet til lividus, blågrå. Livia Drusilla var keiser Augustus' hustru gjennom 51 år og en av de mektigste kvinnene i romersk historie – Robert Graves gjorde henne til hovedskurk i «Jeg, Claudius».",
    sources: [BTN, SNL],
  },
  lucas: {
    elements: [{ form: "lux", sense: "lys" }],
    origin: [
      "Lucas kommer av Lucanus, «mannen fra Lucania» i Sør-Italia, men er tidlig blitt knyttet til latin lux, lys – en folkeetymologi som har festet seg så godt at den nå regnes som navnets betydning i praktisk bruk.",
      "Evangelisten Lukas var etter tradisjonen lege, og er den eneste av evangelistene som trolig ikke var jøde. Han regnes også som forfatter av Apostlenes gjerninger, og symbolet hans er oksen.",
      "Navnet har steget kraftig i Norge siden 1990-tallet, i skrivemåtene Lucas og Lukas, og ligger blant de mest brukte guttenavnene.",
    ],
    variants: ["Lukas", "Luca"],
    related: ["Lucy"],
    sources: [BTN, SNL, NPL],
  },
  lucy: {
    elements: [{ form: "lux", sense: "lys" }],
    origin:
      "Lucy er den engelske formen av Lucia, som kommer av lux, lys. Sankta Lucia feires 13. desember, som i den gamle kalenderen var årets mørkeste dag.",
    related: ["Lucas"],
    sources: [NPL, BTN],
  },
  luna: {
    elements: [{ form: "luna", sense: "måne" }],
    origin:
      "Luna er månegudinnen i romersk mytologi, og det latinske ordet for månen. Navnet brukes i dag både til barn, hunder og katter – og er blant de aller vanligste kattenavnene i Norge.",
    related: ["Selina", "Måne"],
    sources: [BTN, SNL],
  },
  magnus: {
    elements: [{ form: "magnus", sense: "stor, mektig" }],
    origin: [
      "Magnus er latin for stor, og kom til Norden på en uvanlig måte: gjennom et misforstått tilnavn. Olav den hellige oppkalte sønnen sin etter Karl den store, Carolus Magnus, men tok med etternavnet i stedet for fornavnet.",
      "Magnus den gode ble dermed den første i Norden med navnet, og etter ham fulgte sju norske konger til – blant dem Magnus Lagabøte, som ga Norge en av Europas tidligste landsdekkende lovbøker i 1274.",
      "Navnet har vært i sammenhengende bruk i Norge siden den gang. Magnus Carlsen har gjort det kjent internasjonalt i nyere tid.",
      "Magnus ligger fortsatt blant de mest brukte guttenavnene i Norge.",
    ],
    related: ["Max"],
    sources: [NPL, SNL, NORDIC],
  },
  marius: {
    origin:
      "Marius er et romersk slektsnavn, kjent fra hærføreren Gaius Marius, som reformerte den romerske hæren rundt år 100 f.Kr. Opphavet er usikkert: det knyttes gjerne til krigsguden Mars, men kan også komme av mare, hav. Navnet er ikke i slekt med Maria, selv om likheten er slående.",
    related: ["Markus", "Martin"],
    sources: [BTN, SNL],
  },
  markus: {
    origin:
      "Markus kommer av Marcus, ett av bare rundt tjue fornavn i vanlig bruk blant romerske menn – navneutvalget var påfallende lite. Det er avledet av krigsguden Mars. Evangelisten Markus regnes som forfatteren av det eldste evangeliet, og løven er hans symbol.",
    variants: ["Marcus", "Marko"],
    related: ["Martin", "Marius"],
    sources: [NPL, SNL],
  },
  martin: {
    origin:
      "Martin kommer av Martinus, avledet av Mars. Sankt Martin av Tours delte kappen sin med en frysende tigger og ble en av Europas mest dyrkede helgener. Martin Luther het opprinnelig Martin fordi han ble døpt på mortensdagen, 11. november.",
    variants: ["Morten"],
    related: ["Markus"],
    sources: [NPL, SNL],
  },
  max: {
    elements: [{ form: "maximus", sense: "den største" }],
    origin:
      "Max er en kortform av Maximilian eller Maximus, av latin maximus, den største. Det er blant de mest brukte hundenavnene i Europa.",
    related: ["Magnus"],
    sources: [NPL, BTN],
  },
  natalie: {
    elements: [{ form: "natalis dies", sense: "fødselsdagen" }],
    origin:
      "Natalie kommer av latin natalis dies – fødselsdagen, som i kirkelig språkbruk betydde Kristi fødsel. Navnet ble gitt til barn født i juletiden.",
    variants: ["Nathalie", "Natalia"],
    sources: [NPL, BTN],
  },
  nero: {
    origin:
      "Nero er et sabinsk tilnavn som betyr sterk og kraftfull, og var i bruk i den claudiske slekten lenge før keiseren. Fordi keiser Nero ble stående som selve bildet på tyranni, er navnet i dag nesten bare i bruk på hunder.",
    sources: [BTN, SNL],
  },
  nimbus: {
    origin:
      "Nimbus er latin for regnsky. I meteorologien brukes ordet i skytypene nimbostratus og cumulonimbus – regnskyen og tordenskyen. I kunsten er nimbus glorien rundt hodet på hellige figurer, og de to betydningene har samme utgangspunkt: noe som omgir og skjuler.",
    sources: [ETYM, SNL],
  },
  nova: {
    elements: [{ form: "novus", sense: "ny" }],
    origin:
      "Nova er latin for ny, og brukes i astronomien om en stjerne som plutselig blusser opp. Som fornavn er det moderne, og det har steget raskt i Norden de siste årene.",
    sources: [NPL, BTN],
  },
  nox: {
    origin:
      "Nox er latin for natt, og navnet på nattens gudinne i romersk mytologi – den samme som Nyx hos grekerne. Ordet er i slekt med norsk natt, gresk nyx og sanskrit nakt, og hører til de aller eldste ordene som kan følges gjennom hele den indoeuropeiske språkfamilien.",
    related: ["Nyx"],
    sources: [SNL, ETYM],
  },
  oliver: {
    origin: [
      "Oliver har to opphav som er vanskelige å skille fra hverandre. Det ene er latin oliva, oliventre. Det andre er norrønt Óleifr – altså Olav – som normannerne tok med til Frankrike, der det ble omformet til Olivier under påvirkning fra oliventreet.",
      "Ridderen Olivier er Rolands nærmeste venn i Rolandskvadet fra 1100-tallet, og paret Roland og Olivier ble stående som selve bildet på vennskap i middelalderlitteraturen.",
      "Navnet fikk et kraftig fall i England på 1600-tallet på grunn av Oliver Cromwell, og kom først tilbake for alvor på 1900-tallet – blant annet gjennom Dickens' «Oliver Twist».",
      "I Norge har Oliver ligget blant de mest brukte guttenavnene siden 2000-tallet, og var på topp i 2024.",
    ],
    variants: ["Olivier"],
    related: ["Olivia", "Ollie", "Olav"],
    sources: [BTN, NPL],
  },
  olivia: {
    origin: [
      "Olivia er trolig laget av Shakespeare. Formen er ikke belagt før «Helligtrekongersaften» rundt 1600, der Olivia er den sørgende grevinnen som forelsker seg i en forkledd kvinne. Shakespeare bygget den sannsynligvis på det italienske Oliva eller rett på latin oliva, oliventre.",
      "Oliventreet er et av Middelhavskulturens eldste symboler. En olivengren sto for fred allerede i antikken, duen med olivengrenen kommer fra fortellingen om Noah, og seierherrene i de olympiske lekene fikk krans av oliven – ikke laurbær.",
      "Navnet lå nesten ubrukt fram til 1900-tallet, og fikk sitt gjennombrudd først på 1990- og 2000-tallet. I dag er det blant de aller mest brukte jentenavnene i både Norge, Storbritannia og USA.",
    ],
    related: ["Oliver", "Ollie"],
    sources: [BTN, SNL],
  },
  ollie: {
    origin:
      "Ollie er en engelsk kortform av Oliver. To stavelser med trykk først og vokal til slutt er den formen dyr lærer inn raskest, og det er en av grunnene til at kortformen brukes så mye som hundenavn. I skateboard er ollie dessuten navnet på et hopp, oppkalt etter Alan «Ollie» Gelfand.",
    related: ["Oliver"],
    sources: [BTN, ETYM],
  },
  patrick: {
    elements: [{ form: "patricius", sense: "av fornem ætt" }],
    origin:
      "Patrick kommer av latin patricius, en romersk adelsmann. Sankt Patrick kristnet Irland på 400-tallet og er landets vernehelgen.",
    variants: ["Patrik"],
    sources: [NPL, BTN],
  },
  rex: {
    elements: [{ form: "rex", sense: "konge" }],
    origin:
      "Rex er latin for konge, i slekt med det norske ordet rik gjennom en felles indoeuropeisk rot. Det har vært et av de mest klassiske hundenavnene i over hundre år.",
    related: ["King"],
    sources: [BTN, ETYM],
  },
  ruby: {
    origin:
      "Ruby er rubinen, av latin ruber, rød – samme rot som norsk rød. Rubin og safir er samme mineral, korund; det er sporstoffene som avgjør fargen, og bare de røde kalles rubin. Navnet ble tatt i bruk som fornavn i England på 1800-tallet, i samme bølge som Pearl, Opal og Beryl.",
    sources: [ETYM, BTN],
  },
  silje: {
    origin:
      "Silje er den norske formen av Cecilia, som går tilbake på det romerske slektsnavnet Caecilius. Navnet knyttes til caecus, blind. Sankta Cecilia er musikkens vernehelgen – ikke fordi hun spilte, men på grunn av en misforstått linje i legenden hennes om at hun sang i sitt hjerte.",
    variants: ["Cecilie", "Sille"],
    sources: [NPL, SNL],
  },
  stella: {
    elements: [{ form: "stella", sense: "stjerne" }],
    origin:
      "Stella er latin for stjerne. Navnet ble laget av dikteren Philip Sidney på 1500-tallet, og er i slekt med tittelen Stella Maris – havets stjerne – som brukes om jomfru Maria.",
    sources: [NPL, BTN],
  },
  victor: {
    elements: [{ form: "victor", sense: "seierherre" }],
    origin:
      "Victor er latin for den som vinner. Det ble tidlig brukt av kristne som et bilde på seieren over døden, og har vært pavenavn tre ganger.",
    variants: ["Viktor"],
    related: ["Victoria"],
    sources: [NPL, BTN],
  },
  victoria: {
    elements: [{ form: "victoria", sense: "seier" }],
    origin:
      "Victoria er seiersgudinnen i romersk mytologi, den romerske utgaven av greske Nike. Dronning Victoria gjorde navnet utbredt i hele Europa på 1800-tallet.",
    variants: ["Viktoria"],
    related: ["Victor"],
    sources: [NPL, BTN],
  },
};
