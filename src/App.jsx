import Home from "./components/Home Page/Home.jsx";
import images from "./components/Home Page/images.js";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login Page/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Home Page/Products.jsx";
// import AddToCart from "./components/Home Page/AddToCart.jsx";
function App({ value }) {
  return (
    // <ChakraProvider>
    //   <Login />
    //   <Layout />
    //   <Home images={images} />
    // </ChakraProvider>
    // <Login />
    <Products />
    // <AddToCart value={value} />
  );
}

export default App;
