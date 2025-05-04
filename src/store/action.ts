import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { OfferDetails } from '../types/offer-details';
import { Review } from '../types/review';

export const setCity = createAction<City>('data/setCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const updateOffer = createAction<Offer>('data/updateOffer');

export const loadOfferDetails = createAction<OfferDetails>('data/loadOfferDetails');

export const loadOfferReviews = createAction<Review[]>('data/loadOfferReviews');

export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');

export const setOfferDetailsLoadingStatus = createAction<boolean>('data/setOfferDetailsLoadingStatus');

export const loadFavorites = createAction<Offer[]>('data/loadFavorites');

export const setFavoritesLoadingStatus = createAction<boolean>('data/setFavoritesLoadingStatus');

export const addOfferReview = createAction<Review>('data/addOfferReview');

export const setUserData = createAction<UserData | null>('data/setUserData');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
