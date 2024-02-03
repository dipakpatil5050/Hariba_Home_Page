import PropTypes from "prop-types";
import { useContext } from "react";
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
      <div className="flex-col mt-16 flex items-center fixed inset-0 bg-white dark:bg-white gap-8  p-10  text-white dark:text-white font-normal uppercase text-sm">
        <ToastContainer />
        <h1 className="text-2xl text-black font-bold">Shopping Cart</h1>
        {/* <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            // onClick={toggle}
          >
            Close
          </button>
        </div> */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-md w-24 h-24"
                />
                <hr />
                <br />
                <div className="flex flex-col gap-5 justify-center">
                  <h1 className="text-lg font-bold text-black">{item.title}</h1>
                  <p className="text-black">₹ {item.price}</p>
                </div>
              </div>

              <div className="flex gap-5 ml-10">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <p className="text-black">{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
              </div>
            </div>
          ))}
        </div>
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
          <h1 className="text-lg font-bold text-black">
            <img src="https://i.imgur.com/3hKhTIC.png" alt="" />
            <Link to="/home">
              <p className="flex items-center justify-center text-lg  text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4">
                Continue shopping &rarr;
              </p>
            </Link>
            {/* Your cart is empty */}
          </h1>
        )}
      </div>
    </>
  );
}

Cart.propTypes = {
  showCartModal: PropTypes.bool,
  // toggle: PropTypes.func,
};
