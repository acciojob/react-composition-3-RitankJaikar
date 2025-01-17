import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="tooltiptext" data-layer="Content">
          {text}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Tooltip App</h1>
      <h2 className="tooltip">
        <Tooltip text="This is a tooltip">
          <div>Hover over me!</div>
        </Tooltip>
      </h2>
      <p className="tooltip">
        <Tooltip text="This is another tooltip">
          <div>Hover over me too!</div>
        </Tooltip>
      </p>
    </div>
  );
};

export default App;
