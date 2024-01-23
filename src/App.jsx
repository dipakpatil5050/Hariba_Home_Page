import Home from "./components/Home";
import images from "./components/images.js";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card.jsx";
import CardModal from "./components/CardModal.jsx";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ChakraProvider>
      <Navbar />
      <Home images={images} />
      <div
        onClick={() => setShowModal(true)}
        className="cards flex flex-wrap justify-center items-center mt-10"
      >
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
          }
          title="KAJU KATLI WITHOUT WARAKH & MAWA"
          desc="Dryfruit Punch Rose is a classic premium sweet from Gujarat, known for its rich taste and nutrition...
          "
          price="500"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514"
          }
          title="MOHAN THAL"
          desc="Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad, with a rich flavor and melt in the mouth texture of ghee-roasted gram flour and sugar. A perfect Sweet to share with friends and family during special occasions, fasting, diet or simply relish as a..."
          price="570"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171"
          }
          title="Punch Rose WARAKH & MAWA"
          desc="DRYFRUIT PUNCH ROSE"
          price="480"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/products/adadiya-31_470x.jpg?v=1661600334"
          }
          title="ADADIYA PAK"
          desc="DRYFRUIT PUNCH ROSE"
          price="700"
        />

        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306"
          }
          title="BUY ORGANIC A2 GIR DESI COW GHEE"
          desc="COW GHEE"
          price="1800"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223"
          }
          title="BUY ORGANIC A2 GIR DESI COW GHEE"
          desc="COW GHEE"
          price="1800"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/files/fpoint73_1880x.jpg?v=1690267206"
          }
          title="BUY ORGANIC A2 GIR DESI COW GHEE"
          desc="COW GHEE"
          price="1800"
        />
        <Card
          src={
            "https://haribadairyfarm.com/cdn/shop/products/hariba-ghee-front_470x.jpg?v=1690266955"
          }
          title="BUY ORGANIC A2 GIR DESI COW GHEE"
          desc="COW GHEE"
          price="1800"
        />
      </div>
      {showModal && <CardModal onClose={() => setShowModal(false)} />}
    </ChakraProvider>
  );
}

export default App;
