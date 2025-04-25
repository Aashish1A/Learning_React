import React, { useState } from "react";
import logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
import Model from "./Model";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-3 shadow-xl">
      <img src={logo} alt="logo" />
      <ul>
        <li className="flex gap-7">
          <NavLink to="/about" className={({isActive}) => isActive ?  "underline text-blue-600" : ''}>About</NavLink>
          <NavLink to="contact/" className={({isActive}) => {
            if(isActive) return " underline text-blue-600"
          }}>Contact</NavLink>
          <NavLink to="/support" className={({isActive}) => {
            if(isActive) return " underline text-blue-600"
          }}>Support</NavLink>
          <NavLink to="/signIn" className={({isActive}) => {
            if(isActive) return " underline text-blue-600"
          }}><button onClick={() => setIsOpen(true)}>Sign In</button></NavLink>
          <Model isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
      </ul>
    </div>
  );
};

export default Home;
