import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { IoPricetagOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import "./Card.css";
import { toast } from "react-toastify";

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
    if (quantity > 1 && price > 500) {
      setPrice(price - 500);
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
          <div className="flex max-w-5xl flex-col items-center rounded-xl text-5xl bg-white md:flex-row min-[360px]:m-2">
            {/* image section */}
            <div className="h-full w-full md:h-[500px] md:w-[1410px] rounded-r-5xl">
              <img
                src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
                alt="Laptop"
                className="h-full rounded-md object-cover"
              />
            </div>

            <div className="p-4 mt-[64px] min-[390px]:mt-1 items-s md:relative md:bottom-13">
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

              <div className="mt-3 flex items-center space-x-2 priceTag">
                <IoPricetagOutline className="text-xl" color="black" />
                <span className="flex">
                  <strong className="text-xl text-gray-900 items-baseline font-mono">
                    <p>₹500 / kg</p>
                  </strong>
                </span>
              </div>
              <div className="p-5 pb-3 flex flex-row gap-3 items-center quantity">
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
              <div className="mt-3 flex items-center space-x-2 Subtotal">
                <span className="flex">
                  <p className="text-xl text-thin text-gray-900 items-baseline">
                    {`Subtotal: : ₹ ${price}`}
                  </p>
                </span>
              </div>
              <div className="addToCartBtn">
                <a href="#">
                  <button className="bn-32 bn32 bg-[#251805] hover:bg-white  text-white mt-10">
                    Add to Cart
                  </button>
                </a>
              </div>

              <div className="flex gap-6 relative mt-28 min-[390px]:mt-12 xl:flex-row ">
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

    // <div
    //   ref={modalRef}
    //   onClick={closeModal}
    //   className="fixed inset-0 bg-opacity-30 mt-28 backdrop-blur-sm flex items-center justify-center text-black shadow-xl "
    // >
    //   <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0 bg-white">
    //     <div className="overflow-hidden">
    //       <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
    //         <div className="items-start justify-between lg:flex lg:space-x-8">
    //           <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
    //             <div className="w-full xl:flex xl:flex-row-reverse">
    //               <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
    //                 <div className="relative flex items-center justify-center">
    //                   <img
    //                     alt="Product gallery 1"
    //                     src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
    //                     width={650}
    //                     height={590}
    //                     className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
    //                   />
    //                 </div>
    //                 <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
    //                   <ChevronLeft className="text-white" />
    //                   <ChevronRight className="text-white" />
    //                 </div>
    //               </div>
    //               <div className="flex gap-2 xl:flex-col">
    //                 {[
    //                   "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
    //                   "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
    //                   "https://haribadairyfarm.com/cdn/shop/files/fpoint721_510x.jpg?v=1690262482",
    //                 ].map((image, index) => (
    //                   <div
    //                     key={image}
    //                     className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 "
    //                   >
    //                     <img
    //                       alt={`Product ${index}`}
    //                       src={image}
    //                       decoding="async"
    //                       loading="lazy"
    //                       className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
    //                     />
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
    //             <div className="pb-5">
    //               <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
    //                 KAJU KATLI WITHOUT WARAKH & MAWA
    //               </h2>
    //               <p className="mt-4 font-semibold">850</p>
    //             </div>
    //             <div className="mb-2 pt-0.5">
    //               <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
    //                 available in:
    //               </h4>
    //               <ul className="flex flex-wrap space-x-2">
    //                 <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
    //                   500 Gram
    //                 </li>
    //                 <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
    //                   1 Kg
    //                 </li>
    //                 <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
    //                   2 Kg
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className="pb-2" />
    //             <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
    //               <button
    //                 type="button"
    //                 className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //               >
    //                 Add To Cart
    //               </button>
    //               <div className="grid grid-cols-2 gap-2.5">
    //                 <button
    //                   type="button"
    //                   className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //                 >
    //                   <Heart size={16} className="mr-3" />
    //                   <span className="block">Wishlist</span>
    //                 </button>
    //                 <div className="relative">
    //                   <button
    //                     type="button"
    //                     className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //                   >
    //                     <Share size={16} className="mr-3" />
    //                     <span className="block">Share</span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="pt-6 xl:pt-8">
    //               <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
    //                 Product Description:
    //               </h3>
    //               <p className="text-sm">
    //                 A Traditional Indian sweet with low sugar and made with only
    //                 Cashew, Sugar and Pistachio(Garnishing) without Warakh
    //                 (Silver foil) and Mawa (Khoya). A perfect Sweet to share
    //                 with friends and family during special occasions, fasting, &
    //                 simply relish as a dessert. Enjoy this classic premium...
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardModal;
