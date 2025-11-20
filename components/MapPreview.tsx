import React from 'react';
import { EventItem } from '../types';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapPreviewProps {
  selectedEvent?: EventItem;
}

const MapPreview: React.FC<MapPreviewProps> = ({ selectedEvent }) => {
  return (
    <div className="sticky top-24 bg-slate-900 rounded-3xl p-2 border border-slate-800 shadow-lg h-[calc(100vh-8rem)] flex flex-col">
      <div className="relative flex-1 bg-slate-800 rounded-2xl overflow-hidden group">
        {selectedEvent ? (
          <>
             {/* Simulated Map utilizing an static image or simple iframe trick for prototype */}
             <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://maps.google.com/maps?q=${selectedEvent.location.lat},${selectedEvent.location.lng}&hl=pt-br&z=15&output=embed`}
                className="absolute inset-0 w-full h-full opacity-70 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                title="Mapa do Evento"
             ></iframe>
             
             {/* Overlay Card */}
             <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border-l-4 border-amazon-primary shadow-xl transform transition-all duration-500 translate-y-0 opacity-100">
                <h4 className="font-bold text-white">{selectedEvent.location.name}</h4>
                <p className="text-sm text-slate-400 mb-3">{selectedEvent.location.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedEvent.location.lat},${selectedEvent.location.lng}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-bold text-amazon-primary hover:text-white transition-colors"
                >
                  Abrir no Google Maps <ExternalLink size={12} className="ml-1" />
                </a>
             </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-800">
            <MapPin size={48} className="mb-2 animate-bounce" />
            <p className="text-sm font-medium">Selecione um evento para ver no mapa</p>
          </div>
        )}
      </div>
      
      <div className="p-3 text-center">
         <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Mapa Interativo de Manaus</p>
      </div>
    </div>
  );
};

export default MapPreview;