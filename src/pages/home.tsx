import React from "react";
import { ProductList } from "./product-list";
import { Filter } from "../components/filters";

export const Home: React.FC = () => {
  return (
    <div className="w-full xl:w-[1400px] mx-auto mt-32 flex gap-6 z-10">
      <aside>
        <Filter />
      </aside>
      <ProductList />
    </div>
  );
};
