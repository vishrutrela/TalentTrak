import React from 'react';
import { NavLink } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
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
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white px-10 hover:text-gray-300">Home</a>
          <a href="#" className="text-white px-10 hover:text-gray-300">About</a>
          <a href="#" className="text-white px-10 hover:text-gray-300">Contact</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue focus:outline-none focus:ring focus:border-blue">
            Login
          </button>
          <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue focus:outline-none focus:ring focus:border-blue">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
