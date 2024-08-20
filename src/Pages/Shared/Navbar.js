import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/appointment">Appointment</Link>
      </li>
      <li>
      <Link to="/review">Review</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Doctors Appointment</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      {/* <div class="navbar-end">
        <a class="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
