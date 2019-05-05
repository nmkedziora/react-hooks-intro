import React, { useState, useEffect, useRef } from 'react';

const initialLocation = {
  latitude: null,
  longitude: null,
  speed: null,
};

export default function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(initialLocation);
  const isMounted = useRef(true);

  useEffect(() => {
    document.title = `I was clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      isMounted.current = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

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

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleGeolocation = event => {
    if (isMounted.current) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
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

      <h2>Network status</h2>
      <p>You're <strong>{status ? 'online' : 'offline'}</strong></p>

      <h2>Geolocation</h2>
      <p>Latitide is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : 0}</p>

      <h1>{isMounted.current}</h1>
    </>
  );
}
