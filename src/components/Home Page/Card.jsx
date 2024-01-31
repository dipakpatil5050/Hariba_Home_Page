import React, { useState, useEffect } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import CardModal from "./CardModal";
import "./Card.css";
import { RefreshCcw } from "lucide-react";
// import { Link } from "react-router-dom";

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
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
      <div className="rounded-md m-7 p-2  flex  items-center justify-center flex-wrap cursor-pointer">
        {data?.slice(0, visible).map((product) => {
          return (
            <div className="group relative" key={product.id}>
              <div
                className="card-container rounded-md h-[390px] m-7 p-2 flex flex-wrap cursor-pointer"
                onClick={() => setShowModal(true)}
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
                    <button className="bn-32 bn32 w-48 text-lg flex items-center justify-center bg-[#251805] hover:bg-white  text-white rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {showModal && <CardModal onClose={() => setShowModal(false)} />}
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
      </div>
    </>
  );
}

export default Card;
