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

function allFilters(state: IFilterList): IProducts[] {
  return state.list.filter((el) => {
    const { brand, category, price } = state.filters;
    const isBrandMatch = brand ? el.brand === brand : el;
    const isCategoryMatch = category ? el.category === category : el;
    const isPriceMatch =
      price && el.price !== undefined
        ? el.price >= price[0] && el.price <= price[1]
        : el;

    return isBrandMatch && isCategoryMatch && isPriceMatch;
  });
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IProducts[]>) => {
      state.list = action.payload;
      state.filteredItems = allFilters(state);
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
    removeSearch: (state) => {
      state.searchValue = "";
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
