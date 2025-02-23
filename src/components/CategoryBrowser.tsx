import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tags, ArrowUpDown, Filter } from 'lucide-react';
import { names } from '../data/names';
import { getCategoryContent } from '../content/categoryContent';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

interface CategoryBrowserProps {
  category: 'boy' | 'girl';
}

type SortOption = 'alphabetical' | 'length';
type SortDirection = 'asc' | 'desc';

function CategoryBrowser({ category }: CategoryBrowserProps) {
  const { nameCategory = 'norrønt' } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryNames = category === 'boy' ? names.boy : names.girl;
  const filteredNames = categoryNames.filter(name => 
    name.categories.includes(nameCategory.toLowerCase()) &&
    (searchTerm === '' || 
     name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     name.meaning.toLowerCase().includes(searchTerm.toLowerCase()))
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
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const basePath = category === 'boy' ? '/guttenavn' : '/jentenavn';
  const categoryText = category === 'boy' ? 'Guttenavn' : 'Jentenavn';
  const bgColor = category === 'boy' ? 'bg-blue-400' : 'bg-pink-400';

  const categories = [
    { id: 'norrønt', name: 'Norrøne navn' },
    { id: 'klassisk', name: 'Klassiske navn' },
    { id: 'moderne', name: 'Moderne navn' },
    { id: 'unikt', name: 'Unike navn' }
  ];

  const currentCategory = categories.find(c => c.id === nameCategory)?.name || 'Navn etter kategori';
  const content = getCategoryContent(category, nameCategory);

  const seoTitle = `${currentCategory} - ${categoryText} | Navnetips.no`;
  const seoDescription = `Utforsk ${categoryText.toLowerCase()} i kategorien ${currentCategory.toLowerCase()}. ${filteredNames.length} unike navn med betydning og opprinnelse.`;

  const handleCategoryClick = (categoryName: string) => {
    navigate(`${basePath}/kategori/${categoryName}`);
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const formatCategoryName = (cat: string) => {
    switch (cat) {
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
        nameCategory={nameCategory}
      />

      {/* Filters and Sort Controls */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
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
          <Tags className="h-10 w-10" />
          <h1 className="text-4xl font-black">
            {categoryText} - {currentCategory}
          </h1>
        </div>

        <div className="prose prose-lg prose-slate mb-12" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Link to={`${basePath}/${name.name.toLowerCase()}`}>
                <h2 className="text-3xl font-black tracking-tight hover:underline">
                  {name.name}
                </h2>
              </Link>
              <p className="text-gray-700 mt-4 text-lg font-medium">
                {name.meaning}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {name.categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-3 py-1 text-sm font-bold transform -rotate-2 transition-all duration-300
                      ${bgColor} border-2 border-black hover:scale-105 cursor-pointer`}
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
              Ingen navn funnet i denne kategorien
            </p>
          </div>
        )}
      </div>

      <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`${basePath}/kategori/${cat.id}`}
              className={`${cat.id === nameCategory ? bgColor : 'bg-white'}
                border-4 border-black p-4 text-center font-bold text-lg
                hover:transform hover:-translate-y-1 transition-transform
                ${cat.id === nameCategory ? '-rotate-2' : 'rotate-2'}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBrowser;