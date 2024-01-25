import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
// import ShoppingCart from "../Shopping Cart/ShoppingCart";
// import { HoverCart } from "../Shopping Cart/HoverCart";
function Navbar() {
  // const [showModal1, setShowModal1] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header
        // onClick={setShowModal1(true)}
        className="flex fixed top-0 z-40 bg-white w-screen items-center justify-between h-28"
      >
        <div className="logo flex items-center">
          <a href="#">
            <img
              className="w-24 md:w-28 lg:w-28 xl:w-28 m-5 pl-3 z-50"
              src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
              alt="Company Logo"
            />
          </a>
        </div>

        <nav className="font-extralight opacity-1 main flex items-center justify-end mt-1 flex-wrap ml-3 mr-10 p-0 text-gray-900">
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
            <a href="/products">
              <li className=" underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Products
              </li>{" "}
            </a>
            <a href="/contact">
              <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Contact
              </li>{" "}
            </a>
            <a href="/clients">
              <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Clients
              </li>
            </a>
          </ul>
        </nav>
        {/* onClick={setShowModal1(true)} */}
        <button>
          <div className="cart shopping-cart-icon pr-20">
            <BsCart3 size={25} />
            <i class="shopping"></i>
          </div>
        </button>
      </header>
      {/* {showModal1 && <HoverCart onClose={() => setShowModal1(false)} />} */}
    </>
  );
}

export default Navbar;
