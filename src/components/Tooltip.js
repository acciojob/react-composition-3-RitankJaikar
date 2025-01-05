import React from "react";

export default function Tooltip({children}) {
    return (
        <div className="tootip ">
            <p className="tooltiptext">{children}</p>
        </div>
    )
}