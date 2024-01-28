import React from "react";
import Card from "./Card";
import CardModal from "./CardModal";
import { useState } from "react";

function Cards() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        // onClick={() => setShowModal(true)}
        className="cards flex justify-center items-center mt-10 duration-500"
      >
        <Card />
      </div>
      {/* {showModal && <CardModal onClose={() => setShowModal(false)} />} */}
    </>
  );
}

export default Cards;
