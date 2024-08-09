//@ts-check

import React from "react";

/**
 * Wrap normal text with this component to have the gradient text color
 * @param {React.PropsWithChildren} props
 * @returns {React.JSX.Element}
 */
const GradientText = (props) => {
    return (
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-400">
            {props.children}
        </div>
    )
}

export default GradientText