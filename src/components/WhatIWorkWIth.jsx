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
//@ts-ignore
import typescript from "../assets/typescript.svg";
import GradientText from "./GradientText";

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
            title: "React JS",
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
            title: "Node JS",
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
    ];

    /**
     * general skills
     * @type {Skill[]}
     */
    const generalSkills = [
        {
            title: "TypeScript",
            image: typescript,
            description: "TypeScript is a statically-typed superset of JavaScript that adds type safety to the language."
        }
    ];

    /**
     * Grab the frontend skills, backend skills and genearal skills in one array
     * @type {Skill[]}
     */
    const skills = [...generalSkills, ...frontendSkills, ...backendSkills];

    return (
        <section className="flex flex-col gap-10 pt-4 border-t border-zinc-800">
            <GradientText>
                <h2 className="font-serif font-medium text-4xl">What i work with</h2>
            </GradientText>
            <ul className="flex flex-col gap-4">
                {skills.map((skill, index) => (
                    <li key={index} className="flex gap-3 border border-zinc-800 rounded-sm p-4 bg-neutral-900 xl:p-5">
                        <div className="w-full h-full min-w-[3.5rem] max-w-[3.5rem] min-h-[3.5rem] max-h-[3.5rem] flex items-center justify-center bg-zinc-700 rounded-full">
                            <img src={skill.image} alt={`${skill.title} icon`} className="w-full h-full max-w-[2rem] max-h-[2rem] rounded-sm" />
                        </div>
                        <div className="py-1 text-left flex flex-col gap-1">
                            <h3 className="text-xl font-semibold text-zinc-200">{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default WhatIWorkWIth