import React, { useEffect, useState } from 'react';

function Timer () {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [now, setNow] = useState<Date>(new Date())
  const [seconds, setSeconds] = useState<number>(10)

  useEffect(() => {
    if (isStarted) {
      setInterval(() => {
        const count = seconds - Math.floor((new Date().getTime() - now.getTime()) / (1000))
        console.log(count);
        setSeconds(count)
      }, 1000)
    }
    console.log('Timer component mounted')
  }, [isStarted])

  const startTimer = () => {
    setIsStarted(true)
    setNow(new Date())
  }

  return (
    <div>
      <h1>Timer</h1>
      {isStarted ? 
        null : 
        <div>  
          <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}/>
          <button onClick={() => startTimer()}>Start</button>
        </div>
      }
      <p>{seconds <= 0 ? "COMPLETE" : seconds}</p>
    </div>
  )
}

export default Timer