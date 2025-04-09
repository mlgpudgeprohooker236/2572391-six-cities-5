enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  OfferBase = '/offer'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const CommentFormSettings = {
  CommentMinLength: 50
};

export { AppRoute, AuthorizationStatus, CommentFormSettings };
