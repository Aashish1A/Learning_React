import React from 'react';
import Header from "./Header";
import { Outlet } from 'react-router-dom';

const Countries_API = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Countries_API;