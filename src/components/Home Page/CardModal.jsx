import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { IoPricetagOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

function CardModal({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [price, setPrice] = useState(500);

  const [quantity, setQuantity] = useState(1);

  const add = () => {
    setPrice(price + 500);
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (price > 500) {
      setPrice(price - 500);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center text-black shadow-xl "
    >
      <div className="mt-1 flex flex-col min-[320px]:pt-14 min-[320]:mb-8 text-black">
        <div className="rounded-xl px-5 py-10 gap-4 flex flex-col items-center mx-4">
          <button
            onClick={onClose}
            className="place-self-end relative top-16 right-4 z-50"
          >
            <X color="black" />
          </button>
          <div className="flex max-w-5xl flex-col items-center rounded-xl text-5xl bg-white md:flex-row min-[360px]:m-2">
            {/* image section */}
            <div className="h-full w-full md:h-[500px] md:w-[1410px] rounded-r-5xl">
              <img
                src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
                alt="Laptop"
                className="h-full rounded-md object-cover"
              />
            </div>

            <div className="p-4 items-s md:relative md:bottom-24">
              <h1 className="inline-flex title items-center text-2xl font-bold text-black">
                KAJU KATLI WITHOUT WARAKH & MAWA
              </h1>

              <p className="mt-3 text-sm text-gray-600  pr-5">
                A Traditional Indian sweet with low sugar and made with only
                Cashew, Sugar and Pistachio(Garnishing) without Warakh (Silver
                foil) and Mawa (Khoya). A perfect Sweet to share with friends
                and family during special occasions, fasting, & simply relish as
                a dessert. Enjoy this classic premium...
              </p>
              <div className="price"></div>
              <div className="mt-3 flex items-center space-x-2">
                <IoPricetagOutline className="text-xl" color="black" />
                <span className="flex">
                  <strong className="text-xl text-gray-900 items-baseline font-mono">
                    <p>₹500 / kg</p>
                  </strong>
                </span>
              </div>
              <div className="p-5 pb-3 flex flex-row gap-3 items-center">
                <h4 className="text-black text-sm"> Quantity : </h4>

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
              <div className="mt-3 flex items-center space-x-2">
                <span className="flex">
                  <p className="text-xl text-thin text-gray-900 items-baseline">
                    {`Subtotal: : ₹ ${price}`}
                  </p>
                  {/* <h2 className="pt-10 text-black text-sm">{`Total = ${price}`}</h2> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* option images in popup */}
      {/* <div className="img absolute  right-[280px] bottom-32 h-32 gap-9 flex flex-wrap">
        <img
          className="rounded-xl shadow-2xl border "
          src="https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482"
          alt=""
        />
        <img
          className="rounded-xl shadow-2xl border "
          src="https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482"
          alt=""
        />
        <img
          className="rounded-xl shadow-2xl border "
          src="https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482"
          alt=""
        />
      </div> */}
    </div>
  );
}

export default CardModal;
