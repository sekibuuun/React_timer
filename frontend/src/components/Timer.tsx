import React, { useEffect, useState } from 'react';

function Timer () {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [now, setNow] = useState<number>(new Date().getTime())
  const [duration, setDuration] = useState<number>(10)

  useEffect(() => {
    setInterval(() => {
      setDuration(duration - Math.floor((new Date().getTime() - now) / 1000))
    },1000)
    console.log('Timer component mounted')
  }, [])

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
        <p>{duration}</p>
      </div>
    )
  }
}

export default Timer