import React, { useState } from "react";

const Tooltip = () => {
  const [tooltipVisible, setTooltipVisible] = useState(null);

  const handleMouseEnter = (id) => {
    setTooltipVisible(id);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(null);
  };

  return (
    <div>
      <h2
        className="tooltip"
        onMouseEnter={() => handleMouseEnter("tooltip1")}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          Hover over me
          {tooltipVisible === "tooltip1" && (
            <div className="" data-layer="Content">
              This is a tooltip
            </div>
          )}
        </div>
      </h2>
      <p
        className="tooltip"
        onMouseEnter={() => handleMouseEnter("tooltip2")}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          Hover over me
          {tooltipVisible === "tooltip2" && (
            <div className="" data-layer="Content">
              This is another tooltip
            </div>
          )}
        </div>
      </p>
    </div>
  );
};

export default Tooltip;
