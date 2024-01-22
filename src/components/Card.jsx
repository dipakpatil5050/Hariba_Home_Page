import React, { useState } from "react";
import { IoPricetagOutline } from "react-icons/io5";

import "./Card.css";
import { Link, redirect, useNavigate } from "react-router-dom";

function Card({ src, title, alt, desc, price }) {
  const [modal, setModal] = useState(false);

  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const productDetail = () => {
    <Link to="https://haribadairyfarm.com/products/nutritional-punch"></Link>;
  };

  return (
    <div
      className="card-container rounded-md m-7 p-2  flex flex-wrap cursor-pointer"
      // onClick={() => productDetail()}
    >
      <img
        className=" card-img rounded-t-2xl rounded-b-xl ease-out duration-500 scale-100 hover:scale-110"
        src={src}
        alt={alt}
      />
      <h1
        className="card-title font-bold  flex items-center justify-center pt-5 pl-5 cursor-pointer"
        onClick={() => productDetail}
      >
        {title.length ? title.substring(0, 20) : title}
        <p className="font-thin text-xl  ">....</p>
      </h1>
      <p className="card-desc text-[#593808] m-2 flex items-center justify-center">
        {desc.length ? desc.substring(0, 15) : desc}...
      </p>

      <strong className="m-1 flex items-center justify-center">
        <IoPricetagOutline className="mr-1" /> ₹{price}
      </strong>
    </div>
  );
}

export default Card;
