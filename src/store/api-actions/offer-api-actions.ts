import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer, OfferPreview } from '../../types/offer';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import { FavoritesActionType } from '../../types/favorites-action-type';
import { toast } from 'react-toastify';

export const fetchOfferDetailsAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferPreview[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<Review, { offerId: string; rating: number; comment: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (review, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Review>(`${APIRoute.Comments}/${review.offerId}`, { rating: review.rating, comment: review.comment });
      dispatch(fetchReviewsAction(review.offerId));
      return data;
    } catch(error) {
      toast('Failed to send review!');
      throw error;
    }

  },
);

export const fetchFavoritesAction = createAsyncThunk<OfferPreview[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Favorites);
    return data;
  },
);

export const setFavoriteAction = createAsyncThunk<Offer, { offerId: string; actionType: FavoritesActionType }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavorite',
  async ({ offerId, actionType }, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${actionType}`);
    dispatch(fetchFavoritesAction());
    return data;
  },
);
