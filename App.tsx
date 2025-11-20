import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import MapPreview from './components/MapPreview';
import AIGuide from './components/AIGuide';
import { MOCK_EVENTS } from './data/events';
import { Category, EventItem } from './types';
import { Filter } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | undefined>(undefined);

  // Filter logic
  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter(event => {
      const matchesCategory = selectedCategory === Category.ALL || event.category === selectedCategory;
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Select first event by default on load
  useEffect(() => {
    if (MOCK_EVENTS.length > 0 && !selectedEvent) {
      setSelectedEvent(MOCK_EVENTS[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onSearch={setSearchQuery} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Categories */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2 text-stone-800">
              <Filter size={20} className="text-amazon-primary" />
              <h3 className="font-display font-bold text-lg">Explorar Categorias</h3>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar mask-fade-right">
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-amazon-primary text-white shadow-md shadow-amazon-primary/30'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-amazon-primary hover:text-amazon-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Event List */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              <div className="flex justify-between items-end">
                 <h2 className="font-display font-bold text-2xl text-stone-900">
                   {selectedCategory === Category.ALL ? 'Próximos Eventos' : selectedCategory}
                 </h2>
                 <span className="text-stone-400 text-sm font-medium">{filteredEvents.length} resultados</span>
              </div>
              <EventList 
                events={filteredEvents} 
                onSelectEvent={setSelectedEvent}
                selectedEventId={selectedEvent?.id}
              />
            </div>

            {/* Right: Map (Sticky) - Hidden on mobile, shown on large screens */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 relative">
              <MapPreview selectedEvent={selectedEvent} />
            </div>
          </div>
        </div>
      </main>

      {/* AI Assistant */}
      <AIGuide />

      <footer className="bg-white border-t border-stone-200 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-stone-400 text-sm">
             &copy; 2024 Manaus Acontece. Desenvolvido por Jean Carlos.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;