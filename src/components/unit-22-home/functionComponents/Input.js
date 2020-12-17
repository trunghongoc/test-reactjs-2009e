import React, { useState } from 'react'

const Input = ({ label }) => {
  const [name, setName] = useState('')

  return (
    <div>
      <span>{label}: </span>
      <input value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

Input.defaultProps = {
  color: 'red'
}

export default Input
