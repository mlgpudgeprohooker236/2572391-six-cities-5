import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offer';
import { State } from '../../../types/state';

export const getOfferDetails = (state: State): Offer | null => state[NameSpace.OfferDetails].offerDetails;

export const getIsOfferDetailsLoading = (state: State): boolean => state[NameSpace.OfferDetails].isOfferDetailsLoading;

export const getHasFailedToLoadOfferDetails = (state: State): boolean => state[NameSpace.OfferDetails].hasError;
