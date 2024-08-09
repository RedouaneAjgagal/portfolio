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
            <GradientText>
                <div className="flex flex-col gap-7 items-center">
                    <img src={myPicture} alt="redouane ajgagal picture" className="rounded-sm w-full max-w-[10rem]" />
                    <h1 className="text-5xl font-bold font-serif">I'm Redouane Ajgagal</h1>
                    <p className="text-lg font-medium">Full-Stack Developer passionate about turning ideas into dynamic and responsive web solutions with clean, efficient code.</p>
                </div>
            </GradientText>
            <div className="py-4 w-full">
                <button className="bg-gradient-to-l from-zinc-900 to-zinc-900 p-2 rounded-sm border border-zinc-800 w-full font-medium text-slate-300 uppercase">Get in touch</button>
            </div>
        </aside>
    )
}

export default Sidebar