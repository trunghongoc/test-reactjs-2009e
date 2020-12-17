import React, { useState } from 'react'
import Form from './components/unit-22-home/functionComponents/Form'

const App = () => {
  const [isShowForm, setIsShowForm] = useState(true)

  return (
    <>
      <h1>My Component</h1>
      {
        isShowForm &&
        <Form />
      }

      <button onClick={() => setIsShowForm(!isShowForm)}>TOGGLE SHOW FORM</button>
    </>
  )
}

export default App
