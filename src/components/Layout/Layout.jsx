import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home Page/Home";
import images from "../Home Page/images";
import Cards from "../Home Page/Cards";
import ShoppingCart from "../Shopping Cart/ShoppingCart";
import { HoverCart } from "../Shopping Cart/HoverCart";

function Layout() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      <Cards />
      <ShoppingCart />
      <HoverCart />
    </>
  );
}

export default Layout;
