import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login Page/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Clients from "../pages/Clients";
import HomePage from "../components/Home Page/HomePage";
import Layout from "../components/Layout/Layout";
import { NoPage } from "../pages/NoPage";

// EXPORTING ROUTES

export const LOGIN = "/";
export const HOME = "/home";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const PRODUCTS = "/products";
export const CLIENTS = "/clients";
export const CART = "/cart";
export const NOPAGE = "/*";

export const router = () => (
  <Routes>
    <Route path={LOGIN} element={<Login />} />
    <Route
      path={HOME}
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />
    <Route
      path={ABOUT}
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path={CONTACT}
      element={
        <Layout>
          <Contact />
        </Layout>
      }
    />
    <Route
      path={PRODUCTS}
      element={
        <Layout>
          <Products />
        </Layout>
      }
    />
    <Route
      path={CLIENTS}
      element={
        <Layout>
          <Clients />
        </Layout>
      }
    />
    <Route path={NOPAGE} element={<NoPage />} />
  </Routes>
);
