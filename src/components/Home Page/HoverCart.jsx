import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Cart from "./Cart";

export default function HoverCart({ showCartModal }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <div
      className=" fixed inset-0 flex h-[10vh] w-[vw]  items-start min-[390px]:mt-14 mr-0 justify-end mb-6 z-50 rounded-lg  p-4 pt-4 sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6 bg-white p-5 rounded-lg min-[390px]:mt-7 ">
        <ul className="space-y-4">
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
                <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dd className="flex font-light text-[11px] ">
                      {product.quantity} x {product.price}
                      <div className="ml-6 flex text-sm removeBtn">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                        >
                          <Trash
                            size={12}
                            color="red"
                            className="text-red-500 hover:font-extrabold"
                            onClick={() => removeFromCart(product)}
                          />
                        </button>
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="total-amount">
          <p>Total Amount : ₹ {() => getCartTotal()}</p>
        </div> */}

        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg ">Subtotal : ₹ {getCartTotal()}</h1>
            {/* <button
              className="px-4 py-2 text-black text-xs font-bold uppercase rounded  focus:outline-none"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button> */}
          </div>
        ) : (
          <h1 className="text-lg font-bold text-black">Your cart is empty</h1>
        )}

        <div className="space-y-4 text-center">
          <Link to="/cart">
            <button
              type="button"
              className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View Cart ({cartItems.length})
            </button>
          </Link>
          <button
            type="button"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              clearCart();
              notifyCartCleared();
            }}
          >
            {/* Checkout */}
            Clear Cart
          </button>
          <Link to="/home">
            <p className="inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4">
              Continue shopping &rarr;
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

HoverCart.propTypes = {
  showCartModal: PropTypes.bool,
  toggle: PropTypes.func,
};
