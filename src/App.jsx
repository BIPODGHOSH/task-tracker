import React from "react";
import Home from "./component/Home";
import "./App.css";

const App = () => {
  return (
    <div
      className="min-h-screen w-screen"
      style={{
        background: "linear-Gradient(90deg, #efd5ff 0%, #515ada 100%)",
      }}
    >
      <h1 className="text-3xl font-bold mb-4 text-center ">Task Board</h1>
      <Home />
    </div>
  );
};

export default App;
