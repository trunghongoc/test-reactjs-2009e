import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const count = useSelector(store => store.counterReducer.count)

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  )
}

export default Display
