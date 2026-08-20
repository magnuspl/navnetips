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
  { name: "Abby", slug: "abby", categories: ["hund", "jente"], meaning: "Min fars glede", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Ace", slug: "ace", categories: ["hund"], meaning: "Mester", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Ada", slug: "ada", categories: ["jente"], meaning: "Edel", origin: "Germansk", styles: ["moderne"] },
  { name: "Adam", slug: "adam", categories: ["gutt"], meaning: "Menneske av jord", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Adrian", slug: "adrian", categories: ["gutt"], meaning: "Fra Hadria", origin: "Latin", styles: ["moderne"] },
  { name: "Agnes", slug: "agnes", categories: ["jente"], meaning: "Ren", origin: "Gresk", styles: ["moderne"] },
  { name: "Aksel", slug: "aksel", categories: ["gutt"], meaning: "Faderens fred", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Albert", slug: "albert", categories: ["gutt"], meaning: "Edel og strålende", origin: "Germansk", styles: ["klassisk"] },
  { name: "Aleksander", slug: "aleksander", categories: ["gutt"], meaning: "Den som verner menn", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Alf", slug: "alf", categories: ["gutt"], meaning: "Alv", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Alfie", slug: "alfie", categories: ["hund", "gutt"], meaning: "Vis rådgiver", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Alfred", slug: "alfred", categories: ["gutt"], meaning: "Vis rådgiver", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Alma", slug: "alma", categories: ["jente", "katt"], meaning: "Nærende", origin: "Latin", styles: ["moderne"] },
  { name: "Alva", slug: "alva", categories: ["jente"], meaning: "Alv", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Alvar", slug: "alvar", categories: ["gutt"], meaning: "Alvenes hær", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Alvhild", slug: "alvhild", categories: ["jente"], meaning: "Alv og kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Alvilde", slug: "alvilde", categories: ["jente"], meaning: "Alv og kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Amalie", slug: "amalie", categories: ["jente"], meaning: "Den arbeidsomme", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Amund", slug: "amund", categories: ["gutt"], meaning: "Ærefrykt og vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Anders", slug: "anders", categories: ["gutt"], meaning: "Mann", origin: "Gresk", styles: ["klassisk"] },
  { name: "Andrea", slug: "andrea", categories: ["jente"], meaning: "Mann", origin: "Gresk", styles: ["moderne"] },
  { name: "Andreas", slug: "andreas", categories: ["gutt"], meaning: "Mann", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Ane", slug: "ane", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Angus", slug: "angus", categories: ["hund", "gutt"], meaning: "Ett valg, én kraft", origin: "Skotsk", styles: ["unikt"] },
  { name: "Anita", slug: "anita", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Anna", slug: "anna", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Anne", slug: "anne", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Anton", slug: "anton", categories: ["gutt"], meaning: "Romersk slektsnavn", origin: "Latin", styles: ["moderne"] },
  { name: "Apollo", slug: "apollo", categories: ["hund"], meaning: "Lysets gud", origin: "Gresk", styles: ["unikt"] },
  { name: "Archie", slug: "archie", categories: ["hund", "gutt"], meaning: "Sann modighet", origin: "Engelsk", styles: ["unikt"] },
  { name: "Are", slug: "are", categories: ["gutt"], meaning: "Ørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Aria", slug: "aria", categories: ["jente"], meaning: "Melodi", origin: "Italiensk", styles: ["moderne"] },
  { name: "Arna", slug: "arna", categories: ["jente"], meaning: "Ørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Arne", slug: "arne", categories: ["gutt"], meaning: "Ørn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Arnfinn", slug: "arnfinn", categories: ["gutt"], meaning: "Ørn og finne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Arnold", slug: "arnold", categories: ["gutt"], meaning: "Ørnehersker", origin: "Germansk", styles: ["klassisk"] },
  { name: "Aron", slug: "aron", categories: ["gutt"], meaning: "Fjellets mann", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Arthur", slug: "arthur", categories: ["gutt"], meaning: "Bjørn", origin: "Keltisk", styles: ["moderne"] },
  { name: "Arvid", slug: "arvid", categories: ["gutt"], meaning: "Ørnetre", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Asbjørn", slug: "asbjorn", categories: ["gutt"], meaning: "Gudebjørn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ash", slug: "ash", categories: ["katt"], meaning: "Aske", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ask", slug: "ask", categories: ["gutt", "hund"], meaning: "Asketre", origin: "Norrønt", styles: ["moderne"] },
  { name: "Aslak", slug: "aslak", categories: ["gutt"], meaning: "Gudenes lek", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Aslaug", slug: "aslaug", categories: ["jente"], meaning: "Gudeviet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Asta", slug: "asta", categories: ["jente"], meaning: "Gudenes skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Astrid", slug: "astrid", categories: ["jente"], meaning: "Gudenes skjønnhet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Atlas", slug: "atlas", categories: ["hund"], meaning: "Bærer av himmelen", origin: "Gresk", styles: ["unikt"] },
  { name: "Aud", slug: "aud", categories: ["jente"], meaning: "Rikdom og lykke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Audun", slug: "audun", categories: ["gutt"], meaning: "Rikdommens venn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Aurora", slug: "aurora", categories: ["jente"], meaning: "Morgenrødens gudinne", origin: "Latin", styles: ["moderne"] },
  { name: "Bailey", slug: "bailey", categories: ["hund", "gutt"], meaning: "Forvalter", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Balder", slug: "balder", categories: ["hund", "gutt"], meaning: "Herre, den lyse", origin: "Norrønt", styles: ["moderne"] },
  { name: "Bandit", slug: "bandit", categories: ["hund"], meaning: "Fredløs", origin: "Italiensk", styles: ["unikt"] },
  { name: "Baron", slug: "baron", categories: ["hund"], meaning: "Fri mann, kriger", origin: "Germansk", styles: ["unikt"] },
  { name: "Baxter", slug: "baxter", categories: ["hund"], meaning: "Baker", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bear", slug: "bear", categories: ["hund"], meaning: "Bjørn", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bella", slug: "bella", categories: ["hund", "katt", "jente"], meaning: "Vakker", origin: "Italiensk", styles: ["klassisk"] },
  { name: "Bendik", slug: "bendik", categories: ["gutt"], meaning: "Den velsignede", origin: "Latin", styles: ["norrønt", "unikt"] },
  { name: "Benjamin", slug: "benjamin", categories: ["gutt"], meaning: "Sønn ved høyre hånd", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Benji", slug: "benji", categories: ["hund", "gutt"], meaning: "Sønn ved høyre hånd", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Bente", slug: "bente", categories: ["jente"], meaning: "Den velsignede", origin: "Latin", styles: ["klassisk"] },
  { name: "Bentley", slug: "bentley", categories: ["hund"], meaning: "Eng med grovt gress", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bergit", slug: "bergit", categories: ["jente"], meaning: "Den opphøyde", origin: "Keltisk", styles: ["norrønt", "unikt"] },
  { name: "Bergljot", slug: "bergljot", categories: ["jente"], meaning: "Vern og lys", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Berit", slug: "berit", categories: ["jente"], meaning: "Den opphøyde", origin: "Keltisk", styles: ["norrønt"] },
  { name: "Bingo", slug: "bingo", categories: ["hund"], meaning: "Vinner", origin: "Engelsk", styles: ["unikt"] },
  { name: "Birger", slug: "birger", categories: ["gutt"], meaning: "Den som berger", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Birk", slug: "birk", categories: ["gutt", "hund"], meaning: "Bjørk", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bjarne", slug: "bjarne", categories: ["gutt"], meaning: "Bjørn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Bjarte", slug: "bjarte", categories: ["gutt"], meaning: "Den lyse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bjørn", slug: "bjorn", categories: ["gutt"], meaning: "Bjørnen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bjørnar", slug: "bjornar", categories: ["gutt"], meaning: "Bjørnekriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Blaze", slug: "blaze", categories: ["hund"], meaning: "Flamme", origin: "Engelsk", styles: ["unikt"] },
  { name: "Blomst", slug: "blomst", categories: ["hund"], meaning: "Blomster", origin: "Norsk", styles: ["moderne"] },
  { name: "Blue", slug: "blue", categories: ["hund"], meaning: "Blå", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bo", slug: "bo", categories: ["gutt"], meaning: "Den som bor", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Bodil", slug: "bodil", categories: ["jente"], meaning: "Bot og kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Bolt", slug: "bolt", categories: ["hund"], meaning: "Lyn", origin: "Engelsk", styles: ["unikt"] },
  { name: "Borghild", slug: "borghild", categories: ["jente"], meaning: "Vern og kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Brage", slug: "brage", categories: ["gutt"], meaning: "Diktekunst", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Brede", slug: "brede", categories: ["gutt"], meaning: "Den brede", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Bris", slug: "bris", categories: ["hund"], meaning: "Vind", origin: "Norsk", styles: ["moderne"] },
  { name: "Bruce", slug: "bruce", categories: ["hund", "gutt"], meaning: "Normannisk stedsnavn", origin: "Fransk", styles: ["unikt"] },
  { name: "Bruno", slug: "bruno", categories: ["hund", "gutt"], meaning: "Brun", origin: "Germansk", styles: ["klassisk", "unikt"] },
  { name: "Brynhild", slug: "brynhild", categories: ["jente"], meaning: "Brynje og kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Buddy", slug: "buddy", categories: ["hund"], meaning: "Venn", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Buster", slug: "buster", categories: ["hund"], meaning: "En som bryter eller sprenger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Bård", slug: "bard", categories: ["gutt"], meaning: "Kamp og fred", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Camilla", slug: "camilla", categories: ["jente"], meaning: "Tempeltjener", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Carl", slug: "carl", categories: ["gutt"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Casey", slug: "casey", categories: ["hund", "gutt"], meaning: "Årvåken", origin: "Irsk", styles: ["unikt"] },
  { name: "Celine", slug: "celine", categories: ["jente"], meaning: "Himmelsk", origin: "Latin", styles: ["moderne"] },
  { name: "Champ", slug: "champ", categories: ["hund"], meaning: "Mester", origin: "Engelsk", styles: ["unikt"] },
  { name: "Chance", slug: "chance", categories: ["hund"], meaning: "Sjanse", origin: "Engelsk", styles: ["unikt"] },
  { name: "Charlie", slug: "charlie", categories: ["hund", "gutt"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Chloe", slug: "chloe", categories: ["hund", "jente"], meaning: "Grønt skudd", origin: "Gresk", styles: ["klassisk"] },
  { name: "Coco", slug: "coco", categories: ["hund"], meaning: "Kokosnøtt", origin: "Spansk", styles: ["unikt"] },
  { name: "Cody", slug: "cody", categories: ["hund", "gutt"], meaning: "Hjelpsom", origin: "Irsk", styles: ["klassisk"] },
  { name: "Conrad", slug: "conrad", categories: ["gutt"], meaning: "Modig rådgiver", origin: "Germansk", styles: ["klassisk"] },
  { name: "Cooper", slug: "cooper", categories: ["hund"], meaning: "Tønnemaker", origin: "Engelsk", styles: ["unikt"] },
  { name: "Dag", slug: "dag", categories: ["gutt"], meaning: "Dag, lys", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Dagalv", slug: "dagalv", categories: ["gutt"], meaning: "Dag og alv", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagfinn", slug: "dagfinn", categories: ["gutt"], meaning: "Dag og finne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Dagfrid", slug: "dagfrid", categories: ["jente"], meaning: "Dag og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagmar", slug: "dagmar", categories: ["jente"], meaning: "Berømt dag", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Dagrun", slug: "dagrun", categories: ["jente"], meaning: "Dag og hemmelighet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Daisy", slug: "daisy", categories: ["hund", "jente"], meaning: "Prestekrage", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Daniel", slug: "daniel", categories: ["gutt"], meaning: "Gud er min dommer", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Dexter", slug: "dexter", categories: ["hund"], meaning: "Høyre, behendig", origin: "Latin", styles: ["unikt"] },
  { name: "Diesel", slug: "diesel", categories: ["hund"], meaning: "Drivstoff", origin: "Engelsk", styles: ["unikt"] },
  { name: "Dina", slug: "dina", categories: ["jente"], meaning: "Den som fikk sin rett", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Disa", slug: "disa", categories: ["jente"], meaning: "Gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Duke", slug: "duke", categories: ["hund"], meaning: "Hertug", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Echo", slug: "echo", categories: ["hund", "katt"], meaning: "Gjenlyd", origin: "Gresk", styles: ["unikt"] },
  { name: "Edvard", slug: "edvard", categories: ["gutt"], meaning: "Vokter av rikdom", origin: "Germansk", styles: ["klassisk"] },
  { name: "Egil", slug: "egil", categories: ["gutt"], meaning: "Skarp egg", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Eilif", slug: "eilif", categories: ["gutt"], meaning: "Alltid arving", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Einar", slug: "einar", categories: ["gutt"], meaning: "Den som kjemper alene", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Eir", slug: "eir", categories: ["jente"], meaning: "Nåde, hjelp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eirik", slug: "eirik", categories: ["gutt"], meaning: "Enehersker", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Eivind", slug: "eivind", categories: ["gutt"], meaning: "Alltid vinner", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Eivor", slug: "eivor", categories: ["jente"], meaning: "Lykke og vern", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eldar", slug: "eldar", categories: ["gutt"], meaning: "Flamme", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eldrid", slug: "eldrid", categories: ["jente"], meaning: "Ild og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Eli", slug: "eli", categories: ["jente"], meaning: "Gud er min ed", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Elias", slug: "elias", categories: ["gutt"], meaning: "Herren er min Gud", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Elida", slug: "elida", categories: ["jente"], meaning: "Fra Elis", origin: "Gresk", styles: ["moderne"] },
  { name: "Elin", slug: "elin", categories: ["jente"], meaning: "Fakkel, lys", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Eline", slug: "eline", categories: ["jente"], meaning: "Lys, sol", origin: "Gresk", styles: ["norrønt", "unikt"] },
  { name: "Elisabeth", slug: "elisabeth", categories: ["jente"], meaning: "Gud er min ed", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Elise", slug: "elise", categories: ["jente"], meaning: "Gud er min ed", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Ella", slug: "ella", categories: ["jente"], meaning: "Kortform av Eleonora", origin: "Germansk", styles: ["moderne"] },
  { name: "Ellie", slug: "ellie", categories: ["jente"], meaning: "Lys", origin: "Gresk", styles: ["moderne"] },
  { name: "Ellinor", slug: "ellinor", categories: ["jente"], meaning: "Lys, strålende", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Ember", slug: "ember", categories: ["katt"], meaning: "Glød", origin: "Engelsk", styles: ["unikt"] },
  { name: "Embla", slug: "embla", categories: ["jente", "hund"], meaning: "Alm, slyngtre", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Emil", slug: "emil", categories: ["gutt"], meaning: "Den ivrige", origin: "Latin", styles: ["moderne"] },
  { name: "Emilia", slug: "emilia", categories: ["jente"], meaning: "Den ivrige", origin: "Latin", styles: ["moderne"] },
  { name: "Emilian", slug: "emilian", categories: ["gutt"], meaning: "Den ivrige", origin: "Latin", styles: ["moderne"] },
  { name: "Emilie", slug: "emilie", categories: ["jente"], meaning: "Den ivrige", origin: "Latin", styles: ["moderne"] },
  { name: "Emma", slug: "emma", categories: ["jente"], meaning: "Hel, altomfattende", origin: "Germansk", styles: ["klassisk"] },
  { name: "Erik", slug: "erik", categories: ["gutt"], meaning: "Enehersker", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Erle", slug: "erle", categories: ["jente"], meaning: "Linerle", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Erlend", slug: "erlend", categories: ["gutt"], meaning: "Den fremmede", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Erling", slug: "erling", categories: ["gutt"], meaning: "Jarlens ætling", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Eskil", slug: "eskil", categories: ["gutt"], meaning: "Guds hjelm", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Espen", slug: "espen", categories: ["gutt"], meaning: "Guds bjørn", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Even", slug: "even", categories: ["gutt"], meaning: "Alltid vinner", origin: "Norrønt", styles: ["moderne"] },
  { name: "Eyvind", slug: "eyvind", categories: ["gutt"], meaning: "Alltid vinner", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Felix", slug: "felix", categories: ["gutt", "katt"], meaning: "Lykkelig", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Filip", slug: "filip", categories: ["gutt"], meaning: "Hestevenn", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Finn", slug: "finn", categories: ["gutt"], meaning: "Finne, folk fra nord", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Fluffy", slug: "fluffy", categories: ["katt"], meaning: "Lodden", origin: "Engelsk", styles: ["unikt"] },
  { name: "Frankie", slug: "frankie", categories: ["hund"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Fredrik", slug: "fredrik", categories: ["gutt"], meaning: "Fredelig hersker", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Freya", slug: "freya", categories: ["katt", "jente"], meaning: "Frue, gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Frida", slug: "frida", categories: ["jente", "hund"], meaning: "Vakker og elsket", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Frode", slug: "frode", categories: ["gutt"], meaning: "Vis og lærd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Frost", slug: "frost", categories: ["hund", "katt"], meaning: "Kald, isete", origin: "Engelsk", styles: ["moderne", "unikt"] },
  { name: "Frøya", slug: "froya", categories: ["jente"], meaning: "Frue, gudinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gabriel", slug: "gabriel", categories: ["gutt"], meaning: "Guds styrke", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Gard", slug: "gard", categories: ["gutt"], meaning: "Vern, gård", origin: "Norrønt", styles: ["moderne"] },
  { name: "Gaute", slug: "gaute", categories: ["gutt"], meaning: "Gaut, mann fra Gautland", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Geir", slug: "geir", categories: ["gutt"], meaning: "Spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Geirhild", slug: "geirhild", categories: ["jente"], meaning: "Spyd og kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Geirmund", slug: "geirmund", categories: ["gutt"], meaning: "Spyd og vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "George", slug: "george", categories: ["hund", "gutt"], meaning: "Jordbruker", origin: "Gresk", styles: ["klassisk"] },
  { name: "Gerd", slug: "gerd", categories: ["jente"], meaning: "Inngjerdet plass", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gisken", slug: "gisken", categories: ["jente"], meaning: "Edsvoren følgesvenn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gisle", slug: "gisle", categories: ["gutt"], meaning: "Edsvoren følgesvenn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gizmo", slug: "gizmo", categories: ["hund"], meaning: "Dings", origin: "Engelsk", styles: ["unikt"] },
  { name: "Gjermund", slug: "gjermund", categories: ["gutt"], meaning: "Spyd og vern", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gracie", slug: "gracie", categories: ["hund", "jente"], meaning: "Nåde", origin: "Latin", styles: ["klassisk"] },
  { name: "Grete", slug: "grete", categories: ["jente"], meaning: "Perle", origin: "Gresk", styles: ["klassisk"] },
  { name: "Gro", slug: "gro", categories: ["jente"], meaning: "Å gro", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gudmund", slug: "gudmund", categories: ["gutt"], meaning: "Guds vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gudny", slug: "gudny", categories: ["jente"], meaning: "Gudenes nye", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gudrun", slug: "gudrun", categories: ["jente"], meaning: "Gudenes hemmelighet", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gull", slug: "gull", categories: ["hund"], meaning: "Skatt", origin: "Norsk", styles: ["moderne"] },
  { name: "Gulltass", slug: "gulltass", categories: ["katt"], meaning: "Gyllen pote", origin: "Norsk", styles: ["moderne"] },
  { name: "Gunhild", slug: "gunhild", categories: ["jente"], meaning: "Kamp og strid", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gunn", slug: "gunn", categories: ["jente"], meaning: "Kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gunnar", slug: "gunnar", categories: ["gutt"], meaning: "Krigens kriger", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Gunnhild", slug: "gunnhild", categories: ["jente"], meaning: "Kamp og strid", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Gunvor", slug: "gunvor", categories: ["jente"], meaning: "Kampvokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Guro", slug: "guro", categories: ["jente"], meaning: "Gudenes hemmelighet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Gus", slug: "gus", categories: ["hund", "gutt"], meaning: "Kortform av August", origin: "Germansk", styles: ["klassisk"] },
  { name: "Gustav", slug: "gustav", categories: ["gutt"], meaning: "Goternes stav", origin: "Svensk", styles: ["klassisk"] },
  { name: "Haldor", slug: "haldor", categories: ["gutt"], meaning: "Tors stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hallbjørg", slug: "hallbjorg", categories: ["jente"], meaning: "Stein og vern", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hallvard", slug: "hallvard", categories: ["gutt"], meaning: "Steinvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Halvdan", slug: "halvdan", categories: ["gutt"], meaning: "Halvdansk", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Halvor", slug: "halvor", categories: ["gutt"], meaning: "Steinvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Hank", slug: "hank", categories: ["hund", "gutt"], meaning: "Kortform av Henry", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Hanna", slug: "hanna", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Hans", slug: "hans", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Harald", slug: "harald", categories: ["gutt"], meaning: "Hærfører", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Harley", slug: "harley", categories: ["hund"], meaning: "Hare-eng", origin: "Engelsk", styles: ["unikt"] },
  { name: "Hedda", slug: "hedda", categories: ["jente"], meaning: "Strid", origin: "Germansk", styles: ["norrønt", "klassisk"] },
  { name: "Hedvig", slug: "hedvig", categories: ["jente"], meaning: "Kamp og strid", origin: "Germansk", styles: ["moderne"] },
  { name: "Hege", slug: "hege", categories: ["jente"], meaning: "Hellig", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Heidi", slug: "heidi", categories: ["jente"], meaning: "Av edel ætt", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Helena", slug: "helena", categories: ["jente"], meaning: "Fakkel, lys", origin: "Gresk", styles: ["moderne"] },
  { name: "Helene", slug: "helene", categories: ["jente"], meaning: "Fakkel, lys", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Helga", slug: "helga", categories: ["jente"], meaning: "Hellig", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Henrik", slug: "henrik", categories: ["gutt"], meaning: "Hjemmets hersker", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Henry", slug: "henry", categories: ["hund", "gutt"], meaning: "Hjemmets hersker", origin: "Germansk", styles: ["klassisk"] },
  { name: "Herman", slug: "herman", categories: ["gutt"], meaning: "Hærmann", origin: "Germansk", styles: ["moderne"] },
  { name: "Hervor", slug: "hervor", categories: ["jente"], meaning: "Hærvokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Hilde", slug: "hilde", categories: ["jente"], meaning: "Kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Hunter", slug: "hunter", categories: ["hund"], meaning: "Jeger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Håkon", slug: "hakon", categories: ["gutt"], meaning: "Høybåren sønn", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Haakon", slug: "haakon", categories: ["gutt"], meaning: "Høybåren sønn", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Håvar", slug: "havar", categories: ["gutt"], meaning: "Høy vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Håvard", slug: "havard", categories: ["gutt"], meaning: "Høy vokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Iben", slug: "iben", categories: ["jente"], meaning: "Bjørnebær", origin: "Dansk", styles: ["moderne", "unikt"] },
  { name: "Ida", slug: "ida", categories: ["jente"], meaning: "Arbeid", origin: "Germansk", styles: ["moderne"] },
  { name: "Idun", slug: "idun", categories: ["jente"], meaning: "Den som forynger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Idunn", slug: "idunn", categories: ["jente"], meaning: "Den som forynger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingar", slug: "ingar", categories: ["gutt"], meaning: "Ings kriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Inge", slug: "inge", categories: ["gutt"], meaning: "Guden Ing", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Ingeborg", slug: "ingeborg", categories: ["jente"], meaning: "Ings vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Inger", slug: "inger", categories: ["jente"], meaning: "Ings hær", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingfrid", slug: "ingfrid", categories: ["jente"], meaning: "Ing og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingjerd", slug: "ingjerd", categories: ["jente"], meaning: "Ings vern", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingrid", slug: "ingrid", categories: ["jente"], meaning: "Ings skjønnhet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingunn", slug: "ingunn", categories: ["jente"], meaning: "Ing og kjærlighet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingvald", slug: "ingvald", categories: ["gutt"], meaning: "Ings hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ingvar", slug: "ingvar", categories: ["gutt"], meaning: "Ings kriger", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ingvild", slug: "ingvild", categories: ["jente"], meaning: "Ings kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Isabella", slug: "isabella", categories: ["jente"], meaning: "Gud er min ed", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Isak", slug: "isak", categories: ["gutt"], meaning: "Han ler", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Ivar", slug: "ivar", categories: ["gutt"], meaning: "Bueskytter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Iver", slug: "iver", categories: ["gutt", "hund"], meaning: "Bueskytter", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Jack", slug: "jack", categories: ["hund", "gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jackson", slug: "jackson", categories: ["hund", "gutt"], meaning: "Jacks sønn", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Jacob", slug: "jacob", categories: ["gutt"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jake", slug: "jake", categories: ["hund", "gutt"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jakob", slug: "jakob", categories: ["gutt"], meaning: "Den som holder i hælen", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jan", slug: "jan", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jarand", slug: "jarand", categories: ["gutt"], meaning: "Jordens vokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Jarle", slug: "jarle", categories: ["gutt"], meaning: "Jarl, høvding", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Jasper", slug: "jasper", categories: ["hund", "gutt"], meaning: "Skattmester", origin: "Persisk", styles: ["unikt"] },
  { name: "Jenny", slug: "jenny", categories: ["jente"], meaning: "Den hvite bølgen", origin: "Keltisk", styles: ["klassisk", "moderne"] },
  { name: "Jesper", slug: "jesper", categories: ["gutt"], meaning: "Skattmester", origin: "Persisk", styles: ["moderne"] },
  { name: "Jesse", slug: "jesse", categories: ["hund", "gutt"], meaning: "Gud eksisterer", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jinx", slug: "jinx", categories: ["katt"], meaning: "Forhekselse", origin: "Engelsk", styles: ["unikt"] },
  { name: "Jo", slug: "jo", categories: ["gutt"], meaning: "Herren er nådig", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Jofrid", slug: "jofrid", categories: ["jente"], meaning: "Hest og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Johannes", slug: "johannes", categories: ["gutt"], meaning: "Herren er nådig", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Jomar", slug: "jomar", categories: ["gutt"], meaning: "Berømt hestekriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Jon", slug: "jon", categories: ["gutt"], meaning: "Gud er nådig", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jonas", slug: "jonas", categories: ["gutt"], meaning: "Due", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Jonatan", slug: "jonatan", categories: ["gutt"], meaning: "Herren har gitt", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Jonathan", slug: "jonathan", categories: ["gutt"], meaning: "Gud har gitt", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Jorunn", slug: "jorunn", categories: ["jente"], meaning: "Hest og kjærlighet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Julie", slug: "julie", categories: ["jente"], meaning: "Av Julius-slekten", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Jørgen", slug: "jorgen", categories: ["gutt"], meaning: "Jordbruker", origin: "Gresk", styles: ["klassisk"] },
  { name: "Kaia", slug: "kaia", categories: ["jente"], meaning: "Den rene", origin: "Gresk", styles: ["moderne"] },
  { name: "Kaja", slug: "kaja", categories: ["jente"], meaning: "Den rene", origin: "Gresk", styles: ["norrønt", "unikt"] },
  { name: "Kari", slug: "kari", categories: ["jente"], meaning: "Den rene", origin: "Gresk", styles: ["norrønt", "klassisk"] },
  { name: "Karl", slug: "karl", categories: ["gutt"], meaning: "Fri mann", origin: "Germansk", styles: ["klassisk"] },
  { name: "Karoline", slug: "karoline", categories: ["jente"], meaning: "Fri kvinne", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Kasper", slug: "kasper", categories: ["gutt"], meaning: "Skattmester", origin: "Persisk", styles: ["klassisk", "moderne"] },
  { name: "Kevin", slug: "kevin", categories: ["gutt"], meaning: "Mild og vakker", origin: "Irsk", styles: ["moderne"] },
  { name: "Kim", slug: "kim", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["moderne"] },
  { name: "Kine", slug: "kine", categories: ["jente"], meaning: "Den modige", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "King", slug: "king", categories: ["hund"], meaning: "Konge", origin: "Engelsk", styles: ["unikt"] },
  { name: "Kira", slug: "kira", categories: ["hund", "jente"], meaning: "Herskerinne", origin: "Russisk", styles: ["unikt"] },
  { name: "Kjell", slug: "kjell", categories: ["gutt"], meaning: "Hjelm", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Kjersti", slug: "kjersti", categories: ["jente"], meaning: "Kristen", origin: "Gresk", styles: ["norrønt", "klassisk"] },
  { name: "Kjetil", slug: "kjetil", categories: ["gutt"], meaning: "Hjelm", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Knut", slug: "knut", categories: ["gutt"], meaning: "Knute", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Kolbein", slug: "kolbein", categories: ["gutt"], meaning: "Mørk og fast", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Kolbjørn", slug: "kolbjorn", categories: ["gutt"], meaning: "Mørk bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Kristian", slug: "kristian", categories: ["gutt"], meaning: "Kristen", origin: "Gresk", styles: ["moderne"] },
  { name: "Kristine", slug: "kristine", categories: ["jente"], meaning: "Kristen", origin: "Gresk", styles: ["klassisk"] },
  { name: "Kristoffer", slug: "kristoffer", categories: ["gutt"], meaning: "Kristus-bærer", origin: "Gresk", styles: ["moderne"] },
  { name: "Kåre", slug: "kare", categories: ["gutt"], meaning: "Den krøllete", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Lars", slug: "lars", categories: ["gutt"], meaning: "Fra Laurentum", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Leah", slug: "leah", categories: ["jente"], meaning: "Den trette", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Leif", slug: "leif", categories: ["gutt"], meaning: "Arving", origin: "Norrønt", styles: ["norrønt"] },
  { name: "Leiv", slug: "leiv", categories: ["gutt"], meaning: "Arving", origin: "Norrønt", styles: ["klassisk"] },
  { name: "Lene", slug: "lene", categories: ["jente"], meaning: "Fakkel, lys", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Leo", slug: "leo", categories: ["gutt", "hund", "katt"], meaning: "Løve", origin: "Latin", styles: ["moderne"] },
  { name: "Leon", slug: "leon", categories: ["gutt"], meaning: "Løve", origin: "Gresk", styles: ["moderne"] },
  { name: "Leonard", slug: "leonard", categories: ["gutt"], meaning: "Løvesterk", origin: "Germansk", styles: ["klassisk"] },
  { name: "Liam", slug: "liam", categories: ["gutt"], meaning: "Viljesterkt vern", origin: "Irsk", styles: ["moderne"] },
  { name: "Lily", slug: "lily", categories: ["jente"], meaning: "Lilje", origin: "Engelsk", styles: ["moderne"] },
  { name: "Linnea", slug: "linnea", categories: ["jente"], meaning: "Linnea-blomsten", origin: "Svensk", styles: ["moderne"] },
  { name: "Linus", slug: "linus", categories: ["gutt"], meaning: "Sangeren", origin: "Gresk", styles: ["moderne"] },
  { name: "Liten", slug: "liten", categories: ["katt"], meaning: "Liten", origin: "Norsk", styles: ["moderne"] },
  { name: "Liv", slug: "liv", categories: ["jente"], meaning: "Vern, skjold", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Liva", slug: "liva", categories: ["jente"], meaning: "Vern, skjold", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Live", slug: "live", categories: ["jente"], meaning: "Vern, skjold", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Livia", slug: "livia", categories: ["jente"], meaning: "Blågrå", origin: "Latin", styles: ["moderne"] },
  { name: "Loke", slug: "loke", categories: ["gutt", "katt"], meaning: "Den som knytter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Loki", slug: "loki", categories: ["katt", "gutt"], meaning: "Den som knytter", origin: "Norrønt", styles: ["unikt"] },
  { name: "Lola", slug: "lola", categories: ["hund", "jente"], meaning: "Kortform av Dolores", origin: "Spansk", styles: ["klassisk"] },
  { name: "Louie", slug: "louie", categories: ["hund", "gutt"], meaning: "Berømt kriger", origin: "Germansk", styles: ["klassisk"] },
  { name: "Lucas", slug: "lucas", categories: ["gutt"], meaning: "Lys", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Lucky", slug: "lucky", categories: ["hund"], meaning: "Heldig", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Lucy", slug: "lucy", categories: ["hund", "jente"], meaning: "Lys", origin: "Latin", styles: ["klassisk"] },
  { name: "Ludvig", slug: "ludvig", categories: ["gutt"], meaning: "Berømt kriger", origin: "Germansk", styles: ["moderne"] },
  { name: "Luna", slug: "luna", categories: ["jente", "hund", "katt"], meaning: "Måne", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Lykke", slug: "lykke", categories: ["jente", "hund"], meaning: "Lykke, glede", origin: "Norsk", styles: ["moderne"] },
  { name: "Maggie", slug: "maggie", categories: ["hund", "jente"], meaning: "Perle", origin: "Gresk", styles: ["klassisk"] },
  { name: "Magnar", slug: "magnar", categories: ["gutt"], meaning: "Sterk kriger", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magnhild", slug: "magnhild", categories: ["jente"], meaning: "Sterk i kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magni", slug: "magni", categories: ["jente"], meaning: "Styrke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Magnus", slug: "magnus", categories: ["gutt"], meaning: "Den store", origin: "Latin", styles: ["klassisk"] },
  { name: "Maja", slug: "maja", categories: ["jente"], meaning: "Mor, amme", origin: "Gresk", styles: ["moderne"] },
  { name: "Malena", slug: "malena", categories: ["jente"], meaning: "Kvinne fra Magdala", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Malin", slug: "malin", categories: ["jente"], meaning: "Fra Magdala", origin: "Hebraisk", styles: ["norrønt", "unikt"] },
  { name: "Maren", slug: "maren", categories: ["jente"], meaning: "Fra havet", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Mari", slug: "mari", categories: ["jente"], meaning: "Elsket", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Marie", slug: "marie", categories: ["jente"], meaning: "Elsket", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Marit", slug: "marit", categories: ["jente"], meaning: "Perle", origin: "Gresk", styles: ["klassisk"] },
  { name: "Marius", slug: "marius", categories: ["gutt"], meaning: "Romersk slektsnavn", origin: "Latin", styles: ["moderne"] },
  { name: "Markus", slug: "markus", categories: ["gutt"], meaning: "Hengiven til Mars", origin: "Latin", styles: ["moderne"] },
  { name: "Marley", slug: "marley", categories: ["hund"], meaning: "Eng ved sjøen", origin: "Engelsk", styles: ["unikt"] },
  { name: "Marte", slug: "marte", categories: ["jente"], meaning: "Frue", origin: "Arameisk", styles: ["klassisk"] },
  { name: "Martin", slug: "martin", categories: ["gutt"], meaning: "Hengiven til Mars", origin: "Latin", styles: ["moderne"] },
  { name: "Mathea", slug: "mathea", categories: ["jente"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Matheo", slug: "matheo", categories: ["gutt"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mathias", slug: "mathias", categories: ["gutt"], meaning: "Guds gave", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mathilde", slug: "mathilde", categories: ["jente"], meaning: "Makt og kamp", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Mats", slug: "mats", categories: ["gutt"], meaning: "Guds gave", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Max", slug: "max", categories: ["hund", "gutt"], meaning: "Den største", origin: "Latin", styles: ["klassisk"] },
  { name: "Melissa", slug: "melissa", categories: ["jente"], meaning: "Honningbie", origin: "Gresk", styles: ["moderne"] },
  { name: "Mette", slug: "mette", categories: ["jente"], meaning: "Perle", origin: "Gresk", styles: ["norrønt", "klassisk"] },
  { name: "Mia", slug: "mia", categories: ["jente"], meaning: "Elsket", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mickey", slug: "mickey", categories: ["hund", "gutt"], meaning: "Hvem er som Gud?", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Mikael", slug: "mikael", categories: ["gutt"], meaning: "Hvem er som Gud", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Mikkel", slug: "mikkel", categories: ["gutt"], meaning: "Hvem er som Gud?", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Mille", slug: "mille", categories: ["jente"], meaning: "Kortform av Emilie", origin: "Latin", styles: ["moderne"] },
  { name: "Milo", slug: "milo", categories: ["hund", "katt", "gutt"], meaning: "Mild, nådig", origin: "Slavisk", styles: ["klassisk", "moderne"] },
  { name: "Mimi", slug: "mimi", categories: ["katt"], meaning: "Ører", origin: "Japansk", styles: ["unikt"] },
  { name: "Miso", slug: "miso", categories: ["katt"], meaning: "Fermentert soyapasta", origin: "Japansk", styles: ["unikt"] },
  { name: "Misty", slug: "misty", categories: ["katt"], meaning: "Tåkete", origin: "Engelsk", styles: ["unikt"] },
  { name: "Molly", slug: "molly", categories: ["hund", "jente"], meaning: "Kjæleform av Maria", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Moose", slug: "moose", categories: ["hund"], meaning: "Elg", origin: "Engelsk", styles: ["unikt"] },
  { name: "Morten", slug: "morten", categories: ["gutt"], meaning: "Viet til Mars", origin: "Latin", styles: ["klassisk"] },
  { name: "Murphy", slug: "murphy", categories: ["hund", "gutt"], meaning: "Sjøkriger", origin: "Irsk", styles: ["unikt"] },
  { name: "Myk", slug: "myk", categories: ["katt"], meaning: "Myk", origin: "Norsk", styles: ["moderne"] },
  { name: "Målfrid", slug: "malfrid", categories: ["jente"], meaning: "Tale og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Måne", slug: "mane", categories: ["katt"], meaning: "Måne", origin: "Norsk", styles: ["moderne"] },
  { name: "Nala", slug: "nala", categories: ["katt", "jente"], meaning: "Gave", origin: "Afrikansk", styles: ["unikt"] },
  { name: "Nanna", slug: "nanna", categories: ["jente"], meaning: "Den modige", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Natalie", slug: "natalie", categories: ["jente"], meaning: "Født på juledag", origin: "Latin", styles: ["moderne"] },
  { name: "Neko", slug: "neko", categories: ["katt"], meaning: "Katt", origin: "Japansk", styles: ["unikt"] },
  { name: "Nero", slug: "nero", categories: ["hund"], meaning: "Sterk", origin: "Latin", styles: ["unikt"] },
  { name: "Nikolai", slug: "nikolai", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["moderne"] },
  { name: "Nikolas", slug: "nikolas", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Nils", slug: "nils", categories: ["gutt"], meaning: "Folkets seier", origin: "Gresk", styles: ["moderne"] },
  { name: "Nimbus", slug: "nimbus", categories: ["katt"], meaning: "Regnsky", origin: "Latin", styles: ["unikt"] },
  { name: "Nina", slug: "nina", categories: ["jente"], meaning: "Nåde", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Njål", slug: "njal", categories: ["gutt"], meaning: "Kjempe", origin: "Irsk", styles: ["norrønt", "klassisk"] },
  { name: "Noah", slug: "noah", categories: ["gutt"], meaning: "Hvile, fred", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Noomi", slug: "noomi", categories: ["jente"], meaning: "Min glede", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Nora", slug: "nora", categories: ["jente"], meaning: "Ære, lys", origin: "Latin", styles: ["moderne"] },
  { name: "Nova", slug: "nova", categories: ["jente", "katt"], meaning: "Ny", origin: "Latin", styles: ["moderne"] },
  { name: "Nox", slug: "nox", categories: ["katt"], meaning: "Natt", origin: "Latin", styles: ["unikt"] },
  { name: "Nyx", slug: "nyx", categories: ["katt"], meaning: "Natt", origin: "Gresk", styles: ["unikt"] },
  { name: "Oda", slug: "oda", categories: ["jente"], meaning: "Rikdom", origin: "Germansk", styles: ["moderne"] },
  { name: "Odd", slug: "odd", categories: ["gutt"], meaning: "Spydspiss", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Oddfrid", slug: "oddfrid", categories: ["jente"], meaning: "Spydspiss og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Oddvar", slug: "oddvar", categories: ["gutt"], meaning: "Spydvokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Oddveig", slug: "oddveig", categories: ["jente"], meaning: "Spydspiss og styrke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Odin", slug: "odin", categories: ["katt", "gutt"], meaning: "Den henrykte", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ola", slug: "ola", categories: ["gutt"], meaning: "Forfedrenes arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Olav", slug: "olav", categories: ["gutt"], meaning: "Forfedrenes arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Olava", slug: "olava", categories: ["jente"], meaning: "Forfedrenes arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ole", slug: "ole", categories: ["gutt"], meaning: "Forfedrenes arving", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Oline", slug: "oline", categories: ["jente"], meaning: "Forfedrenes arving", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Oliver", slug: "oliver", categories: ["gutt"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Olivia", slug: "olivia", categories: ["jente"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk", "moderne"] },
  { name: "Ollie", slug: "ollie", categories: ["hund", "gutt"], meaning: "Oliventre", origin: "Latin", styles: ["klassisk"] },
  { name: "Onyx", slug: "onyx", categories: ["katt"], meaning: "Svart edelstein", origin: "Gresk", styles: ["unikt"] },
  { name: "Oscar", slug: "oscar", categories: ["gutt", "hund"], meaning: "Gudespyd", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Oskar", slug: "oskar", categories: ["gutt"], meaning: "Gudespyd", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Otto", slug: "otto", categories: ["hund", "gutt"], meaning: "Rikdom", origin: "Germansk", styles: ["klassisk"] },
  { name: "Ozzy", slug: "ozzy", categories: ["hund", "gutt"], meaning: "Gudemakt", origin: "Engelsk", styles: ["unikt"] },
  { name: "Patrick", slug: "patrick", categories: ["gutt"], meaning: "Av fornem ætt", origin: "Latin", styles: ["moderne"] },
  { name: "Peder", slug: "peder", categories: ["gutt"], meaning: "Stein, klippe", origin: "Gresk", styles: ["klassisk"] },
  { name: "Penny", slug: "penny", categories: ["hund", "jente"], meaning: "Den som vever", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Per", slug: "per", categories: ["gutt"], meaning: "Stein, klippe", origin: "Gresk", styles: ["moderne"] },
  { name: "Pixel", slug: "pixel", categories: ["katt"], meaning: "Digitalt punkt", origin: "Engelsk", styles: ["unikt"] },
  { name: "Prince", slug: "prince", categories: ["hund"], meaning: "Prins", origin: "Engelsk", styles: ["unikt"] },
  { name: "Purre", slug: "purre", categories: ["katt"], meaning: "Maling, koselyd", origin: "Norsk", styles: ["moderne"] },
  { name: "Pusur", slug: "pusur", categories: ["katt"], meaning: "Kosete katt", origin: "Norsk", styles: ["moderne"] },
  { name: "Pål", slug: "pal", categories: ["gutt"], meaning: "Den lille", origin: "Latin", styles: ["klassisk"] },
  { name: "Ragna", slug: "ragna", categories: ["jente"], meaning: "Gudenes råd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ragnar", slug: "ragnar", categories: ["gutt"], meaning: "Krigsgud", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ragnhild", slug: "ragnhild", categories: ["jente"], meaning: "Gudenes råd og kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ragnvald", slug: "ragnvald", categories: ["gutt"], meaning: "Gudenes råd og hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Randi", slug: "randi", categories: ["jente"], meaning: "Den som verner hjemmet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ranveig", slug: "ranveig", categories: ["jente"], meaning: "Hjemmets styrke", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Rasmus", slug: "rasmus", categories: ["gutt"], meaning: "Den elskede", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Reidar", slug: "reidar", categories: ["gutt"], meaning: "Rytterkriger", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Reidun", slug: "reidun", categories: ["jente"], meaning: "Rede og kjærlighet", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Rex", slug: "rex", categories: ["hund"], meaning: "Konge", origin: "Latin", styles: ["klassisk", "unikt"] },
  { name: "Riley", slug: "riley", categories: ["hund", "gutt"], meaning: "Rugeng", origin: "Irsk", styles: ["klassisk"] },
  { name: "Rita", slug: "rita", categories: ["jente"], meaning: "Perle", origin: "Gresk", styles: ["klassisk"] },
  { name: "Roald", slug: "roald", categories: ["gutt"], meaning: "Berømt hersker", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Roar", slug: "roar", categories: ["gutt"], meaning: "Berømt spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Rocco", slug: "rocco", categories: ["hund", "gutt"], meaning: "Ro", origin: "Germansk", styles: ["klassisk"] },
  { name: "Rocko", slug: "rocko", categories: ["hund"], meaning: "Ro", origin: "Italiensk", styles: ["klassisk"] },
  { name: "Rocky", slug: "rocky", categories: ["hund"], meaning: "Steinete", origin: "Germansk", styles: ["klassisk"] },
  { name: "Romeo", slug: "romeo", categories: ["hund", "gutt"], meaning: "Pilegrim til Roma", origin: "Italiensk", styles: ["unikt"] },
  { name: "Ronja", slug: "ronja", categories: ["jente"], meaning: "Etter vannet Ronjajaure", origin: "Svensk", styles: ["moderne"] },
  { name: "Ruby", slug: "ruby", categories: ["hund", "jente"], meaning: "Rød edelsten", origin: "Latin", styles: ["unikt"] },
  { name: "Rudy", slug: "rudy", categories: ["hund", "gutt"], meaning: "Berømt ulv", origin: "Germansk", styles: ["unikt"] },
  { name: "Runa", slug: "runa", categories: ["jente"], meaning: "Hemmelig kunnskap", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Rune", slug: "rune", categories: ["gutt"], meaning: "Hemmelig kunnskap", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Rusty", slug: "rusty", categories: ["hund"], meaning: "Rødfarget", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ruth", slug: "ruth", categories: ["jente"], meaning: "Venninne", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Sable", slug: "sable", categories: ["katt"], meaning: "Mørk og mystisk", origin: "Engelsk", styles: ["unikt"] },
  { name: "Sadie", slug: "sadie", categories: ["hund", "jente"], meaning: "Prinsesse", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Saga", slug: "saga", categories: ["jente", "katt"], meaning: "Fortelling", origin: "Norrønt", styles: ["moderne"] },
  { name: "Salem", slug: "salem", categories: ["katt"], meaning: "Fred", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Sam", slug: "sam", categories: ["hund", "gutt"], meaning: "Gud har hørt", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Sammy", slug: "sammy", categories: ["hund", "gutt"], meaning: "Gud har hørt", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Samson", slug: "samson", categories: ["hund", "gutt"], meaning: "Solens mann", origin: "Hebraisk", styles: ["unikt"] },
  { name: "Sander", slug: "sander", categories: ["gutt"], meaning: "Den som verner menn", origin: "Gresk", styles: ["moderne"] },
  { name: "Sara", slug: "sara", categories: ["jente"], meaning: "Fyrstinne", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Sasha", slug: "sasha", categories: ["hund", "jente"], meaning: "Den som verner menn", origin: "Russisk", styles: ["unikt"] },
  { name: "Scout", slug: "scout", categories: ["hund"], meaning: "Speider", origin: "Engelsk", styles: ["unikt"] },
  { name: "Sebastian", slug: "sebastian", categories: ["gutt"], meaning: "Ærverdig", origin: "Gresk", styles: ["moderne"] },
  { name: "Selina", slug: "selina", categories: ["jente"], meaning: "Måne", origin: "Gresk", styles: ["moderne"] },
  { name: "Selma", slug: "selma", categories: ["jente"], meaning: "Vernet av Gud", origin: "Germansk", styles: ["moderne"] },
  { name: "Shadow", slug: "shadow", categories: ["hund", "katt"], meaning: "Skygge", origin: "Engelsk", styles: ["unikt"] },
  { name: "Sigmund", slug: "sigmund", categories: ["gutt"], meaning: "Seier og vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Signe", slug: "signe", categories: ["jente"], meaning: "Ny seier", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Signy", slug: "signy", categories: ["jente"], meaning: "Ny seier", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sigrid", slug: "sigrid", categories: ["jente"], meaning: "Seier og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Sigrun", slug: "sigrun", categories: ["jente"], meaning: "Seier og hemmelighet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Sigurd", slug: "sigurd", categories: ["gutt"], meaning: "Seiersvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sigvald", slug: "sigvald", categories: ["gutt"], meaning: "Seier og hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Sigve", slug: "sigve", categories: ["gutt"], meaning: "Seiersviet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Silje", slug: "silje", categories: ["jente"], meaning: "Blind", origin: "Latin", styles: ["moderne"] },
  { name: "Simba", slug: "simba", categories: ["hund", "katt"], meaning: "Løve", origin: "Swahili", styles: ["unikt"] },
  { name: "Simen", slug: "simen", categories: ["gutt"], meaning: "Han hørte", origin: "Hebraisk", styles: ["klassisk", "moderne"] },
  { name: "Sindre", slug: "sindre", categories: ["gutt"], meaning: "Gnist", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Siv", slug: "siv", categories: ["jente"], meaning: "Slekt, svogerskap", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sivert", slug: "sivert", categories: ["gutt"], meaning: "Seiersvokter", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sjur", slug: "sjur", categories: ["gutt"], meaning: "Seiersvokter", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Skygge", slug: "skygge", categories: ["katt"], meaning: "Skygge", origin: "Norsk", styles: ["moderne"] },
  { name: "Smule", slug: "smule", categories: ["katt"], meaning: "Liten bit", origin: "Norsk", styles: ["moderne"] },
  { name: "Snorre", slug: "snorre", categories: ["gutt"], meaning: "Den framfuse", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Snute", slug: "snute", categories: ["katt"], meaning: "Nese", origin: "Norsk", styles: ["moderne"] },
  { name: "Snø", slug: "sno", categories: ["hund"], meaning: "Snø", origin: "Norsk", styles: ["moderne"] },
  { name: "Sofia", slug: "sofia", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk"] },
  { name: "Sofie", slug: "sofie", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["moderne"] },
  { name: "Sol", slug: "sol", categories: ["jente", "katt"], meaning: "Sol", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Solfrid", slug: "solfrid", categories: ["jente"], meaning: "Sol og skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Solveig", slug: "solveig", categories: ["jente"], meaning: "Solens styrke", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sondre", slug: "sondre", categories: ["gutt"], meaning: "Den sørlige", origin: "Norrønt", styles: ["moderne"] },
  { name: "Sonny", slug: "sonny", categories: ["hund"], meaning: "Sønn", origin: "Engelsk", styles: ["klassisk"] },
  { name: "Sophia", slug: "sophia", categories: ["jente"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Sophie", slug: "sophie", categories: ["hund", "jente"], meaning: "Visdom", origin: "Gresk", styles: ["klassisk"] },
  { name: "Sparky", slug: "sparky", categories: ["hund"], meaning: "Livlig", origin: "Engelsk", styles: ["unikt"] },
  { name: "Spragle", slug: "spragle", categories: ["katt"], meaning: "Flerfarget", origin: "Norsk", styles: ["moderne"] },
  { name: "Steinar", slug: "steinar", categories: ["gutt"], meaning: "Steinkriger", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Stella", slug: "stella", categories: ["jente"], meaning: "Stjerne", origin: "Latin", styles: ["moderne"] },
  { name: "Stian", slug: "stian", categories: ["gutt"], meaning: "Den raske", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Storm", slug: "storm", categories: ["gutt", "hund"], meaning: "Storm", origin: "Norrønt", styles: ["moderne"] },
  { name: "Sunniva", slug: "sunniva", categories: ["jente"], meaning: "Solgave", origin: "Norrønt", styles: ["moderne"] },
  { name: "Susanne", slug: "susanne", categories: ["jente"], meaning: "Lilje", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Svein", slug: "svein", categories: ["gutt"], meaning: "Ung mann", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Sverre", slug: "sverre", categories: ["gutt"], meaning: "Den urolige", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Synnøve", slug: "synnove", categories: ["jente"], meaning: "Solgave", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Tarjei", slug: "tarjei", categories: ["gutt"], meaning: "Tors spyd", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tassen", slug: "tassen", categories: ["hund"], meaning: "Liten", origin: "Norsk", styles: ["moderne"] },
  { name: "Teddy", slug: "teddy", categories: ["hund", "gutt"], meaning: "Guds gave", origin: "Germansk", styles: ["klassisk"] },
  { name: "Teodor", slug: "teodor", categories: ["gutt"], meaning: "Guds gave", origin: "Gresk", styles: ["moderne"] },
  { name: "Terje", slug: "terje", categories: ["gutt"], meaning: "Tors spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Thea", slug: "thea", categories: ["jente"], meaning: "Gudinne", origin: "Gresk", styles: ["moderne"] },
  { name: "Theo", slug: "theo", categories: ["gutt"], meaning: "Guds gave", origin: "Gresk", styles: ["moderne"] },
  { name: "Theodor", slug: "theodor", categories: ["gutt"], meaning: "Guds gave", origin: "Gresk", styles: ["klassisk", "moderne"] },
  { name: "Thomas", slug: "thomas", categories: ["gutt"], meaning: "Tvilling", origin: "Arameisk", styles: ["moderne"] },
  { name: "Thor", slug: "thor", categories: ["hund", "gutt"], meaning: "Tordengud", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Thora", slug: "thora", categories: ["jente"], meaning: "Tors kvinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Thyra", slug: "thyra", categories: ["jente"], meaning: "Viet til Tor", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tigra", slug: "tigra", categories: ["katt"], meaning: "Tiger", origin: "Engelsk", styles: ["unikt"] },
  { name: "Tiril", slug: "tiril", categories: ["jente", "hund"], meaning: "Liten fugl", origin: "Norrønt", styles: ["moderne"] },
  { name: "Tobias", slug: "tobias", categories: ["gutt"], meaning: "Gud er god", origin: "Hebraisk", styles: ["moderne"] },
  { name: "Toby", slug: "toby", categories: ["hund", "gutt"], meaning: "Gud er god", origin: "Hebraisk", styles: ["klassisk"] },
  { name: "Tone", slug: "tone", categories: ["jente"], meaning: "Ny torden", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Tora", slug: "tora", categories: ["jente"], meaning: "Tors kvinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Torbjørn", slug: "torbjorn", categories: ["gutt"], meaning: "Tors bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tore", slug: "tore", categories: ["gutt"], meaning: "Tor", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Torfinn", slug: "torfinn", categories: ["gutt"], meaning: "Tors finne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torgeir", slug: "torgeir", categories: ["gutt"], meaning: "Tors spyd", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Toril", slug: "toril", categories: ["jente"], meaning: "Tors kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torill", slug: "torill", categories: ["jente"], meaning: "Tors kamp", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Torkel", slug: "torkel", categories: ["gutt"], meaning: "Tors hjelm", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torleif", slug: "torleif", categories: ["gutt"], meaning: "Tors arving", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torstein", slug: "torstein", categories: ["gutt"], meaning: "Tors stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Torvald", slug: "torvald", categories: ["gutt"], meaning: "Tors hersker", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tove", slug: "tove", categories: ["jente"], meaning: "Tor", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Trine", slug: "trine", categories: ["jente"], meaning: "Den rene", origin: "Gresk", styles: ["klassisk"] },
  { name: "Truls", slug: "truls", categories: ["gutt"], meaning: "Tors hjelm", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Trygve", slug: "trygve", categories: ["gutt"], meaning: "Trofast", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Trym", slug: "trym", categories: ["gutt"], meaning: "Larm, drønn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Turbo", slug: "turbo", categories: ["hund"], meaning: "Rask", origin: "Norsk", styles: ["moderne"] },
  { name: "Turid", slug: "turid", categories: ["jente"], meaning: "Tors skjønnhet", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Tuva", slug: "tuva", categories: ["jente"], meaning: "Tor", origin: "Norrønt", styles: ["moderne"] },
  { name: "Ulf", slug: "ulf", categories: ["gutt"], meaning: "Ulv", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Ulrik", slug: "ulrik", categories: ["gutt"], meaning: "Odelsherre", origin: "Germansk", styles: ["klassisk"] },
  { name: "Unn", slug: "unn", categories: ["jente"], meaning: "Å elske", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Unni", slug: "unni", categories: ["jente"], meaning: "Å elske", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Urd", slug: "urd", categories: ["jente"], meaning: "Skjebne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vebjørn", slug: "vebjorn", categories: ["gutt"], meaning: "Hellig bjørn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vegar", slug: "vegar", categories: ["gutt"], meaning: "Den som verner helligdommen", origin: "Norrønt", styles: ["norrønt", "moderne"] },
  { name: "Vegard", slug: "vegard", categories: ["gutt"], meaning: "Den som verner helligdommen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vetle", slug: "vetle", categories: ["gutt"], meaning: "Den lille", origin: "Norrønt", styles: ["moderne"] },
  { name: "Victor", slug: "victor", categories: ["gutt"], meaning: "Seierherre", origin: "Latin", styles: ["moderne"] },
  { name: "Victoria", slug: "victoria", categories: ["jente"], meaning: "Seier", origin: "Latin", styles: ["moderne"] },
  { name: "Vidar", slug: "vidar", categories: ["gutt"], meaning: "Den vide krigeren", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vidkun", slug: "vidkun", categories: ["gutt"], meaning: "Den vide ættlingen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vigdis", slug: "vigdis", categories: ["jente"], meaning: "Kampgudinne", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Viking", slug: "viking", categories: ["gutt"], meaning: "Sjøfarer", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Vilde", slug: "vilde", categories: ["jente", "hund"], meaning: "Hersker", origin: "Germansk", styles: ["norrønt", "moderne", "unikt"] },
  { name: "Vilja", slug: "vilja", categories: ["jente"], meaning: "Vilje", origin: "Norsk", styles: ["moderne"] },
  { name: "Wenche", slug: "wenche", categories: ["jente"], meaning: "Vendisk kvinne", origin: "Germansk", styles: ["norrønt", "unikt"] },
  { name: "Whisker", slug: "whisker", categories: ["katt"], meaning: "Kinnhår", origin: "Engelsk", styles: ["unikt"] },
  { name: "Whiskers", slug: "whiskers", categories: ["katt"], meaning: "Kinnhår", origin: "Engelsk", styles: ["unikt"] },
  { name: "William", slug: "william", categories: ["gutt"], meaning: "Viljesterkt vern", origin: "Germansk", styles: ["klassisk", "moderne"] },
  { name: "Winston", slug: "winston", categories: ["hund", "gutt"], meaning: "Gledens stein", origin: "Engelsk", styles: ["unikt"] },
  { name: "Ylva", slug: "ylva", categories: ["jente"], meaning: "Hunnulv", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Ymer", slug: "ymer", categories: ["gutt"], meaning: "Urjotnen", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Yngve", slug: "yngve", categories: ["gutt"], meaning: "Guden Ing", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Yrja", slug: "yrja", categories: ["jente"], meaning: "Duskregn", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Zelda", slug: "zelda", categories: ["hund", "jente"], meaning: "Grå kamp", origin: "Germansk", styles: ["unikt"] },
  { name: "Zephyr", slug: "zephyr", categories: ["hund"], meaning: "Vestavinden", origin: "Gresk", styles: ["unikt"] },
  { name: "Zeus", slug: "zeus", categories: ["hund"], meaning: "Himmelgud", origin: "Gresk", styles: ["unikt"] },
  { name: "Zoe", slug: "zoe", categories: ["jente"], meaning: "Liv", origin: "Gresk", styles: ["moderne"] },
  { name: "Zoey", slug: "zoey", categories: ["hund", "jente"], meaning: "Liv", origin: "Gresk", styles: ["klassisk"] },
  { name: "Zuri", slug: "zuri", categories: ["katt", "jente"], meaning: "Vakker", origin: "Swahili", styles: ["unikt"] },
  { name: "Ørjan", slug: "orjan", categories: ["gutt"], meaning: "Jordbruker", origin: "Gresk", styles: ["norrønt", "moderne"] },
  { name: "Øystein", slug: "oystein", categories: ["gutt"], meaning: "Lykke og stein", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Øyvind", slug: "oyvind", categories: ["gutt"], meaning: "Alltid vinner", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åge", slug: "age", categories: ["gutt"], meaning: "Forfader", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Åsa", slug: "asa", categories: ["jente"], meaning: "Gud", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åse", slug: "ase", categories: ["jente"], meaning: "Gudinne", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Aase", slug: "aase", categories: ["jente"], meaning: "Gud, av æsene", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
  { name: "Åshild", slug: "ashild", categories: ["jente"], meaning: "Gudenes kamp", origin: "Norrønt", styles: ["norrønt", "unikt"] },
  { name: "Åsmund", slug: "asmund", categories: ["gutt"], meaning: "Guds vern", origin: "Norrønt", styles: ["norrønt", "klassisk"] },
];

export const categoryLabels: Record<Category, string> = {
  jente: "Jentenavn",
  gutt: "Guttenavn",
  hund: "Hundenavn",
  katt: "Kattenavn",
};

/**
 * Personnavn eller dyrenavn.
 *
 * Mange navn brukes til begge deler – Angus er både et guttenavn og et
 * hundenavn – og det er dette skillet som gjør at siden kan si hva navnet
 * *først og fremst* er, i stedet for å liste kategoriene som om de var like.
 */
export type CategoryKind = "person" | "dyr";

export const categoryKind = (category: Category): CategoryKind =>
  category === "jente" || category === "gutt" ? "person" : "dyr";

/**
 * Hovedbruken. Første kategori i lista er alltid den navnet først og fremst
 * brukes som, og den styrer brødsmulen og hvilken kategoriside navnet regnes
 * som barn av. Legger du til en ny kategori på et navn som finnes fra før,
 * skal den legges til *sist* – da holder hovedbruken og URL-ene seg i ro.
 */
export const primaryCategory = (entry: NameEntry): Category => entry.categories[0]!;

/** Kategoriene navnet også brukes i, utover hovedbruken. */
export const secondaryCategories = (entry: NameEntry): Category[] => entry.categories.slice(1);

/** Sant når navnet brukes både på mennesker og på dyr. */
export const spansKinds = (entry: NameEntry): boolean =>
  new Set(entry.categories.map(categoryKind)).size > 1;

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
