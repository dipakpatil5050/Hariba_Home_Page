import React, { Fragment, useState, useContext } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { Dialog, Transition, Menu, Disclosure } from "@headlessui/react";
import HoverCart from "../Home Page/HoverCart";
import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPowerOff } from "react-icons/fa";
import { LoginProvider, useLogin } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";
import { Navigate } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const [open, setOpen] = useState(false);
  const { username, logout, isLoggedIn } = useLogin();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const handleLogout = () => {
    logout();
    localStorage.clear("user");
    <Navigate to="/" />;
    // isLoggedIn(false);
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile View  */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-lg">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <RxCross2 /> */}
                  </button>
                </div>
                <div className="space-y-3 border-t flex flex-col border-gray-200 px-4 py-6">
                  <div className="flex flex-col gap-5">
                    <Link
                      to={"/home"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer mobile-tab"
                    >
                      Home
                    </Link>
                    <Link
                      to={"/about"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer mobile-tab"
                    >
                      About
                    </Link>
                    <Link
                      to={"/products"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      Products
                    </Link>
                    <Link
                      to={"/contact"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      Contact
                    </Link>
                    <Link
                      to={"/clients"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      Documentation
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2"></a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop view  */}

      <header className="relative bg-white">
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex h-28 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <FaBars size={26} />
              </button>

              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/home"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
                      {/* Hariba logo section */}
                      <div className=" md:w-28 lg:w-28 xl:w-28 m-5 z-50 my-3">
                        <img
                          src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
                          alt="Logo"
                          className="w-20"
                        />
                      </div>
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center ml-60 lg:space-x-10 ">
                <Link
                  to={"/home"}
                  className="text-xl font-medium hover:text-[#593808] text-gray-700 tab underline-hover"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-xl font-medium hover:text-[#593808] text-gray-700 tab underline-hover"
                >
                  About
                </Link>
                <Link
                  to={"/products"}
                  className="text-xl font-medium hover:text-[#593808] text-gray-700 tab underline-hover"
                >
                  Products
                </Link>

                <Link
                  to={"/contact"}
                  className="text-xl font-medium hover:text-[#593808] text-gray-700 tab underline-hover"
                >
                  Contact
                </Link>
                <Link
                  to={"/clients"}
                  className="text-xl font-medium hover:text-[#593808] text-gray-700 tab underline-hover"
                >
                  Documentation
                </Link>
              </div>

              <div className="ml-auto flex items-center justify-between">
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center hover:text-[#593808] text-gray-700 font-bold m-4"
                  >
                    Welcome, {username}
                  </a>
                </div>
                <div className="user-btn ">
                  <Menu as="div" className=" relative m-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mt-5">
                        <img
                          className="h-14 w-14 rounded-full"
                          src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?uid=R134540980"
                          alt="profile picture "
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <button
                          onClick={handleLogout}
                          className="px-4 py-2 text-sm text-gray-700 flex"
                        >
                          <Link
                            to="/"
                            className="flex items-center justify-center gap-1"
                          >
                            <FaPowerOff size={20} />
                            <span className="pl-2 font-bold"> Logout</span>
                          </Link>
                        </button>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6 relative group">
                  <Link
                    // to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                  >
                    <BsCart3 size={25} />

                    <span className=" relative flex group items-center justify-center -top-4 pr-3">
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                  <div className="absolute hidden group-hover:block z-30 w-24 mr-28 rounded-md p-10 gap-10 shadow-md mt-1">
                    <HoverCart />
                  </div>
                </div>

                {/* <div className="relative group">
                  <Link
                    href="/cart"
                    className="underline-hover hover:text-[#000000] p-3 pt-2 pb-3  cart shopping-cart-icon pr-28"
                  >
                    <BsCart3 size={25} />

                    <span className="absolute flex items-center justify-center top-5 right-12 pr-3">
                      {cartItems.length}
                    </span>
                  </Link>

                  <div className="absolute hidden group-hover:block z-30 w-24 mr-48  rounded-md p-10 gap-10 shadow-md mt-1">
                    <HoverCart />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
