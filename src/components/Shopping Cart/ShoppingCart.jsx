import { Trash } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../contexts/CartContext";
const products = [
  {
    id: 1,
    name: "Kaju katli",
    href: "#",
    price: "₹500 / Kg",
    imageSrc:
      "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
  },
  {
    id: 2,
    name: "Kaju katli",
    href: "#",
    price: "₹500 / Kg",
    imageSrc:
      "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
  },
];

function ShoppingCart() {
  const [price, setPrice] = useState(500);
  const [quantity, setQuantity] = useState(1);

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const add = () => {
    setPrice(price + 500);
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity > 1 && price > 500) {
      setPrice(price - 500);
      setQuantity(quantity - 1);
    } else {
      toast.warning("select minimum one item");
    }
  };

  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <div className="" key={product.id}>
                    <li key={product.id} className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>
                      <h1 className="ml-10">{product.name}</h1>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-gray-900">
                                &nbsp;&nbsp;{product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="p-5 pb-3 flex flex-row gap-3 items-center quantity">
                        <h4 className="text-black text-sm"> Quantity : </h4>

                        <button
                          onClick={() => add()}
                          className="mb-2 mr-2 rounded-full items-center bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                        >
                          <MdAdd size={20} />
                        </button>
                        <h6 className="text-xl">{quantity}</h6>
                        <button
                          onClick={() => remove()}
                          className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                        >
                          <FiMinus size={20} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center space-x-2 Subtotal">
                        <span className="flex">
                          <p className="text-xl text-thin text-gray-900 items-baseline">
                            {`Subtotal: : ₹ ${price}`}
                          </p>
                        </span>
                      </div>
                      <div className="ml-6 flex text-sm removeBtn">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                        >
                          <Trash
                            size={12}
                            color="red"
                            className="text-red-500"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">Price (1 item)</dt>
                    <dd className="text-sm font-medium text-gray-900">₹ 500</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">-</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ 500
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  Total Amount : ₹ 500
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
