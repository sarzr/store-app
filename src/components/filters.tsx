import React from "react";
import { InputFilter } from "./input-filter";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useAppDispatch } from "../redux/hook";
import { priceRanges } from "../utils/price-data";
import { filterActions } from "../redux/features/filter.slice";
import { FaStar } from "react-icons/fa";
import useGetProducts from "../hooks/useGetProducts";

export const Filter: React.FC = () => {
  const [isOpenBrand, setIsOpenBrand] = React.useState<boolean>(false);
  const [isOpenCategory, setIsOpenCategory] = React.useState<boolean>(false);
  const [isOpenPrice, setIsOpenPrice] = React.useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<
    string | null
  >(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = React.useState<string[]>([]);
  const [selectedRating, setSelectedRating] = React.useState<number>(0);

  const dispatch = useAppDispatch();

  const getFiltersAll = useGetProducts();

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

  const brandChangeHandler = (brand: string) => {
    setSelectedBrand((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const categoryChangeHandler = (category: string) => {
    setSelectedCategory((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const ratingChangeHandler = (rating: number) => {
    setSelectedRating(rating);
    dispatch(filterActions.setRating(rating));
  };

  const categories = [...new Set(getFiltersAll.data?.map((el) => el.category))];

  const brands = [...new Set(getFiltersAll.data?.map((el) => el.brand))];

  React.useEffect(() => {
    dispatch(filterActions.getFilters(getFiltersAll.data || []));
  }, [getFiltersAll.data]);

  React.useEffect(() => {
    dispatch(filterActions.setBrand(selectedBrand));
  }, [selectedBrand, dispatch]);

  React.useEffect(() => {
    dispatch(filterActions.setCategory(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <>
      <div className="bg-white w-80 md:h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide px-6 py-3 rounded-lg mx-4 sticky top-24">
        <div className="flex justify-between  mb-2">
          <p className="text-lg font-medium">Brands</p>
          <button onClick={toggleBrand}>
            {isOpenBrand ? (
              <FiMinus className="w-4 h-4 text-gray-600" />
            ) : (
              <IoMdAdd className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {brands.map(
          (el) =>
            isOpenBrand &&
            el && (
              <InputFilter
                key={el}
                checked={selectedBrand.includes(el)}
                brand={el}
                onChange={() => brandChangeHandler(el)}
              />
            )
        )}
        <div className="flex justify-between mt-7 mb-2">
          <p className="text-lg font-medium">Category</p>
          <button onClick={toggleCategory}>
            {isOpenCategory ? (
              <FiMinus className="w-4 h-4 text-gray-600" />
            ) : (
              <IoMdAdd className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {categories.map(
          (el, index) =>
            isOpenCategory && (
              <InputFilter
                key={index}
                category={el}
                checked={selectedCategory.includes(el!)}
                onChange={() => categoryChangeHandler(el!)}
              />
            )
        )}

        <div className="flex justify-between mt-7 mb-2">
          <p className="text-lg font-medium">Price</p>
          <button
            onClick={() => {
              togglePrice();
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
                priceLabel={el.label}
                checked={el.label === selectedPriceRange}
                onChange={() => priceChangeHandler(el.label, el.min, el.max)}
              />
            )
        )}

        <div className="flex gap-4 mt-7 mb-2">
          <p className="text-lg font-medium">Rating</p>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((el) => (
              <button
                key={el}
                className={`mx-[2px] ${
                  el > selectedRating ? "text-gray-400" : "text-black"
                }`}
                onClick={() => {
                  ratingChangeHandler(el);
                }}
              >
                <FaStar />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
