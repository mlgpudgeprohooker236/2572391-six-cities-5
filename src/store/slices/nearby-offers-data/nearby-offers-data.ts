import { createSlice } from '@reduxjs/toolkit';
import { NearbyOffersData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchNearbyOffersAction, fetchOfferDetailsAction, setFavoriteAction } from '../../api-actions/offer-api-actions';

const initialState: NearbyOffersData = {
  nearbyOffers: [],
  isNearbyOffersLoading: false
};

export const nearbyOffersData = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOfferDetailsAction.rejected, (state) => {
      state.nearbyOffers = [];
      state.isNearbyOffersLoading = false;
    });
    builder.addCase(fetchNearbyOffersAction.pending, (state) => {
      state.isNearbyOffersLoading = true;
    });
    builder.addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoading = false;
    });
    builder.addCase(fetchNearbyOffersAction.rejected, (state) => {
      state.isNearbyOffersLoading = false;
    });
    builder.addCase(setFavoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const index = state.nearbyOffers.findIndex((offer) => offer.id === updatedOffer.id);
      if(index !== -1) {
        state.nearbyOffers[index] = updatedOffer;
      }
    });
  }
});
