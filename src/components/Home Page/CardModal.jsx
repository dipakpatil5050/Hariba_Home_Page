import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { IoPricetagOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import "./Card.css";
import { toast } from "react-toastify";
import { Star, ChevronDown } from "lucide-react";
function CardModal({ product, onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  // const [totalprice, setTotalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const add = () => {
    // setPrice(totalprice + 500);
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity > 1) {
      // setPrice(totalprice - 500);
      setQuantity(quantity - 1);
    } else {
      toast.warning("select minimum one item");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed  inset-0 bg-opacity-30 mt-28 backdrop-blur-sm flex items-center justify-center text-black shadow-xl "
    >
      <div className="mt-1 flex flex-col min-[320px]:pt-14 min-[320px]:mb-8 text-black">
        <div className="rounded-xl px-5 py-10 gap-4 flex flex-col items-center mx-4">
          <button
            onClick={onClose}
            className="place-self-end relative top-16 right-4 z-50"
          >
            <X color="black" />
          </button>
          <div className="flex max-w-6xl flex-col items-center  rounded-xl text-5xl bg-white md:flex-row min-[360px]:m-2">
            {/* image section */}
            <div className="h-full md:h-[500px] md:w-[1229px]  rounded-r-5xl">
              <img
                src={product.src}
                alt="image Loading..."
                className="h-full p-1 rounded-3xl object-cover"
              />
            </div>

            <div className="p-4  min-[390px]:mr-1 items-s md:relative md:bottom-13 mr-20 ">
              <h1 className="inline-flex title items-center text-3xl font-bold text-black">
                {product.title}
              </h1>

              <p className="mt-3 text-sm text-gray-600  pr-5">{product.desc}</p>

              <div className="mt-16 flex items-center space-x-2 priceTag">
                <IoPricetagOutline className="text-xl" color="black" />
                <span className="flex">
                  <strong className="text-xl text-gray-900 items-baseline font-mono">
                    <p>₹ {product.price} / kg</p>
                  </strong>
                </span>
              </div>
              <div className="p- pb-3 flex mt-16 flex-row gap-3 items-center  quantity">
                <h4 className="text-black text-lg"> Quantity </h4>

                <button
                  onClick={() => add()}
                  className="mb-2 mr-2 rounded-full items-center bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                >
                  <MdAdd size={20} />
                </button>
                <h6 className="text-xl">{quantity}</h6>
                <button
                  onClick={() => remove()}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                >
                  <FiMinus size={20} />
                </button>
              </div>
              {/* <div className="mt-3 flex items-center space-x-2 Subtotal">
                <span className="flex">
                  <p className="text-xl text-thin text-gray-900 items-baseline">
                    {`Subtotal: : ₹ ${totalprice}`}
                  </p>
                </span>
              </div> */}
              <div className="addToCartBtn">
                <a href="#">
                  <button className="bn-32 bn32 bg-[#251805] hover:bg-white  text-white mt-10">
                    Add to Cart
                  </button>
                </a>
              </div>

              {/* option images */}
              {/* <div className="flex gap-6 relative mt-28 min-[390px]:mt-12 xl:flex-row ">
                {[
                  "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
                  "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
                  "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
                ].map((image, index) => (
                  <div
                    key={image}
                    className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75"
                  >
                    <img
                      alt={`Product ${index}`}
                      src={image}
                      decoding="async"
                      loading="lazy"
                      className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
