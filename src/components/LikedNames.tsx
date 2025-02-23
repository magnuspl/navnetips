import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { names, Name } from '../data/names';
import SEO from './SEO';

function LikedNames() {
  const { favorites, toggleFavorite } = useFavorites();

  // Collect all names from all categories
  const allNames = [...names.boy, ...names.girl, ...names.pet];
  
  // Filter for favorited names
  const likedNames = allNames.filter(name => favorites.has(name.name));

  const getNamePath = (name: Name) => {
    if (names.boy.some(n => n.name === name.name)) return `/guttenavn/${name.name.toLowerCase()}`;
    if (names.girl.some(n => n.name === name.name)) return `/jentenavn/${name.name.toLowerCase()}`;
    return `/kattenavn/${name.name.toLowerCase()}`;
  };

  const getNameColor = (name: Name) => {
    if (names.boy.some(n => n.name === name.name)) return 'bg-blue-400';
    if (names.girl.some(n => n.name === name.name)) return 'bg-pink-400';
    return 'bg-purple-400';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SEO 
        title="Mine favoritter | Navnetips.no"
        description={`Din personlige samling av favorittnavn. Du har lagret ${likedNames.length} navn som inspirasjon til ditt valg av navn.`}
      />

      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-4xl sm:text-5xl font-black mb-6">Dine favoritt navn</h1>
        
        {likedNames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedNames.map((name, index) => (
              <div
                key={name.name}
                className={`bg-white border-4 border-black p-6
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transform transition-all duration-300
                  hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-y-1
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <div className="flex justify-between items-start">
                  <Link to={getNamePath(name)}>
                    <h2 className="text-3xl font-black tracking-tight hover:underline">
                      {name.name}
                    </h2>
                  </Link>
                  <button 
                    onClick={() => toggleFavorite(name.name)}
                    className={`p-2 border-4 border-black transition-all duration-300
                      ${getNameColor(name)} rotate-12`}
                  >
                    <Heart className="h-6 w-6 fill-black" />
                  </button>
                </div>
                <p className="text-gray-700 mt-4 text-lg font-medium">
                  {name.meaning}
                </p>
                <div className="mt-4">
                  <span className="px-4 py-1 bg-black text-white text-sm font-bold
                    transform -rotate-2 inline-block">
                    {name.origin}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Sparkles className="h-12 w-12 text-black mx-auto mb-4 animate-spin-slow" />
            <p className="text-xl font-bold">
              Du har ikke lagret noen favorittnavn ennå.
            </p>
            <p className="mt-2 text-gray-600">
              Klikk på hjerteikonet ved siden av navnene du liker for å lagre dem her.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LikedNames;