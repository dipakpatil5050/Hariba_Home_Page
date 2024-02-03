import PropTypes from "prop-types";
import { useContext } from "react";
import { Heart, Trash } from "lucide-react";
// import { CartContext } from "../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../contexts/CartContext.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
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

  // const notifyCartCleared = () =>
  //   toast.error(`Cart cleared!`, {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "colored",
  //     style: {
  //       backgroundColor: "#000",
  //       color: "#fff",
  //     },
  //   });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    // notifyRemovedFromCart(product);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl mt-28 px-2 lg:px-0">
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
                {cartItems.map((item) => (
                  <div key={item.id} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-2xl text-black">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <div className="mb-2 flex">
                            <div className="min-w-24 flex items-center justify-center">
                              <button
                                type="button"
                                className="h-7 w-7 flex items-center"
                                onClick={() => {
                                  const cartItem = cartItems.find(
                                    (product) => product.id === item.id
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleRemoveFromCart(item);
                                  } else {
                                    removeFromCart(item);
                                  }
                                }}
                              >
                                -
                              </button>
                              <span className="text-black p-2 border">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                className="flex h-7 w-7 items-center justify-center"
                                onClick={() => {
                                  addToCart(item);
                                }}
                              >
                                +
                              </button>
                            </div>
                            {/* <div className="ml-6 flex text-sm">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                        >
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500">
                            Remove
                          </span>
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center">
                        <p className="text-xl font-bold text-gray-900">
                          &nbsp;&nbsp;₹ {item.price}
                        </p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
              {cartItems.length > 0 ? (
                <div className="flex flex-col justify-between items-center">
                  <h1 className="text-2xl mb-10 ">
                    Subtotal : <b>₹ {getCartTotal()}</b>
                  </h1>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      clearCart();
                      // notifyCartCleared();
                    }}
                  >
                    Clear cart
                  </button>
                </div>
              ) : (
                <h1 className="text-lg font-bold ml-96 text-black">
                  <img src="https://i.imgur.com/3hKhTIC.png" alt="" />
                  <Link to="/home">
                    <p className="flex items-center justify-center text-lg  text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4">
                      Continue shopping &rarr;
                    </p>
                  </Link>
                  {/* Your cart is empty */}
                </h1>
              )}
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
                    <dt className="text-sm text-gray-800">Price (3 item)</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ 52,398
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      - ₹ 3,431
                    </dd>
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
                      ₹ 5000
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  You will save ₹ 3,431 on this order
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  showCartModal: PropTypes.bool,
  // toggle: PropTypes.func,
};
