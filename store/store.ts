import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [itemsSlice.name]: itemsSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const store = makeStore();
