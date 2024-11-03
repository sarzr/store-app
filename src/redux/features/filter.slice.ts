import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types/product.type";

interface IFilters {
  brand?: string;
  category?: string;
  price?: string;
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

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IProducts[]>) => {
      state.list = [...state.list, ...action.payload];
    },
    check: (state, action: PayloadAction<number>) => {
      state.list = state.list.map((el) => {
        if (el.id === action.payload) {
          return { ...el, checked: true };
        }
        return el;
      });
    },
    uncheck: (state, action: PayloadAction<number>) => {
      state.list = state.list.map((el) => {
        if (el.id === action.payload) {
          return { ...el, checked: false };
        }
        return el;
      });
    },
    setPrice: (state, action) => {
      const [min, max] = action.payload;
      state.filteredItems = state.list.filter(
        (item) => item.price! >= min && item.price! <= max
      );
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
