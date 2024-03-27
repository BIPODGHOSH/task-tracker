import React from "react";
import Home from "./component/Home";
import "./App.css";

const App = () => {
  return (
    <div
      className="min-h-screen w-screen"
      style={{ background: "linear-Gradient(90deg, #efd5ff 0%, #515ada 100%)" }}
    >
      <Home />
    </div>
  );
};

export default App;
