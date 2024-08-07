//@ts-check

import React from "react";

//@ts-ignore
import reactSvg from "../assets/react.svg";
//@ts-ignore
import tailwindCSS from "../assets/tailwindcss.svg";
//@ts-ignore
import reactQuery from "../assets/react-query.svg";
//@ts-ignore
import nodeJs from "../assets/nodejs.svg";
//@ts-ignore
import expressJs from "../assets/express.svg";
//@ts-ignore
import mongodb from "../assets/mongodb.svg";

/**
 * skill object that holds the skill information
 * @typedef {Object} Skill
 * @property {string} title - The title of the skill (eg. ReactJS)
 * @property {string} description - The description about the skill
 * @property {string} image - The image of the skill (SVG)
 * 
 */

/**
 * Display my skills (ReactJS, TailwindCSS, etc..)
 * @returns {React.JSX.Element}
 */
const WhatIWorkWIth = () => {
    /**
     * Frontend skills
     * @type {Skill[]}
     */
    const frontendSkills = [
        {
            title: "React JS (with TS)",
            image: reactSvg,
            description: "React JS is a popular JavaScript library used for building user interfaces, particularly single-page applications."
        },
        {
            title: "TailwindCSS",
            image: tailwindCSS,
            description: "TailwindCSS is a utility-first CSS framework that provides a set of predefined classes to quickly style and design web interfaces."
        },
        {
            title: "React Query",
            image: reactQuery,
            description: "React Query is a powerful data-fetching library for React applications that simplifies data management, caching and background updates."
        }
    ];

    /**
     * backend skills
     * @type {Skill[]}
     */
    const backendSkills = [
        {
            title: "Node JS (with TS)",
            image: nodeJs,
            description: "Node.js is a runtime environment that allows developers to execute JavaScript on the server side."
        },
        {
            title: "Express JS",
            image: expressJs,
            description: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications."
        },
        {
            title: "MongoDB",
            image: mongodb,
            description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for easy scalability and efficient querying."
        },
    ]

    return (
        <section className="pt-4 pb-8">
            <h2 className="underline decoration-amber-300 decoration-double underline-offset-4 font-montserrat font-bold text-slate-700 text-2xl mt-1 mb-6 uppercase lg:mb-8 lg:text-4xl">What i work with</h2>
            <div className="flex flex-col gap-10 lg:gap-14">
                <div className="flex flex-col gap-2 lg:gap-4">
                    <h3 className="font-montserrat font-semibold text-blue-600 text-lg lg:text-xl">Client Side</h3>
                    <div className="flex flex-col gap-4 lg:gap-8">
                        {frontendSkills.map((frontendSkill, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={frontendSkill.image} alt={`${frontendSkill.title} SVG`} className="w-10 h-10" />
                                    <h4 className="font-medium text-2xl text-slate-800">{frontendSkill.title}</h4>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-serif tracking-wider text-lg">{frontendSkill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                    <h3 className="font-montserrat font-semibold text-blue-600 text-lg lg:text-xl">Server Side</h3>
                    <div className="flex flex-col gap-4 lg:gap-8">
                        {backendSkills.map((frontendSkill, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={frontendSkill.image} alt={`${frontendSkill.title} SVG`} className="w-10 h-10" />
                                    <h4 className="font-medium text-2xl text-slate-800">{frontendSkill.title}</h4>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-serif tracking-wider text-lg">{frontendSkill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIWorkWIth