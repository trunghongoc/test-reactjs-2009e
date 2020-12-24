import React, { useState, useEffect, useMemo } from 'react'

const TestUseMemo = () => {
  const [count, setCount] = useState(1)
  const [name] = useState('Nguyễn Văn A')

  useMemo(() => {
    console.log('---useMemo')
    return name
  }, [name])

  useEffect(() => {
    console.log('---useEffect')
  }, [name])

  return (
    <>
      <h1>TestUseMemo</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    </>
  )
}

export default TestUseMemo
