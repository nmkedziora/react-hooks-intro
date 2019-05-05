import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null});

  useEffect(() => {
    document.title = `I was clicked ${count} times`;
  },[count]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  },[]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

   const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
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
          fontSize: '12px',
        }}
        onClick={toggleLight}
      >click to toggle
      </div>

      <h2>Mouse position</h2>
        <p>x: {mousePosition.x}</p>
        <p>y: {mousePosition.y}</p>
    </>
  );
}
