import React from "react";
import { BrandFilter } from "./input-filter";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useAppSelector } from "../redux/hook";
import { filterSelector } from "../redux/selectors/filter.selector";

export const Filter: React.FC = () => {
  const [isOpenBrand, setIsOpenBrand] = React.useState<boolean>(false);
  const [isOpenCategory, setIsOpenCategory] = React.useState<boolean>(false);
  const [isOpenPrice, setIsOpenPrice] = React.useState<boolean>(false);

  const toggleBrand = () => {
    setIsOpenBrand(() => !isOpenBrand);
  };

  const toggleCategory = () => {
    setIsOpenCategory(() => !isOpenCategory);
  };

  const togglePrice = () => {
    setIsOpenPrice(() => !isOpenPrice);
  };

  const getProductFilters = useAppSelector((state) => state.products.list);
  const { categoryFilter } = useAppSelector(filterSelector);
  console.log(categoryFilter);

  return (
    <>
      <div className="bg-white w-80 h-72 overflow-y-auto scrollbar-hide px-6 py-3 rounded">
        <div>
          <div className="flex justify-between my-4">
            <p className="text-lg font-medium">Brands</p>
            <button onClick={toggleBrand}>
              {isOpenBrand ? (
                <FiMinus className="w-4 h-4 text-gray-600" />
              ) : (
                <IoMdAdd className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>

          {getProductFilters.map(
            (el) =>
              isOpenBrand &&
              el.brand && (
                <BrandFilter
                  key={el.id}
                  checked={el.checked}
                  brand={el.brand}
                />
              )
          )}
          <div className="flex justify-between my-4">
            <p className="text-lg font-medium">Category</p>
            <button onClick={toggleCategory}>
              {isOpenCategory ? (
                <FiMinus className="w-4 h-4 text-gray-600" />
              ) : (
                <IoMdAdd className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>

          {categoryFilter.map(
            (el, index) =>
              isOpenCategory && (
                <BrandFilter
                  key={index}
                  category={el.unique}
                  checked={el.checked}
                />
              )
          )}

          <div className="flex justify-between my-4">
            <p className="text-lg font-medium">Price</p>
            <button onClick={togglePrice}>
              {isOpenPrice ? (
                <FiMinus className="w-4 h-4 text-gray-600" />
              ) : (
                <IoMdAdd className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
