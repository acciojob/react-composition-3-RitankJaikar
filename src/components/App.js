
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const [tooltip1, setTooltip1] = useState(false);
  const [tooltip2, setTooltip2] = useState(false);

  return (
    <div>
        <h2 onMouseEnter={() => setTooltip1(true)} onMouseLeave={() => setTooltip1(false)} className="tooltip">
          <div><div>Hover over me</div></div>
          {tooltip1 && <Tooltip>This is a tooltip</Tooltip>}
        </h2>
        
        <p onMouseEnter={() => setTooltip2(true)} onMouseLeave={() => setTooltip2(false)} className="tooltip">
          <div><div>Hover over me to see another tooltip</div></div>
          {tooltip2 && <Tooltip>This is another tooltip</Tooltip>}
        </p>
    </div>
  )
}

export default App
