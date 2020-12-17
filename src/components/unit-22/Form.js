import React, { useState, useEffect } from 'react'

const Form = ({ color }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    console.log('lần đầu tiên render')

    return () => {
      console.log('Form đã bị gỡ khỏi DOM')
    }
  }, [])

  useEffect(() => {
    console.log('name bị thay đổi')
  }, [name])

  return (
    <>
      <h1>Tạo component bằng function</h1>
      <p>Nhập tên:</p>
      <input value={name} onChange={event => setName(event.target.value)} />

      <p>Nhập tuổi:</p>
      <input value={age} type="number" onChange={event => setAge(event.target.value)} />

      <p>Nhập điểm:</p>
      <input value={score} type="number" onChange={event => setScore(event.target.value)} />
    </>
  )
}

Form.defaultProps =  {
  color: 'red'
}

export default Form
