import Home from "./components/Home Page/Home.jsx";
import images from "./components/Home Page/images.js";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login Page/Login.jsx";
import Cards from "./components/Home Page/Cards.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <ChakraProvider>
      <Login />
      <Layout />
      <Home images={images} />
      <Cards />
    </ChakraProvider>
  );
}

export default App;
