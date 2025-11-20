import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <div className="relative bg-gradient-to-br from-amazon-dark via-teal-800 to-amazon-primary text-white overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="bg-amazon-accent/20 text-amazon-accent border border-amazon-accent/50 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
          #VivaManaus
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          Descubra a energia <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amazon-light to-white">da Amazônia</span>
        </h2>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mb-10 font-light">
          De festivais folclóricos a noites de jazz no teatro. Encontre o que fazer em Manaus hoje.
        </p>

        <div className="w-full max-w-xl relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 rounded-2xl border-0 bg-white/95 backdrop-blur-xl text-stone-900 placeholder:text-stone-500 focus:ring-2 focus:ring-amazon-accent focus:outline-none shadow-2xl transition-all"
            placeholder="Buscar eventos, artistas ou locais..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;