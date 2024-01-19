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
      <nav className=" font-extralight opacity-1 main flex items-center justify-between mt-1 flex-wrap ml-3 mr-10 p-0 text-gray-900">
        <a href="#">
          <img
            className="w-20 m-5 pl-3 logo"
            src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
            alt="Company Logo"
          />
        </a>
        <button
          className="lg:hidden focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? <RxCross2 size={30} /> : <FaBars size={30} />}
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex  justify-between gap-5 items-center lg:order-2 text-[#593808]`}
        >
          <a href="/#">
            <li className=" hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
              Home
            </li>{" "}
          </a>
          <a href="/about">
            <li className=" hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
              About
            </li>{" "}
          </a>
          <a href="/products">
            <li className=" hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
              Products
            </li>{" "}
          </a>
          <a href="/contacts">
            <li className=" hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
              Contact
            </li>{" "}
          </a>
          <a href="/clients">
            <li className=" hover:text-[#000000] p-3 pl-4 pr-4 pt-3 pb-3 ">
              Clients
            </li>{" "}
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
