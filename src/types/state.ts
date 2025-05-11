import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { City } from './city.js';
import { Offer, OfferPreview } from './offer.js';
import { Review } from './review.js';
import { AuthInfo } from './user.js';

export type ApplicationData = {
  activeCity: City;
}

export type UserData = {
  authInfo: AuthInfo | null;
  authorizationStatus: AuthorizationStatus;
  isAuthBeingChecked: boolean;
}

export type OffersData = {
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
}

export type OfferDetailsData = {
  offerDetails: Offer | null;
  isOfferDetailsLoading: boolean;
  hasError: boolean;
}

export type ReviewsData = {
  reviews: Review[];
  isReviewsLoading: boolean;
}

export type NearbyOffersData = {
  nearbyOffers: OfferPreview[];
  isNearbyOffersLoading: boolean;
}

export type FavoritesData = {
  favorites: OfferPreview[];
  isFavoritesLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
