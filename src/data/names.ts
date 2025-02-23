export interface Name {
  name: string;
  meaning: string;
  origin: string;
  categories: string[];
}

export const names = {
  boy: [
    { name: 'Erik', meaning: 'Enevolds hersker', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Magnus', meaning: 'Den store', origin: 'Latin', categories: ['klassisk'] },
    { name: 'Ole', meaning: 'Forfader\'s arving', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Anders', meaning: 'Mandig, modig', origin: 'Gresk', categories: ['klassisk'] },
    { name: 'Bjørn', meaning: 'Bjørn (dyret)', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
    { name: 'Einar', meaning: 'En som kjemper alene', origin: 'Norrønt', categories: ['norrønt'] },
    { name: 'Håkon', meaning: 'Høy sønn', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Torstein', meaning: 'Tors stein', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
    { name: 'Vidar', meaning: 'Kriger i skogen', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },

    // Nye navn
    { name: 'Harald', meaning: 'Hærens hersker', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Gunnar', meaning: 'Krigens kriger', origin: 'Norrønt', categories: ['norrønt'] },
    { name: 'Leif', meaning: 'Arving, etterkommer', origin: 'Norrønt', categories: ['norrønt'] },
    { name: 'Sigurd', meaning: 'Seiersvokter', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
  ],
  girl: [
    { name: 'Astrid', meaning: 'Guddommelig skjønnhet', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Ingrid', meaning: 'Ing\'s skjønnhet', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Sofia', meaning: 'Visdom', origin: 'Gresk', categories: ['klassisk'] },
    { name: 'Anna', meaning: 'Nåde', origin: 'Hebraisk', categories: ['klassisk'] },
    { name: 'Berit', meaning: 'Den strålende', origin: 'Norrønt', categories: ['norrønt'] },
    { name: 'Emma', meaning: 'Hel, universal', origin: 'Germansk', categories: ['klassisk'] },
    { name: 'Frida', meaning: 'Fred og beskyttelse', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
    { name: 'Sigrid', meaning: 'Seierens kvinne', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
    { name: 'Ylva', meaning: 'Hunulv', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },

    // Nye navn
    { name: 'Liv', meaning: 'Liv, vern', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
    { name: 'Ragnhild', meaning: 'Råd og strid', origin: 'Norrønt', categories: ['norrønt', 'klassisk'] },
    { name: 'Gudrun', meaning: 'Guddommelig hemmelighet', origin: 'Norrønt', categories: ['norrønt'] },
    { name: 'Elise', meaning: 'Gud er min ed', origin: 'Hebraisk', categories: ['klassisk'] },
  ],
  dog: [
    { name: 'Rocky', meaning: 'Sterk som stein', origin: 'Engelsk', categories: ['klassisk'] },
    { name: 'Luna', meaning: 'Måne', origin: 'Latin', categories: ['klassisk'] },
    { name: 'Max', meaning: 'Størst', origin: 'Latin', categories: ['klassisk'] },
    { name: 'Bella', meaning: 'Vakker', origin: 'Italiensk', categories: ['klassisk'] },
    { name: 'Charlie', meaning: 'Fri mann', origin: 'Engelsk', categories: ['klassisk'] },

    // Nye navn
    { name: 'Buster', meaning: 'En som bryter eller sprenger', origin: 'Engelsk', categories: ['unikt'] },
    { name: 'Kira', meaning: 'Strålende', origin: 'Russisk', categories: ['unikt'] },
    { name: 'Zelda', meaning: 'Grå kamp / velsignet', origin: 'Germansk', categories: ['unikt'] },
    { name: 'Teddy', meaning: 'Guds gave (fra Theodore)', origin: 'Gresk', categories: ['klassisk'] },
  ],
  cat: [
    { name: 'Luna', meaning: 'Måne', origin: 'Latin', categories: ['klassisk'] },
    { name: 'Bella', meaning: 'Vakker', origin: 'Italiensk', categories: ['klassisk'] },
    { name: 'Milo', meaning: 'Mild, nådig', origin: 'Slavisk', categories: ['klassisk'] },
    { name: 'Felix', meaning: 'Lykkelig', origin: 'Latin', categories: ['klassisk'] },
    { name: 'Nala', meaning: 'Løvinne', origin: 'Afrikansk', categories: ['unikt'] },

    // Nye navn
    { name: 'Simba', meaning: 'Løve', origin: 'Swahili', categories: ['unikt'] },
    { name: 'Salem', meaning: 'Fred', origin: 'Hebraisk', categories: ['klassisk'] },
    { name: 'Zuri', meaning: 'Vakker', origin: 'Swahili', categories: ['unikt'] },
    { name: 'Freya', meaning: 'Frue, gudinne', origin: 'Norrønt', categories: ['norrønt', 'unikt'] },
  ],
} as const;
