import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IProducts } from "../types/product.type";
import { CiHeart } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { useAppDispatch } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";

export const Cart: React.FC<IProducts> = ({
  images,
  title,
  category,
  quantity,
  price,
  id,
}) => {
  const dispatch = useAppDispatch();

  const add = (id: number) => {
    dispatch(productActions.addToCart({ id }));
  };

  const decrease = (id: number) => {
    dispatch(productActions.decrease({ id }));
  };

  const remove = (id: number) => {
    dispatch(productActions.remove({ id }));
  };

  return (
    <>
      <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-md flex-wrap sm:flex-nowrap">
        <div className="flex gap-4">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={images?.[0]}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-600 truncate">
                {title}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-gray-500">
                {category}
              </p>
            </div>

            <div>
              <button
                type="button"
                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <button>
                  <FiMinus onClick={() => decrease(id!)} />
                </button>
                <span className="mx-2.5 text-xs">{quantity}</span>
                <button onClick={() => add(id!)}>
                  <IoMdAdd />
                </button>
              </button>
            </div>
          </div>
        </div>

        <div className="ml-auto flex sm:flex-col justify-between">
          <div className="flex items-start gap-4 justify-end">
            <CiHeart className="w-5 h-5 cursor-pointer fill-gray-400" />
            <button onClick={() => remove(id!)}>
              <GoTrash className="w-4 h-5 cursor-pointer fill-gray-400" />
            </button>
          </div>
          <h3 className="text-base font-bold text-gray-700 mt-auto">{price}</h3>
        </div>
      </div>
    </>
  );
};
