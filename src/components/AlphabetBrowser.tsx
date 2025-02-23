import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PcCase as AlphabetCase } from 'lucide-react';
import { names } from '../data/names';

interface AlphabetBrowserProps {
  category: 'boy' | 'girl';
}

function AlphabetBrowser({ category }: AlphabetBrowserProps) {
  const { letter = 'a' } = useParams();
  const categoryNames = category === 'boy' ? names.boy : names.girl;
  const filteredNames = categoryNames.filter(name => 
    name.name.toLowerCase().startsWith(letter.toLowerCase())
  );

  const basePath = category === 'boy' ? '/guttenavn' : '/jentenavn';
  const categoryText = category === 'boy' ? 'Guttenavn' : 'Jentenavn';
  const bgColor = category === 'boy' ? 'bg-blue-400' : 'bg-pink-400';

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Link
          to={basePath}
          className="flex items-center space-x-2 px-4 py-2 bg-white border-4 border-black
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            transform transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Tilbake til {categoryText.toLowerCase()}</span>
        </Link>
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-4 mb-8">
          <AlphabetCase className="h-10 w-10" />
          <h1 className="text-4xl font-black">
            {categoryText} som starter på {letter.toUpperCase()}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((name, index) => (
            <Link
              key={name.name}
              to={`${basePath}/${name.name.toLowerCase()}`}
              className={`${bgColor} border-4 border-black p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transform transition-all duration-300
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              <h2 className="text-2xl font-black mb-2">{name.name}</h2>
              <p className="text-sm font-medium">{name.meaning}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-black text-white text-xs font-bold transform -rotate-2">
                {name.origin}
              </span>
            </Link>
          ))}
        </div>

        {filteredNames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl font-bold">
              Ingen navn funnet som starter på {letter.toUpperCase()}
            </p>
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
                hover:transform hover:-translate-y-1 transition-transform`}
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