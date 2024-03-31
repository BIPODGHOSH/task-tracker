import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className=" px-2 py-1 bg-black rounded-md text-white font-medium"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default Login;
