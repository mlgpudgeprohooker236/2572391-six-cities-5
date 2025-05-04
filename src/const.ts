enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  OfferBase = '/offer',
  NotFound = '/not-found'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const CommentFormSettings = {
  CommentMinLength: 50,
  CommentMaxLength: 300
};

const MAX_REVIEWS_LOADED = 10;

const MAX_OFFERS_NEARBY_LOADED = 3;

const MapSettings = {
  UrlMarkerDefault: '/public/img/pin.svg',
  UrlMarkerCurrent: '/public/img/pin-active.svg'
};

const APIRoute = {
  Offers: '/offers',
  Comments: '/comments',
  Favorites: '/favorite',
  Login: '/login',
  Logout: '/logout'
};

export { AppRoute, AuthorizationStatus, CommentFormSettings, MapSettings, APIRoute, MAX_REVIEWS_LOADED, MAX_OFFERS_NEARBY_LOADED};
