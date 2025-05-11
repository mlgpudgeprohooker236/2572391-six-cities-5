import { City } from './city';
import { Location } from './location';
import { User } from './user';

export enum OfferType {
  Apartment = 'apartment',
  Hotel = 'hotel',
  House = 'house',
  Room = 'room'
}

export type OfferPreview = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}


type Offer = OfferPreview & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type { Offer };
