import React from "react";
import { useAppSelector } from "../redux/hook";
import { Cart } from "../components/cart";
import { Link } from "react-router-dom";

export const CartPage: React.FC = () => {
  const productItems = useAppSelector((state) => state.products.list);

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

          <div className="bg-white rounded-md px-4 py-6 h-max shadow-md">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal <span className="ml-auto font-bold">$200.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">$2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">$206.00</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                Buy Now
              </button>
              <Link to={"/"}>
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <img
                src="https://readymadeui.com/images/master.webp"
                alt="card1"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/visa.webp"
                alt="card2"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                alt="card3"
                className="w-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
