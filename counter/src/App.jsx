import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
const time =() =>{
       if (timer>60){
        setHours(Math.floor(timer/60))}
       setMinutes((timer-hours*60)-1);
       setSeconds(Math.floor(59));
}


  return (

    <div className="App">
      <h2 >countdown</h2>
      <input className='input' placeholder='Input seconds' onChange={(e) => setTimer(e.target.value)} />
      <button className='start' onClick={time}>Start</button>
      <h1  className='count'>{hours}:{minutes}:{seconds}</h1>
    </div>
  );
};

export default App;
