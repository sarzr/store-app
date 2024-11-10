import React from "react";
import { useAppSelector } from "../redux/hook";
import CheckoutCard from "./checkout-card";
import { IForm } from "./form";

export interface IDataForm {
  data: IForm;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<IDataForm> = ({ data, close }) => {
  const productItems = useAppSelector((state) => state.products.cart);
  const productPrice = useAppSelector((state) => state.products.totalPrice);

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            onClick={() => close(false)}
            className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      First Name :{" "}
                      <span className="text-sm text-gray-600">
                        {data.firstName}
                      </span>
                    </h3>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      Last Name :{" "}
                      <span className="text-sm text-gray-600">
                        {data.lastName}
                      </span>
                    </h3>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      Email :{" "}
                      <span className="text-sm text-gray-600">
                        {data.email}
                      </span>
                    </h3>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      Phone Number :{" "}
                      <span className="text-sm text-gray-600">
                        {data.phoneNumber}
                      </span>
                    </h3>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      Landline Phone :{" "}
                      <span className="text-sm text-gray-600">
                        {data.landlinePhone}
                      </span>
                    </h3>
                    <h3 className="font-semibold text-gray-800 mt-3">
                      Your Address :{" "}
                      <span className="text-sm text-gray-600">
                        {" "}
                        {data.address}
                      </span>
                    </h3>
                  </div>
                  <div className="my-3">
                    {productItems.length === 0 ? (
                      <p className="text-gray-600 font-medium">
                        Your cart is empty
                      </p>
                    ) : (
                      productItems.map((el) => (
                        <CheckoutCard
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
                    <div className="flex flex-wrap text-sm mt-3 font-bold text-gray-800">
                      Total
                      <span className="ml-auto font-medium">{`$${parseFloat(
                        productPrice.toFixed(2)
                      )}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
