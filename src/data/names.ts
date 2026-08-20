// Navnedata for Navnetips.
//
// Ett navn = én oppføring = én side på /navn/<slug>. Et navn kan høre hjemme i
// flere kategorier (Luna brukes både som jente-, hunde- og kattenavn), derfor er
// "categories" en liste.
//
// Generert fra den opprinnelige datasettet og deretter vedlikeholdt for hånd.

export type Category = "jente" | "gutt" | "hund" | "katt";
export type Style = "norrønt" | "klassisk" | "moderne" | "unikt";

export type NameEntry = {
  name: string;
  slug: string;
  categories: Category[];
  meaning: string;
  origin: string;
  styles: Style[];
};

export const names: NameEntry[] = [
  { name: "Abby", slug: "abby", categories: ["hund"], meaning: "Min fars glede", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Ace", slug: "ace", categories: ["hund"], meaning: "Mester", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Ada", slug: "ada", categories: ["jente"], meaning: "Edel", origin: "Germansk", styles: ["moderne"] },
  { name: "Adrian", slug: "adrian", categories: ["gutt"], meaning: "Fra Hadria", origin: "Latin", styles: ["moderne"] },
  { name: "Agnes", slug: "agnes", categories: ["jente"], meaning: "Ren", origin: "Gresk", styles: ["moderne"] },
  { name: "Aksel", slug: "aksel", categories: ["gutt"], meaning: "Faderens fred", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Albert", slug: "albert", categories: ["gutt"], meaning: "Strålende", origin: "Germansk", styles: ["klassisk"] },
  { name: "Alf", slug: "alf", categories: ["gutt"], meaning: "Alv", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Alfie", slug: "alfie", categories: ["hund"], meaning: "Vis rådgiver", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Alfred", slug: "alfred", categories: ["gutt"], meaning: "Vis rådgiver", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Alma", slug: "alma", categories: ["jente"], meaning: "Godhjertet", origin: "Latin", styles: ["moderne"] },
  { name: "Alvar", slug: "alvar", categories: ["gutt"], meaning: "Hærens alv", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Alvhild", slug: "alvhild", categories: ["jente"], meaning: "Alv og kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Alvilde", slug: "alvilde", categories: ["jente"], meaning: "Alv + kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Anders", slug: "anders", categories: ["gutt"], meaning: "Mandig, modig", origin: "Gresk", styles: ["klassisk"] },
  { name: "Andrea", slug: "andrea", categories: ["jente"], meaning: "Mandig", origin: "Gresk", styles: ["moderne"] },
  { name: "Ane", slug: "ane", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Angus", slug: "angus", categories: ["hund"], meaning: "Enestående valg", origin: "Skotsk", styles: ["unikt"] },
  { name: "Anna", slug: "anna", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Anton", slug: "anton", categories: ["gutt"], meaning: "Uvurderlig", origin: "Latin", styles: ["moderne"] },
  { name: "Apollo", slug: "apollo", categories: ["hund"], meaning: "Gud av lys", origin: "Gresk", styles: ["unikt"] },
  { name: "Archie", slug: "archie", categories: ["hund"], meaning: "Sann modighet", origin: "Engelsk", styles: ["unikt"] },
  { name: "Aria", slug: "aria", categories: ["jente"], meaning: "Melodi", origin: "Italiensk", styles: ["moderne"] },
  { name: "Arna", slug: "arna", categories: ["jente"], meaning: "Ørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Arnfinn", slug: "arnfinn", categories: ["gutt"], meaning: "Ørn + Finn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Arnold", slug: "arnold", categories: ["gutt"], meaning: "Ørnens hersker", origin: "Germansk", styles: ["klassisk"] },
  { name: "Arthur", slug: "arthur", categories: ["gutt"], meaning: "Bjørn", origin: "Keltisk", styles: ["moderne"] },
  { name: "Arvid", slug: "arvid", categories: ["gutt"], meaning: "Ørnens tre", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ash", slug: "ash", categories: ["katt"], meaning: "Aske", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ask", slug: "ask", categories: ["gutt"], meaning: "Asketre", origin: "Norrønt", styles: ["moderne"] },
  { name: "Aslak", slug: "aslak", categories: ["gutt"], meaning: "Guds kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Asta", slug: "asta", categories: ["jente"], meaning: "Guddommelig vakker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Astrid", slug: "astrid", categories: ["jente"], meaning: "Guddommelig skjønnhet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Atlas", slug: "atlas", categories: ["hund"], meaning: "Bærer av himmelen", origin: "Gresk", styles: ["unikt"] },
  { name: "Aud", slug: "aud", categories: ["jente"], meaning: "Rikdom", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Audun", slug: "audun", categories: ["gutt"], meaning: "Rik venn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Aurora", slug: "aurora", categories: ["jente"], meaning: "Morgenrødens gudinne", origin: "Latin", styles: ["moderne"] },
  { name: "Bailey", slug: "bailey", categories: ["hund"], meaning: "Bødel", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Balder", slug: "balder", categories: ["hund"], meaning: "Gud av lys", origin: "Norrønt", styles: ["moderne"] },
  { name: "Bandit", slug: "bandit", categories: ["hund"], meaning: "Bandit", origin: "Italiensk", styles: ["unikt"] },
  { name: "Baron", slug: "baron", categories: ["hund"], meaning: "Ung kriger", origin: "Germansk", styles: ["unikt"] },
  { name: "Baxter", slug: "baxter", categories: ["hund"], meaning: "Baker", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bear", slug: "bear", categories: ["hund"], meaning: "Bjørn", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bella", slug: "bella", categories: ["hund", "katt"], meaning: "Vakker", origin: "Italiensk", styles: ["klassisk"] },
  { name: "Benji", slug: "benji", categories: ["hund"], meaning: "Sørlig sønn", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Bentley", slug: "bentley", categories: ["hund"], meaning: "Eng med grovt gress", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bergljot", slug: "bergljot", categories: ["jente"], meaning: "Lysende bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Berit", slug: "berit", categories: ["jente"], meaning: "Den strålende", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Bingo", slug: "bingo", categories: ["hund"], meaning: "Vinner", origin: "Engelsk", styles: ["unikt"] },
  { name: "Birger", slug: "birger", categories: ["gutt"], meaning: "Hjelper", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Birk", slug: "birk", categories: ["gutt"], meaning: "Bjørk", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bjarne", slug: "bjarne", categories: ["gutt"], meaning: "Bjørn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Bjørn", slug: "bjorn", categories: ["gutt"], meaning: "Bjørn (dyret)", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bjørnar", slug: "bjornar", categories: ["gutt"], meaning: "Bjørn-kriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Blaze", slug: "blaze", categories: ["hund"], meaning: "Flamme", origin: "Engelsk", styles: ["unikt"] },
  { name: "Blomst", slug: "blomst", categories: ["hund"], meaning: "Blomster", origin: "Norsk", styles: ["moderne"] },
  { name: "Blue", slug: "blue", categories: ["hund"], meaning: "Blå", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bo", slug: "bo", categories: ["gutt"], meaning: "Den som bor", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Bolt", slug: "bolt", categories: ["hund"], meaning: "Lyn", origin: "Engelsk", styles: ["unikt"] },
  { name: "Brage", slug: "brage", categories: ["gutt"], meaning: "Poesiens gud", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bris", slug: "bris", categories: ["hund"], meaning: "Vind", origin: "Norsk", styles: ["moderne"] },
  { name: "Bruce", slug: "bruce", categories: ["hund"], meaning: "Fra krattskogen", origin: "Fransk", styles: ["unikt"] },
  { name: "Bruno", slug: "bruno", categories: ["hund"], meaning: "Brun", origin: "Germansk", styles: ["klassisk", "unikt"] },
  { name: "Brynhild", slug: "brynhild", categories: ["jente"], meaning: "Brynje-kjemper", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Buddy", slug: "buddy", categories: ["hund"], meaning: "Venn", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Buster", slug: "buster", categories: ["hund"], meaning: "En som bryter eller sprenger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Carl", slug: "carl", categories: ["gutt"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Casey", slug: "casey", categories: ["hund"], meaning: "Årvåken", origin: "Irsk", styles: ["unikt"] },
  { name: "Celine", slug: "celine", categories: ["jente"], meaning: "Himmelsk", origin: "Latin", styles: ["moderne"] },
  { name: "Champ", slug: "champ", categories: ["hund"], meaning: "Mester", origin: "Engelsk", styles: ["unikt"] },
  { name: "Chance", slug: "chance", categories: ["hund"], meaning: "Sjanse", origin: "Engelsk", styles: ["unikt"] },
  { name: "Charlie", slug: "charlie", categories: ["hund"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Chloe", slug: "chloe", categories: ["hund"], meaning: "Unge grønne skudd", origin: "Gresk", styles: ["klassisk"] },
  { name: "Coco", slug: "coco", categories: ["hund"], meaning: "Kokosnøtt", origin: "Spansk", styles: ["unikt"] },
  { name: "Cody", slug: "cody", categories: ["hund"], meaning: "Hjelpsom", origin: "Irsk", styles: ["klassisk"] },
  { name: "Conrad", slug: "conrad", categories: ["gutt"], meaning: "Modig rådgiver", origin: "Germansk", styles: ["klassisk"] },
  { name: "Cooper", slug: "cooper", categories: ["hund"], meaning: "Tønnemaker", origin: "Engelsk", styles: ["unikt"] },
  { name: "Dag", slug: "dag", categories: ["gutt"], meaning: "Dag, lys", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Dagalv", slug: "dagalv", categories: ["gutt"], meaning: "Dag + alv", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagfinn", slug: "dagfinn", categories: ["gutt"], meaning: "Dag + Finn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Dagfrid", slug: "dagfrid", categories: ["jente"], meaning: "Dag + fred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagmar", slug: "dagmar", categories: ["jente"], meaning: "Berømt dag", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagrun", slug: "dagrun", categories: ["jente"], meaning: "Dag + hemmelighet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Daisy", slug: "daisy", categories: ["hund"], meaning: "Prestekrage", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Dexter", slug: "dexter", categories: ["hund"], meaning: "Høyre hånd", origin: "Latin", styles: ["unikt"] },
  { name: "Diesel", slug: "diesel", categories: ["hund"], meaning: "Drivstoff", origin: "Engelsk", styles: ["unikt"] },
  { name: "Dina", slug: "dina", categories: ["jente"], meaning: "Dømt", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Disa", slug: "disa", categories: ["jente"], meaning: "Gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Duke", slug: "duke", categories: ["hund"], meaning: "Hertug", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Echo", slug: "echo", categories: ["hund", "katt"], meaning: "Gjenlyd", origin: "Gresk", styles: ["unikt"] },
  { name: "Egil", slug: "egil", categories: ["gutt"], meaning: "Egg, skarp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Eilif", slug: "eilif", categories: ["gutt"], meaning: "Evig arving", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Einar", slug: "einar", categories: ["gutt"], meaning: "En som kjemper alene", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Eir", slug: "eir", categories: ["jente"], meaning: "Nåde, barmhjertighet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eivind", slug: "eivind", categories: ["gutt"], meaning: "Øy-vind", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Eivor", slug: "eivor", categories: ["jente"], meaning: "Øy-beskytter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eldar", slug: "eldar", categories: ["gutt"], meaning: "Flamme", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eldrid", slug: "eldrid", categories: ["jente"], meaning: "Ild + vakker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Elias", slug: "elias", categories: ["gutt"], meaning: "Herren er min Gud", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Elida", slug: "elida", categories: ["jente"], meaning: "Den vakre", origin: "Gresk", styles: ["moderne"] },
  { name: "Eline", slug: "eline", categories: ["jente"], meaning: "Lys", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Elise", slug: "elise", categories: ["jente"], meaning: "Gud er min ed", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Ella", slug: "ella", categories: ["jente"], meaning: "Fe, lys", origin: "Germansk", styles: ["moderne"] },
  { name: "Ellie", slug: "ellie", categories: ["jente"], meaning: "Lys", origin: "Gresk", styles: ["moderne"] },
  { name: "Ember", slug: "ember", categories: ["katt"], meaning: "Glød", origin: "Engelsk", styles: ["unikt"] },
  { name: "Embla", slug: "embla", categories: ["jente"], meaning: "Den første kvinnen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Emil", slug: "emil", categories: ["gutt"], meaning: "Rival", origin: "Latin", styles: ["moderne"] },
  { name: "Emilia", slug: "emilia", categories: ["jente"], meaning: "Rival", origin: "Latin", styles: ["moderne"] },
  { name: "Emilian", slug: "emilian", categories: ["gutt"], meaning: "Rival", origin: "Latin", styles: ["moderne"] },
  { name: "Emilie", slug: "emilie", categories: ["jente"], meaning: "Rival", origin: "Latin", styles: ["moderne"] },
  { name: "Emma", slug: "emma", categories: ["jente"], meaning: "Hel, universal", origin: "Germansk", styles: ["klassisk"] },
  { name: "Erik", slug: "erik", categories: ["gutt"], meaning: "Enevolds hersker", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Erle", slug: "erle", categories: ["jente"], meaning: "Jarl", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Erlend", slug: "erlend", categories: ["gutt"], meaning: "Fremmed land", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Erling", slug: "erling", categories: ["gutt"], meaning: "Jarlens etterkommer", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Eskil", slug: "eskil", categories: ["gutt"], meaning: "Guds kjele", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Even", slug: "even", categories: ["gutt"], meaning: "Livets stein", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Eyvind", slug: "eyvind", categories: ["gutt"], meaning: "Øy-vind", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Felix", slug: "felix", categories: ["gutt", "katt"], meaning: "Lykkelig", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Filip", slug: "filip", categories: ["gutt"], meaning: "Hestevenn", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Finn", slug: "finn", categories: ["gutt"], meaning: "Vandreren", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Fluffy", slug: "fluffy", categories: ["katt"], meaning: "Lodden", origin: "Engelsk", styles: ["unikt"] },
  { name: "Frankie", slug: "frankie", categories: ["hund"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Freya", slug: "freya", categories: ["katt"], meaning: "Frue, gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Frida", slug: "frida", categories: ["jente"], meaning: "Fred og beskyttelse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Frode", slug: "frode", categories: ["gutt"], meaning: "Vis og klok", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Frost", slug: "frost", categories: ["hund", "katt"], meaning: "Kald, isete", origin: "Engelsk", styles: ["moderne", "unikt"] },
  { name: "Frøya", slug: "froya", categories: ["jente"], meaning: "Fru, gudinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gabriel", slug: "gabriel", categories: ["gutt"], meaning: "Guds styrke", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Gard", slug: "gard", categories: ["gutt"], meaning: "Beskytter", origin: "Norrønt", styles: ["moderne"] },
  { name: "Geir", slug: "geir", categories: ["gutt"], meaning: "Spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Geirhild", slug: "geirhild", categories: ["jente"], meaning: "Spyd + kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Geirmund", slug: "geirmund", categories: ["gutt"], meaning: "Spyd-beskyttelse", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "George", slug: "george", categories: ["hund"], meaning: "Bonde", origin: "Gresk", styles: ["klassisk"] },
  { name: "Gerd", slug: "gerd", categories: ["jente"], meaning: "Inngjerdet plass", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gisken", slug: "gisken", categories: ["jente"], meaning: "Gave", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gisle", slug: "gisle", categories: ["gutt"], meaning: "Gissel", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gizmo", slug: "gizmo", categories: ["hund"], meaning: "Dings", origin: "Engelsk", styles: ["unikt"] },
  { name: "Gjermund", slug: "gjermund", categories: ["gutt"], meaning: "Spyd-beskyttelse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gracie", slug: "gracie", categories: ["hund"], meaning: "Nåde", origin: "Latin", styles: ["klassisk"] },
  { name: "Gro", slug: "gro", categories: ["jente"], meaning: "Å vokse", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gudny", slug: "gudny", categories: ["jente"], meaning: "Guddommelig nyhet", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gudrun", slug: "gudrun", categories: ["jente"], meaning: "Guddommelig hemmelighet", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gull", slug: "gull", categories: ["hund"], meaning: "Skatt", origin: "Norsk", styles: ["moderne"] },
  { name: "Gulltass", slug: "gulltass", categories: ["katt"], meaning: "Gyllen pote", origin: "Norsk", styles: ["moderne"] },
  { name: "Gunn", slug: "gunn", categories: ["jente"], meaning: "Kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gunnar", slug: "gunnar", categories: ["gutt"], meaning: "Krigens kriger", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gunnhild", slug: "gunnhild", categories: ["jente"], meaning: "Kamp + kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gunvor", slug: "gunvor", categories: ["jente"], meaning: "Kamp-vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gus", slug: "gus", categories: ["hund"], meaning: "Storslått", origin: "Germansk", styles: ["klassisk"] },
  { name: "Gustav", slug: "gustav", categories: ["gutt"], meaning: "Goter's stav", origin: "Svensk", styles: ["klassisk"] },
  { name: "Haldor", slug: "haldor", categories: ["gutt"], meaning: "Tor sin stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hallbjørg", slug: "hallbjorg", categories: ["jente"], meaning: "Stein + frelse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hallvard", slug: "hallvard", categories: ["gutt"], meaning: "Steinvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Halvdan", slug: "halvdan", categories: ["gutt"], meaning: "Halv-dansk", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hank", slug: "hank", categories: ["hund"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Hans", slug: "hans", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Harald", slug: "harald", categories: ["gutt"], meaning: "Hærens hersker", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Harley", slug: "harley", categories: ["hund"], meaning: "Hare-eng", origin: "Engelsk", styles: ["unikt"] },
  { name: "Hedda", slug: "hedda", categories: ["jente"], meaning: "Kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Hedvig", slug: "hedvig", categories: ["jente"], meaning: "Kamp + strid", origin: "Germansk", styles: ["moderne"] },
  { name: "Helena", slug: "helena", categories: ["jente"], meaning: "Lys", origin: "Gresk", styles: ["moderne"] },
  { name: "Helga", slug: "helga", categories: ["jente"], meaning: "Hellig", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Henry", slug: "henry", categories: ["hund"], meaning: "Hjemmets hersker", origin: "Germansk", styles: ["klassisk"] },
  { name: "Herman", slug: "herman", categories: ["gutt"], meaning: "Krigermann", origin: "Germansk", styles: ["moderne"] },
  { name: "Hervor", slug: "hervor", categories: ["jente"], meaning: "Sverd-vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hilde", slug: "hilde", categories: ["jente"], meaning: "Kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Hunter", slug: "hunter", categories: ["hund"], meaning: "Jeger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Håkon", slug: "hakon", categories: ["gutt"], meaning: "Høy sønn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Haakon", slug: "haakon", categories: ["gutt"], meaning: "Høy sønn", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Håvar", slug: "havar", categories: ["gutt"], meaning: "Høy vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ida", slug: "ida", categories: ["jente"], meaning: "Arbeid", origin: "Germansk", styles: ["moderne"] },
  { name: "Idun", slug: "idun", categories: ["jente"], meaning: "Den som forynger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Idunn", slug: "idunn", categories: ["jente"], meaning: "Den som forynger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Inge", slug: "inge", categories: ["gutt"], meaning: "Ing's sønn", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Ingfrid", slug: "ingfrid", categories: ["jente"], meaning: "Ing + fred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingjerd", slug: "ingjerd", categories: ["jente"], meaning: "Ing's beskyttelse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingrid", slug: "ingrid", categories: ["jente"], meaning: "Ing's skjønnhet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingunn", slug: "ingunn", categories: ["jente"], meaning: "Ing + kjærlighet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingvald", slug: "ingvald", categories: ["gutt"], meaning: "Ing's hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingvar", slug: "ingvar", categories: ["gutt"], meaning: "Ings kriger", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Isabella", slug: "isabella", categories: ["jente"], meaning: "Gud er fullkommen", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Isak", slug: "isak", categories: ["gutt"], meaning: "Han vil le", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Ivar", slug: "ivar", categories: ["gutt"], meaning: "Barlind", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Jack", slug: "jack", categories: ["hund"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jackson", slug: "jackson", categories: ["hund"], meaning: "Guds nåde", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jacob", slug: "jacob", categories: ["gutt"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jake", slug: "jake", categories: ["hund"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jakob", slug: "jakob", categories: ["gutt"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jan", slug: "jan", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jarand", slug: "jarand", categories: ["gutt"], meaning: "Jordens beskytter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Jasper", slug: "jasper", categories: ["hund"], meaning: "Skattmester", origin: "Persisk", styles: ["unikt"] },
  { name: "Jesper", slug: "jesper", categories: ["gutt"], meaning: "Skattmester", origin: "Persisk", styles: ["moderne"] },
  { name: "Jesse", slug: "jesse", categories: ["hund"], meaning: "Gud eksisterer", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jinx", slug: "jinx", categories: ["katt"], meaning: "Forhekselse", origin: "Engelsk", styles: ["unikt"] },
  { name: "Jofrid", slug: "jofrid", categories: ["jente"], meaning: "Vakker fred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Jomar", slug: "jomar", categories: ["gutt"], meaning: "Hestekriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Jon", slug: "jon", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jonathan", slug: "jonathan", categories: ["gutt"], meaning: "Gud har gitt", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jorunn", slug: "jorunn", categories: ["jente"], meaning: "Elskerinnen av hesten", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Kaja", slug: "kaja", categories: ["jente"], meaning: "Ren", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Kari", slug: "kari", categories: ["jente"], meaning: "Renhet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Karl", slug: "karl", categories: ["gutt"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Kevin", slug: "kevin", categories: ["gutt"], meaning: "Kjekk, elskverdig", origin: "Irsk", styles: ["moderne"] },
  { name: "Kine", slug: "kine", categories: ["jente"], meaning: "Modig", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "King", slug: "king", categories: ["hund"], meaning: "Konge", origin: "Engelsk", styles: ["unikt"] },
  { name: "Kira", slug: "kira", categories: ["hund"], meaning: "Strålende", origin: "Russisk", styles: ["unikt"] },
  { name: "Knut", slug: "knut", categories: ["gutt"], meaning: "Knytte, binde", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Kolbein", slug: "kolbein", categories: ["gutt"], meaning: "Mørk bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Kolbjørn", slug: "kolbjorn", categories: ["gutt"], meaning: "Mørk bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Kristian", slug: "kristian", categories: ["gutt"], meaning: "Kristen", origin: "Gresk", styles: ["moderne"] },
  { name: "Kristoffer", slug: "kristoffer", categories: ["gutt"], meaning: "Kristus-bærer", origin: "Gresk", styles: ["moderne"] },
  { name: "Kåre", slug: "kare", categories: ["gutt"], meaning: "Buet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Lars", slug: "lars", categories: ["gutt"], meaning: "Fra Laurentum", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Leah", slug: "leah", categories: ["jente"], meaning: "Vennlig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Leif", slug: "leif", categories: ["gutt"], meaning: "Arving, etterkommer", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Leiv", slug: "leiv", categories: ["gutt"], meaning: "Arving", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Leo", slug: "leo", categories: ["gutt"], meaning: "Løve", origin: "Latin", styles: ["moderne"] },
  { name: "Leon", slug: "leon", categories: ["gutt"], meaning: "Løve", origin: "Gresk", styles: ["moderne"] },
  { name: "Leonard", slug: "leonard", categories: ["gutt"], meaning: "Sterk som en løve", origin: "Germansk", styles: ["klassisk"] },
  { name: "Liam", slug: "liam", categories: ["gutt"], meaning: "Sterk beskytter", origin: "Irsk", styles: ["moderne"] },
  { name: "Lily", slug: "lily", categories: ["jente"], meaning: "Lilje", origin: "Engelsk", styles: ["moderne"] },
  { name: "Linnea", slug: "linnea", categories: ["jente"], meaning: "Blomst", origin: "Norsk", styles: ["moderne"] },
  { name: "Linus", slug: "linus", categories: ["gutt"], meaning: "Den gylne", origin: "Gresk", styles: ["moderne"] },
  { name: "Liten", slug: "liten", categories: ["katt"], meaning: "Liten", origin: "Norsk", styles: ["moderne"] },
  { name: "Liv", slug: "liv", categories: ["jente"], meaning: "Liv, vern", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Liva", slug: "liva", categories: ["jente"], meaning: "Liv", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Livia", slug: "livia", categories: ["jente"], meaning: "Blå", origin: "Latin", styles: ["moderne"] },
  { name: "Loke", slug: "loke", categories: ["gutt", "katt"], meaning: "Låser, knytter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Loki", slug: "loki", categories: ["katt"], meaning: "Lur, listig", origin: "Norrønt", styles: ["unikt"] },
  { name: "Lola", slug: "lola", categories: ["hund"], meaning: "Sorg", origin: "Spansk", styles: ["klassisk"] },
  { name: "Louie", slug: "louie", categories: ["hund"], meaning: "Berømt kriger", origin: "Germansk", styles: ["klassisk"] },
  { name: "Lucas", slug: "lucas", categories: ["gutt"], meaning: "Lys", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Lucky", slug: "lucky", categories: ["hund"], meaning: "Heldig", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Lucy", slug: "lucy", categories: ["hund"], meaning: "Lys", origin: "Latin", styles: ["klassisk"] },
  { name: "Ludvig", slug: "ludvig", categories: ["gutt"], meaning: "Berømt kriger", origin: "Germansk", styles: ["moderne"] },
  { name: "Luna", slug: "luna", categories: ["jente", "hund", "katt"], meaning: "Måne", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Lykke", slug: "lykke", categories: ["jente", "hund"], meaning: "Lykke, glede", origin: "Norsk", styles: ["moderne"] },
  { name: "Maggie", slug: "maggie", categories: ["hund"], meaning: "Perle", origin: "Gresk", styles: ["klassisk"] },
  { name: "Magnar", slug: "magnar", categories: ["gutt"], meaning: "Kraftig kriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magnhild", slug: "magnhild", categories: ["jente"], meaning: "Sterk i kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magni", slug: "magni", categories: ["jente"], meaning: "Styrke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magnus", slug: "magnus", categories: ["gutt"], meaning: "Den store", origin: "Latin", styles: ["klassisk"] },
  { name: "Maja", slug: "maja", categories: ["jente"], meaning: "Mor", origin: "Gresk", styles: ["moderne"] },
  { name: "Malena", slug: "malena", categories: ["jente"], meaning: "Kvinne fra Magdala", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Malin", slug: "malin", categories: ["jente"], meaning: "Modig", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Marius", slug: "marius", categories: ["gutt"], meaning: "Mann fra havet", origin: "Latin", styles: ["moderne"] },
  { name: "Markus", slug: "markus", categories: ["gutt"], meaning: "Hengiven til Mars", origin: "Latin", styles: ["moderne"] },
  { name: "Marley", slug: "marley", categories: ["hund"], meaning: "Eng ved sjøen", origin: "Engelsk", styles: ["unikt"] },
  { name: "Martin", slug: "martin", categories: ["gutt"], meaning: "Hengiven til Mars", origin: "Latin", styles: ["moderne"] },
  { name: "Mathea", slug: "mathea", categories: ["jente"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Matheo", slug: "matheo", categories: ["gutt"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mathias", slug: "mathias", categories: ["gutt"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Max", slug: "max", categories: ["hund"], meaning: "Største", origin: "Latin", styles: ["klassisk"] },
  { name: "Melissa", slug: "melissa", categories: ["jente"], meaning: "Honningbie", origin: "Gresk", styles: ["moderne"] },
  { name: "Mette", slug: "mette", categories: ["jente"], meaning: "Perle", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Mia", slug: "mia", categories: ["jente"], meaning: "Bitter eller elsket", origin: "Norrønt", styles: ["moderne"] },
  { name: "Mickey", slug: "mickey", categories: ["hund"], meaning: "Hvem er som Gud?", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Mikkel", slug: "mikkel", categories: ["gutt"], meaning: "Hvem er som Gud?", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mille", slug: "mille", categories: ["jente"], meaning: "Omsorgsfull", origin: "Norsk", styles: ["moderne"] },
  { name: "Milo", slug: "milo", categories: ["hund", "katt"], meaning: "Mild, nådig", origin: "Slavisk", styles: ["klassisk", "moderne"] },
  { name: "Mimi", slug: "mimi", categories: ["katt"], meaning: "Søt, liten", origin: "Japansk", styles: ["unikt"] },
  { name: "Miso", slug: "miso", categories: ["katt"], meaning: "Suppe", origin: "Japansk", styles: ["unikt"] },
  { name: "Misty", slug: "misty", categories: ["katt"], meaning: "Tåkete", origin: "Engelsk", styles: ["unikt"] },
  { name: "Molly", slug: "molly", categories: ["hund"], meaning: "Bitter", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Moose", slug: "moose", categories: ["hund"], meaning: "Elg", origin: "Engelsk", styles: ["unikt"] },
  { name: "Murphy", slug: "murphy", categories: ["hund"], meaning: "Sjøkriger", origin: "Irsk", styles: ["unikt"] },
  { name: "Myk", slug: "myk", categories: ["katt"], meaning: "Myk", origin: "Norsk", styles: ["moderne"] },
  { name: "Måne", slug: "mane", categories: ["katt"], meaning: "Måne", origin: "Norsk", styles: ["moderne"] },
  { name: "Nala", slug: "nala", categories: ["katt"], meaning: "Løvinne", origin: "Afrikansk", styles: ["unikt"] },
  { name: "Nanna", slug: "nanna", categories: ["jente"], meaning: "Modig", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Natalie", slug: "natalie", categories: ["jente"], meaning: "Født på juledag", origin: "Latin", styles: ["moderne"] },
  { name: "Neko", slug: "neko", categories: ["katt"], meaning: "Katt", origin: "Japansk", styles: ["unikt"] },
  { name: "Nero", slug: "nero", categories: ["hund"], meaning: "Sterk", origin: "Latin", styles: ["unikt"] },
  { name: "Nikolai", slug: "nikolai", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["moderne"] },
  { name: "Nils", slug: "nils", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["moderne"] },
  { name: "Nimbus", slug: "nimbus", categories: ["katt"], meaning: "Sky", origin: "Latin", styles: ["unikt"] },
  { name: "Njål", slug: "njal", categories: ["gutt"], meaning: "Vinner", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Noah", slug: "noah", categories: ["gutt"], meaning: "Hvile, fred", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Noomi", slug: "noomi", categories: ["jente"], meaning: "Min glede", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Nora", slug: "nora", categories: ["jente"], meaning: "Lys, ære", origin: "Norsk", styles: ["moderne"] },
  { name: "Nova", slug: "nova", categories: ["jente"], meaning: "Ny", origin: "Latin", styles: ["moderne"] },
  { name: "Nox", slug: "nox", categories: ["katt"], meaning: "Natt", origin: "Latin", styles: ["unikt"] },
  { name: "Nyx", slug: "nyx", categories: ["katt"], meaning: "Nattens gudinne", origin: "Gresk", styles: ["unikt"] },
  { name: "Oda", slug: "oda", categories: ["jente"], meaning: "Rikdom", origin: "Germansk", styles: ["moderne"] },
  { name: "Odd", slug: "odd", categories: ["gutt"], meaning: "Spiss", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Oddfrid", slug: "oddfrid", categories: ["jente"], meaning: "Spiss + fred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Oddvar", slug: "oddvar", categories: ["gutt"], meaning: "Spiss-vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Oddveig", slug: "oddveig", categories: ["jente"], meaning: "Spiss + styrke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Odin", slug: "odin", categories: ["katt"], meaning: "Gud av visdom", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Olav", slug: "olav", categories: ["gutt"], meaning: "Forfader", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Olava", slug: "olava", categories: ["jente"], meaning: "Forfedres arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ole", slug: "ole", categories: ["gutt"], meaning: "Forfader's arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Oliver", slug: "oliver", categories: ["gutt"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Olivia", slug: "olivia", categories: ["jente"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Ollie", slug: "ollie", categories: ["hund"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk"] },
  { name: "Onyx", slug: "onyx", categories: ["katt"], meaning: "Svart edelstein", origin: "Gresk", styles: ["unikt"] },
  { name: "Oscar", slug: "oscar", categories: ["gutt", "hund"], meaning: "Guds spyd", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Otto", slug: "otto", categories: ["hund"], meaning: "Rikdom", origin: "Germansk", styles: ["klassisk"] },
  { name: "Ozzy", slug: "ozzy", categories: ["hund"], meaning: "Guddommelig makt", origin: "Engelsk", styles: ["unikt"] },
  { name: "Patrick", slug: "patrick", categories: ["gutt"], meaning: "Edelmann", origin: "Latin", styles: ["moderne"] },
  { name: "Penny", slug: "penny", categories: ["hund"], meaning: "Vever", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Per", slug: "per", categories: ["gutt"], meaning: "Stein, klippe", origin: "Gresk", styles: ["moderne"] },
  { name: "Pixel", slug: "pixel", categories: ["katt"], meaning: "Digitalt punkt", origin: "Engelsk", styles: ["unikt"] },
  { name: "Prince", slug: "prince", categories: ["hund"], meaning: "Prins", origin: "Engelsk", styles: ["unikt"] },
  { name: "Purre", slug: "purre", categories: ["katt"], meaning: "Lyden av en katt som koser seg", origin: "Norsk", styles: ["moderne"] },
  { name: "Pusur", slug: "pusur", categories: ["katt"], meaning: "Kosete katt", origin: "Norsk", styles: ["moderne"] },
  { name: "Ragnar", slug: "ragnar", categories: ["gutt"], meaning: "Krigsgud", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ragnhild", slug: "ragnhild", categories: ["jente"], meaning: "Råd og strid", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ragnvald", slug: "ragnvald", categories: ["gutt"], meaning: "Råd + hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Randi", slug: "randi", categories: ["jente"], meaning: "Husfred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ranveig", slug: "ranveig", categories: ["jente"], meaning: "Husfred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Rex", slug: "rex", categories: ["hund"], meaning: "Konge", origin: "Latin", styles: ["klassisk", "unikt"] },
  { name: "Riley", slug: "riley", categories: ["hund"], meaning: "Modig", origin: "Irsk", styles: ["klassisk"] },
  { name: "Roar", slug: "roar", categories: ["gutt"], meaning: "Berømt spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Rocco", slug: "rocco", categories: ["hund"], meaning: "Hvile", origin: "Germansk", styles: ["klassisk"] },
  { name: "Rocko", slug: "rocko", categories: ["hund"], meaning: "Sterk", origin: "Italiensk", styles: ["klassisk"] },
  { name: "Rocky", slug: "rocky", categories: ["hund"], meaning: "Sterk som stein", origin: "Germansk", styles: ["klassisk"] },
  { name: "Romeo", slug: "romeo", categories: ["hund"], meaning: "Pilegrim til Roma", origin: "Italiensk", styles: ["unikt"] },
  { name: "Ronja", slug: "ronja", categories: ["jente"], meaning: "Guds glede", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Ruby", slug: "ruby", categories: ["hund"], meaning: "Rød edelsten", origin: "Latin", styles: ["unikt"] },
  { name: "Rudy", slug: "rudy", categories: ["hund"], meaning: "Berømt ulv", origin: "Germansk", styles: ["unikt"] },
  { name: "Runa", slug: "runa", categories: ["jente"], meaning: "Hemmelig kunnskap", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Rusty", slug: "rusty", categories: ["hund"], meaning: "Rødfarget", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ruth", slug: "ruth", categories: ["jente"], meaning: "Venninne", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Sable", slug: "sable", categories: ["katt"], meaning: "Mørk og mystisk", origin: "Engelsk", styles: ["unikt"] },
  { name: "Sadie", slug: "sadie", categories: ["hund"], meaning: "Prinsesse", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Saga", slug: "saga", categories: ["jente"], meaning: "Eventyr", origin: "Norrønt", styles: ["moderne"] },
  { name: "Salem", slug: "salem", categories: ["katt"], meaning: "Fred", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Sam", slug: "sam", categories: ["hund"], meaning: "Guds navn", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Sammy", slug: "sammy", categories: ["hund"], meaning: "Guds navn", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Samson", slug: "samson", categories: ["hund"], meaning: "Sol", origin: "Hebraisk", styles: ["unikt"] },
  { name: "Sander", slug: "sander", categories: ["gutt"], meaning: "Beskytter av menneskeheten", origin: "Gresk", styles: ["moderne"] },
  { name: "Sara", slug: "sara", categories: ["jente"], meaning: "Prinsesse", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Sasha", slug: "sasha", categories: ["hund"], meaning: "Forsvarer av menneskeheten", origin: "Russisk", styles: ["unikt"] },
  { name: "Scout", slug: "scout", categories: ["hund"], meaning: "Speider", origin: "Engelsk", styles: ["unikt"] },
  { name: "Sebastian", slug: "sebastian", categories: ["gutt"], meaning: "Ærverdig", origin: "Gresk", styles: ["moderne"] },
  { name: "Selina", slug: "selina", categories: ["jente"], meaning: "Måne", origin: "Gresk", styles: ["moderne"] },
  { name: "Selma", slug: "selma", categories: ["jente"], meaning: "Beskyttet av Gud", origin: "Norsk", styles: ["moderne"] },
  { name: "Shadow", slug: "shadow", categories: ["hund", "katt"], meaning: "Skygge", origin: "Engelsk", styles: ["unikt"] },
  { name: "Signy", slug: "signy", categories: ["jente"], meaning: "Ny seier", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sigrid", slug: "sigrid", categories: ["jente"], meaning: "Seierens kvinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Sigrun", slug: "sigrun", categories: ["jente"], meaning: "Seier + hemmelighet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Sigurd", slug: "sigurd", categories: ["gutt"], meaning: "Seiersvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sigvald", slug: "sigvald", categories: ["gutt"], meaning: "Seier + hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Silje", slug: "silje", categories: ["jente"], meaning: "Blind", origin: "Latin", styles: ["moderne"] },
  { name: "Simba", slug: "simba", categories: ["hund", "katt"], meaning: "Løve", origin: "Swahili", styles: ["unikt"] },
  { name: "Siv", slug: "siv", categories: ["jente"], meaning: "Brud", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sjur", slug: "sjur", categories: ["gutt"], meaning: "Seiersvokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Skygge", slug: "skygge", categories: ["katt"], meaning: "Skygge", origin: "Norsk", styles: ["moderne"] },
  { name: "Smule", slug: "smule", categories: ["katt"], meaning: "Liten bit", origin: "Norsk", styles: ["moderne"] },
  { name: "Snorre", slug: "snorre", categories: ["gutt"], meaning: "Den som rir", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Snute", slug: "snute", categories: ["katt"], meaning: "Nese", origin: "Norsk", styles: ["moderne"] },
  { name: "Snø", slug: "sno", categories: ["hund"], meaning: "Hvitt som snø", origin: "Norsk", styles: ["moderne"] },
  { name: "Sofia", slug: "sofia", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk"] },
  { name: "Sofie", slug: "sofie", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["moderne"] },
  { name: "Sol", slug: "sol", categories: ["jente"], meaning: "Sol", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Solfrid", slug: "solfrid", categories: ["jente"], meaning: "Sol + fred", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Solveig", slug: "solveig", categories: ["jente"], meaning: "Solens vei", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sondre", slug: "sondre", categories: ["gutt"], meaning: "Sørlig forsvarer", origin: "Norrønt", styles: ["moderne"] },
  { name: "Sonny", slug: "sonny", categories: ["hund"], meaning: "Sønn", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Sophia", slug: "sophia", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Sophie", slug: "sophie", categories: ["hund"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk"] },
  { name: "Sparky", slug: "sparky", categories: ["hund"], meaning: "Livlig", origin: "Engelsk", styles: ["unikt"] },
  { name: "Spragle", slug: "spragle", categories: ["katt"], meaning: "Flerfarget", origin: "Norsk", styles: ["moderne"] },
  { name: "Steinar", slug: "steinar", categories: ["gutt"], meaning: "Stein", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Stella", slug: "stella", categories: ["jente"], meaning: "Stjerne", origin: "Latin", styles: ["moderne"] },
  { name: "Storm", slug: "storm", categories: ["gutt"], meaning: "Storm", origin: "Norrønt", styles: ["moderne"] },
  { name: "Sunniva", slug: "sunniva", categories: ["jente"], meaning: "Solens gave", origin: "Norrønt", styles: ["moderne"] },
  { name: "Sverre", slug: "sverre", categories: ["gutt"], meaning: "Vill, modig", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Tarjei", slug: "tarjei", categories: ["gutt"], meaning: "Tors spyd", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tassen", slug: "tassen", categories: ["hund"], meaning: "Liten", origin: "Norsk", styles: ["moderne"] },
  { name: "Teddy", slug: "teddy", categories: ["hund"], meaning: "Guds gave (fra Theodore)", origin: "Germansk", styles: ["klassisk"] },
  { name: "Teodor", slug: "teodor", categories: ["gutt"], meaning: "Guds gave", origin: "Gresk", styles: ["moderne"] },
  { name: "Thea", slug: "thea", categories: ["jente"], meaning: "Guds gave", origin: "Gresk", styles: ["moderne"] },
  { name: "Theo", slug: "theo", categories: ["gutt"], meaning: "Guds gave", origin: "Gresk", styles: ["moderne"] },
  { name: "Thomas", slug: "thomas", categories: ["gutt"], meaning: "Tvilling", origin: "Arameisk", styles: ["moderne"] },
  { name: "Thor", slug: "thor", categories: ["hund"], meaning: "Tordengud", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Thora", slug: "thora", categories: ["jente"], meaning: "Tors kvinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Thyra", slug: "thyra", categories: ["jente"], meaning: "Hjelm av kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tigra", slug: "tigra", categories: ["katt"], meaning: "Tiger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Tiril", slug: "tiril", categories: ["jente"], meaning: "Vakker pil", origin: "Norrønt", styles: ["moderne"] },
  { name: "Tobias", slug: "tobias", categories: ["gutt"], meaning: "Gud er god", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Toby", slug: "toby", categories: ["hund"], meaning: "Gud er god", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Tora", slug: "tora", categories: ["jente"], meaning: "Tors kvinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Torbjørn", slug: "torbjorn", categories: ["gutt"], meaning: "Tors bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Toril", slug: "toril", categories: ["jente"], meaning: "Tors kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torkel", slug: "torkel", categories: ["gutt"], meaning: "Tors kjele", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torleif", slug: "torleif", categories: ["gutt"], meaning: "Tor + etterkommer", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torstein", slug: "torstein", categories: ["gutt"], meaning: "Tors stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torvald", slug: "torvald", categories: ["gutt"], meaning: "Tors hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tove", slug: "tove", categories: ["jente"], meaning: "Tor", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Trygve", slug: "trygve", categories: ["gutt"], meaning: "Trofast", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Turbo", slug: "turbo", categories: ["hund"], meaning: "Rask", origin: "Norsk", styles: ["moderne"] },
  { name: "Turid", slug: "turid", categories: ["jente"], meaning: "Tors skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tuva", slug: "tuva", categories: ["jente"], meaning: "Tor", origin: "Norrønt", styles: ["moderne"] },
  { name: "Ulf", slug: "ulf", categories: ["gutt"], meaning: "Ulv", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ulrik", slug: "ulrik", categories: ["gutt"], meaning: "Rikdom og makt", origin: "Germansk", styles: ["klassisk"] },
  { name: "Unn", slug: "unn", categories: ["jente"], meaning: "Elsket", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Unni", slug: "unni", categories: ["jente"], meaning: "Elsket", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Urd", slug: "urd", categories: ["jente"], meaning: "Skjebne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vegard", slug: "vegard", categories: ["gutt"], meaning: "Vokter av hjemmet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vetle", slug: "vetle", categories: ["gutt"], meaning: "Liten", origin: "Norrønt", styles: ["moderne"] },
  { name: "Victor", slug: "victor", categories: ["gutt"], meaning: "Seierherre", origin: "Latin", styles: ["moderne"] },
  { name: "Victoria", slug: "victoria", categories: ["jente"], meaning: "Seier", origin: "Latin", styles: ["moderne"] },
  { name: "Vidar", slug: "vidar", categories: ["gutt"], meaning: "Kriger i skogen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vidkun", slug: "vidkun", categories: ["gutt"], meaning: "Skogens kriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vigdis", slug: "vigdis", categories: ["jente"], meaning: "Krigsgudinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Viking", slug: "viking", categories: ["gutt"], meaning: "Sjøkriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vilde", slug: "vilde", categories: ["jente"], meaning: "Vill, fri", origin: "Norrønt", styles: ["norrønt", "moderne", "unikt"] },
  { name: "Vilja", slug: "vilja", categories: ["jente"], meaning: "Ønske", origin: "Norsk", styles: ["moderne"] },
  { name: "Wenche", slug: "wenche", categories: ["jente"], meaning: "Hellig", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Whisker", slug: "whisker", categories: ["katt"], meaning: "Kinnhår", origin: "Engelsk", styles: ["unikt"] },
  { name: "Whiskers", slug: "whiskers", categories: ["katt"], meaning: "Kinnhår", origin: "Engelsk", styles: ["unikt"] },
  { name: "William", slug: "william", categories: ["gutt"], meaning: "Sterk beskytter", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Winston", slug: "winston", categories: ["hund"], meaning: "Glede-stein", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ylva", slug: "ylva", categories: ["jente"], meaning: "Hunulv", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ymer", slug: "ymer", categories: ["gutt"], meaning: "Urmater", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Yngve", slug: "yngve", categories: ["gutt"], meaning: "Fruktbarhetens gud", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Yrja", slug: "yrja", categories: ["jente"], meaning: "Vill, stormfull", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Zelda", slug: "zelda", categories: ["hund"], meaning: "Grå kamp / velsignet", origin: "Germansk", styles: ["unikt"] },
  { name: "Zephyr", slug: "zephyr", categories: ["hund"], meaning: "Vestavinden", origin: "Gresk", styles: ["unikt"] },
  { name: "Zeus", slug: "zeus", categories: ["hund"], meaning: "Gud av himmelen", origin: "Gresk", styles: ["unikt"] },
  { name: "Zoe", slug: "zoe", categories: ["jente"], meaning: "Liv", origin: "Gresk", styles: ["moderne"] },
  { name: "Zoey", slug: "zoey", categories: ["hund"], meaning: "Liv", origin: "Gresk", styles: ["klassisk"] },
  { name: "Zuri", slug: "zuri", categories: ["katt"], meaning: "Vakker", origin: "Swahili", styles: ["unikt"] },
  { name: "Øystein", slug: "oystein", categories: ["gutt"], meaning: "Øy-stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Øyvind", slug: "oyvind", categories: ["gutt"], meaning: "Øy-vind", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åge", slug: "age", categories: ["gutt"], meaning: "Forfader", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Åsa", slug: "asa", categories: ["jente"], meaning: "Gud", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åse", slug: "ase", categories: ["jente"], meaning: "Gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Aase", slug: "aase", categories: ["jente"], meaning: "Guddommelig ild", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Åshild", slug: "ashild", categories: ["jente"], meaning: "Gudinne av kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åsmund", slug: "asmund", categories: ["gutt"], meaning: "Guds hånd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
];

export const categoryLabels: Record<Category, string> = {
  jente: "Jentenavn",
  gutt: "Guttenavn",
  hund: "Hundenavn",
  katt: "Kattenavn",
};

export const categorySlugs: Record<Category, CategorySlug> = {
  jente: "jentenavn",
  gutt: "guttenavn",
  hund: "hundenavn",
  katt: "kattenavn",
};

export const styleLabels: Record<Style, string> = {
  norrønt: "Norrønt",
  klassisk: "Klassisk",
  moderne: "Moderne",
  unikt: "Unikt",
};

/** Bøyd form som beskriver en gruppe navn: «norrøne guttenavn». */
export const styleAdjective: Record<Style, string> = {
  norrønt: "Norrøne",
  klassisk: "Klassiske",
  moderne: "Moderne",
  unikt: "Unike",
};

export const styleOrder: Style[] = ["norrønt", "klassisk", "moderne", "unikt"];

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replaceAll("æ", "ae")
    .replaceAll("ø", "o")
    .replaceAll("å", "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const bySlug = new Map(names.map((n) => [n.slug, n]));

export const findBySlug = (slug: string) => bySlug.get(slug.toLowerCase());

/** Slår også opp navn skrevet med æ/ø/å, slik de gamle URL-ene gjorde. */
export const findByName = (input: string) => {
  const wanted = input.toLowerCase();
  return names.find((n) => n.name.toLowerCase() === wanted) ?? findBySlug(slugify(input));
};

export const namesIn = (category: Category) =>
  names.filter((n) => n.categories.includes(category));

export const firstLetter = (name: string) => name[0]!.toUpperCase();

export const lettersIn = (category: Category) =>
  [...new Set(namesIn(category).map((n) => firstLetter(n.name)))].sort((a, b) =>
    a.localeCompare(b, "nb"),
  );

/**
 * Liknende navn: samme kategori og minst én felles stil, med samme opphav
 * vektet høyest. Faller tilbake til kategorien alene om utvalget blir tomt.
 */
export const relatedNames = (entry: NameEntry, limit = 6) => {
  const score = (n: NameEntry) => {
    let s = 0;
    if (n.categories.some((c) => entry.categories.includes(c))) s += 3;
    if (n.origin === entry.origin) s += 2;
    s += n.styles.filter((st) => entry.styles.includes(st)).length;
    if (firstLetter(n.name) === firstLetter(entry.name)) s += 1;
    return s;
  };

  return names
    .filter((n) => n.slug !== entry.slug)
    .map((n) => ({ n, s: score(n) }))
    .filter((x) => x.s >= 4)
    .sort((a, b) => b.s - a.s || a.n.name.localeCompare(b.n.name, "nb"))
    .slice(0, limit)
    .map((x) => x.n);
};

export type CategorySlug = "jentenavn" | "guttenavn" | "hundenavn" | "kattenavn";

export type CategoryPage = {
  category: Category;
  slug: CategorySlug;
  h1: string;
  title: string;
  description: string;
  intro: string;
  advice: string[];
};

export const categoryPages: CategoryPage[] = [
  {
    category: "jente",
    slug: "jentenavn",
    h1: "Fine jentenavn og sjeldne jentenavn",
    title: "Jentenavn – fine og sjeldne navn med betydning | Navnetips.no",
    description:
      "Utforsk fine og sjeldne jentenavn med betydning og opprinnelse – fra norrøne klassikere til moderne og unike navn. Filtrer på bokstav, opphav og stil.",
    intro:
      "Her finner du jentenavn med betydning og opprinnelse, sortert etter stil. Bruk filtrene for å snevre inn på første bokstav, lengde, opphav eller uttrykk – og klikk deg inn på et navn for å lese mer.",
    advice: [
      "Norrøne jentenavn som Ingrid, Astrid og Frøya har fått en tydelig renessanse.",
      "Korte navn på én stavelse kler lange etternavn godt.",
      "Sjekk hvordan navnet ser ut skrevet – både med og uten mellomnavn.",
    ],
  },
  {
    category: "gutt",
    slug: "guttenavn",
    h1: "Fine guttenavn og gamle guttenavn",
    title: "Guttenavn – fine og gamle navn med betydning | Navnetips.no",
    description:
      "Se fine og gamle guttenavn med betydning og opprinnelse – norrøne, klassiske, moderne og unike navn. Filtrer på bokstav, opphav og stil.",
    intro:
      "Guttenavn med betydning, opprinnelse og stil. Bruk listen som utgangspunkt, filtrer deg fram til et utvalg som passer, og les mer om hvert navn på egen side.",
    advice: [
      "Navn på to stavelser med tydelig konsonant i midten er lette å rope.",
      "Tenk over initialene når mellomnavn kommer til.",
      "Gamle guttenavn fra norrøn tid får ny popularitet år for år.",
    ],
  },
  {
    category: "hund",
    slug: "hundenavn",
    h1: "Hundenavn – forslag til valpen",
    title: "Hundenavn – forslag med betydning til valpen | Navnetips.no",
    description:
      "Finn hundenavn til valpen: korte, robuste, koselige og lekne navn med betydning – pluss tips til navn som er lette å lære inn.",
    intro:
      "Et godt hundenavn er kort, tydelig og lett å skille fra kommandoene dine. Her er forslag med betydning og opprinnelse, og råd for innlæringen.",
    advice: [
      "Velg navn på én til to stavelser – de er lettest for hunden å kjenne igjen.",
      "Unngå navn som ligner «sitt», «nei», «bli» eller «kom».",
      "Navn som slutter på vokal bærer bedre når du roper over avstand.",
    ],
  },
  {
    category: "katt",
    slug: "kattenavn",
    h1: "Kattenavn – forslag til kattungen",
    title: "Kattenavn – morsomme og klassiske forslag | Navnetips.no",
    description:
      "Kattenavn med betydning: klassiske navn, lekne favoritter og mytiske forslag til kattungen eller den voksne katten.",
    intro:
      "Katter svarer best på navn med tydelig vokalklang. Her er kattenavn med betydning og opprinnelse – fra Luna og Felix til Saga og Simba.",
    advice: [
      "Navn med lys i-lyd eller vokal på slutten fanger kattens oppmerksomhet.",
      "La navnet tåle å ropes ut i hagen sent på kvelden.",
      "Vent gjerne et par dager – kattens personlighet foreslår ofte navnet selv.",
    ],
  },
];

export const categoryPageBySlug = (slug: string) => categoryPages.find((c) => c.slug === slug);

export const categoryPageFor = (category: Category) =>
  categoryPages.find((c) => c.category === category)!;

/** Kategoriene et navn hører hjemme i, som lenkbare sider. */
export const pagesFor = (entry: NameEntry) => entry.categories.map(categoryPageFor);

export const tips = [
  {
    title: "Si navnet høyt – hundre ganger",
    body: "Rop det fra en trapp, hvisk det ved sengekanten. Et navn skal tåle både hverdag og hastverk.",
  },
  {
    title: "Test kombinasjonen",
    body: "Fornavn + etternavn bør ha ulik rytme. Korte etternavn tåler lange fornavn, og motsatt.",
  },
  {
    title: "Sjekk forkortelsene",
    body: "Barn finner kallenavn og initialer du ikke tenkte på. Skriv dem ned før du bestemmer deg.",
  },
  {
    title: "Dyrenavn: to stavelser vinner",
    body: "Navn på to stavelser med tydelig vokal på slutten er lettest å lære inn for hund og katt.",
  },
  {
    title: "Unngå kommandokrasj",
    body: "Kall aldri hunden noe som ligner «sitt», «nei» eller «kom». Det gir forvirring i innlæringen.",
  },
  {
    title: "Gi det en uke",
    body: "Skriv toppfavoritten på kjøleskapet i syv dager. Blir du glad hver gang du ser den, er du i mål.",
  },
];
