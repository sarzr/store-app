import React from "react";
import { IProducts } from "../types/product.type";

const CheckoutCard: React.FC<IProducts> = ({
  images,
  title,
  quantity,
  price,
}) => {
  return (
    <div className="flex gap-4 border-b border-gray-200 py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={images?.[0]}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex justify-between gap-7 w-60 items-center">
        <div>
          <h3 className="font-semibold text-gray-700 text-sm md:text-base">{title}</h3>
          <p className="mt-1.5 text-xs font-medium text-gray-500">
            Qty {quantity}
          </p>
        </div>
        <h3 className="text-sm font-medium text-gray-700">{price}</h3>
      </div>
    </div>
  );
};

export default CheckoutCard;
