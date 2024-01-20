import "./App.css";
import Home from "./components/Home";
import images from "./components/images.js";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card.jsx";
import cards from "./components/cards.js";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home images={images} />
      <div className="flex flex-wrap justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* <Card cards={cards} /> */}
    </ChakraProvider>
  );
}

export default App;
