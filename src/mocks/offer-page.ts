import { Offer, OfferType } from '../types/offer';
import { OfferDetails } from '../types/offer-details';
import { Review } from '../types/review';

export const OFFER_PAGE_MOCK: {
  offer: OfferDetails;
  reviews: Review[];
  offersNearby: Offer[];
} = {
  offer: {
    id: '91a1f017-94a9-47bf-a833-d20b439550ef',
    title: 'The house among olive ',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: OfferType.Room,
    price: 183,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Fridge',
      'Kitchen'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.1,
    bedrooms: 1,
    maxAdults: 2
  },
  reviews: [
    {
      id: '3d780d71-b482-4dd6-a3e2-03dd663e3c51',
      comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
      date: new Date('2024-12-13T21:00:00.583Z'),
      rating: 4.5,
      user: {
        name: 'Christina',
        avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/7.jpg',
        isPro: false
      }
    },
    {
      id: 'a4514a0e-e1de-4f5b-81a8-5f5194dac75b',
      comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
      date: new Date('2024-10-12T21:00:00.518Z'),
      rating: 3,
      user: {
        name: 'Sophie',
        avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/2.jpg',
        isPro: true
      }
    },
  ],
  offersNearby: [
    {
      id: '6d001a3d-49b3-4811-b796-5907e8e96386',
      title: 'The Joshua Tree House',
      type: OfferType.House,
      price: 483,
      previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36554,
        longitude: 4.911976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3
    },
    {
      id: '59be3757-7ddc-450d-9c00-b3f316e2dd20',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: OfferType.Hotel,
      price: 458,
      previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.385540000000006,
        longitude: 4.902976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.7
    },
    {
      id: '6999667c-95f6-427e-8668-1943c8daab0d',
      title: 'Nice, cozy, warm big bed apartment',
      type: OfferType.Room,
      price: 259,
      previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
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
      isPremium: false,
      rating: 2.8
    },
  ]
};
