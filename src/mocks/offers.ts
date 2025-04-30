import { Offer, OfferType } from '../types/offer';

export const offersMock: Offer[] = [
  {
    id: '93e0a605-b275-42b8-ab1f-7306b1ce141d',
    title: 'House in countryside',
    type: OfferType.Room,
    price: 292,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 4.2
  },
  {
    id: 'bfd1e5e6-decd-4039-8521-87eedceb3b6b',
    title: 'Perfectly located Castro',
    type: OfferType.House,
    price: 451,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.7
  },
  {
    id: '8fa83ef9-2bb5-4576-9aa5-6bf453d768f7',
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.Room,
    price: 107,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.4
  },
  {
    id: '16ae47e6-534d-407c-a51f-22616e7938c9',
    title: 'The Pondhouse - A Magical Place',
    type: OfferType.Apartment,
    price: 404,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: '9244bb9d-f455-42bc-81e6-4e9eadd2b14d',
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.House,
    price: 911,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.6
  },
  {
    id: 'ee750597-fdd7-416e-8236-92e720c0498d',
    title: 'Waterfront with extraordinary view',
    type: OfferType.Hotel,
    price: 278,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4
  },
  {
    id: '0aee0430-71d9-4536-9d22-ffbb3dc731e8',
    title: 'Perfectly located Castro',
    type: OfferType.Hotel,
    price: 373,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.1
  },
  {
    id: '7cc4c6b4-147b-48a0-a0b9-bf602269c704',
    title: 'Canal View Prinsengracht',
    type: OfferType.Room,
    price: 164,
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
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '36569abe-8978-4268-bfd0-9ce67d54c6bc',
    title: 'Tile House',
    type: OfferType.Apartment,
    price: 121,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4
  },
  {
    id: 'cc7578ea-49d4-4158-a6ec-ad2a77bf6e51',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: OfferType.Apartment,
    price: 377,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2
  },
  {
    id: '7ea09bd3-8c8d-4904-831f-b193f3462432',
    title: 'The house among olive ',
    type: OfferType.Apartment,
    price: 440,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3
  },
  {
    id: 'fa4f92e1-123c-4786-9040-1a2d9ae3d191',
    title: 'The Joshua Tree House',
    type: OfferType.Room,
    price: 228,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7
  },
];
