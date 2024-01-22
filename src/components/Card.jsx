import React from "react";
import { IoPricetagOutline } from "react-icons/io5";

import "./Card.css";
function Card({ src, title, alt, desc, price }) {
  return (
    <div className="card-container rounded-md m-7 p-2  flex flex-wrap">
      <img
        className=" card-img rounded-t-2xl rounded-b-xl"
        src={src}
        alt={alt}
      />
      <h1 className="card-title font-bold  flex items-center justify-center pt-5 pl-5 ">
        {title.length ? title.substring(0, 10) : title}
        <p className="font-thin text-xl  ">....</p>
      </h1>
      <p className="card-desc text-pink-400 m-2 flex items-center justify-center">
        {desc.length ? desc.substring(0, 15) : desc}...
      </p>

      <strong></strong>
      <strong className="m-1 flex items-center justify-center">
        <IoPricetagOutline className="mr-1" /> ₹{price}
      </strong>
    </div>
  );
}

export default Card;
