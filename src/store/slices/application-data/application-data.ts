import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../../types/city';
import { ApplicationData } from '../../../types/state';
import { Cities, NameSpace } from '../../../const';

const initialState: ApplicationData = {
  activeCity: Cities.Paris
};

export const applicationData = createSlice({
  name: NameSpace.Application,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    }
  }
});

export const {setActiveCity} = applicationData.actions;
