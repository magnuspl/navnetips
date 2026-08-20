// Redaksjonelt innhold til kategori- og stilsidene.
//
// Teksten er hentet fra den forrige versjonen av Navnetips, der den lå som
// markdown. Her ligger den strukturert, slik at sidene kan style avsnitt,
// lister og overskrifter selv i stedet for å dumpe HTML inn i DOM-en.

import type { Category, Style } from "./names";

export type ContentSection = {
  heading: string;
  body?: string;
  bullets?: { lead?: string; text: string }[];
};

export type Editorial = {
  lead: string;
  sections: ContentSection[];
};

export const categoryEditorial: Record<Category, Editorial> = {
  gutt: {
    lead: "Guttenavn med betydning, opprinnelse og stil – fra norrøne navn som har vært i bruk siden vikingtiden, til bibelske og internasjonale navn som kom hit senere. Her er hele utvalget samlet, med egen side for hvert navn.",
    sections: [
      {
        heading: "Hvordan velge guttenavn?",
        body: "Et fornavn følger et menneske gjennom hele livet, i alle sammenhenger. Disse fire tingene er verdt å sjekke før du bestemmer deg:",
        bullets: [
          {
            lead: "Klangen sammen med etternavnet",
            text: "si hele navnet høyt. Korte fornavn kler lange etternavn, og motsatt. To harde konsonanter som møtes blir tunge å få fram",
          },
          {
            lead: "Kortformen",
            text: "lange navn får nesten alltid en dagligform. Tenk gjennom hvilken før andre velger den for deg",
          },
          {
            lead: "Initialene",
            text: "skriv dem ned sammen med eventuelle mellomnavn og se hva som står",
          },
          {
            lead: "Skrivemåten",
            text: "navn med æ, ø eller å fungerer fint i Norge, men endrer seg i utenlandske systemer og e-postadresser",
          },
        ],
      },
      {
        heading: "Norrøne guttenavn",
        body: "Norrøne navn er det eldste laget i norsk navneskikk, og de fleste er satt sammen av to ledd som hver betyr noe for seg. Harald er hær og hersker, Torbjørn er guden Tor og bjørnen, Sigurd er seier og vokter. Det er derfor navnene henger sammen i familier: alle navn med leddet bjǫrn er i slekt, og det samme gjelder Tor-navnene, som er den største gruppen av dem alle.",
      },
      {
        heading: "Klassiske og bibelske guttenavn",
        body: "Navn som Jakob, Johannes, Elias og Tobias kom til Norge med kristendommen og festet seg for alvor etter reformasjonen. De har holdt seg påfallende stabile siden – flere av dem har ligget i bruk i over fem hundre år uten å gå av moten, og flere er blant de mest brukte guttenavnene også i dag.",
      },
      {
        heading: "Korte guttenavn",
        body: "Korte navn på én stavelse har fått en tydelig oppsving. De er lette å rope, de tåler lange etternavn, og de blir sjelden forkortet. Odd, Bo, Dag, Finn, Leo og Ask hører til denne gruppen. Motsatt gir lengre navn rom for en kortform som familien kan gjøre til sin egen.",
      },
      {
        heading: "Trender i guttenavn",
        bullets: [
          { text: "Norrøne navn fortsetter å stige, og flere av dem er nå tilbake i toppen" },
          { text: "Korte navn på én og to stavelser vinner terreng" },
          { text: "Naturnavn som Birk, Ask og Storm er tatt i bruk som fornavn" },
          { text: "Navn som fungerer på tvers av språkgrenser blir stadig vanligere" },
        ],
      },
    ],
  },
  jente: {
    lead: "Jentenavn med betydning og opprinnelse – fra norrøne navn som Ingrid og Astrid, til bibelske, greske og moderne navn. Hele utvalget er samlet her, og hvert navn har sin egen side med etymologi og kilder.",
    sections: [
      {
        heading: "Hvordan velge jentenavn?",
        body: "Navnet skal fungere både på lekeplassen og i en jobbsøknad tretti år senere. Det er verdt å tenke gjennom:",
        bullets: [
          {
            lead: "Klangen sammen med etternavnet",
            text: "si hele navnet høyt noen ganger. Ulik rytme i fornavn og etternavn gir som regel best fall",
          },
          {
            lead: "Kortformen",
            text: "Elisabeth blir Lise, Eli eller Bettina. Velg gjerne kortformen bevisst",
          },
          {
            lead: "Betydningen",
            text: "de fleste navn har en historie, og noen har en som overrasker. Det er verdt å slå opp",
          },
          {
            lead: "Skrivemåten",
            text: "mange jentenavn finnes i flere varianter – Sofie og Sofia, Linnea og Linnéa. Varianten du velger blir stående",
          },
        ],
      },
      {
        heading: "Norrøne jentenavn",
        body: "Norrøne kvinnenavn er som regel satt sammen av to ledd, og de forteller ofte noe annet enn folk venter. Leddet hildr betyr kamp og avslutter Gunnhild, Ragnhild, Brynhild og Alvhild. Leddet fríðr betyr vakker og elsket, og står sist i Astrid, Ingrid, Sigrid og Turid. Mange av dem var i bruk allerede i vikingtiden og er det fortsatt.",
      },
      {
        heading: "Sjeldne og unike jentenavn",
        body: "Leter du etter noe som ikke står på hver eneste klasseliste, finnes det en stor gruppe navn med lang historie og lite bruk: Bergljot, Målfrid, Åshild, Oddveig, Jorunn og Hervor. De er ikke oppfunnet – de har vært i bruk i århundrer, bare i mindre kretser.",
      },
      {
        heading: "Korte jentenavn",
        body: "Korte navn er lette å skrive, lette å rope og vanskelige å forkorte. Liv, Unn, Sol, Gro, Eir, Aud og Siv er blant de korteste norske jentenavnene, og flere av dem er også blant de eldste.",
      },
      {
        heading: "Trender i jentenavn",
        bullets: [
          { text: "Norrøne navn som Frida, Alma og Selma har steget kraftig de siste årene" },
          { text: "Naturnavn og blomsternavn er i vekst" },
          { text: "Korte former blir tatt i bruk som selvstendige navn" },
          { text: "Gamle navn fra oldemors generasjon kommer tilbake" },
        ],
      },
    ],
  },
  hund: {
    lead: "Et godt hundenavn er kort, tydelig og lett å skille fra kommandoene dine. Her er forslag med betydning og opprinnelse – både klassiske hundenavn, menneskenavn som brukes på hund, og norske ordnavn.",
    sections: [
      {
        heading: "Hvordan velge hundenavn?",
        body: "Hunden skal kjenne igjen navnet sitt blant alt annet du sier. Det stiller noen krav et menneskenavn ikke gjør:",
        bullets: [
          {
            lead: "Én til to stavelser",
            text: "det er formen hunder lærer inn raskest, med trykk på den første",
          },
          {
            lead: "Unngå kommandokrasj",
            text: "navn som ligner «sitt», «nei», «bli», «kom» eller «hent» gjør innlæringen unødvendig vanskelig",
          },
          {
            lead: "Vokal til slutt",
            text: "navn som ender på vokal bærer bedre når du roper over avstand",
          },
          {
            lead: "Tenk på hundeparken",
            text: "du kommer til å rope dette høyt blant fremmede, flere ganger om dagen, i mange år",
          },
        ],
      },
      {
        heading: "Klassiske hundenavn",
        body: "Noen navn har vært brukt på hund så lenge at de nesten er en egen sjanger: Rex, Buster, Bella, Charlie og Max. Titteldyrenavnene hører til samme tradisjon – King, Duke, Prince og Baron er alle rangbetegnelser satt på en firbeint.",
      },
      {
        heading: "Norske hundenavn",
        body: "De norske ordnavnene er hentet rett fra dagligspråket, og betydningen er gjennomsiktig for alle: Tassen, Snø, Bris, Lykke, Gulltass og Skygge. De skiller seg fra de engelske ved at ingen trenger å slå dem opp.",
      },
      {
        heading: "Menneskenavn på hund",
        body: "En stor del av de vanligste hundenavnene er helt alminnelige personnavn – Molly, Henry, Jack, Milo og Angus. Navnene står oppført i begge listene her, og hver navneside sier hva navnet først og fremst brukes som.",
      },
    ],
  },
  katt: {
    lead: "Kattenavn med betydning og opprinnelse – fra klassiske norske navn som Pusur og Mons, til mytiske, lekne og internasjonale favoritter. Katter svarer best på navn med tydelig vokalklang.",
    sections: [
      {
        heading: "Hvordan velge kattenavn?",
        body: "Katter reagerer på lyd mer enn på ord, og noen lyder når bedre fram enn andre:",
        bullets: [
          {
            lead: "Lys vokal",
            text: "navn med i-lyd eller vokal til slutt fanger oppmerksomheten best",
          },
          {
            lead: "To stavelser",
            text: "gjentakelse og tydelig rytme gjør navnet lettere å kjenne igjen",
          },
          {
            lead: "Tål å rope det",
            text: "navnet skal kunne ropes ut i hagen sent på kvelden uten at du kvier deg",
          },
          {
            lead: "Vent litt",
            text: "kattens personlighet foreslår ofte navnet selv i løpet av de første dagene",
          },
        ],
      },
      {
        heading: "Klassiske norske kattenavn",
        body: "Pusur, Mons, Puse og Kjell hører til den norske kattetradisjonen. Pusur er den norske Garfield og er blitt selve arketypen på et kattenavn her i landet, mens pus er lokkeordet i hele Norden.",
      },
      {
        heading: "Mytiske kattenavn",
        body: "Frøya kjørte etter myten en vogn trukket av katter, og det gjør gudinnenavnet særlig velvalgt. Loke, Saga, Odin, Luna og Nyx hører til samme gruppe – navn hentet fra norrøn, gresk og romersk mytologi.",
      },
      {
        heading: "Beskrivende kattenavn",
        body: "Mange kattenavn beskriver dyret snarere enn å bety noe: Myk, Spragle, Skygge, Snute og Smule. Det er en egen liten norsk sjanger, der navnet sier hvordan katten ser ut eller oppfører seg.",
      },
    ],
  },
};

