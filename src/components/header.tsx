import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className="bg-[#343A40] w-full">
      <div className="w-[1440px] mx-auto p-5 flex justify-between items-center">
        <h3 className="text-white text-lg">Shopping Cart</h3>
        <input
          type="text"
          className="rounded w-96 h-9 outline-none px-3"
          placeholder="Search a product..."
        />
        <div className="bg-green-600 px-4 py-2 rounded-md text-white flex gap-2">
          <FaShoppingCart className="w-5 h-5" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
