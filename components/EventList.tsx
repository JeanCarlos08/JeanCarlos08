import React from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventListProps {
  events: EventItem[];
  onSelectEvent: (event: EventItem) => void;
  selectedEventId?: string;
}

const EventList: React.FC<EventListProps> = ({ events, onSelectEvent, selectedEventId }) => {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-stone-400">
        <Calendar size={48} className="mb-4 opacity-50" />
        <p className="text-lg font-medium">Nenhum evento encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      {events.map((event) => (
        <div 
          key={event.id}
          onClick={() => onSelectEvent(event)}
          className={`group bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-lg flex flex-col sm:flex-row h-auto sm:h-48 ${
            selectedEventId === event.id ? 'border-amazon-primary ring-1 ring-amazon-primary shadow-md' : 'border-stone-200 hover:border-amazon-light'
          }`}
        >
          {/* Image */}
          <div className="w-full sm:w-48 h-48 sm:h-full overflow-hidden shrink-0 relative">
             <img 
              src={event.imageUrl} 
              alt={event.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-amazon-dark">
              {event.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-lg text-stone-900 leading-tight group-hover:text-amazon-primary transition-colors">
                  {event.title}
                </h3>
                <span className="text-amazon-accent font-bold text-sm whitespace-nowrap">{event.price}</span>
              </div>
              <p className="text-sm text-stone-500 line-clamp-2 mb-4">{event.description}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-medium text-stone-500">
              <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">
                <Calendar size={14} className="text-amazon-primary" />
                <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">
                <Clock size={14} className="text-amazon-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">
                <MapPin size={14} className="text-amazon-primary" />
                <span className="truncate max-w-[150px]">{event.location.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;