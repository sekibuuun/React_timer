import React from 'react'

const TimeDisplay = ({ seconds }: { seconds: number }) => {
  return (
    <p>{Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}</p>
  )
}

export default TimeDisplay