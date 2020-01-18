import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value} />
        <Notofication />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>;
  }
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("useEffect()");
    return () => console.log("clear");
  }, [value]);

  return <p> {value} </p>;
};

const Notofication = () => {
  const [view, setView] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setView(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>{view && <p>упражнение</p>}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
