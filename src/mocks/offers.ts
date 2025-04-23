import { Offer, OfferType } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '44ca07ca-1820-4a7c-b0d3-b6427b4b4a64',
    title: 'House in countryside',
    type: OfferType.Apartment,
    price: 259,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.3
  },
  {
    id: 'bfe5374d-e8bb-44e1-9a91-1ca02b53f0c3',
    title: 'The Pondhouse - A Magical Place',
    type: OfferType.Hotel,
    price: 290,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7
  },
  {
    id: '87318327-a4e9-4e50-ac2c-c5a312db201f',
    title: 'Waterfront with extraordinary view',
    type: OfferType.House,
    price: 956,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3
  },
  {
    id: '28f07155-a8fc-484b-bd6c-9d9675b59509',
    title: 'Loft Studio in the Central Area',
    type: OfferType.Room,
    price: 166,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7
  },
];
