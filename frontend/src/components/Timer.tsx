import React, { useEffect, useState } from 'react';

function Timer () {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<Date>(new Date())
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    if (isStarted) {
      setInterval(() => {
        const newSeconds = seconds - Math.floor((new Date().getTime() - startTime.getTime()) / (1000))
        console.log(newSeconds);
        setSeconds(newSeconds)
      }, 1000)
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
      <p>{seconds <= 0 ? "COMPLETE" : `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</p>
    </div>
  )
}

export default Timer