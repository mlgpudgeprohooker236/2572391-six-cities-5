import { createSlice } from '@reduxjs/toolkit';
import { FavoritesData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchFavoritesAction, setFavoriteAction } from '../../api-actions/offer-api-actions';
import { fetchOfferDetailsAction } from '../../api-actions/offer-api-actions';
import pushOrUpdate from '../../../utils/array';
import { logoutAction } from '../../api-actions/user-api-actions';

const initialState: FavoritesData = {
  favorites: [],
  isFavoritesLoading: false
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOfferDetailsAction.rejected, (state) => {
      state.favorites = [];
      state.isFavoritesLoading = false;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.favorites = [];
    });
    builder.addCase(fetchFavoritesAction.pending, (state) => {
      state.isFavoritesLoading = true;
    });
    builder.addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoading = false;
    });
    builder.addCase(fetchFavoritesAction.rejected, (state) => {
      state.isFavoritesLoading = false;
    });
    builder.addCase(setFavoriteAction.fulfilled, (state, action) => {
      if(action.payload.isFavorite === true) {
        state.favorites = pushOrUpdate([...state.favorites], action.payload, (a, b) => a.id === b.id);
      } else {
        const index = state.favorites.findIndex((offer) => offer.id === action.payload.id);
        if(index !== -1) {
          const newFavorites = [...state.favorites];
          newFavorites.splice(index, 1);
          state.favorites = newFavorites;
        }
      }
    });
  }
});
