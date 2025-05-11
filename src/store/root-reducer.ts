import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './slices/user-data/user-data';
import { offersData } from './slices/offers-data/offers-data';
import { reviewsData } from './slices/reviews-data/reviews-data';
import { nearbyOffersData } from './slices/nearby-offers-data/nearby-offers-data';
import { applicationData } from './slices/application-data/application-data';
import { favoritesData } from './slices/favorites-data/favorites-data';
import { offerData } from './slices/offer-data/offer-data';

export const rootReducer = combineReducers({
  [NameSpace.Application]: applicationData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.OfferDetails]: offerData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.NearbyOffers]: nearbyOffersData.reducer
});