/** Stilsidene finnes bare for jente- og guttenavn, slik de gjorde før. */
export type StylePageCategory = Extract<Category, "jente" | "gutt">;

export const styleEditorial: Record<StylePageCategory, Record<Style, Editorial>> = {
  gutt: {
    norrønt: {
      lead: "Norrøne guttenavn har en rik historie som strekker seg tilbake til vikingtiden og den norrøne kulturen. Disse navnene bærer ofte sterke betydninger knyttet til norrøn mytologi, natur og krigføring.",
      sections: [
        {
          heading: "Historisk betydning",
          body: "Norrøne navn var mer enn bare identifikatorer – de var bærere av familietradisjoner og kulturelle verdier. Foreldre valgte ofte navn som skulle gi barnet styrke og beskyttelse, eller som hedret forfedre og guder.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            {
              lead: "Styrke",
              text: "Mange navn inneholder elementer som betyr «styrke», «makt» eller «beskyttelse»",
            },
            {
              lead: "Natur",
              text: "Referanser til naturkrefter som torden, ild og hav er vanlige",
            },
            {
              lead: "Guder",
              text: "Mange navn har tilknytning til norrøne guder som Tor, Odin og Frøy",
            },
          ],
        },
        {
          heading: "Moderne relevans",
          body: "I dag opplever vi en fornyet interesse for norrøne navn. De representerer en forbindelse til vår kulturarv, samtidig som de ofte har en unik og kraftfull klang som skiller seg ut i dagens navnelandskap.",
        },
      ],
    },
    klassisk: {
      lead: "Klassiske guttenavn representerer tidløs eleganse og har vært populære gjennom generasjoner. Disse navnene har ofte røtter i historiske, religiøse eller kulturelle tradisjoner.",
      sections: [
        {
          heading: "Historisk betydning",
          body: "Klassiske navn har ofte en lang historie av bruk i Norge og andre europeiske land. De har vist seg å være tidløse valg som fungerer like godt i dag som for hundre år siden.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Tradisjon", text: "Disse navnene har en lang historie i norsk kultur" },
            { lead: "Stabilitet", text: "Klassiske navn går sjelden av moten" },
            {
              lead: "Universalitet",
              text: "Mange av navnene er gjenkjennelige på tvers av kulturer",
            },
          ],
        },
        {
          heading: "Moderne bruk",
          body: "Klassiske navn opplever ofte en renessanse i moderne tid, der foreldre søker navn med historie og betydning. De gir en følelse av kontinuitet og tradisjon i en stadig skiftende verden.",
        },
      ],
    },
    moderne: {
      lead: "Moderne guttenavn reflekterer dagens trender og samfunn. Disse navnene er ofte inspirert av populærkultur, internasjonale impulser eller nye kombinasjoner av tradisjonelle elementer.",
      sections: [
        {
          heading: "Hvorfor velge et moderne navn?",
          body: "Moderne navn kan gi barnet ditt en tidsaktuell og frisk start. De kan reflektere vår globaliserte verden og moderne verdier, samtidig som de ofte har en unik klang.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            {
              lead: "Internasjonalt",
              text: "Mange moderne navn fungerer godt på tvers av landegrenser",
            },
            { lead: "Trendy", text: "Disse navnene følger dagens navnetrender" },
            {
              lead: "Nyskapende",
              text: "Ofte nye kombinasjoner eller moderne tolkninger av tradisjonelle navn",
            },
          ],
        },
        {
          heading: "Moderne trender",
          body: "Vi ser en økende trend mot:",
          bullets: [
            { text: "Korte, enkle navn" },
            { text: "Internasjonale navn som er lette å uttale" },
            { text: "Navn inspirert av populærkultur og kjente personligheter" },
            { text: "Kreative kombinasjoner av tradisjonelle elementer" },
          ],
        },
      ],
    },
    unikt: {
      lead: "Unike guttenavn skiller seg ut fra mengden og gir barnet ditt en distinkt identitet. Disse navnene kan være moderne oppfinnelser, sjeldne historiske navn, eller navn fra andre kulturer som er mindre vanlige i Norge.",
      sections: [
        {
          heading: "Hvorfor velge et unikt navn?",
          body: "Et unikt navn kan gi barnet ditt en spesiell start i livet og en følelse av individualitet. Det kan også reflektere familiens kreativitet eller kulturelle bakgrunn.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Originalitet", text: "Disse navnene er mindre vanlige i dagens samfunn" },
            {
              lead: "Kreativitet",
              text: "Mange unike navn har interessante kombinasjoner av lyder eller betydninger",
            },
            {
              lead: "Kulturell fusjon",
              text: "Noen navn kombinerer elementer fra forskjellige kulturer",
            },
          ],
        },
        {
          heading: "Moderne trender",
          body: "I dag ser vi en økende trend mot mer unike navn, der foreldre søker å gi sine barn navn som skiller seg ut, samtidig som de beholder en viss forbindelse til tradisjon eller betydning.",
        },
      ],
    },
  },
  jente: {
    norrønt: {
      lead: "Norrøne jentenavn bærer med seg en rik arv fra vikingtiden og den norrøne kulturen. Disse navnene representerer ofte styrke, skjønnhet og visdom fra vår nordiske fortid.",
      sections: [
        {
          heading: "Historisk betydning",
          body: "I norrøn tid var kvinners navn ofte knyttet til guddommelige krefter, naturens elementer eller ønskede egenskaper. Navnene kunne også hedre valkyrjer eller mektige gudinner fra den norrøne mytologien.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Styrke", text: "Mange navn reflekterer kvinnelig styrke og uavhengighet" },
            { lead: "Natur", text: "Referanser til naturens skjønnhet og kraft er vanlige" },
            {
              lead: "Gudinner",
              text: "Tilknytning til norrøne gudinner som Frøya og Idun",
            },
          ],
        },
        {
          heading: "Moderne relevans",
          body: "Norrøne jentenavn har fått en renessanse i moderne tid, der foreldre søker navn som kombinerer historisk dybde med feminin styrke. Disse navnene gir en unik forbindelse til vår kulturarv.",
        },
      ],
    },
    klassisk: {
      lead: "Klassiske jentenavn representerer tidløs eleganse og har vært elsket gjennom generasjoner. Disse navnene bærer med seg en rik historie og kulturell betydning.",
      sections: [
        {
          heading: "Historisk betydning",
          body: "Klassiske jentenavn har ofte dype røtter i europeisk og norsk historie. De har vist seg å være tidløse valg som forblir populære gjennom skiftende trender.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Eleganse", text: "Klassiske navn har ofte en naturlig eleganse" },
            { lead: "Tradisjon", text: "Disse navnene har en lang historie i norsk kultur" },
            { lead: "Allsidighet", text: "Fungerer godt både i barndom og voksenliv" },
          ],
        },
        {
          heading: "Moderne bruk",
          body: "I dag velger mange foreldre klassiske navn for deres tidløse appell og sterke kulturelle forankring. Disse navnene gir en følelse av kontinuitet og tradisjon i en moderne verden.",
        },
      ],
    },
    moderne: {
      lead: "Moderne jentenavn representerer dagens mangfoldige navnekultur. Disse navnene kombinerer ofte det beste fra ulike tradisjoner med nye, kreative elementer.",
      sections: [
        {
          heading: "Hvorfor velge et moderne navn?",
          body: "Et moderne navn kan gi barnet ditt en tidsaktuell identitet som reflekterer vår samtid. Disse navnene er ofte både stilige og betydningsfulle.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Allsidighet", text: "Fungerer godt i en internasjonal kontekst" },
            { lead: "Kreativitet", text: "Nye kombinasjoner og moderne tolkninger" },
            { lead: "Enkelhet", text: "Ofte korte og lettuttalte navn" },
          ],
        },
        {
          heading: "Moderne trender",
          body: "Dagens trender inkluderer:",
          bullets: [
            { text: "Naturinspirerte navn" },
            { text: "Korte, kraftfulle navn" },
            { text: "Internasjonale navn med nordisk vri" },
            { text: "Vintage-navn i ny drakt" },
          ],
        },
      ],
    },
    unikt: {
      lead: "Unike jentenavn gir muligheten til å skille seg ut og uttrykke individualitet. Disse navnene kan være moderne kreasjoner, sjeldne historiske perler, eller inspirert av andre kulturer.",
      sections: [
        {
          heading: "Hvorfor velge et unikt navn?",
          body: "Et unikt navn kan gi barnet ditt en spesiell identitet og muligheten til å skille seg ut på en positiv måte. Det kan også reflektere familiens kreativitet eller kulturelle mangfold.",
        },
        {
          heading: "Karakteristikker",
          bullets: [
            { lead: "Originalitet", text: "Disse navnene er mindre vanlige i dagens samfunn" },
            { lead: "Kreativitet", text: "Mange unike navn har interessante lydkombinasjoner" },
            {
              lead: "Personlighet",
              text: "Navnene kan reflektere spesielle betydninger eller historier",
            },
          ],
        },
        {
          heading: "Moderne trender",
          body: "Det er en økende trend mot å velge unike navn som skiller seg ut, samtidig som de beholder en viss eleganse og betydning. Disse navnene kan gi barnet en spennende start på livet.",
        },
      ],
    },
  },
};
