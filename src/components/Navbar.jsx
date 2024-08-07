//@ts-check

import React, { useEffect } from "react";
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom";


/**
 * Navbar component to show on mobile & desktop
 * @returns {React.JSX.Element}
 * @example
 * // Mobile => display logo and burger menu, and toggle to show the navlinks
 * // Desktop => display the navbar with the logo, links and hide burger menu button
 */
const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const location = useLocation();

  /**
   * Toggle navigation menu to show/hide navigation links on mobile
   * @function
   * @type {React.MouseEventHandler<HTMLButtonElement>}
   * @returns {void}
   */
  const toggleNavMenuHandler = () => {
    setIsNavMenuOpen(prev => !prev);
  }


  useEffect(() => {
    if (isNavMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavMenuOpen]);

  /**
   * Close the nav bar menu whenever clicking on a link
   * @function
   * @type {React.MouseEventHandler<HTMLAnchorElement>}
   * @example
   * // CLICK ON CONTACT LINK => close the navbar
   */
  const closeNavbarMenuHandler = () => {
    setIsNavMenuOpen(false);
  }

  /**
   * boolean const to remove the blue navigation color on other pages beside the home page
   * @type {boolean}
   * @example
   * // HOME PAGE => blue navigation bar
   * // OTHER PAGES => white navigation bar
   */
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`p-4 w-full h-full flex flex-col ${isNavMenuOpen ? "" : "lg:grid lg:grid-cols-5 lg:p-0"}`}>
      <div className={`min-w-fit flex items-center justify-between gap-4 ${isNavMenuOpen ? "" : "md:gap-10 lg:gap-12 xl:gap-16 lg:col-span-3 lg:pl-10 xl:pl-16 2xl:gap-20"}`}>
        <div className="relative z-10">
          <Link to={"/"} className={`font-montserrat uppercase font-medium text-3xl ${isNavMenuOpen ? "text-slate-50" : "text-black"} sm:text-4xl`}>Ajgagal</Link>
        </div>
        <div className={`transition-all flex ${isNavMenuOpen ? "" : "sm:hidden"}`}>
          <button onClick={toggleNavMenuHandler} className={`relative z-10 w-8 h-7 flex items-center before:absolute before:left-1 before:top-1 before:w-6 before:h-1 before:rounded-full after:absolute after:bottom-1 after:left-1 after:w-6 after:h-1 after:rounded-full before:transition-all after:transition-all 
          ${isNavMenuOpen
              ? "before:bg-slate-50 after:bg-slate-50 before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:top-1/2 after:-translate-y-1/2 after:-rotate-45"
              : "before:bg-slate-700 after:bg-slate-700"}`
          }>
            <span className={`w-5 ml-1 h-1 rounded-full bg-slate-700  ${isNavMenuOpen ? "invisible" : "visible"}`}></span>
          </button>
        </div>
        <div className={`fixed left-0 min-h-svh bg-blue-500 w-full grid content-center ${isNavMenuOpen ? "top-0" : "-top-full sm:top-0 sm:static sm:min-h-min sm:bg-transparent"} transition-all`}>
          <ul className={`font-serif font-medium uppercase flex flex-col items-center w-full relative gap-8 text-lg md:text-xl ${isNavMenuOpen ? "" : "sm:flex-row sm:relative sm:gap-6 md:gap-8 xl:gap-12 2xl:gap-16"}`}>
            <li><NavLink onClick={closeNavbarMenuHandler} to="/" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline "}`}>Home</NavLink></li>
            <li className="min-w-fit"><NavLink onClick={closeNavbarMenuHandler} to="/about" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline"}`}>About Me</NavLink></li>
            <li><NavLink onClick={closeNavbarMenuHandler} to="/projects" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline"}`}>Projects</NavLink></li>
            <li className={`${isNavMenuOpen ? "" : "lg:hidden"}`}><NavLink onClick={closeNavbarMenuHandler} to="/contact" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4 sm:absolute sm:right-0 sm:top-0"}` : isNavMenuOpen ? "text-white" : "sm:no-underline sm:absolute sm:right-0 sm:top-0 lg:text-white lg:border-2 lg:px-4 lg:py-1 lg:border-white lg:rounded-tl-2xl lg:rounded-br-2xl lg:-top-1"}`}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
      <div className={`hidden ${isNavMenuOpen ? "" : `lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:pr-10 xl:pr-16 ${isHomePage ? "lg:bg-blue-500" : "lg:bg-slate-50"}`}`}>
        <ul className="flex gap-4 font-serif font-medium uppercase text-lg lg:text-xl">
          <li>
            <NavLink onClick={closeNavbarMenuHandler} to="/contact" className={`font- border-2 px-4 py-2  rounded-tl-2xl rounded-br-2xl ${isHomePage ? "text-slate-50 border-white" : "border-slate-600"}`}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar