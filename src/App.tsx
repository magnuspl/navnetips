import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Baby, Cat, Dog, Search, PcCase as AlphabetCase, Tags, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import Header from './components/Header';
import NameList from './components/NameList';
import AlphabetBrowser from './components/AlphabetBrowser';
import CategoryBrowser from './components/CategoryBrowser';
import LikedNames from './components/LikedNames';
import SEO from './components/SEO';
import { useScrollToTop } from './hooks/useScrollToTop';
import { names } from './data/names';
import { useFavorites } from './context/FavoritesContext';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-yellow-50 p-4">
        <SEO />
        <Header />
        
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto mb-12">
          <button
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="w-full sm:hidden mb-4 px-6 py-3 bg-white border-4 border-black font-bold
              flex items-center justify-between
              transform transition-transform duration-300
              hover:translate-y-[-2px]"
          >
            <span>Vis kategorier</span>
            {isNavExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          
          <div className={`${isNavExpanded ? 'grid' : 'hidden'} 
            grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4
            transition-all duration-300 ease-in-out`}
          >
            <NavLink to="/guttenavn" icon={<Baby />} text="Guttenavn" color="blue" />
            <NavLink to="/jentenavn" icon={<Baby />} text="Jentenavn" color="pink" />
            <NavLink to="/hundenavn" icon={<Dog />} text="Hundenavn" color="orange" />
            <NavLink to="/kattenavn" icon={<Cat />} text="Kattenavn" color="purple" />
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guttenavn" element={<NameList category="boy" names={names.boy} />} />
          <Route path="/jentenavn" element={<NameList category="girl" names={names.girl} />} />
          <Route path="/hundenavn" element={<NameList category="dog" names={names.dog} />} />
          <Route path="/kattenavn" element={<NameList category="cat" names={names.cat} />} />
          <Route path="/favoritter" element={<LikedNames />} />
          <Route path="/guttenavn/bokstav/:letter" element={<AlphabetBrowser category="boy" />} />
          <Route path="/jentenavn/bokstav/:letter" element={<AlphabetBrowser category="girl" />} />
          <Route path="/guttenavn/kategori/:nameCategory" element={<CategoryBrowser category="boy" />} />
          <Route path="/jentenavn/kategori/:nameCategory" element={<CategoryBrowser category="girl" />} />
          <Route path="/guttenavn/:name" element={<NameDetail category="boy" />} />
          <Route path="/jentenavn/:name" element={<NameDetail category="girl" />} />
          <Route path="/hundenavn/:name" element={<NameDetail category="dog" />} />
          <Route path="/kattenavn/:name" element={<NameDetail category="cat" />} />
        </Routes>

        {/* Footer */}
        <footer className="mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black text-white p-6 transform rotate-1">
              <p className="text-center text-lg font-bold">
                © 2024 Navnetips.no - Din guide til perfekte navn
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  color: string;
}

function NavLink({ to, icon, text, color }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const bgColor = color === 'blue' ? 'bg-blue-400' : 
                 color === 'pink' ? 'bg-pink-400' : 
                 color === 'orange' ? 'bg-orange-400' : 
                 'bg-purple-400';

  return (
    <Link
      to={to}
      className={`w-full px-4 sm:px-6 py-3 border-4 border-black font-bold text-black
        ${isActive ? `${bgColor} -rotate-2` : 'bg-white rotate-2'}
        transform transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1
        active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1`}
    >
      <div className="flex items-center justify-center space-x-2">
        {icon}
        <span className="text-base sm:text-lg">{text}</span>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="bg-white border-4 border-black p-6 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-4xl sm:text-5xl font-black mb-8 transform -rotate-2">
          Velkommen til Navnetips.no!
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Finn det perfekte navnet til ditt barn eller kjæledyr. Utforsk vår samling av unike navn med betydninger og opprinnelse.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            to="/guttenavn"
            className="bg-blue-400 border-4 border-black p-6 transform hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">Guttenavn</h2>
            <p>Utforsk sterke og tidløse guttenavn</p>
          </Link>
          <Link
            to="/jentenavn"
            className="bg-pink-400 border-4 border-black p-6 transform hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">Jentenavn</h2>
            <p>Oppdag vakre og unike jentenavn</p>
          </Link>
          <Link
            to="/hundenavn"
            className="bg-orange-400 border-4 border-black p-6 transform hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">Hundenavn</h2>
            <p>Finn det perfekte navnet til din hund</p>
          </Link>
          <Link
            to="/kattenavn"
            className="bg-purple-400 border-4 border-black p-6 transform hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">Kattenavn</h2>
            <p>Finn det perfekte navnet til din katt</p>
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <div className="flex items-center space-x-4 mb-6">
            <Tags className="h-8 w-8" />
            <h2 className="text-2xl sm:text-3xl font-black">Guttenavn etter kategori</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Link
              to="/guttenavn/kategori/norrønt"
              className="bg-blue-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Norrøne navn
            </Link>
            <Link
              to="/guttenavn/kategori/klassisk"
              className="bg-blue-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Klassiske navn
            </Link>
            <Link
              to="/guttenavn/kategori/unikt"
              className="bg-blue-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Unike navn
            </Link>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <div className="flex items-center space-x-4 mb-6">
            <Tags className="h-8 w-8" />
            <h2 className="text-2xl sm:text-3xl font-black">Jentenavn etter kategori</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Link
              to="/jentenavn/kategori/norrønt"
              className="bg-pink-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Norrøne navn
            </Link>
            <Link
              to="/jentenavn/kategori/klassisk"
              className="bg-pink-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Klassiske navn
            </Link>
            <Link
              to="/jentenavn/kategori/unikt"
              className="bg-pink-400 border-2 border-black p-4 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
            >
              Unike navn
            </Link>
          </div>
        </div>
      </div>

      {/* Alphabet Browsing Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <div className="flex items-center space-x-4 mb-6">
            <AlphabetCase className="h-8 w-8" />
            <h2 className="text-2xl sm:text-3xl font-black">Guttenavn etter bokstav</h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ').map((letter) => (
              <Link
                key={letter}
                to={`/guttenavn/bokstav/${letter.toLowerCase()}`}
                className="bg-blue-400 border-2 border-black p-2 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <div className="flex items-center space-x-4 mb-6">
            <AlphabetCase className="h-8 w-8" />
            <h2 className="text-2xl sm:text-3xl font-black">Jentenavn etter bokstav</h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ').map((letter) => (
              <Link
                key={letter}
                to={`/jentenavn/bokstav/${letter.toLowerCase()}`}
                className="bg-pink-400 border-2 border-black p-2 text-center font-bold hover:transform hover:-translate-y-1 transition-transform"
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NameDetail({ category }: { category: 'boy' | 'girl' | 'dog' | 'cat' }) {
  const location = useLocation();
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

  if (!nameData) {
    return (
      <div className="max-w-7xl mx-auto">
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
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Kategorier</h2>
            <div className="flex flex-wrap gap-2">
              {nameData.categories?.map((category: string) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-black text-white text-sm font-bold transform -rotate-2"
                >
                  {category === 'norrønt' ? 'Norrønt' :
                   category === 'klassisk' ? 'Klassisk' :
                   category === 'unikt' ? 'Unikt' : category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;