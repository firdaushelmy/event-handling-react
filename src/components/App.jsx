import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeaderText(name);
    console.log(name);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onChange={handleChange}
        onClick={handleClick}
        value={name}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
