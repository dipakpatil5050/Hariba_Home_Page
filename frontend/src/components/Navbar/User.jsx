import { useContext, useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
// import { useHistory } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

import Login from "../Login Page/Login";
import { Link } from "react-router-dom";
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
      className=" fixed inset-0 flex h-[10vh]  items-start min-[390px]:mt-14 mr-0 justify-end mb-6 z-50 rounded-lg  p-4 pt-4 sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6 bg-white p-5 rounded-lg min-[390px]:mt-7 ">
        {/* <ul className="space-y-4">Logout</ul> */}

        {isLoggedIn && (
          <Link to="/">
            <h1>user : {username}</h1>
            <button onClick={handleLogout}>
              <p className="text-xl flex items-center justify-center text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4">
                Logout <IoLogOutOutline className="ml-1" size={20} />
              </p>
            </button>
          </Link>
        )}
        <hr />

        {
          <Link to="/">
            <h1
              className="text-lg font-bold w-96 flex item-center
           justify-center text-black"
            >
              Logout
            </h1>
          </Link>
        }
      </div>
    </div>
  );
}
