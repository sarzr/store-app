import React from "react";
import { IProductsRes } from "../types/product.type";

export const InputFilter: React.FC<IProductsRes> = ({
  brand,
  category,
  rating,
  checked,
  onChange,
  priceLabel,
}) => {
  const value = [priceLabel, brand, category, rating]
    .filter(Boolean)
    .toString();

  return (
    <div className="flex gap-3 px-2">
      <input
        onChange={(e) => onChange!(e.target.checked)}
        type="checkbox"
        checked={checked}
      />
      <p className="my-3">{value}</p>
    </div>
  );
};
