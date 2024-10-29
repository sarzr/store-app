import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/product.slice";

export const reduxStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
