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
            <div className="py-4 w-full lg:mt-2">
                <button className="bg-gradient-to-l from-zinc-900 to-zinc-900 p-2 rounded-sm border border-zinc-800 w-full font-medium text-slate-300 uppercase md:to-zinc-800 md:from-zinc-900 md:from-70%">Get in touch</button>
            </div>
        </aside>
    )
}

export default Sidebar