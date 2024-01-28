import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home Page/Home";
import images from "../Home Page/images";
import Cards from "../Home Page/Cards";
import Footer from "../Footer/Footer";
import Card from "../Home Page/Card";
function Layout() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      {/* <Cards /> */}
      <Card />
      <Footer />
    </>
  );
}

export default Layout;
