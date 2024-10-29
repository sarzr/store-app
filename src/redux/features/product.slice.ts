import { createSlice } from "@reduxjs/toolkit";
import { IProductsRes } from "../../types/product.type";

export interface IProductList {
  list: IProductsRes[];
  totalQuantity: number;
}
export const initialState: IProductList = {
  list: [],
  totalQuantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalQuantity++;

      const productItem = state.list.find((el) => el.id === action.payload.id);

      if (productItem) {
        productItem.quantity++;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    decrease: (state, action) => {
      state.totalQuantity--;

      const productItem = state.list.find((el) => el.id === action.payload.id);

      if (productItem && productItem.quantity > 1) {
        productItem.quantity--;
      } else {
        state.list = state.list.filter((el) => el.id !== action.payload.id);
      }
    },
    remove: (state, action) => {
      const productItem = state.list.find((el) => el.id === action.payload.id);

      if (productItem) {
        state.list = state.list.filter((el) => el.id !== action.payload.id);

        state.totalQuantity -= productItem?.quantity;
      }
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
