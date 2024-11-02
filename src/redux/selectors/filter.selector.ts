import { RootState } from "../store";
import { IProducts } from "../../types/product.type";

export type IFilterSelector = (
  _: RootState
) => {
  categoryFilter: IProducts[];
};

export const filterSelector = (state: RootState) => {
  const category = state.products.list;
  console.log(category);

  return {
    categoryFilter: Array.from(new Set(category.map((el) => el.category))).map(
      (unique) => {
        console.log(unique);
        return { unique, checked: false };
      }
    ),
  };
};
