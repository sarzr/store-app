import React from "react";
import { ProductList } from "./product-list";
import { Filter } from "../components/filters";

export const Home: React.FC = () => {
  return (
    <div className="w-full xl:w-[1400px] mx-auto mt-28 md:mt-32 flex-col md:flex-row items-center md:items-start flex gap-6 z-10">
      <aside className="md:sticky md:top-24">
        <Filter />
      </aside>
      <ProductList />
    </div>
  );
};
