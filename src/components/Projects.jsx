//@ts-check

import React from "react";
import GradientText from "./GradientText";

//@ts-ignore
import letsFreelance from "../assets/lets-freelance.png";
//@ts-ignore
import sharingRecipe from "../assets/sharing-recipe.png";
//@ts-ignore
import manageInvoices from "../assets/manage-invoices.png";


//@ts-ignore
import react from "../assets/react.svg";
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
//@ts-ignore
import socketIo from "../assets/socket-io.svg";
//@ts-ignore
import stripe from "../assets/stripe.svg";
//@ts-ignore
import redux from "../assets/redux.svg";
//@ts-ignore
import cloudinary from "../assets/cloudinary.svg";
//@ts-ignore
import vitejs from "../assets/vitejs.svg";


/**
 * project object that holds the project information
 * @typedef {object} Project
 * @property {string} title - the title of the project (eg. todo app)
 * @property {string} description - the description about the project
 * @property {string} image - the image of the project
 * @property {object} duration - the duration of completing the project
 * @property {string} duration.from - the start of the project
 * @property {string} duration.to - the end of the project
 * @property {string[]} builtWith - the built with technologies (ICONS)
 * @property {object} url - the urls of the project
 * @property {string} url.live - the live url to the project
 * @property {string} url.source - the source url to the project (eg. github source code)
 */


/**
 * Display my top projects that i have made
 * @returns {React.JSX.Element}
 */
const Projects = () => {


    /**
     * projects array that hold my top projects
     * @type {Project[]}
     */
    const projects = [
        {
            title: "Freelancing platform",
            description: `Let's Freelance is a comprehensive freelancing and hiring platform, offering full functionality to connect freelancers with clients, similar to other leading freelancing platforms.`,
            image: letsFreelance,
            duration: {
                from: "Jun 2023",
                to: "Jul 2024"
            },
            builtWith: [
                typescript,
                react,
                tailwindCSS,
                reactQuery,
                redux,
                nodeJs,
                expressJs,
                mongodb,
                socketIo,
                stripe,
            ],
            url: {
                live: "https://lets-freelance.netlify.app",
                source: "https://github.com/RedouaneAjgagal/Lets-Freelance"
            }
        },
        {
            title: "Recipe sharing application",
            description: `The Recipe Sharing app is a full-stack application that allows users to post, rate, like, and comment on recipes, creating a vibrant community for food enthusiasts.`,
            image: sharingRecipe,
            duration: {
                from: "Apr 2023",
                to: "Jun 2024"
            },
            builtWith: [
                typescript,
                react,
                tailwindCSS,
                reactQuery,
                redux,
                nodeJs,
                expressJs,
                mongodb,
                cloudinary
            ],
            url: {
                live: "https://recipe-sharing-app-u63m.onrender.com",
                source: "https://github.com/RedouaneAjgagal/recipe-sharing-app"
            }
        },
        {
            title: "Invoice management application",
            description: `The Invoices app is designed to streamline invoice management, allowing users to effortlessly add, edit, delete, and mark invoices as paid.`,
            image: manageInvoices,
            duration: {
                from: "Feb 22, 2023",
                to: "Mar 5, 2024"
            },
            builtWith: [
                typescript,
                react,
                tailwindCSS,
                vitejs
            ],
            url: {
                live: "https://manage-invoices.netlify.app/invoices",
                source: "https://github.com/RedouaneAjgagal/invoices-app"
            }
        }
    ]

    return (
        <section className="flex flex-col gap-10 pt-4 border-t-2 border-zinc-800">
            <GradientText>
                <h2 className="font-serif font-medium text-4xl py-1">Projects</h2>
            </GradientText>
            <ul className="flex flex-col gap-8 text-left">
                {projects.map((project, index) => (
                    <li key={index} className="flex flex-col gap-3 border border-zinc-800 rounded-sm p-4 bg-neutral-900 xl:p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                            <div>
                                <img src={project.image} alt={project.title} className="rounded-sm object-left h-full lg:max-w-[16rem] lg:object-cover xl:max-w-[20rem]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-slate-400">{`${project.duration.from} - ${project.duration.to}`}</span>
                                <h3 className="text-xl font-semibold text-zinc-200 xl:text-2xl">{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="flex flex-col gap-3 mt-3">
                                    <span className="font-semibold text-slate-500 underline decoration-double underline-offset-2 decoration-stone-400">Built With</span>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {project.builtWith.map((technology, index) => (
                                            <div key={index} className="w-full h-full min-w-[3.25rem] max-w-[3.25rem] min-h-[3.25rem] max-h-[3.25rem] flex items-center justify-center bg-zinc-200/5 rounded-full">
                                                <img src={technology} className="w-full h-full max-w-[2rem] max-h-[2rem] rounded-sm" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-zinc-800 pt-4 mt-2 w-full font-medium">
                            <div>
                                <a href={project.url.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <div className="w-4 h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#e2e8f0">
                                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                        </svg>
                                    </div>
                                    <span>Live</span>
                                </a>
                            </div>
                            {/* <span>|</span> */}
                            <div>
                                <a href={project.url.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <div className="w-4 h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#e2e8f0">
                                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                        </svg>
                                    </div>
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects