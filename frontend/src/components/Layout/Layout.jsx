import React, { Children } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home Page/Home";
import images from "../Home Page/images";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <Home images={images} />
      {/* <Card /> */}
      {/* <Products /> */}
      <Footer />
    </>
  );
}

export default Layout;
