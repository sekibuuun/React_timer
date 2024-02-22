import React, { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay';

function Timer () {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<Date>(new Date())
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    if (isStarted) {
      const intervalID = setInterval(() => {
        const newSeconds = seconds - Math.floor((new Date().getTime() - startTime.getTime()) / (1000))
        console.log(newSeconds);
        setSeconds(newSeconds)
        if (newSeconds === 0) {
          setIsStarted(false)
          clearInterval(intervalID)
          return
        }
      }, 1000)

      return () => {
        clearInterval(intervalID)
      }
    }
    console.log('Timer component mounted')
  }, [isStarted])

  const start = () => {
    setIsStarted(true)
    setStartTime(new Date())
  }

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