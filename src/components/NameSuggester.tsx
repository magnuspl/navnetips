import React, { useState, useMemo } from 'react';
import { Sparkles, Heart, X, Shuffle, Check } from 'lucide-react';
import { names, Name } from '../data/names';
import { useFavorites } from '../context/FavoritesContext';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';

type NameType = 'boy' | 'girl' | 'dog' | 'cat';
type Category = 'norrønt' | 'klassisk' | 'moderne' | 'unikt';

interface CategoryOption {
  id: Category;
  label: string;
  description: string;
}

const categories: CategoryOption[] = [
  { 
    id: 'norrønt', 
    label: 'Norrøne navn',
    description: 'Navn med røtter i vikingtiden og norrøn mytologi'
  },
  { 
    id: 'klassisk', 
    label: 'Klassiske navn',
    description: 'Tradisjonelle navn som har stått sterkt gjennom generasjoner'
  },
  { 
    id: 'moderne', 
    label: 'Moderne navn',
    description: 'Populære navn i dagens samfunn'
  },
  { 
    id: 'unikt', 
    label: 'Unike navn',
    description: 'Sjeldne og spesielle navn som skiller seg ut'
  }
];

function NameSuggester() {
  const [selectedType, setSelectedType] = useState<NameType | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());
  const [currentNameIndex, setCurrentNameIndex] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  // Filter names based on selected type and categories
  const filteredNames = useMemo(() => {
    if (!selectedType || selectedCategories.size === 0) return [];
    
    return names[selectedType].filter(name =>
      name.categories.some(category => selectedCategories.has(category as Category))
    );
  }, [selectedType, selectedCategories]);

  // Shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: Name[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledNames, setShuffledNames] = useState<Name[]>([]);

  const startSuggesting = () => {
    setShuffledNames(shuffleArray(filteredNames));
    setCurrentNameIndex(0);
    setHasStarted(true);
  };

  const handleTypeSelect = (type: NameType) => {
    setSelectedType(type);
    setHasStarted(false);
  };

  const handleCategoryToggle = (category: Category) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
    setHasStarted(false);
  };

  const handleNext = () => {
    if (currentNameIndex < shuffledNames.length - 1) {
      setCurrentNameIndex(prev => prev + 1);
    }
  };

  const currentName = shuffledNames[currentNameIndex];
  const isLiked = currentName ? favorites.has(currentName.name) : false;

  const getTypeColor = (type: NameType) => {
    switch (type) {
      case 'boy': return 'bg-blue-400';
      case 'girl': return 'bg-pink-400';
      case 'dog': return 'bg-orange-400';
      case 'cat': return 'bg-purple-400';
    }
  };

  const getTypeLabel = (type: NameType) => {
    switch (type) {
      case 'boy': return 'Guttenavn';
      case 'girl': return 'Jentenavn';
      case 'dog': return 'Hundenavn';
      case 'cat': return 'Kattenavn';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SEO 
        title="Navneforslag - Finn det perfekte navnet | Navnetips.no"
        description="La oss hjelpe deg med å finne det perfekte navnet. Velg type og kategorier, og få personlige navneforslag."
      />

      <Breadcrumb currentPage="Navneforslag" />

      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-4 mb-8">
          <Sparkles className="h-10 w-10" />
          <h1 className="text-4xl font-black">Navneforslag</h1>
        </div>

        {/* Type Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Velg type navn</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(['boy', 'girl', 'dog', 'cat'] as const).map((type) => (
              <button
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`p-4 border-4 border-black font-bold text-lg
                  ${selectedType === type ? `${getTypeColor(type)} -rotate-2` : 'bg-white rotate-2'}
                  transform transition-all duration-300 hover:-translate-y-1`}
              >
                {getTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>

        {/* Category Selection */}
        {selectedType && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">2. Velg kategorier (flere valg mulig)</h2>
              <span className="text-sm font-medium bg-black text-white px-3 py-1">
                {selectedCategories.size} valgt
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {categories.map((category) => {
                const isSelected = selectedCategories.has(category.id);
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryToggle(category.id)}
                    className={`p-6 border-4 border-black text-left
                      ${isSelected 
                        ? `${getTypeColor(selectedType)} -rotate-1` 
                        : 'bg-white rotate-1'}
                      transform transition-all duration-300 hover:-translate-y-1
                      relative overflow-hidden group`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{category.label}</h3>
                        <p className="text-sm">{category.description}</p>
                      </div>
                      <div className={`w-8 h-8 flex items-center justify-center
                        ${isSelected ? 'bg-black' : 'border-2 border-black'}
                        transition-colors duration-300`}
                      >
                        {isSelected && <Check className="h-5 w-5 text-white" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Start Button */}
        {selectedType && selectedCategories.size > 0 && !hasStarted && (
          <button
            onClick={startSuggesting}
            className="w-full p-6 bg-black text-white text-xl font-bold
              transform transition-all duration-300 hover:-translate-y-1
              flex items-center justify-center space-x-2"
          >
            <Sparkles className="h-6 w-6" />
            <span>Start navneforslag ({filteredNames.length} navn)</span>
          </button>
        )}

        {/* Name Display */}
        {hasStarted && currentName && (
          <div className="space-y-8">
            <div className={`${getTypeColor(selectedType)} border-4 border-black p-8
              transform transition-all duration-300 hover:scale-[1.02]`}
            >
              <h2 className="text-4xl sm:text-5xl font-black mb-4">{currentName.name}</h2>
              <p className="text-xl mb-4">{currentName.meaning}</p>
              <p className="text-lg">Opprinnelse: {currentName.origin}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentName.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-black text-white text-sm font-bold transform -rotate-2"
                  >
                    {cat === 'norrønt' ? 'Norrønt' :
                     cat === 'klassisk' ? 'Klassisk' :
                     cat === 'moderne' ? 'Moderne' :
                     cat === 'unikt' ? 'Unikt' : cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  if (!isLiked) toggleFavorite(currentName.name);
                  handleNext();
                }}
                className={`p-6 border-4 border-black font-bold text-xl
                  ${isLiked ? 'bg-gray-200' : 'bg-green-400'}
                  transform transition-all duration-300 hover:-translate-y-1
                  flex items-center justify-center space-x-2`}
                disabled={isLiked}
              >
                <Heart className={isLiked ? 'fill-black' : ''} />
                <span>{isLiked ? 'Allerede lagt til' : 'Legg til i favoritter'}</span>
              </button>

              <button
                onClick={handleNext}
                className="p-6 bg-red-400 border-4 border-black font-bold text-xl
                  transform transition-all duration-300 hover:-translate-y-1
                  flex items-center justify-center space-x-2"
              >
                <X />
                <span>Neste navn</span>
              </button>
            </div>

            {currentNameIndex === shuffledNames.length - 1 && (
              <button
                onClick={startSuggesting}
                className="w-full p-6 bg-yellow-400 border-4 border-black font-bold text-xl
                  transform transition-all duration-300 hover:-translate-y-1
                  flex items-center justify-center space-x-2"
              >
                <Shuffle />
                <span>Start på nytt</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NameSuggester;