'use client'
import React from 'react'
import CountUp from 'react-countup';

const Counter = ({duration,end,className}) => {
  return (
    <CountUp className={className} duration={duration} end={end} />
  )
}

export default Counter