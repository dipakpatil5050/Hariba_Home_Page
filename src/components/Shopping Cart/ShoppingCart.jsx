// import { Trash } from "lucide-react";
// import PropTypes from "prop-types";
// import React, { useEffect, useState, useContext } from "react";
// import { MdAdd } from "react-icons/md";
// import { FiMinus } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import Navbar from "../Navbar/Navbar";
// import { CartContext } from "../../contexts/CartContext";
// const products = [
//   {
//     id: 1,
//     name: "Kaju katli",
//     href: "#",
//     price: "₹500 / Kg",
//     imageSrc:
//       "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
//   },
//   {
//     id: 2,
//     name: "Kaju katli",
//     href: "#",
//     price: "₹500 / Kg",
//     imageSrc:
//       "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
//   },
// ];

// function ShoppingCart() {
//   const [price, setPrice] = useState(500);
//   const [quantity, setQuantity] = useState(1);

//   const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
//     useContext(CartContext);

//   const add = () => {
//     setPrice(price + 500);
//     setQuantity(quantity + 1);
//   };

//   const remove = () => {
//     if (quantity > 1 && price > 500) {
//       setPrice(price - 500);
//       setQuantity(quantity - 1);
//     } else {
//       toast.warning("select minimum one item");
//     }
//   };

//   useEffect(() => {
//     console.log(products);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="mx-auto max-w-7xl px-2 lg:px-0">
//         <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Shopping Cart
//           </h1>
//           <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//             <section
//               aria-labelledby="cart-heading"
//               className="rounded-lg bg-white lg:col-span-8"
//             >
//               <h2 id="cart-heading" className="sr-only">
//                 Items in your shopping cart
//               </h2>
//               <ul role="list" className="divide-y divide-gray-200">
//                 {products.map((product) => (
//                   <div className="" key={product.id}>
//                     <li key={product.id} className="flex py-6 sm:py-6 ">
//                       <div className="flex-shrink-0">
//                         <img
//                           src={product.imageSrc}
//                           alt={product.name}
//                           className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
//                         />
//                       </div>
//                       <h1 className="ml-10">{product.name}</h1>

//                       <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                         <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                           <div>
//                             <div className="mt-1 flex items-end">
//                               <p className="text-sm font-medium text-gray-900">
//                                 &nbsp;&nbsp;{product.price}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                     <div className="mb-2 flex">
//                       <div className="p-5 pb-3 flex flex-row gap-3 items-center quantity">
//                         <h4 className="text-black text-sm"> Quantity : </h4>

//                         <button
//                           onClick={() => add()}
//                           className="mb-2 mr-2 rounded-full items-center bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
//                         >
//                           <MdAdd size={20} />
//                         </button>
//                         <h6 className="text-xl">{quantity}</h6>
//                         <button
//                           onClick={() => remove()}
//                           className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
//                         >
//                           <FiMinus size={20} />
//                         </button>
//                       </div>
//                       <div className="mt-3 flex items-center space-x-2 Subtotal">
//                         <span className="flex">
//                           <p className="text-xl text-thin text-gray-900 items-baseline">
//                             {`Subtotal: : ₹ ${price}`}
//                           </p>
//                         </span>
//                       </div>
//                       <div className="ml-6 flex text-sm removeBtn">
//                         <button
//                           type="button"
//                           className="flex items-center space-x-1 px-2 py-1 pl-0"
//                         >
//                           <Trash
//                             size={12}
//                             color="red"
//                             className="text-red-500"
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </ul>
//             </section>
//             {/* Order summary */}
//             <section
//               aria-labelledby="summary-heading"
//               className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
//             >
//               <h2
//                 id="summary-heading"
//                 className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
//               >
//                 Price Details
//               </h2>
//               <div>
//                 <dl className=" space-y-1 px-2 py-4">
//                   <div className="flex items-center justify-between">
//                     <dt className="text-sm text-gray-800">Price (1 item)</dt>
//                     <dd className="text-sm font-medium text-gray-900">₹ 500</dd>
//                   </div>
//                   <div className="flex items-center justify-between pt-4">
//                     <dt className="flex items-center text-sm text-gray-800">
//                       <span>Discount</span>
//                     </dt>
//                     <dd className="text-sm font-medium text-green-700">-</dd>
//                   </div>
//                   <div className="flex items-center justify-between py-4">
//                     <dt className="flex text-sm text-gray-800">
//                       <span>Delivery Charges</span>
//                     </dt>
//                     <dd className="text-sm font-medium text-green-700">Free</dd>
//                   </div>
//                   <div className="flex items-center justify-between border-y border-dashed py-4 ">
//                     <dt className="text-base font-medium text-gray-900">
//                       Total Amount
//                     </dt>
//                     <dd className="text-base font-medium text-gray-900">
//                       ₹ 500
//                     </dd>
//                   </div>
//                 </dl>
//                 <div className="px-2 pb-4 font-medium text-green-700">
//                   Total Amount : ₹ 10000
//                 </div>
//               </div>
//             </section>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ShoppingCart;
import React from 'react'

function ShoppingCart() {
  return (
    <div>ShoppingCart</div>
  )
}

export default ShoppingCart





//


{/* <div className="mx-auto max-w-7xl mt-28 px-2 lg:px-0">
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
        {cartItems.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subtotal
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Remove</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-10 w-10 rounded-md object-contain object-center"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
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
                      <input
                        type="text"
                        min="1"
                        max="1000"
                        className="mx-1 h-7 w-9 p-2 rounded-md border text-center form-control"
                        value={item.quantity}
                        onChange={handleInputChange}
                      />
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{item.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{item.price * item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => {
                        // Handle remove from cart
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-lg font-bold ml-96 text-black">
            <img src="https://i.imgur.com/3hKhTIC.png" alt="" />
            <Link to="/home">
              <p className="flex items-center justify-center text-lg  text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4">
                Continue shopping &rarr;
              </p>
            </Link>
          </h1>
        )}
        {cartItems.length > 0 && (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-2xl mb-10 ">
              Subtotal: <b>₹ {getCartTotal()}</b>
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
        )}
      </section>
      {/* Order summary */}
      {/* ... (unchanged) ... */}
//     </form>
//   </div>
// </div> */}
