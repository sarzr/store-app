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
  searchValue: string;
}

export const initialState: IFilterList = {
  list: [],
  filters: {},
  filteredItems: [],
  searchValue: "",
};

export function allFilters(state: IFilterList): IProducts[] {
  return state.list.filter((el) => {
    const { brand, category, price } = state.filters;
    const searchValue = state.searchValue.toLowerCase();
    const existBrand = brand ? el.brand === brand : el;
    const existCategory = category ? el.category === category : el;
    const existPrice =
      price && el.price !== undefined
        ? el.price >= price[0] && el.price <= price[1]
        : el;

    const existSearch = searchValue
      ? el.title?.toLowerCase().includes(searchValue.toLowerCase())
      : el;

    return existBrand && existCategory && existPrice && existSearch;
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
    },
    setBrand: (state, action: PayloadAction<string>) => {
      state.filters.brand = action.payload;
      state.filteredItems = allFilters(state);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
      state.filteredItems = allFilters(state);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filteredItems = allFilters(state).filter((el) =>
        el.title?.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
