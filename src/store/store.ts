import { configureStore } from '@reduxjs/toolkit';
import { appReducers } from "../slices";

export const store = configureStore({
  reducer: appReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch