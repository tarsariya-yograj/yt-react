import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  const [timeInterval, setTimeInterval] = useState(false);
  const time = () => {
    if (timer > 60) {
      setHours(Math.floor(timer / 60))
    }
    setMinutes((timer - hours * 60) - 1);
    setSeconds(Math.floor(59));
    setTimeInterval(true)
  }

  useEffect(() => {
    let interval;
  
    if (timeInterval) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                setHours((prevHours) => {
                  if (prevHours > 0) {
                    return prevHours - 1;
                  } else {
                    clearInterval(interval);
                    return 0; 
                  }
                });
                return 59;
              }
            });
            return 59; 
          }
        });
      }, 1000);
    }
  
    return () => clearInterval(interval); 
  }, [timeInterval]);
  
  

  return (

    <div className="App">
      <h2 >countdown</h2>
      <input className='input' placeholder='enter time' onChange={(e) => setTimer(e.target.value)} />
      <button className='start' onClick={time}>Start</button>
      <h1 className='count'>{hours}:{minutes}:{seconds}</h1>
    </div>
  );
};

export default App;
