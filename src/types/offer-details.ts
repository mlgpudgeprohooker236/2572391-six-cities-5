import { Offer } from './offer';
import { User } from './user';

type OfferDetails = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type { OfferDetails };
