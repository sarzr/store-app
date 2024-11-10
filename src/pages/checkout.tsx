import React from "react";
import UserForm from "../components/form";
import { useAppSelector } from "../redux/hook";
import CheckoutCard from "../components/checkout-card";
import { Link } from "react-router-dom";

const Checkout: React.FC = () => {
  const productItems = useAppSelector((state) => state.products.cart);

  const productPrice = useAppSelector((state) => state.products.totalPrice);

  return (
    <div className="mt-32 mx-5 max-w-[1200px] xl:mx-auto flex flex-col md:flex-row justify-center">
      <UserForm />

      <div className="flex flex-col w-full md:w-1/3">
        {productItems.length === 0 ? (
          <p className="text-gray-600 font-medium">Your cart is empty</p>
        ) : (
          productItems.map((el) => (
            <CheckoutCard
              key={el.id}
              quantity={el.quantity}
              id={el.id}
              price={el.price}
              images={el.images}
              title={el.title}
            />
          ))
        )}
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-800 mt-6">
          Total
          <span className="ml-auto">{`$${parseFloat(
            productPrice.toFixed(2)
          )}`}</span>
        </div>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
          >
            Pay now
          </button>
          <Link to={"/"}>
            <button
              type="button"
              className="text-sm mt-4 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
