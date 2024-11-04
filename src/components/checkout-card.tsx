import React from "react";
import { IProducts } from "../types/product.type";
import { GoTrash } from "react-icons/go";
import { useAppDispatch } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";

const CheckoutCard: React.FC<IProducts> = ({
  id,
  images,
  title,
  quantity,
  price,
}) => {
  const dispatch = useAppDispatch();
  const remove = (id: number) => {
    dispatch(productActions.remove({ id }));
  };
  return (
    <div className="flex gap-4 border-b border-gray-200 py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={images?.[0]}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-7 w-60">
        <div>
          <h3 className="font-semibold text-gray-700">{title}</h3>
          <p className="mt-1.5 text-xs font-medium text-gray-500">
            Qty {quantity}
          </p>
        </div>

        <div className="flex items-end gap-4 justify-between">
          <h3 className="text-sm font-medium text-gray-700 mt-auto">{price}</h3>

          <button onClick={() => remove(id!)}>
            <GoTrash className="w-4 h-4 cursor-pointer fill-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
