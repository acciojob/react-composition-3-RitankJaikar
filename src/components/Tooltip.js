import React from "react";

export default function Tooltip({children}) {
    return (
        <div className="tootip" data-layer="Content">
            <p className="tooltiptext">{children}</p>
        </div>
    )
}