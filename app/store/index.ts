import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

export const store = configureStore({
  reducer: createReducer(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
