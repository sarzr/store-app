import React from "react";
import { useAppSelector } from "../redux/hook";
import { Cart } from "../components/cart";
import { Link } from "react-router-dom";

export const CartPage: React.FC = () => {
  const productItems = useAppSelector((state) => state.products.cart);

  return (
    <>
      <div className="font-sans max-w-[1200px] mx-auto p-4 pt-28 bg-gray-50 mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-2 space-y-8">
            {productItems.length === 0 ? (
              <p className="text-gray-600 font-medium">Your cart is empty</p>
            ) : (
              productItems.map((el) => (
                <Cart
                  key={el.id}
                  quantity={el.quantity}
                  id={el.id}
                  price={el.price}
                  images={el.images}
                  title={el.title}
                  category={el.category}
                />
              ))
            )}
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};
