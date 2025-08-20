import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="w-6xl  navbar navbar-end mx-auto pl-10">
  
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-base-300">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/career">Career</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-3 w-fit ml-70">
    <img src="/src/assets/user.png" alt="User" className="h-8 w-8 rounded-full" />
    <a className="btn bg-primary text-white font-semibold">Log In</a>
  </div>
</div>
    );
};

export default Navbar;