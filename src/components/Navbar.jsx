import React from 'react';
import { NavLink } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between w-11/12">
        <div className="flex flex-shrink-0 items-center">

          <NavLink to="/">
            <div className='content'>
              <h2>TalentTrak</h2>
              <h2>TalentTrak</h2>
            </div>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12">
          <NavLink to="/post-job"> Post job</NavLink>
          <NavLink to="/salary">Salary Estimate</NavLink>
          <NavLink to="/my-job">My job</NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue">
            Login
          </NavLink>
          <NavLink  to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue">
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
