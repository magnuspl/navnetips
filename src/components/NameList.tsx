import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowUpDown, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Name, names } from '../data/names';
import { useFavorites } from '../context/FavoritesContext';
import { getCategoryContent } from '../content/categoryContent';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

interface NameListProps {
  category: 'boy' | 'girl' | 'dog' | 'cat';
}

type SortOption = 'alphabetical' | 'length' | 'origin';
type SortDirection = 'asc' | 'desc';

function NameList({ category }: NameListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  // Pagination settings
  const itemsPerPage = 12;

  // Get unique origins for filter dropdown
  const origins = ['all', ...new Set(names[category].map(name => name.origin))];

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  // Filter names based on search term and origin
  const filteredNames = names[category].filter(name =>
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

  // Calculate pagination
  const totalPages = Math.ceil(sortedNames.length / itemsPerPage);
  const paginatedNames = sortedNames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedOrigin, sortBy, sortDirection]);

  const basePath = category === 'boy' ? '/guttenavn' : 
                  category === 'girl' ? '/jentenavn' : 
                  category === 'dog' ? '/hundenavn' : '/kattenavn';
                  
  const bgColor = category === 'boy' ? 'bg-blue-400' : 
                 category === 'girl' ? 'bg-pink-400' : 
                 category === 'dog' ? 'bg-orange-400' : 'bg-purple-400';

  const categoryTitle = category === 'boy' ? 'Guttenavn' :
                       category === 'girl' ? 'Jentenavn' :
                       category === 'dog' ? 'Hundenavn' : 'Kattenavn';

  const handleCategoryClick = (categoryName: string) => {
    if (category === 'boy' || category === 'girl') {
      navigate(`${basePath}/kategori/${categoryName}`);
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'norrønt': return 'Norrønt';
      case 'klassisk': return 'Klassisk';
      case 'moderne': return 'Moderne';
      case 'unikt': return 'Unikt';
      default: return cat;
    }
  };

  const seoTitle = `${categoryTitle} - Finn det perfekte navnet | Navnetips.no`;
  const seoDescription = `Utforsk vår samling av ${categoryTitle.toLowerCase()} med betydninger og opprinnelse. ${names[category].length} unike navn å velge mellom.`;

  // Get category content
  const categoryContent = getCategoryContent(category);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Maximum number of page buttons to show
    
    if (totalPages <= maxPageButtons) {
      // Show all pages if there are fewer than maxPageButtons
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, maxPageButtons - 1);
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - maxPageButtons + 2);
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add page numbers in the middle
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always include last page if there is more than one page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <main className="max-w-7xl mx-auto space-y-8">
      <SEO title={seoTitle} description={seoDescription} />
      
      <Breadcrumb category={category} />

      {/* Category Description */}
      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate" dangerouslySetInnerHTML={{ __html: categoryContent }} />
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
                className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                  transition-all duration-300 hover:shadow-inner"
              />
            </div>

            {/* Origin Filter */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="h-5 w-5" />
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto
                  transition-all duration-300 hover:shadow-inner button-press"
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
              className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto
                transition-all duration-300 hover:shadow-inner button-press"
            >
              <option value="alphabetical">Alfabetisk</option>
              <option value="length">Lengde</option>
              <option value="origin">Opprinnelse</option>
            </select>
            <button
              onClick={toggleSortDirection}
              className="p-2 border-2 border-black hover:bg-gray-100 ripple button-press
                transition-all duration-300"
            >
              <ArrowUpDown className={`h-5 w-5 transform transition-transform duration-300 ${
                sortDirection === 'desc' ? 'rotate-180' : ''
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      {filteredNames.length > 0 && (
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">
            Viser {paginatedNames.length} av {filteredNames.length} navn
            {currentPage > 1 && ` (side ${currentPage} av ${totalPages})`}
          </p>
          
          {/* Pagination - Top */}
          {totalPages > 1 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 border-2 border-black ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                } transition-all duration-300 button-press`}
                aria-label="Forrige side"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 border-2 border-black ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                } transition-all duration-300 button-press`}
                aria-label="Neste side"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Name Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedNames.map((name) => (
          <div
            key={name.id}
            className={`bg-white border-4 border-black p-6
              shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
              transform transition-all duration-300
              hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-y-1 active:translate-y-0
              ${Math.random() > 0.5 ? 'rotate-1' : '-rotate-1'}
              interactive-hover`}
          >
            <div className="flex justify-between items-start">
              <Link 
                to={`${basePath}/${name.name.toLowerCase()}`}
                className="group transition-all duration-300"
              >
                <h2 className="text-3xl font-black tracking-tight 
                  group-hover:underline group-hover:scale-105 
                  transition-all duration-300">
                  {name.name}
                </h2>
              </Link>
              <button 
                onClick={() => toggleFavorite(name.name)}
                className={`p-2 border-4 border-black transition-all duration-300
                  ${favorites.has(name.name) 
                    ? `${bgColor} rotate-12 animate-pop` 
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
            <p className="text-gray-700 mt-4 text-lg font-medium">
              {name.meaning}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(category === 'boy' || category === 'girl') && name.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3 py-1 text-sm font-bold transform -rotate-2 
                    transition-all duration-300 ${bgColor} border-2 border-black 
                    hover:scale-105 active:scale-95 hover:-rotate-1 
                    active:rotate-0 button-press ripple`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {sortedNames.length === 0 && (
        <div className="text-center py-16 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="h-12 w-12 text-black mx-auto mb-4 animate-spin-slow" />
          <p className="text-xl font-bold error-shake">
            Ingen navn funnet. Prøv et annet søkeord eller filter.
          </p>
        </div>
      )}

      {/* Pagination - Bottom */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border-2 border-black font-bold ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              } transition-all duration-300 button-press`}
            >
              Første
            </button>
            
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 border-2 border-black ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              } transition-all duration-300 button-press`}
              aria-label="Forrige side"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {getPageNumbers().map((pageNum, index) => (
              <React.Fragment key={index}>
                {pageNum === '...' ? (
                  <span className="px-3 py-2">...</span>
                ) : (
                  <button
                    onClick={() => typeof pageNum === 'number' && setCurrentPage(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center border-2 border-black font-bold
                      ${currentPage === pageNum 
                        ? `${bgColor}` 
                        : 'bg-white hover:bg-gray-100'
                      } transition-all duration-300 button-press`}
                  >
                    {pageNum}
                  </button>
                )}
              </React.Fragment>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 border-2 border-black ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              } transition-all duration-300 button-press`}
              aria-label="Neste side"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border-2 border-black font-bold ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              } transition-all duration-300 button-press`}
            >
              Siste
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default NameList;