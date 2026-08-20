import type { NameDetail } from "./types";

/**
 * Latinske navn.
 *
 * Mange av disse var romerske slektsnavn eller tilnavn før de ble fornavn.
 * Det er verdt å vite når man leser betydningen: et romersk slektsnavn hadde
 * ofte mistet den opprinnelige meningen lenge før noen het det.
 */
export const latinske: Record<string, NameDetail> = {
  adrian: {
    origin:
      "Adrian betyr «fra Hadria», en by ved Adriaterhavet – som også har gitt havet navnet sitt. Keiser Hadrian, som bygde muren i Nord-England, bar samme navn.",
    variants: ["Adrian", "Adrien"],
  },
  alma: {
    elements: [{ form: "almus", sense: "nærende, god" }],
    origin:
      "Alma kommer av latin almus, som betyr nærende eller godgjørende – det samme ordet som i alma mater, den nærende moren. På spansk og italiensk betyr alma dessuten sjel.",
  },
  anton: {
    origin:
      "Anton kommer av det romerske slektsnavnet Antonius, som Marcus Antonius tilhørte. Betydningen er usikker og trolig etruskisk; tolkningen «uvurderlig» kom til langt senere, ved en sammenblanding med gresk anthos, blomst.",
    variants: ["Antonius", "Anthon"],
  },
  aurora: {
    elements: [{ form: "aurora", sense: "morgenrøde, daggry" }],
    origin:
      "Aurora er morgenrødens gudinne i romersk mytologi, søster til solen og månen. Nordlyset heter aurora borealis etter henne – den nordlige morgenrøden.",
  },
  celine: {
    origin:
      "Celine er en fransk form av Caelina, av latin caelum, himmel. Navnet brukes også som kortform av Marceline.",
    variants: ["Céline", "Selina"],
  },
  dexter: {
    origin:
      "Dexter er latin for høyre, og i overført betydning behendig eller dyktig – det samme som ligger i norsk «å være rappfotet». Ordet lever videre i ambidekster, den som er like god med begge hender.",
  },
  emil: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emil kommer av det romerske slektsnavnet Aemilius, som knyttes til aemulus – den som kappes eller strever. Emil i Lønneberget har gjort navnet kjent i hele Norden.",
    variants: ["Emile"],
    related: ["Emilie", "Emilia"],
  },
  emilia: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emilia er den kvinnelige formen av Aemilius. Navnet er kjent fra Shakespeares Othello, og har vært blant de mest brukte jentenavnene i Norge de siste årene.",
    variants: ["Emilie", "Emelia"],
    related: ["Emil"],
  },
  emilian: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emilian er en utvidet form av Aemilius, dannet med den latinske endelsen -ianus som markerte tilhørighet til en slekt.",
    related: ["Emil"],
  },
  emilie: {
    elements: [{ form: "aemulus", sense: "ivrig, kappelysten" }],
    origin:
      "Emilie er den franske og nordiske formen av Emilia. Den har ligget høyt på norske navnelister i flere tiår.",
    variants: ["Emilia", "Emely"],
    related: ["Emil"],
  },
  felix: {
    elements: [{ form: "felix", sense: "lykkelig, heldig" }],
    origin:
      "Felix betyr lykkelig på latin, og ble brukt som tilnavn på romere som hadde hellet med seg – blant andre diktatoren Sulla. Navnet er også vanlig som kattenavn.",
  },
  gracie: {
    origin:
      "Gracie er en engelsk kjæleform av Grace, av latin gratia – nåde og ynde. Gratiene var de tre gudinnene for sjarm og skjønnhet i romersk mytologi.",
    related: ["Grace"],
  },
  lars: {
    origin:
      "Lars er den nordiske kortformen av Laurentius, «mannen fra Laurentum». Byen fikk trolig navn etter laurbærtrærne, og laurbærkransen er derfor knyttet til navnet.",
    variants: ["Lauritz", "Laurits"],
  },
  leo: {
    elements: [{ form: "leo", sense: "løve" }],
    origin:
      "Leo er latin for løve, og har vært pavenavn tretten ganger. Det er i slekt med greske Leon og med Leonard.",
    related: ["Leon", "Leonard"],
  },
  livia: {
    origin:
      "Livia kommer av det romerske slektsnavnet Livius. Betydningen er usikker; den vanligste tolkningen knytter navnet til lividus, blågrå. Livia Drusilla var keiser Augustus' hustru.",
  },
  lucas: {
    elements: [{ form: "lux", sense: "lys" }],
    origin:
      "Lucas kommer av Lucanus, «mannen fra Lucania» i Sør-Italia, men er tidlig blitt knyttet til lux, lys. Evangelisten Lukas bærer navnet, og det har vært blant de mest brukte guttenavnene i Norge de siste årene.",
    variants: ["Lukas", "Luca"],
  },
  lucy: {
    elements: [{ form: "lux", sense: "lys" }],
    origin:
      "Lucy er den engelske formen av Lucia, som kommer av lux, lys. Sankta Lucia feires 13. desember, som i den gamle kalenderen var årets mørkeste dag.",
    related: ["Lucas"],
  },
  luna: {
    elements: [{ form: "luna", sense: "måne" }],
    origin:
      "Luna er månegudinnen i romersk mytologi, og det latinske ordet for månen. Navnet brukes i dag både til barn, hunder og katter – og er blant de aller vanligste kattenavnene i Norge.",
    related: ["Selina", "Måne"],
  },
  magnus: {
    elements: [{ form: "magnus", sense: "stor, mektig" }],
    origin:
      "Magnus kom til Norden gjennom Karl den store, Carolus Magnus. Olav den hellige oppkalte sønnen sin Magnus etter ham, og navnet ble deretter et av de vanligste kongenavnene i Norge.",
  },
  marius: {
    origin:
      "Marius er et romersk slektsnavn, kjent fra hærføreren Gaius Marius. Det knyttes gjerne til krigsguden Mars, men kan også komme av mare, hav.",
    related: ["Markus", "Martin"],
  },
  markus: {
    origin:
      "Markus kommer av Marcus, et av de vanligste romerske fornavnene, avledet av krigsguden Mars. Evangelisten Markus er den mest kjente bæreren.",
    variants: ["Marcus", "Marko"],
    related: ["Martin", "Marius"],
  },
  martin: {
    origin:
      "Martin kommer av Martinus, avledet av Mars. Sankt Martin av Tours, som delte kappen sin med en tigger, er en av de mest dyrkede helgenene i Europa – og Martin Luther bar navnet etter ham.",
    variants: ["Morten"],
    related: ["Markus"],
  },
  max: {
    elements: [{ form: "maximus", sense: "den største" }],
    origin:
      "Max er en kortform av Maximilian eller Maximus, av latin maximus, den største. Det er blant de mest brukte hundenavnene i Europa.",
    related: ["Magnus"],
  },
  natalie: {
    elements: [{ form: "natalis dies", sense: "fødselsdagen" }],
    origin:
      "Natalie kommer av latin natalis dies – fødselsdagen, som i kirkelig språkbruk betydde Kristi fødsel. Navnet ble gitt til barn født i juletiden.",
    variants: ["Nathalie", "Natalia"],
  },
  nero: {
    origin:
      "Nero er et sabinsk tilnavn som betyr sterk og kraftfull. Det er uløselig knyttet til keiser Nero, og brukes i dag først og fremst som hundenavn.",
  },
  nimbus: {
    origin:
      "Nimbus er latin for regnsky, og brukes både om skytypen nimbostratus og om glorien rundt hodet på hellige figurer i kunsten.",
  },
  nova: {
    elements: [{ form: "novus", sense: "ny" }],
    origin:
      "Nova er latin for ny, og brukes i astronomien om en stjerne som plutselig blusser opp. Som fornavn er det moderne, og det har steget raskt i Norden de siste årene.",
  },
  nox: {
    origin:
      "Nox er latin for natt, og navnet på nattens gudinne i romersk mytologi – den samme som Nyx hos grekerne.",
    related: ["Nyx"],
  },
  oliver: {
    origin:
      "Oliver knyttes til latin oliva, oliventre, men kan også gå tilbake på et norrønt Óleifr som normannerne tok med til Frankrike. Oliventreet er et gammelt fredssymbol, og det er den tolkningen som har festet seg.",
    variants: ["Olivier"],
    related: ["Olivia", "Ollie"],
  },
  olivia: {
    origin:
      "Olivia ble brukt av Shakespeare i Helligtrekongersaften, og det er trolig han som gjorde det til et fornavn. Det knyttes til oliventreet, som i Middelhavskulturen står for fred og overflod.",
    related: ["Oliver"],
  },
  ollie: {
    origin:
      "Ollie er en engelsk kortform av Oliver. To stavelser med vokal til slutt gjør det godt egnet som hundenavn.",
    related: ["Oliver"],
  },
  patrick: {
    elements: [{ form: "patricius", sense: "av fornem ætt" }],
    origin:
      "Patrick kommer av latin patricius, en romersk adelsmann. Sankt Patrick kristnet Irland på 400-tallet og er landets vernehelgen.",
    variants: ["Patrik"],
  },
  rex: {
    elements: [{ form: "rex", sense: "konge" }],
    origin:
      "Rex er latin for konge, i slekt med det norske ordet rik gjennom en felles indoeuropeisk rot. Det har vært et av de mest klassiske hundenavnene i over hundre år.",
    related: ["King"],
  },
  ruby: {
    origin:
      "Ruby er den røde edelstenen, av latin ruber, rød. Navnet ble tatt i bruk som fornavn i England på 1800-tallet, sammen med andre smykkestennavn som Pearl og Opal.",
  },
  silje: {
    origin:
      "Silje er den norske formen av Cecilia, som går tilbake på det romerske slektsnavnet Caecilius. Navnet knyttes til caecus, blind. Sankta Cecilia er musikkens vernehelgen.",
    variants: ["Cecilie", "Sillje"],
  },
  stella: {
    elements: [{ form: "stella", sense: "stjerne" }],
    origin:
      "Stella er latin for stjerne. Navnet ble laget av dikteren Philip Sidney på 1500-tallet, og er i slekt med tittelen Stella Maris – havets stjerne – som brukes om jomfru Maria.",
  },
  victor: {
    elements: [{ form: "victor", sense: "seierherre" }],
    origin:
      "Victor er latin for den som vinner. Det ble tidlig brukt av kristne som et bilde på seieren over døden, og har vært pavenavn tre ganger.",
    variants: ["Viktor"],
    related: ["Victoria"],
  },
  victoria: {
    elements: [{ form: "victoria", sense: "seier" }],
    origin:
      "Victoria er seiersgudinnen i romersk mytologi, den romerske utgaven av greske Nike. Dronning Victoria gjorde navnet utbredt i hele Europa på 1800-tallet.",
    variants: ["Viktoria"],
    related: ["Victor"],
  },
};
