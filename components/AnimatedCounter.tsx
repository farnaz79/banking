'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div className='w-full font-bold text-xl'>
      <CountUp
       end={amount}
       prefix="$"
       decimal=","
       decimals={2}
      />
    </div>
  )
}

export default AnimatedCounter
