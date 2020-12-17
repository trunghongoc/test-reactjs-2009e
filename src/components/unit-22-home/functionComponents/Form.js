import React, { useState, useEffect } from 'react'
// import Input from './Input'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    console.log('-- lần đầu component được render')

    return () => {
      console.log('--- component đã bị xóa')
    }
  }, [])

  useEffect(() => {
    console.log('-- name hoặc score bị thay đổi')
  }, [name, score])

  return (
    <>
      <h1>My form</h1>

      <div>
        <span>Nhập tên: </span>
        <input value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <span>Nhập tuổi: </span>
        <input value={age} onChange={event => setAge(event.target.value)} />
      </div>

      <div>
        <span>Nhập điểm: </span>
        <input value={score} onChange={event => setScore(event.target.value)} />
      </div>
    </>
  )
}

export default Form
