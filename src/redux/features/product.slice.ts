import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts, IProductsRes } from "../../types/product.type";

export interface IProductList {
  list: IProductsRes[];
  totalQuantity: number;
  cart: IProductsRes[];
}
export const initialState: IProductList = {
  list: [],
  totalQuantity: 0,
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<IProducts[]>) => {
      state.list = [...state.list, ...action.payload];
    },
    addToCart: (state, action) => {
      state.totalQuantity++;

      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem) {
        productItem.quantity!++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrease: (state, action) => {
      state.totalQuantity--;

      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem && productItem.quantity! > 1) {
        productItem.quantity!--;
      } else {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      }
    },
    remove: (state, action) => {
      const productItem = state.cart.find((el) => el.id === action.payload.id);

      if (productItem) {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);

        state.totalQuantity -= productItem?.quantity!;
      }
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
