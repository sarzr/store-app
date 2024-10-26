import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../types/product.type";

export interface IProductList {
  list: IProducts[];
}
export const initialState: IProductList = {
  list: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const todoActions = productSlice.actions;
export const todoReducer = productSlice.reducer;
