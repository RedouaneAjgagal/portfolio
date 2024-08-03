//@ts-check

import React, { useEffect } from "react";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


/**
 * Navbar component to show on mobile & desktop
 * @returns {React.JSX.Element}
 * @example
 * // Mobile => display logo and burger menu, and toggle to show the navlinks
 * // Desktop => display the navbar with the logo, links and hide burger menu button
 */
const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

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

  return (
    <nav className={`w-full flex flex-col px-4 ${isNavMenuOpen ? "" : "sm:flex-row sm:items-center sm:gap-8 md:gap-16"}`}>
      <div className="min-w-fit flex items-center justify-between gap-4 h-16">
        <div className="relative z-10">
          <Link to={"/"} className={`font-medium text-xl ${isNavMenuOpen ? "text-slate-50" : "text-black"} sm:text-2xl`}>Redouane Ajgagal</Link>
        </div>
        <div className={`mt-1 transition-all flex ${isNavMenuOpen ? "" : "sm:hidden"}`}>
          <button onClick={toggleNavMenuHandler} className={`relative z-10 w-8 h-7 flex items-center before:absolute before:left-1 before:top-1 before:w-6 before:h-1 before:rounded-full after:absolute after:bottom-1 after:left-1 after:w-6 after:h-1 after:rounded-full before:transition-all after:transition-all 
          ${isNavMenuOpen
              ? "before:bg-slate-50 after:bg-slate-50 before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:top-1/2 after:-translate-y-1/2 after:-rotate-45"
              : "before:bg-slate-700 after:bg-slate-700"}`
          }>
            <span className={`w-5 ml-1 h-1 rounded-full bg-slate-700  ${isNavMenuOpen ? "invisible" : "visible"}`}></span>
          </button>
        </div>
      </div>
      <div className={`fixed left-0 min-h-svh bg-blue-500 w-full grid content-center ${isNavMenuOpen ? "top-0" : "-top-full sm:top-0 sm:static sm:min-h-min sm:bg-transparent"} transition-all`}>
        <ul className={`font-medium uppercase flex flex-col items-center w-full relative gap-8 text-lg ${isNavMenuOpen ? "" : "sm:flex-row sm:relative sm:mt-1 sm:gap-6 md:gap-12"}`}>
          <li><NavLink onClick={closeNavbarMenuHandler} to="/" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline"}`}>Home</NavLink></li>
          <li><NavLink onClick={closeNavbarMenuHandler} to="/about" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline"}`}>About Me</NavLink></li>
          <li><NavLink onClick={closeNavbarMenuHandler} to="/projects" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4"}` : isNavMenuOpen ? "text-white" : "sm:no-underline"}`}>Projects</NavLink></li>
          {/* <li><NavLink to="/contact" className={({ isActive }) => `text-slate-50 ${isActive ? "underline underline-offset-8 decoration-2 decoration-orange-500" : isNavMenuOpen ? "" : "sm:text-slate-800 sm:absolute sm:right-0 sm:top-0"}`}>Contact</NavLink></li> */}
          <li><NavLink onClick={closeNavbarMenuHandler} to="/contact" className={({ isActive }) => `${isActive ? `underline decoration-2 ${isNavMenuOpen ? "text-slate-50 decoration-orange-500 underline-offset-8" : "sm:text-sky-600 sm:decoration-sky-600 sm:underline-offset-4 sm:absolute sm:right-0 sm:top-0"}` : isNavMenuOpen ? "text-white" : "sm:no-underline sm:text-slate-800 sm:absolute sm:right-0 sm:top-0"}`}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar