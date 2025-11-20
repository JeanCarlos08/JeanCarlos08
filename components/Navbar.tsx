import React from 'react';
import { MapPin, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amazon-primary p-2 rounded-lg text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-amazon-dark tracking-tight">Manaus<span className="text-amazon-accent">Acontece</span></h1>
              <p className="text-xs text-stone-500 font-medium">O seu guia da selva urbana</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-stone-600 hover:text-amazon-primary font-medium transition-colors">Eventos</a>
            <a href="#" className="text-stone-600 hover:text-amazon-primary font-medium transition-colors">Mapa</a>
            <a href="#" className="text-stone-600 hover:text-amazon-primary font-medium transition-colors">Favoritos</a>
          </div>

          <button className="md:hidden p-2 text-stone-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;