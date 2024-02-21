import * as React from "react";
import { useLogin } from "../contexts/LoginContext";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const { login, logout, isLoggedIn } = useLogin();
  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
        login();
        isLoggedIn(true);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
        logout();
        isLoggedIn(false);
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
