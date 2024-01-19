import "./App.css";
import Home from "./components/Home";
import images from "./components/images.js";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  );
}

export default App;
