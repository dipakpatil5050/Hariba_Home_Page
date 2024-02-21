import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login Page/Login.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { NoPage } from "./pages/NoPage.jsx";

import Clients from "./pages/Clients.jsx";
import Products from "./pages/Products.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Cart from "./components/Home Page/Cart.jsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.jsx";
import { LoginProvider } from "./contexts/LoginContext.jsx";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./components/Home Page/HomePage.jsx";
import Home from "./components/Home Page/Home.jsx";
import images from "./components/Home Page/images.js";
// import App from "./components/Home Page/App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/clients"
        element={
          <Layout>
            <Clients />
          </Layout>
        }
      />
      <Route path="/*" element={<NoPage />} />

      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LoginProvider>
        <CartProvider>
          <RouterProvider router={router} />
          {/* <App /> */}
          <Toaster />
        </CartProvider>
      </LoginProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { LoginProvider } from "./contexts/LoginContext.jsx";
// import { CartProvider } from "./contexts/CartContext.jsx";
// import { Toaster } from "react-hot-toast";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <LoginProvider>
//       <CartProvider>
//         <App />
//         <Toaster />
//       </CartProvider>
//     </LoginProvider>
//   </React.StrictMode>
// );
