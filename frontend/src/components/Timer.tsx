import React from 'react';
import { useCountTime } from '../hooks/useCountTime';
import TimeDisplay from './TimeDisplay';

function Timer () {
  const { isStarted, seconds, setSeconds, start } = useCountTime()

  return (
    <div>
      <h1>Timer</h1>
      {isStarted ? 
        null : 
        <div>  
          <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}/>
          <button onClick={() => start()}>Start</button>
        </div>
      }
      {seconds <= 0 ? <p>COMPLETE</p> : <TimeDisplay seconds={seconds}/>}
    </div>
  )
}

export default Timer