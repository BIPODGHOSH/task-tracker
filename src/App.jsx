import React from "react";
import Home from "./component/Home";
import "./App.css";
import Profile from "./component/Profile";

const App = () => {
  return (
    <div
      className="min-h-screen w-screen"
      style={{
        background: "linear-Gradient(90deg, #efd5ff 0%, #515ada 100%)",
      }}
    >
      <div className="flex items-center justify-between px-10 py-5">
        <h1 className="text-3xl font-bold mb-4 text-center ">Task Board</h1>
        <Profile />
      </div>
      <Home />
    </div>
  );
};

export default App;
