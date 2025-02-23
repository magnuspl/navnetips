import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { names } from '../data/names';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

interface NameDetailProps {
  category: 'boy' | 'girl' | 'dog' | 'cat';
}

function NameDetail({ category }: NameDetailProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const nameFromPath = location.pathname.split('/').pop() || '';
  const categoryNames = names[category];
  const nameData = categoryNames.find(n => n.name.toLowerCase() === nameFromPath.toLowerCase());
  const { favorites, toggleFavorite } = useFavorites();

  const getCategoryLabel = (cat: typeof category) => {
    switch (cat) {
      case 'boy': return 'guttenavn';
      case 'girl': return 'jentenavn';
      case 'dog': return 'hundenavn';
      case 'cat': return 'kattenavn';
    }
  };

  const getBgColor = (cat: typeof category) => {
    switch (cat) {
      case 'boy': return 'bg-blue-400';
      case 'girl': return 'bg-pink-400';
      case 'dog': return 'bg-orange-400';
      case 'cat': return 'bg-purple-400';
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    if (category === 'boy' || category === 'girl') {
      const basePath = category === 'boy' ? '/guttenavn' : '/jentenavn';
      navigate(`${basePath}/kategori/${categoryName}`);
    }
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

  if (!nameData) {
    return (
      <div className="max-w-7xl mx-auto">
        <Breadcrumb category={category} />
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-3xl font-bold">Navn ikke funnet</h1>
        </div>
      </div>
    );
  }

  const isLiked = favorites.has(nameData.name);
  const bgColor = getBgColor(category);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO 
        title={`${nameData.name} - Betydning og opprinnelse | Navnetips.no`}
        description={`Lær om navnet ${nameData.name}: Betydning, opprinnelse og historie. ${nameData.meaning}. Opprinnelse: ${nameData.origin}.`}
      />
      
      <Breadcrumb 
        category={category}
        currentPage={nameData.name}
      />

      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl sm:text-5xl font-black">{nameData.name}</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => toggleFavorite(nameData.name)}
              className={`p-4 border-4 border-black transition-all duration-300
                ${isLiked ? `${bgColor} rotate-12` : 'bg-white -rotate-12 hover:rotate-0'}
                transform hover:scale-110 active:scale-95`}
              aria-label={isLiked ? 'Fjern fra favoritter' : 'Legg til i favoritter'}
            >
              <Heart 
                className={`h-8 w-8 transition-all duration-300 ${
                  isLiked ? 'fill-black scale-110' : 'scale-100'
                }`} 
              />
            </button>
            <span className={`${bgColor} px-4 py-2 border-4 border-black font-bold transform -rotate-3`}>
              {getCategoryLabel(category)}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Betydning</h2>
            <p className="text-lg sm:text-xl">{nameData.meaning}</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Opprinnelse</h2>
            <p className="text-lg sm:text-xl">{nameData.origin}</p>
          </div>
          {(category === 'boy' || category === 'girl') && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Kategorier</h2>
              <div className="flex flex-wrap gap-2">
                {nameData.categories?.map((cat: string) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-3 py-1 font-bold transform -rotate-2 transition-all duration-300
                      ${bgColor} border-2 border-black hover:scale-105 cursor-pointer`}
                  >
                    {formatCategoryName(cat)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NameDetail;