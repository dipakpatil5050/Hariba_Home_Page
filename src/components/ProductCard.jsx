import React from "react";
// import images from "../images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard() {
  return (
    <>
      <div className="w-12 h-52 ml-40 rounded-xl p-44 border flex flex-row item-center m-10 bg-transparent">
        <img
          className="z-30 w-5"
          src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
          alt=""
        />
      </div>
      <img
        src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
        alt=""
      />
    </>
  );
}

export default ProductCard;
