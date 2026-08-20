# Slik legger du til et navn

Reglene under gjelder hvert eneste navn som legges inn. De finnes fordi
navnesidene skal kunne stoles på: folk søker opp hva et navn betyr før de gir
det til et barn, og da må det som står der være riktig – og mulig å etterprøve.

Kjør `npm run navn:sjekk` før du committer. Den fanger de fleste bruddene på
reglene automatisk.

---

## 1. Navnet hører hjemme to steder

**`src/data/names.ts`** – én linje i tabellen:

```ts
{ name: "Sindre", slug: "sindre", categories: ["gutt"], meaning: "Gnist", origin: "Norrønt", styles: ["norrønt", "moderne"] },
```

**`src/data/name-details/<gruppe>.ts`** – det redaksjonelle innholdet:

```ts
sindre: {
  elements: [{ form: "sindri", sense: "gnist, den gnistrende" }],
  origin: "Sindre er dvergen som smir Tors hammer i norrøn mytologi …",
  sources: [
    { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" },
  ],
},
```

Nøkkelen i detaljfilen **må** være den samme som `slug` i tabellen.

---

## 2. Kilder er obligatorisk

**Hvert navn skal ha minst én kilde, og kildene vises nederst på navnesiden.**

Det er dette som skiller en navneside folk kan bruke fra gjetting. En kilde er
et sted leseren kan gå for å etterprøve det som står – ikke nødvendigvis der du
selv leste det først.

```ts
sources: [
  { title: "Norsk personnamnleksikon", publisher: "Det Norske Samlaget" },
  { title: "Sindre", publisher: "Store norske leksikon", url: "https://snl.no/Sindre" },
],
```

**Kilder som holder mål:**

| Kilde                                          | Brukes til                                     |
| ---------------------------------------------- | ---------------------------------------------- |
| Norsk personnamnleksikon (Kruken & Stemshaug)  | Norske og norrøne navn – standardverket        |
| Store norske leksikon (snl.no)                 | Navn, mytologi, språkhistorie                  |
| Nordic Names (nordicnames.de)                  | Nordiske navn, med henvisning til primærkilder |
| Behind the Name (behindthename.com)            | Internasjonale navn                            |
| Bokmålsordboka / Nynorskordboka (ordbokene.no) | Norske ord brukt som navn                      |
| Det Norske Akademis ordbok (naob.no)           | Ordhistorie                                    |
| SSB, «Navn til nyfødte» (ssb.no/navn)          | Bare tall og statistikk                        |

**Krav til `url`:** ta bare med en lenke du faktisk har åpnet og sett at
fungerer, og som peker på det navnet. Er du usikker, dropp `url` og oppgi
tittel og utgiver – det er bedre enn en død lenke.

**Ikke godkjent som kilde:** navneblogger, babynavn-sider som ikke oppgir egne
kilder, kommentarfelt, og AI-genererte svar.

---

## 3. Dette skal du aldri skrive uten kilde

Samme regel som gjelder `src/data/stats.ts`:

- **Popularitet og plasseringer.** «Var på topp ti i 2019» krever tall fra SSB.
- **Navnedager.**
- **Kjente navnebærere**, med mindre du er sikker.
- **Hvor mange som heter navnet.**

Fristes du til å skrive noe av dette fordi det ville fylt ut avsnittet – la
det stå tomt i stedet. En kort, riktig side er verdt mer enn en lang, usikker.

---

## 4. Er betydningen usikker, skriv det

Mange navn har omdiskutert opphav. Da skal siden si det, ikke velge én
tolkning og late som den er sikker:

> Betydningen er omdiskutert: den vanligste tolkningen er «den trette», men
> navnet er også knyttet til et akkadisk ord for ku.

Det er bedre innhold enn en påstand, og det er riktig.

---

## 5. Feltene i tabellen

**`name`** – skrivemåten slik den brukes i Norge.

**`slug`** – små bokstaver, æ→ae, ø→o, å→a. `Bjørn` → `bjorn`. Må være unik.

**`meaning`** – kort, på vanlig norsk.

