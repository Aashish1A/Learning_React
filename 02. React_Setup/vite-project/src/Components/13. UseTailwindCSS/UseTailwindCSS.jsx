import React from "react";
import "./UseTailwindCSS.css";
import { Outlet } from "react-router-dom";
import Home from "./Home.jsx";

const UseTailwindCSS = () => {
  return (
    <div>
      <Home />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UseTailwindCSS;
