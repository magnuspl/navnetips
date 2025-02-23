import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  category?: 'boy' | 'girl' | 'dog' | 'cat';
  currentPage?: string;
  nameCategory?: string;
}

function Breadcrumb({ category, currentPage, nameCategory }: BreadcrumbProps) {
  const location = useLocation();

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'boy': return 'Guttenavn';
      case 'girl': return 'Jentenavn';
      case 'dog': return 'Hundenavn';
      case 'cat': return 'Kattenavn';
      case 'norrønt': return 'Norrøne navn';
      case 'klassisk': return 'Klassiske navn';
      case 'moderne': return 'Moderne navn';
      case 'unikt': return 'Unike navn';
      default: return cat;
    }
  };

  const getBgColor = (cat?: string) => {
    switch (cat) {
      case 'boy': return 'bg-blue-400';
      case 'girl': return 'bg-pink-400';
      case 'dog': return 'bg-orange-400';
      case 'cat': return 'bg-purple-400';
      default: return 'bg-gray-200';
    }
  };

  const basePath = category ? `/${category === 'boy' ? 'guttenavn' : 
                               category === 'girl' ? 'jentenavn' :
                               category === 'dog' ? 'hundenavn' : 'kattenavn'}` : '';

  return (
    <nav className="mb-8">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            to="/"
            className="bg-white border-2 border-black px-3 py-1 text-sm font-bold
              hover:transform hover:-translate-y-1 transition-transform"
          >
            Hjem
          </Link>
        </li>
        
        {category && (
          <>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link
                to={basePath}
                className={`${getBgColor(category)} border-2 border-black px-3 py-1 text-sm font-bold
                  hover:transform hover:-translate-y-1 transition-transform`}
              >
                {getCategoryLabel(category)}
              </Link>
            </li>
          </>
        )}

        {nameCategory && (
          <>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link
                to={`${basePath}/kategori/${nameCategory}`}
                className={`${getBgColor(category)} border-2 border-black px-3 py-1 text-sm font-bold
                  hover:transform hover:-translate-y-1 transition-transform`}
              >
                {getCategoryLabel(nameCategory)}
              </Link>
            </li>
          </>
        )}

        {currentPage && (
          <>
            <ChevronRight className="h-4 w-4" />
            <li>
              <span className="bg-black text-white px-3 py-1 text-sm font-bold">
                {currentPage}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb