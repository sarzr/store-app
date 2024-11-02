import React from "react";
import { IProductsRes } from "../types/product.type";

export const BrandFilter: React.FC<IProductsRes> = ({
  brand,
  category,
  price,
  rating,
  checked,
}) => {
  const value = [brand, category, price, rating].filter(Boolean).toString();

  return (
    <div className="flex gap-3 px-2">
      <input type="checkbox" checked={checked} />
      <p className="my-3">{value}</p>
    </div>
  );
};
