import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./login.css";
import "./responsive.css";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState([]);

  // const API_URL = "http://localhost:3000/users";

  // useEffect(() => {
  //   const fetchAuthData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(API_URL);
  //       const jsonData = await response.json();
  //       setAuthData(jsonData);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchAuthData();
  // }, []);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticate(true);
      toast.success("Login successful!");
    } else {
      if (username != "admin") {
        toast.error("Invalid username");
      }
      if (password != "admin") {
        toast.error("Invalid password");
      }
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
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email or Username"
                />
                <div className="pass-input-div">
                  <input
                    value={password}
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
                <div className="login-center-buttons">
                  <button
                    onClick={handleLogin}
                    className="bn632-hover bn28 text-[#251805] logBtn "
                  >
                    Login
                  </button>
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
