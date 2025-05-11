import { OfferPreview } from '../types/offer';
import { SortingOption } from '../types/sorting-option';

export default function sortOffersByOption(offers: OfferPreview[], option: SortingOption): OfferPreview[] {
  switch(option) {
    case SortingOption.Popular:
      return [...offers];
    case SortingOption.PriceHighToLow:
      return offers.sort((a,b) => b.price - a.price);
    case SortingOption.PriceLowToHigh:
      return offers.sort((a,b) => a.price - b.price);
    case SortingOption.TopRatedFirst:
      return offers.sort((a,b) => b.rating - a.rating);
  }
}

export function getOfferStarRating(rating: number): number {
  const PER_RATING_UNIT_PERCENTAGE = 20;
  return Math.round(rating) * PER_RATING_UNIT_PERCENTAGE;
}
