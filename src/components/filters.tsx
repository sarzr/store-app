import React from "react";
import { InputFilter } from "./input-filter";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { filterSelector } from "../redux/selectors/filter.selector";
import { priceRanges } from "../utils/price-data";
import { filterActions } from "../redux/features/filter.slice";

export const Filter: React.FC = () => {
  const [isOpenBrand, setIsOpenBrand] = React.useState<boolean>(false);
  const [isOpenCategory, setIsOpenCategory] = React.useState<boolean>(false);
  const [isOpenPrice, setIsOpenPrice] = React.useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<
    string | null
  >(null);

  const dispatch = useAppDispatch();

  const filter = useAppSelector((state) => state.filter);

  console.log(filter.filters, "filters");
  console.log(filter.list, "list");

  const toggleBrand = () => {
    setIsOpenBrand(() => !isOpenBrand);
  };

  const toggleCategory = () => {
    setIsOpenCategory(() => !isOpenCategory);
  };

  const togglePrice = () => {
    setIsOpenPrice(() => !isOpenPrice);
  };

  const priceChangeHandler = (price: string, min: number, max: number) => {
    if (selectedPriceRange === price) {
      setSelectedPriceRange(null);
      dispatch(filterActions.setPrice([0, Infinity]));
    } else {
      setSelectedPriceRange(price);
      dispatch(filterActions.setPrice([min, max]));
    }
  };

  const getProductFilters = useAppSelector((state) => state.products.list);
  const { categoryFilter } = useAppSelector(filterSelector);

  return (
    <>
      <div className="bg-white w-80 h-72 overflow-y-auto scrollbar-hide px-6 py-3 rounded">
        <div>
          <div className="flex justify-between mb-2">
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
                <InputFilter
                  key={el.id}
                  checked={el.checked}
                  brand={el.brand}
                  id={el.id}
                />
              )
          )}
          <div className="flex justify-between mt-4 mb-2">
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
                <InputFilter
                  key={index}
                  category={el.unique}
                  checked={el.checked}
                />
              )
          )}

          <div className="flex justify-between mt-4 mb-2">
            <p className="text-lg font-medium">Price</p>
            <button
              onClick={() => {
                console.log(isOpenPrice);
                togglePrice();
                console.log(isOpenPrice);
              }}
            >
              {isOpenPrice ? (
                <FiMinus className="w-4 h-4 text-gray-600" />
              ) : (
                <IoMdAdd className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>

          {priceRanges.map(
            (el, index) =>
              isOpenPrice && (
                <InputFilter
                  key={index}
                  price={el.label}
                  checked={el.label === selectedPriceRange}
                  onChange={() => priceChangeHandler(el.label, el.min, el.max)}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};
