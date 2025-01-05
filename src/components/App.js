import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const [tooltip1, setTooltip1] = useState(false);
  const [tooltip2, setTooltip2] = useState(false);

  return (
    <div>
      {/* Tooltip for h2 */}
      <h2
        onMouseEnter={() => setTooltip1(true)}
        onMouseLeave={() => setTooltip1(false)}
        className="tooltip"
      >
        Hover over me
        {tooltip1 && <Tooltip>This is a tooltip</Tooltip>}
      </h2>

      {/* Tooltip for p */}
      <p
        onMouseEnter={() => setTooltip2(true)}
        onMouseLeave={() => setTooltip2(false)}
        className="tooltip"
      >
        Hover over me to see another tooltip
        {tooltip2 && <Tooltip>This is another tooltip</Tooltip>}
      </p>
    </div>
  );
};

export default App;
