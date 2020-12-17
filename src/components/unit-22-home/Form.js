import React from 'react'
import Input from './Input'
import FormContext from './FormContext'

class Form extends React.Component {
  state = {
    student: {
      name: 'Phạm Băng Băng',
      className: 'KHMT1',
      score: 3.2
    }
  }

  render() {
    const { student } = this.state

    return (
      <FormContext.Provider value={student}>
        <h1>Form data</h1>
        <Input />
      </FormContext.Provider>
    )
  }
}

export default Form
