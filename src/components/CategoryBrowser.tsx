import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tags, ArrowUpDown, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const itemsPerPage = 12;

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

  // Calculate pagination
  const totalPages = Math.ceil(sortedNames.length / itemsPerPage);
  const paginatedNames = sortedNames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, sortDirection, nameCategory]);

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
              className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                transition-all duration-300 hover:shadow-inner"
            />
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
          <Tags className="h-10 w-10" />
          <h1 className="text-4xl font-black">
            {categoryText} - {currentCategory}
          </h1>
        </div>

        <div className="prose prose-lg prose-slate mb-12" dangerouslySetInnerHTML={{ __html: content }} />

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
              className={`bg-white border-4 border-black p-6
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                transform transition-all duration-300
                hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1 active:translate-y-0
                ${Math.random() > 0.5 ? 'rotate-1' : '-rotate-1'}
                interactive-hover`}
            >
              <Link 
                to={`${basePath}/${name.name.toLowerCase()}`}
                className="group transition-all duration-300"
              >
                <h2 className="text-3xl font-black tracking-tight group-hover:underline 
                  group-hover:scale-105 transition-all duration-300">
                  {name.name}
                </h2>
              </Link>
              <p className="text-gray-700 mt-4 text-lg font-medium">
                {name.meaning}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {name.categories.map(cat => (
                  <button
                    key={`${name.id}-${cat}`}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-3 py-1 text-sm font-bold transform -rotate-2 
                      transition-all duration-300 ${bgColor} border-2 border-black 
                      hover:scale-105 active:scale-95 hover:-rotate-1 
                      active:rotate-0 button-press ripple`}
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
              Ingen navn funnet i denne kategorien
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`${basePath}/kategori/${cat.id}`}
              className={`${cat.id === nameCategory ? bgColor : 'bg-white'}
                border-4 border-black p-4 text-center font-bold text-lg
                hover:transform hover:-translate-y-1 active:translate-y-0
                transition-all duration-300 button-press ripple
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