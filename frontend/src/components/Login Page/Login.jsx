import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "./login.css";
import "./responsive.css";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [authData, setAuthData] = useState([]);

  // user static login validation

  // const handleLogin = () => {
  //   if (username === "admin" && password === "admin") {
  //     setIsAuthenticate(true);
  //     toast.success("Login successful!");
  //   } else {
  //     if (username != "admin") {
  //       toast.error("Invalid username");
  //     }
  //     if (password != "admin") {
  //       toast.error("Invalid password");
  //     }
  //   }
  // };.

  //Login validation from API

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        toast.success("Login successful!");
        setIsAuthenticate(true);
        // Perform additional actions after successful login, e.g., redirect to a dashboard
      } else {
        if (!users.some((u) => u.username === username)) {
          toast.error("Invalid username");
        }
        if (!users.some((u) => u.password === password)) {
          toast.error("Invalid password");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Error logging in. Please try again later.");
    }
  };

  return (
    <div>
      {isAuthenticate ? (
        <Layout />
      ) : (
        <div className="login-right login-main ">
          <div className="login-right-container">
            <div className="login-logo">
              <img
                src="https://haribadairyfarm.com/cdn/shop/files/hariba_Logo_PNG_300x.png?v=1663151859"
                alt=""
              />
            </div>
            <div className="login-center">
              <h2>Welcome back!</h2>
              <p className="text-gray-500 mt-6">Hey! Good to see to again.</p>
              <form className="inputs">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email or Username"
                />
                <div className="pass-input-div">
                  <input
                    value={password}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  ) : (
                    <FaEye
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  )}
                </div>
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">Remember me</label>
                  </div>
                  <a href="#" className="forgot-pass-link text-[#593808] ">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-6 flex items-center border-2 rounded-full justify-center ">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="border bg-[#251805] text-white hover:bg-white hover:text-black duration-500 ease-in-out"
                  >
                    LOGIN
                  </button>

                  {/*                                     
                  <button
                    onClick={handleLogin}
                    // className="bn632-hover bn28 text-[#251805] logBtn"
                    className="bg-[#251805] mt-5 hover:text-white logBtn hover:bg-white text-black border-black"
                  >
                    Login
                  </button> */}
                </div>
              </form>
            </div>
            <p className="login-bottom-p">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
