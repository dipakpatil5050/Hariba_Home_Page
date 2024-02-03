import React, { useState, useEffect, useContext } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import CardModal from "./CardModal";
import "./Card.css";
import { RefreshCcw } from "lucide-react";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./Cart.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState([null]);
  const [data, setData] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  const handleViewDetail = (productId) => {
    const product = data.find((item) => item.id === productId);
    setSelectedProduct(product);
    setShowModal(true);
    // console.log(product);
  };

  // const toggle = () => {
  //   setShowCartModal(!showCartModal);
  // };

  const API_URL = "http://localhost:3000/data";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className=" items-center px-20 ">
        <h1 className="text-3xl border tracking-widest uppercase font-light mt-10 flex items-center justify-center text-center mb-10">
          Products
        </h1>
        {/* {
          <button
            className="px-4 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            // onClick={toggle}
          >
            Shopping Cart ({cartItems.length})
          </button>
        } */}
      </div>
      <div className="rounded-md m-7 p-2  flex  items-center justify-center flex-wrap cursor-pointer">
        {data?.slice(0, visible).map((product) => {
          return (
            <div className="group relative" key={product.id}>
              <div
                className="card-container rounded-md h-[390px] m-7 p-2 flex flex-wrap cursor-pointer"
                // onClick={() => setShowModal(true)}
              >
                <img
                  className=" card-img rounded-t-2xl rounded-b-xl ease-out duration-500 scale-100 hover:scale-110"
                  src={product.src}
                  alt={product.alt}
                />
                <h1 className="card-title font-bold  flex items-center justify-center pt-5 pl-5 cursor-pointer">
                  {product.title.length
                    ? product.title.substring(0, 20)
                    : product.title}
                  {/* {product.title} */}
                  <p className="font-thin text-xl  ">....</p>
                </h1>
                <p className="card-desc text-[#593808] m-2 text-base flex items-center justify-center">
                  {product.desc.length
                    ? product.desc.substring(0, 35)
                    : product.desc}
                  ...
                  {/* {product.desc} */}
                </p>

                <div className="pricediv mt-3">
                  <strong className="m-1 flex items-center justify-center">
                    <IoPricetagOutline className="mr-2" /> ₹{product.price}
                  </strong>
                  <div className="addToCartBtn flex items-center justify-center mt-4">
                    <button
                      className="bn-32 bn32 w-48 text-lg flex items-center justify-center bg-[#251805] hover:bg-white  text-white rounded-lg"
                      // value={product.id}
                      // key={product.id}
                      // onClick={(e) => handleInput(e, "value")}
                      onClick={() => handleViewDetail(product.id)}
                    >
                      View Details
                    </button>

                    {/* <button
                      value={product.id}
                      onClick={(e) => handleInput(e, "value")}
                    >
                      click
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {showModal && (
          <CardModal
            product={selectedProduct}
            onClose={() => setShowModal(false)}
          />
        )}
        {/* <Cart showCartModal={showCartModal} toggle={toggle} /> */}
      </div>
      <div className="flex flex-wrap m-5 items-center justify-center pt-12	">
        <button
          className=" content-between flex items-center bg-transparent hover:bg-[#251805] text-[#251805] font-normal  hover:text-white py-5 px-5 border border-[#251805] hover:border-transparent rounded"
          onClick={showMoreItems}
        >
          More Products
          <span className="pl-2 ">
            <RefreshCcw
              size={17}
              className="text-thin changeColor"
              color="gray"
            />
          </span>
        </button>

        {/* <button value={"1"} onClick={(e) => handleInput(e, "value")}></button> */}
      </div>
    </>
  );
}

export default Card;
