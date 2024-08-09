//@ts-check

import React from "react";
import Sidebar from "../components/Sidebar";


/**
 * Home page component
 * @returns {React.JSX.Element}
 */
const Home = () => {
  return (
    <div className="p-4 grid grid-cols-1 gap-4 text-center">
      <Sidebar />
    </div>
  )
}

export default Home