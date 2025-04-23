import { City } from './city';
import { Location } from './location';

export enum OfferType {
  Apartment = 'apartment',
  Hotel = 'hotel',
  House = 'house',
  Room = 'room'
}

export type Offer = {
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
