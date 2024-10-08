//@ts-check

import React from "react";
import GradientText from "./GradientText";

//@ts-ignore
import myPicture from "../assets/redouane-ajgagal.jpg"


/**
 * Sidebar component displaying some infotmation about me
 * @returns {React.JSX.Element}
 * @example
 * // Desktop size => displaying in the left side of the screen
 * // Mobile size => displaying in the top of the page
 */
const Sidebar = () => {


    /**
     * scroll down the page on click (to the contact form)
     * @returns {void}
     */
    const navigateToContactHandler = () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.body.scrollHeight
        });
    }

    return (
        <aside className="flex flex-col py-4">
            <GradientText autoLayout>
                <div className="flex flex-col gap-7 items-center md:items-start">
                    <img src={myPicture} alt="redouane ajgagal picture" className="rounded-sm w-full max-w-[11rem] md:max-w-[13rem] lg:max-w-[15rem]" />
                    <h1 className="text-6xl font-bold font-serif md:text-4xl lg:text-5xl">
                        I'm Redouane Ajgagal
                    </h1>
                    <p className="text-xl font-semibold max-w-[24rem]">Full-Stack Developer based in Agadir, Morocco.</p>
                    <p className="font-medium flex md:hidden">Passionate about turning ideas into dynamic and responsive web solutions using clean, efficient code. Proficient in React JS, Node.js, and MongoDB, with a focus on building scalable, user-friendly applications.</p>
                </div>
            </GradientText>
            <div className="flex flex-col gap-3 mt-2 lg:mt-4 lg:gap-2">
                <div className="flex mt-3 gap-3 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/redouane-ajgagal" target="_blank" rel="noopener noreferrer">
                        <div className="w-7 h-full text-neutral-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#737373">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </div>
                    </a>
                    <a href="https://twitter.com/redouaneajgagal" target="_blank" rel="noopener noreferrer">
                        <div className="w-7 h-full text-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#737373">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                            </svg>
                        </div>
                    </a>
                    <a href="https://github.com/RedouaneAjgagal" target="_blank" rel="noopener noreferrer">
                        <div className="w-7 h-full text-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#737373">
                                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="pb-2 w-full">
                    <button onClick={navigateToContactHandler} className="bg-gradient-to-l from-zinc-900  to-zinc-900 p-2 rounded-sm border border-zinc-800 w-full font-medium text-slate-300 uppercase md:to-zinc-800 md:from-zinc-900 md:from-70%">Get in touch</button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar