//@ts-check

import React from "react";
// @ts-ignore
import manImage from "../assets/man.png";
import { Link } from "react-router-dom";



/**
 * Home page component
 * @returns {React.JSX.Element}
 */
const Home = () => {
  return (
    <div className="grid h-full min-h-dvh lg:grid-cols-5">
      <section className="text-center py-12 px-4 gap-8 bg-blue-500 mt-1 items-center col-span-3 grid min-[560px]:text-start min-[560px]:grid-cols-2 sm:px-8 lg:gap-0 lg:text-start lg:py-0 lg:grid-cols-2 lg:mt-0 lg:bg-slate-50 lg:mb-24 lg:px-10 xl:px-16 2xl:flex-row">
        <div className="flex flex-col gap-2 min-[1836px]:ml-16 lg:gap-0">
          <span className="text-slate-100 uppercase font-montserrat font-medium lg:text-slate-500 decoration-double decoration-blue-400 underline-offset-0 text-lg xl:text-xl">Full-Stack Developer</span>
          <h1 className="text-6xl text-slate-50 font-medium font-serif sm:text-7xl lg:text-slate-800 lg:text-6xl xl:text-7xl 2xl:text-8xl">Redouane Ajgagal</h1>
        </div>
        <div className="flex items-center justify-center px-8 min-[560px]:px-0">
          <img src={manImage} alt="redouane ajgagal picture" className="2xl:min-h-[28rem] 2xl:max-h-[28rem] 2xl:min-w-[28rem] 2xl:max-w-[28rem] xl:min-h-[24rem] xl:max-h-[24rem] xl:min-w-[24rem] xl:max-w-[24rem] lg:min-h-[19rem] lg:max-h-[19rem] lg:min-w-[19rem] lg:max-w-[19rem] object-contain rounded-b-full border-b-8 rounded-full border-slate-50 lg:border-blue-500" />
        </div>
      </section>
      <section className="col-span-3 text-center flex flex-col justify-center px-4 py-8 min-[560px]:text-start sm:px-8 lg:col-span-2 lg:p-0 lg:bg-blue-500 lg:px-10 xl:px-16">
        <div className="flex flex-col gap-4 lg:mb-24 min-[1836px]:mr-16">
          <h2 className="font-serif text-5xl text-slate-700 font-medium lg:text-slate-50 xl:text-5xl 2xl:text-6xl">About me</h2>
          <p className="font-montserrat text-slate-600 lg:text-slate-100 text-lg xl:text-xl 2xl:text-2xl">Full-Stack Developer passionate about turning ideas into dynamic and responsive web solutions with clean, efficient code.</p>
          <Link to="/about" className="w-full font-serif font-semibold self-start rounded-tl-3xl rounded-br-3xl hover:rounded-sm transition-all uppercase tracking-wide py-4 px-6 text-slate-50 bg-blue-500 min-[560px]:w-fit lg:text-blue-500 lg:bg-slate-50 lg:py-3 lg:px-5 xl:px-6 xl:py-4">View More</Link>
        </div>
      </section>
    </div>
  )
}

export default Home