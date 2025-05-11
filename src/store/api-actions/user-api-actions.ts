import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import axios, { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../action';
import { fetchOffersAction } from './offers-api-actions';
import { fetchFavoritesAction } from './offer-api-actions';
import { AuthCheckResult, AuthInfo, UserCredentials } from '../../types/user';
import { StatusCodes } from 'http-status-codes';

export const checkAuthAction = createAsyncThunk<AuthCheckResult, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(fetchFavoritesAction());
      return { isAuthorized: true, authInfo: data };
    } catch (error) {
      if (axios.isAxiosError(error) && error?.response?.status === StatusCodes.UNAUTHORIZED) {
        return { isAuthorized: false, authInfo: null };
      }
      throw error;
    }
  },
);

export const loginAction = createAsyncThunk<AuthInfo, UserCredentials, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthInfo>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
  },
);
