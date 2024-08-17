//@ts-check

import React from "react"

//@ts-ignore
import envelopeIcon from "../assets/envelope.svg";


/**
 * Navbar component to show on mobile & desktop
 * @returns {React.JSX.Element}
 */
const Navbar = () => {

  return (
    <nav className="flex gap-6 items-center justify-center flex-col-reverse py-4 mx-4 border-b border-slate-700 sm:flex-row sm:justify-between">
      <div>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="border border-slate-500 bg-gray-800 rounded-full p-3">
            <div className="w-4 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#e2e8f0">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
            </div>
          </div>
          <span><a href="mailto:redouaneajgagal1@gmail.com">redouaneajgagal1@gmail.com</a></span>
        </div>
      </div>
      <div>
        <ul className="flex gap-6">
          <li><a href="https://www.linkedin.com/in/redouane-ajgagal" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li className="text-slate-500">|</li>
          <li><a href="https://twitter.com/redouaneajgagal" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li className="text-slate-500">|</li>
          <li><a href="https://github.com/RedouaneAjgagal" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar