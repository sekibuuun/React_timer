import React, { useState, useEffect } from "react";

export const useCountTime = () => {
    const [isStarted, setIsStarted] = useState<boolean>(false)
    const [startTime, setStartTime] = useState<Date>(new Date())
    const [seconds, setSeconds] = useState<number>(0)
    const isFinished = seconds === 0;

    useEffect(() => {
      if (isStarted) {
        const intervalID = setInterval(() => {
          const newSeconds = seconds - Math.floor((new Date().getTime() - startTime.getTime()) / (1000))
          setSeconds(newSeconds)
          if (newSeconds === 0) {
            clearInterval(intervalID)
            return
          }
        }, 1000)
  
        return () => {
          clearInterval(intervalID)
        }
      }
    }, [isStarted])
  
    const start = () => {
      setIsStarted(true)
      setStartTime(new Date())
    }

    return { isStarted, isFinished, seconds, setSeconds, start }
}