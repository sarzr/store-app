

// const allFilters1 = (state: IFilterList) => {
//   state.filteredItems = state.list.filter((el) => {
//     const existBrand = state.filters.brand
//       ? el.brand === state.filters.brand
//       : true;
//     const existCategory = state.filters.category
//       ? el.category === state.filters.category
//       : true;
//     const existPrice = state.filters.price
//       ? el.price! >= state.filters.price[0] &&
//         el.price! <= state.filters.price[1]
//       : true;
//     return existBrand && existCategory && existPrice;
//   });
// };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types/product.type";

interface IFilters {
  brand?: string;
  category?: string;
  price?: number[];
}

export interface IFilterList {
  list: IProducts[];
  filters: IFilters;
  filteredItems: IProducts[];
}

export const initialState: IFilterList = {
  list: [],
  filters: {},
  filteredItems: [],
};

function allFilters(state: IFilterList): IProducts[] {
  return state.list.filter((item) => {
    const { brand, category, price } = state.filters;
    const isBrandMatch = brand ? item.brand === brand : item;
    const isCategoryMatch = category ? item.category === category : item;
    const isPriceMatch =
      price && item.price !== undefined
        ? item.price >= price[0] && item.price <= price[1]
        : item;

    return isBrandMatch && isCategoryMatch && isPriceMatch;
  });
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IProducts[]>) => {
      state.list = action.payload;
      state.filteredItems = action.payload;
    },
    setPrice: (state, action: PayloadAction<[number, number]>) => {
      state.filters.price = action.payload;
      state.filteredItems = allFilters(state);
      // allFilters1(state);
    },
    setBrand: (state, action: PayloadAction<string>) => {
      state.filters.brand = action.payload;
      state.filteredItems = allFilters(state);
      // allFilters1(state);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
      state.filteredItems = allFilters(state);
      // allFilters1(state);
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;