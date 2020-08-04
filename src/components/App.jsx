import React, { useState } from 'react';

function App() {
  const [submitValue, setSubmitValue] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [isMouseOver, setMouseOver] = useState(false);

  function changeHandler(event) {
    setSubmitValue(event.target.value);
  }

  function clickHandler() {
    setHeaderText(submitValue);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className='container'>
      <h1>Hello {headerText}</h1>
      <input
        type='text'
        placeholder="What's your name?"
        value={submitValue}
        onChange={changeHandler}
      />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
        onClick={clickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
