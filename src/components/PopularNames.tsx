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
      </div>
    </div>
  );
}

export default PopularNames;