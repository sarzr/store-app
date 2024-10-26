import React from "react";
import { ProductList } from "./product-list";

export const Home: React.FC = () => {
  return (
    <div className="w-[1440px] mx-auto">
      <ProductList />
    </div>
  );
};
