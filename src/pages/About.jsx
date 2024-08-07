//@ts-check

import React from "react";

//@ts-ignore
import aboutMeImage from "../assets/about-me-image.jpg";
import WhatIWorkWIth from "../components/WhatIWorkWIth";


/**
 * About page component displaying information about me
 * @returns {React.JSX.Element}
 */
const About = () => {



    return (
        <article className="min-h-dvh p-4 flex flex-col gap-10 sm:mt-4 lg:px-10 xl:px-16 2xl:px-32">
            <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-9 2xl:grid-cols-12 2xl:gap-12 2xl:min-h-[70dvh] 2xl:content-center">
                <div className="mb-4 sm:mb-0 lg:col-span-3">
                    <img src={aboutMeImage} alt="redouane ajgagal's image" className="w-full h-full max-h-[36rem] object-cover sm:max-w-[30rem]" />
                </div>
                <div className="flex flex-col sm:pt-4 lg:col-span-6 lg:gap-6 lg:py-8 2xl:col-span-9 2xl:py-12">
                    <h1 className="order-2 font-montserrat font-bold text-slate-700 text-5xl mt-1 mb-4 uppercase sm:mt-0 lg:order-1 lg:m-0 lg:text-6xl">About Me</h1>
                    <span className="order-1 font-montserrat font-semibold text-blue-600 text-lg content-center lg:font-bold lg:text-xl">Full-Stack Developer</span>
                    <p className="font-serif text-lg order-4 text-slate-500 tracking-wide leading-relaxed lg:text-xl lg:leading-relaxed xl:leading-loose 2xl:w-[80%]">My name is Redouane Ajgagal, a Full-Stack Developer passionate about turning ideas into dynamic and responsive web solutions using clean, efficient code. Proficient in React JS, Node.js, and MongoDB, with a focus on building scalable, user-friendly applications. Dedicated to continuous learning and adapting to the latest technologies to deliver top-notch web experiences.</p>
                </div>
            </section>
            <WhatIWorkWIth />
        </article>
    )
}

export default About