export enum Category {
  ALL = 'Todos',
  CULTURE = 'Cultura',
  MUSIC = 'Música',
  SPORTS = 'Esporte',
  GASTRONOMY = 'Gastronomia',
  NATURE = 'Natureza'
}

export interface EventLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  time: string;
  category: Category;
  location: EventLocation;
  imageUrl: string;
  price: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}