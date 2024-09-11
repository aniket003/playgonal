import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      movies:movieReducer
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const store = makeStore();