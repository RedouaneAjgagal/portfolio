//@ts-check

import React from "react";
import GradientText from "./GradientText";

//@ts-ignore
import reactCertificate from "../assets/React-Certificate.jpg";
//@ts-ignore
import nodejsCertificate from "../assets/NodeJS-Certificate.jpg";

/**
 * certificate object that holds the certificate information
 * @typedef {object} Certificate
 * @property {string} title - the title of the certificate (eg. ReactJS)
 * @property {string} pdfLink - the link to the certificate pdf
 * @property {string} image - the image of the certificate 
 */

/**
 * Display all my certificates
 * @returns {React.JSX.Element}
 */
const Certificates = () => {
    
    /**
     * certificates array that hold all my certificates
     * @type {Certificate[]}
     */
    const certificates = [
        {
            title: "React - The Complete Guide",
            image: reactCertificate,
            pdfLink: "https://www.udemy.com/certificate/UC-d36bf4ed-6701-4296-ad5f-2afadcc63c49"
        },
        {
            title: "NodeJS Tutorial and Projects",
            image: nodejsCertificate,
            pdfLink: "https://www.udemy.com/certificate/UC-31d4f8ed-1d39-4076-bd93-fc5011f769a3"
        }
    ];


    return (
        <section className="flex flex-col gap-10 pt-4 border-t-2 border-zinc-800">
            <GradientText>
                <h2 className="font-serif font-medium text-4xl py-1">My certificates</h2>
            </GradientText>
            <ul className="flex flex-col gap-4 text-left">
                {certificates.map((certificate, index) => (
                    <li key={index} className="flex justify-between gap-4 border border-zinc-800 rounded-sm p-4 bg-neutral-900 xl:p-5">
                        <div className="flex items-center gap-3">
                            <div className="w-full h-full min-w-[3.5rem] max-w-[3.5rem] min-h-[3.5rem] max-h-[3.5rem] flex items-center justify-center bg-zinc-700 rounded-full">
                                <img src={certificate.image} alt={`${certificate.title} icon`} className="w-full h-full max-w-[2rem] max-h-[2rem] rounded-sm object-cover" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-200 sm:text-xl">{certificate.title}</h3>
                        </div>
                        <div className="flex items-center">
                            <a href={certificate.pdfLink} target="_blank" rel="noopener noreferrer">
                                <div className="w-4 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#e2e8f0">
                                        <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Certificates