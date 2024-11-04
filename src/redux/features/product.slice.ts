import { createSlice } from "@reduxjs/toolkit";
import { IProductsRes } from "../../types/product.type";

export interface IProductList {
  totalQuantity: number;
  cart: IProductsRes[];
  totalPrice: number;
}
export const initialState: IProductList = {
  totalQuantity: 0,
  cart: [],
  totalPrice: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalQuantity++;

      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem) {
        productItem.quantity!++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.cart.reduce((prev, current) => {
        return prev + current.quantity! * current.price!;
      }, 0);
    },
    decrease: (state, action) => {
      state.totalQuantity--;

      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem && productItem.quantity! > 1) {
        productItem.quantity!--;
      } else {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      }
      state.totalPrice = state.cart.reduce((prev, current) => {
        return prev + current.quantity! * current.price!;
      }, 0);
    },
    remove: (state, action) => {
      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem) {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);

        state.totalQuantity -= productItem?.quantity!;
      }
      state.totalPrice = state.cart.reduce((prev, current) => {
        return prev + current.quantity! * current.price!;
      }, 0);
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
