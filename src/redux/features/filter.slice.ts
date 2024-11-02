import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types/product.type";

export interface IFilterList {
  list: IProducts[];
}
export const initialState: IFilterList = {
  list: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<IProducts[]>) => {
      state.list = action.payload.map((el) => ({ ...el, checked: false }));
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
