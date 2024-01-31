import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login Page/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import { ErrorBoundary } from "react-error-boundary";
import { NoPage } from "./pages/NoPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clients from "./pages/Clients.jsx";
import Products from "./pages/Products.jsx";
import ShoppingCart from "./components/Shopping Cart/ShoppingCart.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <ErrorBoundary FallbackComponent={<NoPage />}> */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/error" element={<NoPage />} />
      <Route path="/cart" element={<ShoppingCart />} />
      {/* </ErrorBoundary> */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CartProvider>
      <App />
    </CartProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
    ;
  </React.StrictMode>
);
