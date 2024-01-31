import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import Cart from "./cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => setshowModal((prevShowModal) => !prevShowModal);

  // const products = [
  //   {
  //     id: 1,
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: 2,
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: 3,
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: 4,
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 5,
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: 6,
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 7,
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: 8,
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: 9,
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: 10,
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 11,
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: 12,
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 13,
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: 14,
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: 15,
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: 16,
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 17,
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: 18,
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: 19,
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: 20,
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  // ];

  // getProducts();

  // async function getProducts() {

  // const response = await fetch("https://dummyjson.com/products");
  // const data = await response.json();
  // setProducts(data.products);
  // }

  // useEffect(() => {
  //   let isMounted = true;

  //   async function getProducts() {
  //     try {
  //       let response = await fetch("http://localhost:3000/data");
  //       let data = await response.json();
  //       if (isMounted) {
  //         setProducts(data.products);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getProducts();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

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

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <div className="flex flex-col justify-center bg-white">
      <ToastContainer />
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
          Products
        </h1>
        {!showModal && (
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Cart ({cartItems.length})
          </button>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 px-10">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="card-container rounded-md h-[380px] m-7 p-2 flex flex-wrap item-center justify-center cursor-pointer"
            >
              <img
                src={product.src}
                alt={product.alt}
                className=" w-full  card-img rounded-t-2xl rounded-b-xl ease-out duration-500 scale-100 hover:scale-110"
              />
              <div className="mt-4">
                <h1 className="text-lg uppercase font-bold">{product.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.desc.slice(0, 40)}...
                </p>
                <p className="mt-2 text-gray-600">₹ {product.price} / kg </p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                {!cartItems.find((item) => item.id === product.id) ? (
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(product);
                      notifyAddedToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className="flex gap-4">
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                    <p className="text-gray-600">
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </p>
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        const cartItem = cartItems.find(
                          (item) => item.id === product.id
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}
