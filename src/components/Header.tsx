import React, { useState } from 'react';
import { Baby, Search, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchTerm)}`);
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

          <form onSubmit={handleSearch} className="relative w-full sm:w-auto">
            <div className="bg-white border-4 border-black p-1 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-black ml-2" />
                <input
                  type="text"
                  placeholder="Søk etter navn..."
                  className="pl-2 pr-4 py-2 focus:outline-none w-full sm:w-64 bg-transparent 
                    placeholder-black transition-all duration-300 focus:bg-gray-50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}