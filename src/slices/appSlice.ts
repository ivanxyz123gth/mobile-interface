import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  appNumber: number;
  appOpen: boolean;
}

const initialState: AppState = {
  appNumber: 1,
  appOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    up: (state) => {
      if (state.appNumber > 1){
        state.appNumber -= 1;
      } else {
        state.appNumber = 4;
      }
    },
    down: (state) => {
      if (state.appNumber < 4){
        state.appNumber += 1;
      } else {
        state.appNumber = 1;
      }
    },
    enter: (state) => {
      state.appOpen = true;
    },
    back: (state) => {
      state.appOpen = false;
    }
  },
})

export const { up, down, enter, back } = appSlice.actions;

export const appReducers = appSlice.reducer;