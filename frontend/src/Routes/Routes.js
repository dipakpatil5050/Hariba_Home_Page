import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login Page/Login";

// EXPORTING ROUTES
export const LOGIN = "/";
export const HOME = "/home";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const PRODUCTS = "/products";
export const CLIENTS = "/clients";
export const CART = "/cart";
export const NOPAGE = "/*";

export const router = createBrowserRouter([
  { path: LOGIN, element: <Login /> },
]);
