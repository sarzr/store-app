import React from "react";
import { ProductList } from "./product-list";
import { Filter } from "../components/filters";

export const Home: React.FC = () => {
  return (
    <div className="w-full xl:w-[1440px] mx-auto mt-36 flex justify-between">
        <aside>
          <Filter />
        </aside>
      <ProductList />
    </div>
  );
};
