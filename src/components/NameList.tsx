import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowUpDown, Filter } from 'lucide-react';
import { Name } from '../data/names';
import { useFavorites } from '../context/FavoritesContext';
import { getCategoryContent } from '../content/categoryContent';
import SEO from './SEO';

interface NameListProps {
  category: 'boy' | 'girl' | 'dog' | 'cat';
  names: Name[];
}

type SortOption = 'alphabetical' | 'length' | 'origin';
type SortDirection = 'asc' | 'desc';

function NameList({ category, names }: NameListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const { favorites, toggleFavorite } = useFavorites();

  // Get unique origins for filter dropdown
  const origins = ['all', ...new Set(names.map(name => name.origin))];

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  // Filter names based on search term and origin
  const filteredNames = names.filter(name =>
    (searchTerm === '' || 
     name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     name.meaning.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedOrigin === 'all' || name.origin === selectedOrigin)
  );

  // Sort names based on selected option
  const sortedNames = [...filteredNames].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'alphabetical':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'length':
        comparison = a.name.length - b.name.length;
        break;
      case 'origin':
        comparison = a.origin.localeCompare(b.origin);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const basePath = category === 'boy' ? '/guttenavn' : 
                  category === 'girl' ? '/jentenavn' : 
                  category === 'dog' ? '/hundenavn' : '/kattenavn';
                  
  const bgColor = category === 'boy' ? 'bg-blue-400' : 
                 category === 'girl' ? 'bg-pink-400' : 
                 category === 'dog' ? 'bg-orange-400' : 'bg-purple-400';

  const categoryTitle = category === 'boy' ? 'Guttenavn' :
                       category === 'girl' ? 'Jentenavn' :
                       category === 'dog' ? 'Hundenavn' : 'Kattenavn';

  const seoTitle = `${categoryTitle} - Finn det perfekte navnet | Navnetips.no`;
  const seoDescription = `Utforsk vår samling av ${categoryTitle.toLowerCase()} med betydninger og opprinnelse. ${names.length} unike navn å velge mellom.`;

  // Get category content
  const categoryContent = getCategoryContent(category);

  return (
    <main className="max-w-7xl mx-auto space-y-8">
      <SEO title={seoTitle} description={seoDescription} />

      {/* Category Description */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: categoryContent }} />
      </div>

      {/* Filters and Sort Controls */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Søk etter navn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black focus:outline-none"
              />
            </div>

            {/* Origin Filter */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="h-5 w-5" />
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto"
              >
                {origins.map(origin => (
                  <option key={origin} value={origin}>
                    {origin === 'all' ? 'Alle opprinnelser' : origin}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto"
            >
              <option value="alphabetical">Alfabetisk</option>
              <option value="length">Lengde</option>
              <option value="origin">Opprinnelse</option>
            </select>
            <button
              onClick={toggleSortDirection}
              className="p-2 border-2 border-black hover:bg-gray-100"
            >
              <ArrowUpDown className={`h-5 w-5 transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Name Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedNames.map((name, index) => (
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
              <Link to={`${basePath}/${name.name.toLowerCase()}`}>
                <h2 className="text-3xl font-black tracking-tight hover:underline">
                  {name.name}
                </h2>
              </Link>
              <button 
                onClick={() => toggleFavorite(name.name)}
                className={`p-2 border-4 border-black transition-all duration-300
                  ${favorites.has(name.name) 
                    ? `${bgColor} rotate-12` 
                    : 'bg-white -rotate-12 hover:rotate-0'}`}
              >
                <Heart 
                  className={`h-6 w-6 ${
                    favorites.has(name.name) ? 'fill-black' : ''
                  }`} 
                />
              </button>
            </div>
            <p className="text-gray-700 mt-4 text-lg font-medium">
              {name.meaning}
            </p>
            <div className="mt-4">
              <span className={`px-4 py-1 bg-black text-white text-sm font-bold
                transform -rotate-2 inline-block`}>
                {name.origin}
              </span>
            </div>
          </div>
        ))}
      </div>

      {sortedNames.length === 0 && (
        <div className="text-center py-16 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="h-12 w-12 text-black mx-auto mb-4 animate-spin-slow" />
          <p className="text-xl font-bold">
            Ingen navn funnet. Prøv et annet søkeord eller filter.
          </p>
        </div>
      )}
    </main>
  );
}

export default NameList;