import { NameSpace } from '../../../const';
import { City } from '../../../types/city';
import { State } from '../../../types/state';

export const getActiveCity = (state: State): City => state[NameSpace.Application].activeCity;
