import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <Hookswitcher />
    </div>
  );
};

const Hookswitcher = () => {
  const [color, setColor] = useState("gray");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`
      }}
    >
      <h1>React Hooks</h1>

      <button onClick={() => setColor("gray")}>Dark</button>
      <button onClick={() => setColor("white")}>Light</button>
      <button onClick={() => setFontSize(fs => fs + 2)}>Шрифт</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
