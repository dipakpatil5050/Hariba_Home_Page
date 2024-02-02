import React, { useState } from "react";
import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kaju katli",
    href: "#",
    price: "₹ 500",
    quantity: 1,
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
  },
  {
    id: 2,
    name: "Punch Rose WARAKH",
    href: "#",
    price: "₹ 800",
    quantity: 5,
    src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  },
  {
    id: 3,
    name: "ADADIYA PAK",
    href: "#",
    price: "₹ 750",
    quantity: 8,
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  },
];

export default function HoverCart() {
  // const hoverCartModal = useRef();

  // const closecart = (e) => {
  //   if (HoverCart.current === e.target) {
  //     onClose();
  //   }
  // };
  const [totalAmount, setTotalAmount] = useState(2050);

  return (
    <div
      className=" fixed inset-0 flex h-[10vh] w-[vw]  items-start min-[390px]:mt-14 mr-0 justify-end mb-6 z-50 rounded-lg  p-4 pt-4 sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6 bg-white p-5 rounded-lg min-[390px]:mt-7 ">
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                src={product.src}
                alt={product.name}
                className="h-16 w-16 rounded object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
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
                            className="text-red-500 hover:font-extrabold"
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
        <div className="total-amount">
          <p>Total Amount : ₹ {totalAmount}</p>
        </div>

        <div className="space-y-4 text-center">
          <button
            type="button"
            className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            View Cart (3)
          </button>
          <button
            type="button"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Checkout
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
