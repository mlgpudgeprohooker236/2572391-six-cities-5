import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { addOfferReview, loadFavorites, loadOfferDetails, loadOfferReviews, loadOffers, loadOffersNearby, redirectToRoute, requireAuthorization, setFavoritesLoadingStatus, setOfferDetailsLoadingStatus, setOffersDataLoadingStatus, setUserData, updateOffer } from './action';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { OfferDetails } from '../types/offer-details';
import { Review } from '../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFavoritesLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Favorites);
    dispatch(setFavoritesLoadingStatus(false));
    dispatch(loadFavorites(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(fetchFavoritesAction());
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
    dispatch(loadFavorites([]));
    dispatch(fetchOffersAction());
  },
);

export const fetchOfferDetails = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferDetailsLoadingStatus(true));
      const [offerDetails, reviews, offersNearby ] = await Promise.all([
        api.get<OfferDetails>(`${APIRoute.Offers}/${offerId}`),
        api.get<Review[]>(`${APIRoute.Comments}/${offerId}`),
        api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`)
      ]);

      dispatch(loadOfferDetails(offerDetails.data));
      dispatch(loadOfferReviews(reviews.data));
      dispatch(loadOffersNearby(offersNearby.data));
    } finally {
      dispatch(setOfferDetailsLoadingStatus(false));
    }
  },
);

export const sendReviewAction = createAsyncThunk<void, {offerId: string; rating: number; comment: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (review, { dispatch, extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${review.offerId}`, {rating: review.rating, comment: review.comment });
    dispatch(addOfferReview(data));
  },
);

export const setFavoritesAction = createAsyncThunk<void, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavorites',
  async ({offerId, status}, { dispatch, extra: api }) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${status}`);
    dispatch(fetchFavoritesAction());
    dispatch(updateOffer(data));
  },
);
