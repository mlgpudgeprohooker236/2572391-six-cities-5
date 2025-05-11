import { Token } from '../services/token';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserCredentials = {
  login: string;
  password: string;
}

export type AuthInfo = User & {
  email: string;
  token: Token;
}

export type AuthCheckResult = {
  isAuthorized: true;
  authInfo: AuthInfo;
} | {
  isAuthorized: false;
  authInfo: null;
}
