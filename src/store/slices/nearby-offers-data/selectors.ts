import { NameSpace } from '../../../const';
import { OfferPreview } from '../../../types/offer';
import { State } from '../../../types/state';

export const getNearbyOffers = (state: State): OfferPreview[] => state[NameSpace.NearbyOffers].nearbyOffers;

export const getIsNearbyOffersLoading = (state: State): boolean => state[NameSpace.NearbyOffers].isNearbyOffersLoading;
