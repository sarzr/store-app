import React from "react";
import { ProductList } from "./product-list";

export const Home: React.FC = () => {
  return (
    <div className="lg:w-[1440px] mx-auto mt-36">
      <ProductList />
    </div>
  );
};
