import { useContext, useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
// import { useHistory } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

import Login from "../Login Page/Login";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export default function User() {
  const { isLoggedIn, login, logout, username } = useLogin();

  //   const history = useHistory();

  //   const { logout } = useContext(useLogin);

  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    logout(); // Call logout function from LoginContext
    // Redirect to the login page after logout
    // history.pushState({ login });
  };

  return (
    <div
      className=" fixed inset-0 flex h-[10vh]   items-start min-[390px]:mt-14 mr-0 justify-end mb-6 z-50 rounded-lg  sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6 bg-white p-5 rounded-lg min-[390px]:mt-7 ">
        <Link to="/">
          <h1
            className="text-lg font-bold w-96 flex item-center
           justify-center text-black"
          >
            <FaPowerOff
              size={20}
              className="flex items-center justify-center"
            />
            <span className="pl-2 font-bold"> Logout</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
