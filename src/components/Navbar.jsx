import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <img
              className="w-28 m-5 pl-3 logo "
              src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
              alt="Company Logo"
            />
          </a>
        </div>

        <nav className=" font-extralight opacity-1 main flex items-center justify-end mt-1 flex-wrap ml-3 mr-10 p-0 text-gray-900">
          <button
            className="lg:hidden focus:outline-none bar "
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <RxCross2 size={30} /> : <FaBars size={30} />}
          </button>
          <ul
            className={`${
              isMobileMenuOpen
                ? "block fixed absolute items-center flex flex-col justify-center top-36 right-0 bg-white transition duration-500 ease-in z-50 gap-10 w-full rounded-2xl text-xl"
                : "hidden"
            } lg:flex  justify-between gap-5 items-center lg:order-2 text-[#593808]`}
          >
            <a href="/#">
              <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Home
              </li>{" "}
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
            <a href="/contacts">
              <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Contact
              </li>{" "}
            </a>
            <a href="/clients">
              <li className="underline-hover hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
                Clients
              </li>{" "}
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
