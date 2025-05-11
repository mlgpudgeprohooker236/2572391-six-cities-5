import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchOfferDetailsAction, fetchReviewsAction, sendReviewAction } from '../../api-actions/offer-api-actions';
import pushOrUpdate from '../../../utils/array';

const initialState: ReviewsData = {
  reviews: [],
  isReviewsLoading: false
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOfferDetailsAction.rejected, (state) => {
      state.reviews = [];
      state.isReviewsLoading = false;
    });
    builder.addCase(fetchReviewsAction.pending, (state) => {
      state.isReviewsLoading = true;
    });
    builder.addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoading = false;
    });
    builder.addCase(fetchReviewsAction.rejected, (state) => {
      state.isReviewsLoading = false;
    });
    builder.addCase(sendReviewAction.fulfilled, (state, action) => {
      state.reviews = pushOrUpdate([...state.reviews], action.payload, (a,b) => a.id === b.id);
    });
  }
});
