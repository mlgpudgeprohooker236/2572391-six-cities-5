import { City, CityName } from './types/city';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  OfferBase = '/offer',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CommentFormSettings = {
  CommentMinLength: 50,
  CommentMaxLength: 300
};

export const OfferDetailsPageSettings = {
  MaxReviewsLoaded: 10,
  MaxOffersNearbyDisplayed: 3,
  MaxOfferImagesDisplayed: 6
};

export const MapSettings = {
  UrlMarkerDefault: '/img/pin.svg',
  UrlMarkerCurrent: '/img/pin-active.svg'
};

export const APIRoute = {
  Offers: '/offers',
  Comments: '/comments',
  Favorites: '/favorite',
  Login: '/login',
  Logout: '/logout'
};

export enum NameSpace {
  Application = 'Application',
  User = 'User',
  Offers = 'Offers',
  Favorites = 'Favorites',
  OfferDetails = 'OfferDetails',
  Reviews = 'Reviews',
  NearbyOffers = 'NearbyOffers'
}


export const Cities: Record<CityName, City> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
} as const;
