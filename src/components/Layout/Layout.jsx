import React, { Children } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home Page/Home";
import images from "../Home Page/images";
import Footer from "../Footer/Footer";
import Card from "../Home Page/Card";
import Products from "../Home Page/Products";
function Layout() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      {/* <Card /> */}
      {/* <Products /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
