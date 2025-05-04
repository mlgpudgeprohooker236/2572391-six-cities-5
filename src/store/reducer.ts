import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { setCity, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUserData, loadOfferDetails, loadOfferReviews, loadOffersNearby, setOfferDetailsLoadingStatus, addOfferReview, loadFavorites, setFavoritesLoadingStatus, updateOffer } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { OfferDetails } from '../types/offer-details';
import { Review } from '../types/review';

const initialState: {
  city: City;
  offers: Offer[];
  offerDetails: OfferDetails | null;
  offerReviews: Review[];
  offersNearby: Offer[];
  isOfferDetailsLoading: boolean;
  favorites: Offer[];
  isFavoritesLoading: boolean;
  userData: UserData | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
} = {
  city: City.Paris,
  offers: [] as Offer[],
  offerDetails: null,
  offerReviews: [],
  offersNearby: [],
  isOfferDetailsLoading: false,
  favorites: [],
  isFavoritesLoading: false,
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,

};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(updateOffer, (state, action) => {
    state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
  });
  builder.addCase(loadOfferDetails, (state, action) => {
    state.offerDetails = action.payload;
  });
  builder.addCase(loadOfferReviews, (state, action) => {
    state.offerReviews = action.payload;
  });
  builder.addCase(loadOffersNearby, (state, action) => {
    state.offersNearby = action.payload;
  });
  builder.addCase(setOfferDetailsLoadingStatus, (state, action) => {
    state.isOfferDetailsLoading = action.payload;
  });
  builder.addCase(addOfferReview, (state, action) => {
    state.offerReviews.push(action.payload);
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
  builder.addCase(loadFavorites, (state, action) => {
    state.favorites = action.payload;
  });
  builder.addCase(setFavoritesLoadingStatus, (state, action) => {
    state.isFavoritesLoading = action.payload;
  });
});
