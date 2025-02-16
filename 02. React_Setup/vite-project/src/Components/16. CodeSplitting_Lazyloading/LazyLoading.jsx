import React from "react";
import "./LazyLoading.css";
import { Outlet } from "react-router-dom";
import Home from "./Home.jsx";
import { Suspense } from "react";

const LazyLoading = () => {
  return (
    <div>
      <Home />
      <div className="p-4">
        <Suspense fallback={<h1 className="text-red-400 underline">Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default LazyLoading;
