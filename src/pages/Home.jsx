//@ts-check

import React from "react";
import Sidebar from "../components/Sidebar";
import { GradientText } from "../components";
import WhatIWorkWIth from "../components/WhatIWorkWIth";


/**
 * Home page component
 * @returns {React.JSX.Element}
 */
const Home = () => {
  return (
    <div className="p-4 grid grid-cols-1 gap-4 text-center md:grid-cols-3 md:text-start lg:gap-10 lg:py-8 lg:grid-cols-6 xl:gap-20">
      <div className="col-span-1 lg:col-span-2 md:sticky md:top-0 md:h-fit 2xl:top-8">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-20 col-span-2 lg:col-span-4">
        <section className="hidden md:flex">
          <GradientText>
            <p className="font-medium font-serif text-3xl leading-relaxed lg:text-4xl lg:leading-relaxed">Passionate about turning ideas into dynamic and responsive web solutions using clean, efficient code. Proficient in React JS, Node.js, and MongoDB, with a focus on building scalable, user-friendly applications.</p>
          </GradientText>
        </section>
        <WhatIWorkWIth />
      </div>
    </div>
  )
}

export default Home