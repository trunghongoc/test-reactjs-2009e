import React, { useState, useMemo, useReducer } from 'react'

const myReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.number
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const TestUseMemo = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 2, name: 'Nguyễn Văn A' })

  return (
    <>
      <h1>TestUseMemo</h1>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', number: 1 })}>INCREMENT COUNT</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', number: 2 })}>INCREMENT COUNT</button>
    </>
  )
}

export default TestUseMemo
