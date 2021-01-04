import React from 'react'
import { useDispatch } from 'react-redux'
import { increment as incrementAction } from './../../redux/actions/counter'

const Counter = () => {
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementAction())
  }

  return (
    <>
      <h1>Sử dụng redux</h1>
      <button onClick={increment}>increment</button>
    </>
  )
}

export default Counter
