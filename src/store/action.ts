import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const setCity = createAction('setCity', ((city: City) => ({payload: city})));

const setOffers = createAction('setOffers', ((offers: Offer[]) => ({payload: offers})));

export {setCity, setOffers};
