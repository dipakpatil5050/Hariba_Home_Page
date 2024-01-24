import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home Page/Home";
import images from "../Home Page/images";
import Cards from "../Home Page/Cards";

function Layout() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      <Cards />
    </>
  );
}

export default Layout;
