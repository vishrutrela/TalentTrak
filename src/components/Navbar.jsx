import React from 'react';
import { NavLink } from "react-router-dom"
import './Navbar.css'
import { SignInButton, SignUpButton, SignOutButton } from '@clerk/clerk-react';
import { useUser } from "@clerk/clerk-react"
const Navbar = () => {
  const { isSignedIn, user } = useUser();
  return (
    <nav className="bg-white p-4 ">
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
          <NavLink to={
            isSignedIn?('/post-job'):('/sign-in')
          } 
          className="py-1 px-4  ml-5 rounded-md  shadow-md shadow-gray-300"> Post job</NavLink>
          <NavLink to="/salary" className="py-1 px-4  ml-5 rounded-md  shadow-md shadow-gray-300">Salary Estimate</NavLink>
          <NavLink to={isSignedIn?('/my-job'):('/sign-in')} className="py-1 px-4  ml-5 rounded-md  shadow-md shadow-gray-300">My job</NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="">
          {
            isSignedIn? 
            (<div className='bg-blue-500 text-white font-semibold px-6 py-2 rounded sm mb-4'>
              <SignOutButton/>

            </div>):
            (<div className='flex justify-between w-[210px]  '>
              <div className='bg-blue-500 text-white font-semibold px-6 py-2 rounded sm mb-4'><SignInButton /></div>
              <div className='bg-blue-500 text-white font-semibold px-6 py-2 rounded sm mb-4'><SignUpButton /></div>

            </div>)
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
