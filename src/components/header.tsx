import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../redux/hook";
import { Link } from "react-router-dom";
import InputSearch from "./input-search";

export const Header: React.FC = () => {
  const totalQuantity = useAppSelector((state) => state.products.totalQuantity);

  return (
    <>
      <div className="bg-[#343A40] w-full fixed top-0 z-10">
        <div className="xl:w-[1440px] mx-auto p-5 md:flex justify-between items-center hidden">
          <h3 className="text-white text-lg">Shopping Cart</h3>
          <InputSearch />
          <Link to={"/cart"}>
            <div className="bg-green-600 px-4 py-2 rounded-md text-white flex gap-2 cursor-pointer">
              <FaShoppingCart className="w-5 h-5" />
              <span>{totalQuantity > 0 ? totalQuantity : "0"}</span>
            </div>
          </Link>
        </div>
        <div className="xl:w-[1440px] mx-auto p-5 flex justify-center gap-4 items-center md:hidden">
          <Link to={"/cart"}>
            <div className="bg-green-600 px-4 py-2 rounded-md text-white flex gap-2 cursor-pointer">
              <FaShoppingCart className="w-5 h-5" />
              <span>{totalQuantity > 0 ? totalQuantity : "0"}</span>
            </div>
          </Link>
          <InputSearch />
        </div>
      </div>
    </>
  );
};
