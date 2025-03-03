import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Heart, Baby } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

function PopularNames() {
  const { favorites, toggleFavorite } = useFavorites();
  
  // Official top names from statistics
  const topBoyNames = [
    { name: 'Lucas', id: 'lucas', meaning: 'Lysbringer', origin: 'Latinsk' },
    { name: 'Noah', id: 'noah', meaning: 'Hvile, fred', origin: 'Hebraisk' },
    { name: 'Oliver', id: 'oliver', meaning: 'Oliventre, fredens symbol', origin: 'Latinsk' },
    { name: 'Emil', id: 'emil', meaning: 'Ivrig, flittig', origin: 'Latinsk' },
    { name: 'Jakob', id: 'jakob', meaning: 'Han som følger etter', origin: 'Hebraisk' },
    { name: 'William', id: 'william', meaning: 'Besluttsom beskytter', origin: 'Germansk' },
    { name: 'Theodor', id: 'theodor', meaning: 'Guds gave', origin: 'Gresk' },
    { name: 'Ludvig', id: 'ludvig', meaning: 'Berømt kriger', origin: 'Germansk' },
    { name: 'Liam', id: 'liam', meaning: 'Sterk beskytter', origin: 'Irsk' },
    { name: 'Johannes', id: 'johannes', meaning: 'Gud er nådig', origin: 'Hebraisk' }
  ];
  
  const topGirlNames = [
    { name: 'Nora', id: 'nora', meaning: 'Lys, ære', origin: 'Norrønt' },
    { name: 'Emma', id: 'emma', meaning: 'Hel, universal', origin: 'Germansk' },
    { name: 'Olivia', id: 'olivia', meaning: 'Oliventre, fredens symbol', origin: 'Latinsk' },
    { name: 'Sofie', id: 'sofie', meaning: 'Visdom', origin: 'Gresk' },
    { name: 'Ella', id: 'ella', meaning: 'Lys, skinnende', origin: 'Germansk' },
    { name: 'Maja', id: 'maja', meaning: 'Den store', origin: 'Norrønt' },
    { name: 'Sofia', id: 'sofia', meaning: 'Visdom', origin: 'Gresk' },
    { name: 'Leah', id: 'leah', meaning: 'Trett, utmattet', origin: 'Hebraisk' },
    { name: 'Selma', id: 'selma', meaning: 'Guddommelig beskyttelse', origin: 'Arabisk' },
    { name: 'Ellinor', id: 'ellinor', meaning: 'Lys, strålende', origin: 'Gresk' }
  ];

  const getNameColor = (category: 'boy' | 'girl') => {
    return category === 'boy' ? 'bg-blue-400' : 'bg-pink-400';
  };

  const getNamePath = (name: string, category: 'boy' | 'girl') => {
    return category === 'boy' ? `/guttenavn/${name.toLowerCase()}` : `/jentenavn/${name.toLowerCase()}`;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SEO 
        title="Mest populære navn 2024 - Topp 10 liste | Navnetips.no"
        description="Utforsk de mest populære navnene i 2024. Topp 10 gutte- og jentenavn basert på offisiell statistikk. Finn trendene for årets navn."
      />
      
      <Breadcrumb currentPage="Mest populære navn 2024" />

      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-4 mb-8">
          <TrendingUp className="h-10 w-10" />
          <h1 className="text-4xl font-black">Mest populære navn 2024</h1>
        </div>

        <div className="prose prose-lg prose-slate mb-8">
          <p>
            Leter du etter det perfekte navnet til ditt barn? Her finner du de mest populære navnene i 2024, basert på offisiell statistikk.
          </p>
          <p>
            Navnetrender endrer seg over tid, men noen navn forblir tidløse favoritter. Utforsk våre lister over de mest populære gutte- og jentenavnene.
          </p>
        </div>

        {/* Boy Names Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Baby className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Topp 10 guttenavn i 2024</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBoyNames.map((name, index) => (
              <div
                key={name.id}
                className={`bg-white border-4 border-black p-6
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transform transition-all duration-300
                  hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-y-1 active:translate-y-0
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                  interactive-hover`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-blue-400 text-black font-bold text-lg px-3 py-1 border-2 border-black mb-2">
                      #{index + 1}
                    </span>
                    <Link to={getNamePath(name.name, 'boy')}>
                      <h3 className="text-2xl font-black tracking-tight hover:underline">
                        {name.name}
                      </h3>
                    </Link>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(name.name)}
                    className={`p-2 border-4 border-black transition-all duration-300
                      ${favorites.has(name.name) 
                        ? `${getNameColor('boy')} rotate-12 animate-pop` 
                        : 'bg-white -rotate-12 hover:rotate-0'}
                      transform hover:scale-110 active:scale-95 button-press`}
                  >
                    <Heart 
                      className={`h-6 w-6 transition-all duration-300 ${
                        favorites.has(name.name) ? 'fill-black' : ''
                      }`} 
                    />
                  </button>
                </div>
                <p className="text-gray-700 mt-2">
                  {name.meaning}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Opprinnelse: {name.origin}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link
              to="/guttenavn"
              className="inline-block px-6 py-3 bg-blue-400 border-4 border-black font-bold
                transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0
                button-press ripple"
            >
              Se alle guttenavn
            </Link>
          </div>
        </div>

        {/* Girl Names Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Baby className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Topp 10 jentenavn i 2024</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topGirlNames.map((name, index) => (
              <div
                key={name.id}
                className={`bg-white border-4 border-black p-6
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transform transition-all duration-300
                  hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-y-1 active:translate-y-0
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                  interactive-hover`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-pink-400 text-black font-bold text-lg px-3 py-1 border-2 border-black mb-2">
                      #{index + 1}
                    </span>
                    <Link to={getNamePath(name.name, 'girl')}>
                      <h3 className="text-2xl font-black tracking-tight hover:underline">
                        {name.name}
                      </h3>
                    </Link>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(name.name)}
                    className={`p-2 border-4 border-black transition-all duration-300
                      ${favorites.has(name.name) 
                        ? `${getNameColor('girl')} rotate-12 animate-pop` 
                        : 'bg-white -rotate-12 hover:rotate-0'}
                      transform hover:scale-110 active:scale-95 button-press`}
                  >
                    <Heart 
                      className={`h-6 w-6 transition-all duration-300 ${
                        favorites.has(name.name) ? 'fill-black' : ''
                      }`} 
                    />
                  </button>
                </div>
                <p className="text-gray-700 mt-2">
                  {name.meaning}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Opprinnelse: {name.origin}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link
              to="/jentenavn"
              className="inline-block px-6 py-3 bg-pink-400 border-4 border-black font-bold
                transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0
                button-press ripple"
            >
              Se alle jentenavn
            </Link>
          </div>
        </div>

        {/* Trends Section */}
        <div className="mt-12 p-6 bg-yellow-400 border-4 border-black transform -rotate-1">
          <h2 className="text-2xl font-bold mb-4">Navnetrender i 2024</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Korte navn med 4-5 bokstaver er fortsatt populære</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Norrøne navn har fått en renessanse blant norske foreldre</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Internasjonale navn blir stadig mer akseptert</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Naturnavn er populære for både barn og kjæledyr</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Gamle, tradisjonelle navn kommer tilbake i ny drakt</span>
            </li>
          </ul>
        </div>

        {/* Detailed Analysis Section */}
        <div className="mt-12 prose prose-lg prose-slate">
          <h2 className="text-3xl font-bold mb-6">Navnetrender og samfunnsutvikling</h2>
          
          <p>I en verden i konstant endring forblir navnevalg en av de mest personlige og betydningsfulle beslutningene foreldre tar. Årets navnestatistikk avslører fascinerende mønstre som reflekterer bredere samfunnstrender, kulturelle skifter og endrede verdier i det norske samfunnet.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Kontinuitet og tradisjon</h3>
          <p>Navnestatistikken for 2024 viser at mange klassiske navn fortsatt har en sterk posisjon i Norge. Emma og Noah holder seg stabilt på toppen av listene, noe som illustrerer hvordan visse navn oppnår en tidløs status. Disse navnene balanserer perfekt mellom det kjente og det moderne – de er tradisjonelle nok til å føles solide, men ikke så vanlige at de oppfattes som utdaterte.</p>
          <p>Det er interessant å se hvordan noen navn har evnen til å transcendere trender og forbli populære over flere tiår. Disse navnene har ofte en universell kvalitet – de er lette å uttale, fungerer godt på tvers av språkgrenser, og bærer positive kulturelle assosiasjoner.</p>
          <p>For mange foreldre representerer valget av et klassisk navn en forbindelse til tradisjon i en ellers hurtig endrende verden. Dette reflekterer et ønske om å gi barnet et solid fundament – et navn som vil fungere like godt i barndommen som i voksenlivet.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Den globale landsbyen</h3>
          <p>I takt med at verden blir stadig mer sammenkoblet, ser vi en økende tendens til at norske foreldre velger navn med internasjonal klang. Navn som Sofia, Oliver, William og Olivia figurerer høyt på listene og gjenspeiler en bevissthet om at dagens barn vil vokse opp i en global kontekst.</p>
          <p>Dagens foreldre tenker i økende grad på barnets fremtidige muligheter i en internasjonal setting. Et navn som fungerer godt på tvers av landegrenser kan være en fordel i en fremtid der arbeid, studier og relasjoner stadig krysser nasjonale grenser.</p>
          <p>Denne trenden er særlig fremtredende i urbane områder med høy grad av internasjonalisering. I Oslo, Bergen og Trondheim ser vi en markant høyere andel internasjonalt klingende navn sammenlignet med mer rurale strøk, hvor lokale og tradisjonelle navn fortsatt har en sterkere posisjon.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Den norrøne renessansen</h3>
          <p>En av de mest fascinerende trendene i årets statistikk er den markante økningen i norrøne navn. Navn som Odin, Frøya, Tor, Idun og Brage har opplevd en betydelig popularitetsøkning det siste året. Denne trenden representerer en form for kulturell selvbevissthet og en fornyet interesse for norsk historie og mytologi.</p>
          <p>Det er en interessant motreaksjon mot globaliseringen at mange søker tilbake til røttene. Norrøne navn gir en følelse av historisk kontinuitet og kulturell identitet i en tid der nasjonale grenser blir mindre betydningsfulle.</p>
          <p>Populærkulturens innflytelse kan ikke undervurderes i denne sammenhengen. TV-serier som "Vikings" og "Ragnarok" har bidratt til å gjøre norrøn mytologi mer tilgjengelig for allmennheten, og har tilført disse gamle navnene et moderne og dynamisk preg.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Enkelhet og lydkvalitet</h3>
          <p>Årets liste bekrefter også den langvarige trenden med preferanse for korte, klangfulle navn. Navn som Ella, Liam, Maja og Emil eksemplifiserer denne tendensen. Disse navnene har en melodiøs kvalitet samtidig som de er enkle å uttale og stave.</p>
          <p>Vi ser en økende preferanse for navn med få stavelser og en åpen lydstruktur. Disse navnene oppleves som behagelige å uttale og har ofte en universell appell som fungerer godt på tvers av generasjoner og sosiale kontekster.</p>
          <p>Denne trenden reflekterer også praktiske hensyn i en digital tidsalder. Korte navn er ofte lettere å bruke i digitale plattformer, fra e-postadresser til sosiale medier, noe som gjør dem funksjonelle for barnets fremtidige digitale identitet.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Vintage-bølgen fortsetter</h3>
          <p>Årets statistikk bekrefter også at den såkalte "vintage-bølgen" fortsetter med uforminsket styrke. Navn som var populære for 80-100 år siden, som Oskar, Agnes, Arthur og Hedda, har gjort et sterkt comeback. Denne trenden følger det som kalles "hundreårsregelen" – tendensen til at navn går ut av bruk, hviler i omkring tre generasjoner, og deretter kommer tilbake i ny friskhet.</p>
          <p>Når et navn har vært ute av sirkulasjon lenge nok, mister det assosiasjonene til foreldregenerasjonen og får i stedet en aura av distinksjon og særpreg. Disse navnene oppleves som både tradisjonelle og overraskende på samme tid.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Naturen som inspirasjonskilde</h3>
          <p>I tråd med økt miljøbevissthet og naturfokus i samfunnet generelt, ser vi en tydelig trend med navn inspirert av naturfenomener. Navn som Luna, Nova, Storm og Furu representerer en forbindelse til naturen som mange foreldre ønsker å videreføre til sine barn.</p>
          <p>Navnevalg reflekterer alltid underliggende verdier. Når vi ser en økning i naturnavn, forteller det oss noe om hvordan norske foreldre ønsker å formidle naturbevissthet og miljøverdier til neste generasjon.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Individualitet i fellesskapet</h3>
          <p>Selv om vi ser tydelige trender, er det verdt å merke seg at variasjonene i navnevalg er større enn noensinne. I 2024 er konsentrasjonen av de mest populære navnene lavere enn tidligere tiår, noe som betyr at foreldre i økende grad velger unike eller mindre vanlige navn til sine barn.</p>
          <p>Det er et paradoks at mens vi ser klare trender, velger stadig flere foreldre navn som ligger utenfor topp-50-listen. Dette reflekterer en bredere samfunnstrend der individualitet verdsettes høyt, selv innenfor rammen av kulturelle fellesskap.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Konklusjon</h3>
          <p>Navnetrender er aldri tilfeldige – de forteller en historie om samfunnet vi lever i, verdiene vi holder høyt, og hvordan vi ser på framtiden. Årets navnestatistikk viser et samfunn som både søker røtter og internasjonale forbindelser, som verdsetter enkelhet og lydkvalitet, og som i økende grad gir rom for individualitet innenfor kulturelle rammer.</p>
          <p>Når vi spekulerer om fremtidens navnetrender, er det rimelig å anta at vi vil se en fortsatt balansegang mellom tradisjon og fornyelse, mellom det lokale og det globale. Navn vil fortsette å være ikke bare etiketter, men meningsbærende symboler som reflekterer hvem vi er og hva vi verdsetter som samfunn.</p>
        </div>
      </div>
    </div>
  );
}

export default PopularNames;