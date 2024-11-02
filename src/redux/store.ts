import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/product.slice";
import { filterReducer } from "./features/filter.slice";

export const reduxStore = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
