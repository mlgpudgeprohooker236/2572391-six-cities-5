import { Offer, OfferType } from '../types/offer/offer';

export const offers: Offer[] = [
  {
    id: '44ca07ca-1820-4a7c-b0d3-b6427b4b4a64',
    title: 'House in countryside',
    type: OfferType.Apartment,
    price: 259,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
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
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.913361,
      longitude: 6.9509739999999995,
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
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
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
      latitude: 52.35054,
      longitude: 4.908976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7
  },
];
