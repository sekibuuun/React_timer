import React, { useEffect, useState } from 'react';

function Timer () {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [now, setNow] = useState<Date>(new Date())
  const [duration, setDuration] = useState<number>(60)

  useEffect(() => {
    if (isStarted) {
      setInterval(() => {
        setDuration(duration - Math.floor((new Date().getTime() - now.getTime()) / 1000))
      },1000)
      console.log('Timer component mounted')
    }
  }, [isStarted])

  const startTimer = () => {
    setIsStarted(true)
    setNow(new Date())
  }
  
  if (duration <= 0) {
    return (
      <div>
        <h1>Timer</h1>
        <p>Time's up!</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Timer</h1>
        {isStarted ? 
          null : 
          <div>  
            <input type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))}/>
            <button onClick={() => startTimer()}>Start</button>
          </div>
        }
        <p>{duration}</p>
      </div>
    )
  }
}

export default Timer