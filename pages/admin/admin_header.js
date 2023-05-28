import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
         
          {/* Logo */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src="/img/logo.png" alt="Logo" style={{ height :40, width:200}} /> 
          </div>
          
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              {/* Demo Pages */}
              <li className="flex items-center">
                <IndexDropdown />
              </li> 

              {/* Admi Profile  */}      
              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className=""></i> My Profile
                </button>
              </li>

            </ul>

          </div>


        </div>
      </nav>
      
    </>
  );
}
