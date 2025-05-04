import { Token } from '../services/token';
import { User } from './user';

export type UserData = User & {
  'email': string;
  'token': Token;
}
