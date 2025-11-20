import { Category, EventItem } from '../types';

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Festival de Jazz no Teatro Amazonas',
    description: 'Uma noite inesquecível com os maiores nomes do Jazz amazonense e internacional no palco mais icônico do Brasil.',
    date: '2025-06-15',
    time: '20:00',
    category: Category.MUSIC,
    location: {
      name: 'Teatro Amazonas',
      address: 'Largo de São Sebastião, Centro',
      lat: -3.1302,
      lng: -60.0234
    },
    imageUrl: 'https://picsum.photos/id/453/800/600',
    price: 'R$ 50,00'
  },
  {
    id: '2',
    title: 'Final do Campeonato Amazonense',
    description: 'O clássico Rio-Nal decide o título estadual na arena da copa. Prepare sua torcida!',
    date: '2025-06-16',
    time: '16:00',
    category: Category.SPORTS,
    location: {
      name: 'Arena da Amazônia',
      address: 'Av. Constantino Nery, 5001 - Flores',
      lat: -3.0843,
      lng: -60.0283
    },
    imageUrl: 'https://picsum.photos/id/825/800/600',
    price: 'R$ 30,00'
  },
  {
    id: '3',
    title: 'Feira do Paço: Edição Boi-Bumbá',
    description: 'Gastronomia, artesanato e muita toada na praça mais charmosa do centro histórico.',
    date: '2025-06-16',
    time: '17:00',
    category: Category.CULTURE,
    location: {
      name: 'Praça Dom Pedro II',
      address: 'Centro Histórico',
      lat: -3.1375,
      lng: -60.0246
    },
    imageUrl: 'https://picsum.photos/id/352/800/600',
    price: 'Gratuito'
  },
  {
    id: '4',
    title: 'Passeio Culinário: Peixes Amazônicos',
    description: 'Degustação de tambaqui, pirarucu e matrinxã preparados pelos melhores chefs locais.',
    date: '2025-06-17',
    time: '12:00',
    category: Category.GASTRONOMY,
    location: {
      name: 'Mercado Adolpho Lisboa',
      address: 'Rua dos Barés, 46 - Centro',
      lat: -3.1395,
      lng: -60.0231
    },
    imageUrl: 'https://picsum.photos/id/493/800/600',
    price: 'R$ 85,00'
  },
  {
    id: '5',
    title: 'Trilha Guiada no MUSA',
    description: 'Conheça a flora e fauna da Amazônia em uma caminhada guiada pelo Museu da Amazônia. Inclui subida na torre.',
    date: '2025-06-18',
    time: '08:00',
    category: Category.NATURE,
    location: {
      name: 'MUSA - Museu da Amazônia',
      address: 'Av. Margarita, s/n - Cidade de Deus',
      lat: -3.0091,
      lng: -59.9422
    },
    imageUrl: 'https://picsum.photos/id/786/800/600',
    price: 'R$ 40,00'
  },
  {
    id: '6',
    title: 'Ensaio dos Bumbás',
    description: 'Aquecimento para o festival de Parintins com Caprichoso e Garantido.',
    date: '2025-06-15',
    time: '21:00',
    category: Category.CULTURE,
    location: {
      name: 'Sambódromo de Manaus',
      address: 'Av. Pedro Teixeira, 2565',
      lat: -3.0878,
      lng: -60.0331
    },
    imageUrl: 'https://picsum.photos/id/653/800/600',
    price: 'Gratuito'
  }
];