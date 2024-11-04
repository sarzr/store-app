import React from "react";
import { IProductsRes } from "../types/product.type";
import { FaStar } from "react-icons/fa";

export const ProductCard: React.FC<IProductsRes> = ({
  title,
  price,
  images,
  stock,
  rating,
  addToCart,
}) => {
  const colors = {
    black: "#000",
    grey: "a9a9a9",
  };

  return (
    <div className="w-80 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg w-56 h-56"
        src={images?.[0]}
        alt="product image"
      />
      <div className="px-5 pb-5 w-80">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <h4 className="font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
          {`${price} $`}
        </h4>
        <h4 className="font-medium tracking-tight text-gray-900 dark:text-white my-1">
          {`${stock} days delivery`}
        </h4>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar
                      key={index}
                      size={16}
                      color={index < rating! ? colors.black : colors.grey}
                    />
                  ))}
              </div>
            </div>
          </div>
          <span className="bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => addToCart?.()}
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
