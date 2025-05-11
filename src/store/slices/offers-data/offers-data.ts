import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { OffersData } from '../../../types/state';
import { fetchOffersAction } from '../../api-actions/offers-api-actions';
import { setFavoriteAction } from '../../api-actions/offer-api-actions';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isOffersDataLoading = true;
    });
    builder.addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoading = false;
    });
    builder.addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersDataLoading = false;
    });
    builder.addCase(setFavoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (index !== -1) {
        state.offers[index] = updatedOffer;
      }
    });
  }
});
