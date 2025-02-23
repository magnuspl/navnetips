import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PcCase as AlphabetCase, ArrowUpDown, Filter } from 'lucide-react';
import { names } from '../data/names';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

interface AlphabetBrowserProps {
  category: 'boy' | 'girl';
}

type SortOption = 'alphabetical' | 'length';
type SortDirection = 'asc' | 'desc';

function AlphabetBrowser({ category }: AlphabetBrowserProps) {
  const { letter = 'a' } = useParams();
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryNames = category === 'boy' ? names.boy : names.girl;
  const filteredNames = categoryNames.filter(name => 
    name.name.toLowerCase().startsWith(letter.toLowerCase()) &&
    (selectedCategory === 'all' || name.categories.includes(selectedCategory))
  );

  // Get unique categories
  const categories = ['all', ...new Set(categoryNames.flatMap(name => name.categories))];

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
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const basePath = category === 'boy' ? '/guttenavn' : '/jentenavn';
  const categoryText = category === 'boy' ? 'Guttenavn' : 'Jentenavn';
  const bgColor = category === 'boy' ? 'bg-blue-400' : 'bg-pink-400';

  const seoTitle = `${categoryText} som starter på ${letter.toUpperCase()} | Navnetips.no`;
  const seoDescription = `Utforsk ${categoryText.toLowerCase()} som starter på bokstaven ${letter.toUpperCase()}. Finn betydning og opprinnelse for ${filteredNames.length} unike navn.`;

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const formatCategoryName = (cat: string) => {
    switch (cat) {
      case 'all': return 'Alle kategorier';
      case 'norrønt': return 'Norrønt';
      case 'klassisk': return 'Klassisk';
      case 'moderne': return 'Moderne';
      case 'unikt': return 'Unikt';
      default: return cat;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SEO title={seoTitle} description={seoDescription} />
      
      <Breadcrumb 
        category={category} 
        currentPage={`Navn på ${letter.toUpperCase()}`} 
      />

      {/* Filters and Sort Controls */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {formatCategoryName(cat)}
                </option>
              ))}
            </select>
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

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-4 mb-8">
          <AlphabetCase className="h-10 w-10" />
          <h1 className="text-4xl font-black">
            {categoryText} som starter på {letter.toUpperCase()}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedNames.map((name, index) => (
            <div
              key={name.name}
              className={`${bgColor} border-4 border-black p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transform transition-all duration-300
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              <Link to={`${basePath}/${name.name.toLowerCase()}`}>
                <h2 className="text-2xl font-black mb-2">{name.name}</h2>
                <p className="text-sm font-medium">{name.meaning}</p>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {name.categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      window.location.href = `${basePath}/kategori/${cat}`;
                    }}
                    className="px-3 py-1 bg-black text-white text-xs font-bold transform -rotate-2 hover:scale-105 transition-transform"
                  >
                    {formatCategoryName(cat)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {sortedNames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl font-bold">
              Ingen navn funnet som starter på {letter.toUpperCase()}
            </p>
          </div>
        )}
      </div>

      <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-7 sm:grid-cols-10 gap-2">
          {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ').map((l) => (
            <Link
              key={l}
              to={`${basePath}/bokstav/${l.toLowerCase()}`}
              className={`${l.toLowerCase() === letter.toLowerCase() ? bgColor : 'bg-white'}
                border-2 border-black p-2 text-center font-bold
                hover:transform hover:-translate-y-1 transition-transform`}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlphabetBrowser;