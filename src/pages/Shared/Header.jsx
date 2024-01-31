import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const navItems = <>

       <li> <Link to ='/' >Home</Link>  </li>
       
        <li> <Link to ='/menu' >Menu</Link>  </li>
        <li> <Link to ='/order' >Order Food </Link>  </li>

  
  </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {navItems}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Restaurant Management</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Header;