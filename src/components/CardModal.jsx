import React, { useRef } from "react";
import { X } from "lucide-react";

function CardModal({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X />
        </button>
        <div className="bg-sky-600 rounded-xl px-20 py-10 gap-5 flex flex-col items-center mx-4">
          <img src="" alt="" />
          <h1 className="text-3xl font-extrabold">Card Title </h1>
          <h4 className="text-2xl font-bold max-w-md text-center text-black">
            Description will be appear here
          </h4>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
