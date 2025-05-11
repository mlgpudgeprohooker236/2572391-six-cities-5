import { NameSpace } from '../../../const';
import { OfferPreview } from '../../../types/offer';
import { State } from '../../../types/state';

export const getFavorites = (state: State): OfferPreview[] => state[NameSpace.Favorites].favorites;

export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.Favorites].isFavoritesLoading;
