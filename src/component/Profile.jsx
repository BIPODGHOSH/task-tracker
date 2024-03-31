import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logout from "./Logout";
import Login from "./Login";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [showDetails, setShhowDetails] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const handleLogin = () => {
    setShhowDetails(!showDetails);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className=" w-8 h-8  rounded-full cursor-pointer left-0">
          <Popup
            trigger={
              <img
                src={user.picture}
                alt={user.name}
                className=" rounded-full "
              />
            }
            position="bottom right "
            arrowStyle={{ display: "none" }}
            contentStyle={{
              backgroundColor: "#dfe2ef",
              minWidth: "300px",
            }}
          >
            <div className="flex flex-col justify-center items-center gap-5 py-5">
              <p>{user.email}</p>
              <img
                src={user.picture}
                alt={user.name}
                className=" rounded-full "
              />
              <h2 className="">
                Hi{" "}
                <span className=" text-lg font-semibold">
                  {user.given_name}
                </span>
              </h2>

              <Logout />
            </div>
          </Popup>
        </div>
      ) : (
        // <FaUserCircle size={30} onClick={() => loginWithRedirect()} />
        <Login />
      )}
    </>
  );
};

export default Profile;
