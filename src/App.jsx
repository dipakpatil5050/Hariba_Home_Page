import Home from "./components/Home Page/Home.jsx";
import images from "./components/Home Page/images.js";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login Page/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Home Page/Products.jsx";

function App() {
  return (
    // <ChakraProvider>
    //   <Login />
    //   <Layout />
    //   <Home images={images} />
    // </ChakraProvider>
    <Login />
    // <Products />
  );
}

export default App;
