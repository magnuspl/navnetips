import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PcCase as AlphabetCase, ArrowUpDown, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const itemsPerPage = 12;

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

  // Calculate pagination
  const totalPages = Math.ceil(sortedNames.length / itemsPerPage);
  const paginatedNames = sortedNames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, sortDirection, letter]);

  const basePath = category === 'boy' ? '/guttenavn' : '/jentenavn';
  const categoryText = category === 'boy' ? 'Guttenavn' : 'Jentenavn';
  const bgColor = category === 'boy' ? 'bg-blue-400' : 'bg-pink-400';

  const seoTitle = `${categoryText} som starter på ${letter.toUpperCase()} - Komplett liste | Navnetips.no`;
  const seoDescription = `Utforsk ${categoryText.toLowerCase()} som starter på bokstaven ${letter.toUpperCase()}. Finn betydning og opprinnelse for ${filteredNames.length} unike navn på Navnetips.no.`;

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
              className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto
                transition-all duration-300 hover:shadow-inner button-press"
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
              className="px-4 py-2 border-2 border-black focus:outline-none w-full sm:w-auto
                transition-all duration-300 hover:shadow-inner button-press"
            >
              <option value="alphabetical">Alfabetisk</option>
              <option value="length">Lengde</option>
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

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-4 mb-8">
          <AlphabetCase className="h-10 w-10" />
          <h1 className="text-4xl font-black">
            {categoryText} som starter på {letter.toUpperCase()}
          </h1>
        </div>

        {/* Results Count */}
        {filteredNames.length > 0 && (
          <div className="flex justify-between items-center mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedNames.map((name) => (
            <div
              key={name.id}
              className={`${bgColor} border-4 border-black p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transform transition-all duration-300
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1 active:translate-y-0
                ${Math.random() > 0.5 ? 'rotate-1' : '-rotate-1'}
                interactive-hover`}
            >
              <Link 
                to={`${basePath}/${name.name.toLowerCase()}`}
                className="group transition-all duration-300"
              >
                <h2 className="text-2xl font-black mb-2 group-hover:underline 
                  group-hover:scale-105 transition-all duration-300">
                  {name.name}
                </h2>
                <p className="text-sm font-medium">{name.meaning}</p>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {name.categories.map(cat => (
                  <button
                    key={`${name.id}-${cat}`}
                    onClick={() => {
                      window.location.href = `${basePath}/kategori/${cat}`;
                    }}
                    className="px-3 py-1 bg-black text-white text-xs font-bold 
                      transform -rotate-2 hover:scale-105 hover:-rotate-1 
                      active:rotate-0 transition-all duration-300 button-press ripple"
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
            <p className="text-xl font-bold error-shake">
              Ingen navn funnet som starter på {letter.toUpperCase()}
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
      </div>

      <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-7 sm:grid-cols-10 gap-2">
          {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ').map((l) => (
            <Link
              key={l}
              to={`${basePath}/bokstav/${l.toLowerCase()}`}
              className={`${l.toLowerCase() === letter.toLowerCase() ? bgColor : 'bg-white'}
                border-2 border-black p-2 text-center font-bold
                hover:transform hover:-translate-y-1 active:translate-y-0
                transition-all duration-300 button-press ripple`}
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