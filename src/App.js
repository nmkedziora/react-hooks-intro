import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <>
      <h1>React Hooks intro</h1>

      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>

      <h2>Toggle light</h2>
      <div
        style={{
          height: '150px',
          width: '150px',
          background: isOn ? 'yellowgreen' : 'lightgrey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12px'
        }}
        onClick={toggleLight}
      >click to toggle
      </div>
    </>
  );
}
