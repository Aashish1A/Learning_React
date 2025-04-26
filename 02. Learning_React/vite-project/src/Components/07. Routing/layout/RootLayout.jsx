import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
