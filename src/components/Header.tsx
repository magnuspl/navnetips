import React, { useState, useEffect, useRef } from 'react';
import { Baby, Search, Heart, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { names, Name } from '../data/names';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Name[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites } = useFavorites();

  // Combine all names from different categories
  const allNames = [...names.boy, ...names.girl, ...names.dog, ...names.cat];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length >= 3) {
      const filteredNames = allNames.filter(name => 
        name.name.toLowerCase().includes(value.toLowerCase()) ||
        name.meaning.toLowerCase().includes(value.toLowerCase()) ||
        name.origin.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredNames);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.length >= 3) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
    }
  };

  // Handle click on a search result
  const handleResultClick = (name: Name) => {
    setSearchTerm('');
    setShowResults(false);
    
    // Determine the correct path based on the name category
    let path = '';
    if (names.boy.some(n => n.name === name.name)) {
      path = `/guttenavn/${name.name.toLowerCase()}`;
    } else if (names.girl.some(n => n.name === name.name)) {
      path = `/jentenavn/${name.name.toLowerCase()}`;
    } else if (names.dog.some(n => n.name === name.name)) {
      path = `/hundenavn/${name.name.toLowerCase()}`;
    } else {
      path = `/kattenavn/${name.name.toLowerCase()}`;
    }
    
    navigate(path);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close search results when navigating
  useEffect(() => {
    setShowResults(false);
    setSearchTerm('');
  }, [location.pathname]);

  // Get category color for search results
  const getNameColor = (name: Name) => {
    if (names.boy.some(n => n.name === name.name)) return 'border-blue-400';
    if (names.girl.some(n => n.name === name.name)) return 'border-pink-400';
    if (names.dog.some(n => n.name === name.name)) return 'border-orange-400';
    return 'border-purple-400';
  };

  // Get category label for search results
  const getNameCategory = (name: Name) => {
    if (names.boy.some(n => n.name === name.name)) return 'Guttenavn';
    if (names.girl.some(n => n.name === name.name)) return 'Jentenavn';
    if (names.dog.some(n => n.name === name.name)) return 'Hundenavn';
    return 'Kattenavn';
  };

  return (
    <header className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 sm:sticky sm:top-4 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link to="/" className="flex items-center space-x-4 group interactive-hover">
              <div className="p-3 bg-yellow-300 border-4 border-black transform -rotate-3 
                transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <Baby className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-black tracking-tighter transform -rotate-2
                transition-all duration-300 group-hover:rotate-0">
                Navnetips.no
              </h1>
            </Link>
            
            <Link
              to="/favoritter"
              className="flex items-center space-x-2 px-4 py-2 bg-red-400 border-4 border-black
                transform -rotate-2 transition-all duration-300
                hover:rotate-0 hover:-translate-y-1 active:translate-y-0
                button-press ripple"
            >
              <Heart className="h-5 w-5" />
              <span className="font-bold">
                Favoritter ({favorites.size})
              </span>
            </Link>
          </div>

          <div ref={searchRef} className="relative w-full sm:w-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="bg-white border-4 border-black p-1 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-black ml-2" />
                  <input
                    type="text"
                    placeholder="Søk etter navn..."
                    className="pl-2 pr-4 py-2 focus:outline-none w-full sm:w-64 bg-transparent 
                      placeholder-black transition-all duration-300 focus:bg-gray-50"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        setSearchResults([]);
                        setShowResults(false);
                      }}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </form>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute z-50 mt-2 w-full sm:w-96 right-0 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-[70vh] overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Søkeresultater ({searchResults.length})</h3>
                  <div className="space-y-3">
                    {searchResults.slice(0, 10).map((name) => (
                      <div 
                        key={name.id}
                        onClick={() => handleResultClick(name)}
                        className={`p-3 border-l-8 ${getNameColor(name)} cursor-pointer hover:bg-gray-50 transition-colors duration-200`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-xl font-bold">{name.name}</h4>
                          <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                            {getNameCategory(name)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{name.meaning}</p>
                        <p className="text-xs text-gray-500">Opprinnelse: {name.origin}</p>
                      </div>
                    ))}
                    
                    {searchResults.length > 10 && (
                      <div className="text-center py-2 border-t border-gray-200">
                        <button 
                          onClick={handleSearch}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Se alle {searchResults.length} resultater
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {showResults && searchResults.length === 0 && searchTerm.length >= 3 && (
              <div className="absolute z-50 mt-2 w-full sm:w-96 right-0 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-4 text-center">
                  <p className="text-lg font-medium">Ingen navn funnet</p>
                  <p className="text-sm text-gray-500">Prøv et annet søkeord</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}