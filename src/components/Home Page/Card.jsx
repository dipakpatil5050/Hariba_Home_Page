import React, { useState } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import CardModal from "./CardModal";
import "./Card.css";

const CardData = [
  {
    id: 1,
    title: "KAJU KATLI WITHOUT WARAKH & MAWA",
    desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
    alt: "image not showing",
    price: "500",
  },
  {
    id: 2,
    title: "MOHAN THAL",
    desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
    src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
    alt: "image not showing",
    price: "113",
  },
  {
    id: 3,
    title: "Punch Rose WARAKH & MAWA",
    desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
    alt: "image not showing",
    price: "480",
  },
  {
    id: 4,
    title: "ADADIYA PAK",
    desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
    alt: "image not showing",
    price: "700",
  },
  {
    id: 5,
    title: "BUY ORGANIC A2 GIR DESI COW GHEE",
    desc: "COW GHEE Desciption is a traditional ancient",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
    alt: "image not showing",
    price: "1800",
  },
  {
    id: 6,
    title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
    desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
    src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
    alt: "image not showing",
    price: "700",
  },
  {
    id: 7,
    title: "KAJU KATLI WITHOUT WARAKH & MAWA",
    desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
    alt: "image not showing",
    price: "500",
  },
  {
    id: 8,
    title: "MOHAN THAL",
    desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
    src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
    alt: "image not showing",
    price: "113",
  },
  {
    id: 9,
    title: "Punch Rose WARAKH & MAWA",
    desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
    alt: "image not showing",
    price: "480",
  },
  {
    id: 10,
    title: "ADADIYA PAK",
    desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
    alt: "image not showing",
    price: "700",
  },
  {
    id: 11,
    title: "BUY ORGANIC A2 GIR DESI COW GHEE",
    desc: "COW GHEE Desciption is a traditional ancient",
    src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
    alt: "image not showing",
    price: "1800",
  },
  {
    id: 12,
    title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
    desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
    src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
    alt: "image not showing",
    price: "700",
  },
];

function Card() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="div rounded-md m-7 p-2 flex flex-wrap cursor-pointer ">
      {CardData.map((product) => (
        <div
          className="group relative"
          key={product.id}
          onClick={() => setShowModal(true)}
        >
          <div className="card-container rounded-md h-[350px] m-7 p-2 flex flex-wrap cursor-pointer">
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

            <strong className="m-1 flex items-center justify-center">
              <IoPricetagOutline className="mr-2" /> ₹{product.price}
            </strong>
          </div>
        </div>
      ))}
      {showModal && <CardModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Card;
