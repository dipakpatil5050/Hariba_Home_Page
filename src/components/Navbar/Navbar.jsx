import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import HoverCart from "../Home Page/HoverCart";
import { CartContext } from "../../contexts/CartContext";
import Cart from "../Home Page/Cart";
import { Link } from "react-router-dom";

function Navbar() {
  // const [showModal1, setShowModal1] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <header
        // onClick={setShowModal1(true)}
        className="flex fixed top-0 z-40 bg-white w-screen items-center justify-between h-28"
      >
        <div className="logo flex items-center justify-between ">
          <Link to="/home">
            <img
              className="w-24 md:w-28 lg:w-28 xl:w-28 m-5 pl-3 z-50 "
              src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
              alt="Company Logo"
            />
          </Link>

          <nav className="font-extralight mobileview  opacity-1 main flex items-center justify-end mt-1 flex-wrap ml-3 mr-10 p-0 text-gray-900">
            <button
              className="lg:hidden focus:outline-none bar "
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? <RxCross2 size={30} /> : <FaBars size={30} />}
            </button>
            <ul
              className={`${
                isMobileMenuOpen
                  ? "block fixed  items-center flex flex-col justify-end top-28 p-10 right-0 bg-gray-100 z-50 w-50% gap-2 rounded-sm opacity-90 shadow-inner text-xl hover:text-bg-[#593808] ml-40 "
                  : "hidden"
              } lg:flex justify-between gap-5 items-center lg:order-2 text-[#593808]`}
            >
              <a href="/home">
                <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                  Home
                </li>
              </a>
              <a href="/about">
                <li className=" underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                  About
                </li>{" "}
              </a>
              <li className="relative group">
                <a
                  href="/products"
                  className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3"
                >
                  Products
                </a>
                {/* <ul className="absolute hidden group-hover:block bg-gray-100 rounded-md p-20 gap-10 shadow-md mt-1">
                <li>
                  <a href="/category1">Category 1</a>
                </li>
                <li>
                  <a href="/category2">Category 2</a>
                </li>
                <li>
                  <a href="/category2">Category 2</a>
                </li>
                <li>
                  <a href="/category2">Category 2</a>
                </li>
              </ul> */}
              </li>
              <a href="/contact">
                <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                  Contact
                </li>{" "}
              </a>
              <a href="/clients">
                <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                  Documentation
                </li>
              </a>
            </ul>
          </nav>
        </div>
        {/* onClick={setShowModal1(true)} */}
        <div className="relative group">
          <a
            href="/cart"
            className="underline-hover hover:text-[#000000] p-3 pt-2 pb-3  cart shopping-cart-icon pr-28"
          >
            <BsCart3 size={25} />

            <span className="absolute flex items-center justify-center top-5 right-12 pr-3">
              {cartItems.length}
            </span>
          </a>
          <div className="absolute hidden group-hover:block z-30 w-24 mr-28 rounded-md p-10 gap-10 shadow-md  mt-1">
            <HoverCart />
            {/* <Cart /> */}
          </div>
        </div>
      </header>
      {/* {showModal1 && <HoverCart onClose={() => setShowModal1(false)} />} */}
    </>
  );
}

export default Navbar;
