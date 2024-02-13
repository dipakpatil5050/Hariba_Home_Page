import Home from "./components/Home Page/Home.jsx";
import images from "./components/Home Page/images.js";
import Login from "./components/Login Page/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Home Page/Products.jsx";
import Card from "./components/Home Page/Card.jsx";
// import Products from "./components/Home Page/Products.jsx";
// import AddToCart from "./components/Home Page/AddToCart.jsx";
function App() {
  return (
    <Home images={images} />
    // <Card />
  );
}

export default App;
