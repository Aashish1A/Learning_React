import React from 'react'
import logo from "../../../assets/logo .svg"
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();
    
    return (
    <div className='w-full flex justify-between items-center py-4 px-[8%]'>
        <img src={logo} alt="" />
        <ul className='flex gap-5 py-2.5 px-7 rounded-4xl'>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button className='bg-black text-white py-3 px-6 border-0 rounded-2xl' onClick={() => {navigate("/about", {replace: true})}}>Get Started</button>
    </div>
  )
}

export default Navbar