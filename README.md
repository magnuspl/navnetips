# Navnetips.no

Navneguide for barn og kjæledyr: 434 navn med betydning, opprinnelse og stil,
fordelt på jente-, gutte-, hunde- og kattenavn.

## Stack

- **TanStack Start** (React 19) med filbasert ruting
- **Tailwind CSS 4** – designtokens i `src/styles.css`
- **shadcn/ui** på Radix
- Skriftene Fraunces (display) og Karla (brødtekst)

Hele siden **prerendres til statisk HTML** under bygg. Det er ingen
serverkjøring i produksjon: utgivelsen er bare filer.

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # → dist/client
npm run lint
```

## Struktur

| Sti                           | Innhold                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------- |
| `src/data/names.ts`           | Navnedatabasen. Én oppføring per linje – filen er unntatt Prettier med vilje. |
| `src/data/content.ts`         | Redaksjonell tekst til kategori- og stilsidene.                               |
| `src/data/popular.ts`         | Topp 10-listene på `/populaere-navn`.                                         |
| `src/data/stats.ts`           | Årstall til `/navnestatistikk`. **Se advarselen i filen.**                    |
| `src/routes/`                 | Filbaserte ruter. `routeTree.gen.ts` genereres – ikke rediger.                |
| `src/lib/favorites.ts`        | Favoritter i localStorage, SSR-trygt.                                         |
| `scripts/build-redirects.mjs` | Genererer `public/_redirects`.                                                |
| `scripts/post-build.mjs`      | 404.html og opprydding i sitemap.                                             |

### Legge til navn

Reglene står i [docs/legge-til-navn.md](docs/legge-til-navn.md). Kort fortalt:
hvert navn trenger en linje i `names.ts`, en oppføring i `name-details/`, og
**minst én kilde** – kildene vises nederst på navnesiden. Kjør `npm run
navn:sjekk` før du committer.

### Navnedatamodellen

Ett navn er én oppføring og én side på `/navn/<slug>`. Et navn kan høre hjemme i
flere kategorier – Luna brukes både som jente-, hunde- og kattenavn – derfor er
`categories` en liste, ikke ett felt.

Slugen er translitterert (`Bjørn` → `bjorn`), så URL-ene er rene ASCII.

Første kategori i lista er hovedbruken, og den styrer brødsmuler, JSON-LD og
«Bruk»-filteret på kategorisidene. Nye kategorier legges til sist.

## Adresser og omdirigeringer

Redesignet flyttet navnesidene fra `/guttenavn/<navn>` til `/navn/<slug>`. Alle
gamle adresser svarer med **301** til den nye, via `public/_redirects`, som
bygges av `npm run redirects` (kjøres automatisk av `npm run build`).

Reglene er bevisst **ikke tvungne** – ingen `!`. Netlify serverer da en statisk
fil når den finnes, og faller tilbake på regelen ellers. Det er dette som gjør
at `/guttenavn/bokstav/a` og `/guttenavn/kategori/norrønt` beholder sine egne
sider samtidig som `/guttenavn/erik` omdirigeres.

Legger du til navn med æ/ø/å: kjør `npm run redirects` på nytt, så listes de
eksplisitt (slugen er translitterert, så en jokerregel ville bommet).

## Statistikksiden

Tallene i `src/data/stats.ts` er **plassholdere fra designutkastet, ikke
offisiell statistikk**. Så lenge `statsAreVerified` er `false` viser
`/navnestatistikk` en tydelig advarsel og ber søkemotorer om å ikke indeksere
siden. Bytt inn tall fra SSB og sett flagget til `true` for å ta siden i bruk.

## Utgivelse

`netlify.toml` bygger med `npm run build` og publiserer `dist/client`.
`dist/server` brukes bare av prerenderen under bygg og skal ikke publiseres.
