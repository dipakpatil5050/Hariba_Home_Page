import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";

export default function HoverCart() {
  const { cartItems, deleteFromCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });
  return (
    <div
      className=" fixed inset-0 flex h-[10vh] mt-14 items-start max-[390px]:mt-28 mr-0 justify-end mb-6 z-50 rounded-lg  p-4 pt-4 sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6 bg-white p-5 rounded-lg min-[390px]:mt-7  ">
        <ul className="space-y-4 overflow-auto max-h-[200px] overflow-x-hidden">
          {cartItems.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                src={product.src}
                alt={product.title}
                className="h-16 w-16 rounded object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {product.title.length
                    ? product.title.substring(0, 17)
                    : product.title}
                </h3>
                <div className="mt-0.5 space-y-px text-[10px] flex items-center justify-between text-gray-600">
                  <div>
                    <div className="flex font-light text-[11px] mt-3 items-center justify-center ">
                      {product.quantity} x ₹{product.price}
                      <div className="ml-6 text-sm removeBtn relative">
                        <button
                          type="button"
                          className="flex items-center justify-center space-x-1 px-2 py-1 pl-0"
                        >
                          <IoCloseOutline
                            className="hover:font-thin ml-36"
                            size={16}
                            onClick={() => deleteFromCart(product)}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="total-amount">
          <p>Total Amount : ₹ {() => getCartTotal()}</p>
        </div> */}
        <hr />
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row gap-40 justify-between items-center">
              <h1 className="text-xl ">Total : </h1>
              <h1 className="text-xl">₹ {getCartTotal()}</h1>
            </div>
            {/* <button
              className="px-4 py-2 text-black text-xs font-bold uppercase rounded  focus:outline-none"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button> */}
            <div className="space-y-4 text-center flex items-center justify-center gap-10">
              <Link to="/cart">
                <button
                  type="button"
                  className="border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-4"
                >
                  View Cart ({cartItems.length})
                </button>
              </Link>
              <Link to="/cart">
                <button
                  type="button"
                  className="border border-black px-3 py-2 text-sm font-semibold text-white bg-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => {
                    clearCart();
                    notifyCartCleared();
                  }}
                >
                  Clear Cart
                </button>
              </Link>
            </div>
            <Link to="/home">
              <p className="inline-block text-lg text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4 mt-3">
                Continue shopping &rarr;
              </p>
            </Link>
          </div>
        ) : (
          <h1
            className="text-lg font-bold w-96 flex item-center
           justify-center text-black"
          >
            Your cart is empty
          </h1>
        )}
      </div>
    </div>
  );
}
