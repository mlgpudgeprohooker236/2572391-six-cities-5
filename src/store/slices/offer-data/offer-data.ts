import { createSlice } from '@reduxjs/toolkit';
import { OfferDetailsData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchOfferDetailsAction, setFavoriteAction } from '../../api-actions/offer-api-actions';
import { logoutAction } from '../../api-actions/user-api-actions';

const initialState: OfferDetailsData = {
  offerDetails: null,
  isOfferDetailsLoading: false,
  hasError: false
};

export const offerData = createSlice({
  name: NameSpace.OfferDetails,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOfferDetailsAction.pending, (state) => {
      state.isOfferDetailsLoading = true;
    });
    builder.addCase(fetchOfferDetailsAction.fulfilled, (state, action) => {
      state.offerDetails = action.payload;
      state.hasError = false;
      state.isOfferDetailsLoading = false;
    });
    builder.addCase(fetchOfferDetailsAction.rejected, (state) => {
      state.isOfferDetailsLoading = false;
      state.hasError = true;
    });
    builder.addCase(setFavoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      if(state.offerDetails?.id === updatedOffer.id) {
        state.offerDetails = updatedOffer;
      }
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      if(state.offerDetails) {
        state.offerDetails.isFavorite = false;
      }
    });
  }
});
