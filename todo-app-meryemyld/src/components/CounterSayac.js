import React from 'react'
import { useSelector } from 'react-redux'

const CounterSayac = () => {
  const {counter}= useSelector (state=> state)
  return (
    <h1 className='d-flex justify-content-center'>{counter}</h1>
  )
}

export default CounterSayac