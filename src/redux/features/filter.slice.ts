import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types/product.type";

interface IFilters {
  brand?: string[];
  category?: string[];
  price?: number[];
  rating?: number;
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
    const { brand, category, price, rating } = state.filters;
    const searchValue = state.searchValue.toLowerCase();
    const existBrand =
      brand && brand.length > 0 ? brand.includes(el.brand!) : el;
    const existCategory =
      category && category.length > 0 ? category.includes(el.category!) : el;
    const existPrice =
      price && el.price !== undefined
        ? el.price >= price[0] && el.price <= price[1]
        : el;
    const existRating = rating ? Math.floor(el.rating!) === rating : el;
    const existSearch = searchValue
      ? el.title?.toLowerCase().includes(searchValue.toLowerCase())
      : el;

    return (
      existBrand && existCategory && existPrice && existRating && existSearch
    );
  });
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IProducts[]>) => {
      state.list = action.payload;
    },
    setPrice: (state, action: PayloadAction<[number, number]>) => {
      state.filters.price = action.payload;
      state.filteredItems = allFilters(state);
    },
    setBrand: (state, action: PayloadAction<string[]>) => {
      state.filters.brand = action.payload;
      state.filteredItems = allFilters(state);
    },
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
      state.filteredItems = allFilters(state);
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.filters.rating = action.payload;
      state.filteredItems = allFilters(state);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filteredItems = allFilters(state);
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