- Ja: `"Tors stein"`, `"Den ivrige"`, `"Vern og lys"`
- Nei: `"Tor + stein"` – plusstegn leses dårlig i «X betyr «…»»
- Nei: `"Bjørn (dyret)"` – parenteser midt i en setning
- Nei: `"Guds gave (fra Theodore)"` – forklaringen hører hjemme i `origin`

**`origin`** – språket navnet kommer fra, ikke der det er vanlig i dag.
Må stemme med det du skriver i `origin`-teksten. Står det `Norrønt` i tabellen
og «en form av Katarina» i teksten, er én av dem feil.

Gyldige verdier er de som allerede finnes i tabellen. Legger du til en ny, må
den også inn i `FAMILY_BY_ORIGIN` i `src/lib/name-content.ts`, ellers får
navnet standardteksten for ukjent opphav.

**`categories`** – `jente`, `gutt`, `hund`, `katt`. Et navn kan stå i flere, og
det gjør mange: Angus er både hundenavn og guttenavn, Luna brukes som alle tre
av jente, hund og katt. Da blir det **én** side som nevner alle kategoriene,
ikke tre sider med samme innhold.

**Rekkefølgen betyr noe.** Den første kategorien er hovedbruken. Den styrer:

- brødsmulen og «Alle hundenavn»-lenken øverst på navnesiden
- hvilken kategoriside navnet regnes som barn av i JSON-LD
- teksten «brukes først og fremst som hundenavn, men også som guttenavn»
- «Bruk»-filteret på kategorisidene, der man kan skille «Først og fremst
  hundenavn» fra «Brukes også som hundenavn»

Legger du en kategori til på et navn som finnes fra før, **legg den til sist**.
Da holder hovedbruken og lenkene seg i ro. Bytt bare rekkefølge hvis
hovedbruken faktisk er feil.

Ta bare med kategorier navnet virkelig brukes i. Rex og Pusur er dyrenavn og
ingenting annet, og skal ikke inn i guttenavnlista for å fylle den opp.

**`styles`** – `norrønt`, `klassisk`, `moderne`, `unikt`. Minst én.

---

## 6. Feltene i detaljfilen

Alle er valgfrie unntatt `sources`.

**`elements`** – navneleddene, i normalisert form fra kildespråket (`bjǫrn`,
`hildr`, `geirr`). Det er disse som binder navn sammen: alle navn med `bjǫrn`
lenker til hverandre automatisk. Ta dem bare med når navnet faktisk er
sammensatt – ikke bryt opp et navn som ikke lar seg bryte opp.

**`origin`** – én til tre setninger. Skriv om _dette_ navnet, ikke om
navnegruppen; det generelle om opphavsgruppen legges på automatisk fra
`familyContext`. Gjentar du det, står det samme to ganger på siden.

**`variants`** – andre skrivemåter av samme navn (Håkon/Haakon).

**`shortForms`** – kortformer og kjæleformer.

**`pronunciation`** – bare når uttalen ikke er opplagt. Skriv for folk, ikke
med lydskrift: `«sjur», med sj-lyd i starten`.

**`related`** – navn i slekt der slektskapet ikke synes i skrivemåten.

---

## 7. Variant eller eget navn?

Er skrivemåtene så ulike at folk søker på begge, lag to oppføringer og pek dem
mot hverandre med `variants`. Håkon og Haakon har hver sin side, og hver av
dem forklarer forholdet til den andre.

Er det bare en bøyning eller en kjæleform, hører det hjemme i `shortForms`.

---

## 8. Sjekkliste

- [ ] Linje i `names.ts` med unik slug
- [ ] Oppføring i riktig detaljfil, samme nøkkel
- [ ] Minst én kilde
- [ ] `url` bare på lenker du har åpnet
- [ ] `origin` i tabellen stemmer med `origin`-teksten
- [ ] Ingen `+` eller parenteser i `meaning`
- [ ] Ingen popularitetstall, navnedager eller navnebærere uten kilde
- [ ] `npm run navn:sjekk` går grønt
- [ ] `npm run build` går grønt

---

## 9. Kjente hull

Navnene som lå inne før kildekravet ble innført, har ennå ikke kilder.
`npm run navn:sjekk` viser hvor mange det gjelder. De skal fylles ut
etter hvert – begynn gjerne med de navnene som har mest trafikk.
