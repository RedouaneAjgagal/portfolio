//@ts-check

import React from "react";

/**
 * @typedef {Object} GradientTextProps
 * @property {React.ReactNode} [children] - props children
 * @property {boolean} [autoLayout] - Auto layout ensures the text decoration applies statically or based on the viewport size.
 */

/**
 * A React component that uses auto-layout.
 * 
 * @param {GradientTextProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const GradientText = (props) => {

    return (
        <div className={`bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 from-40% to-zinc-600 ${props.autoLayout ? "md:bg-gradient-to-tr" : "lg:from-60%"}`}>
            {props.children}
        </div>
    )
}

export default GradientText