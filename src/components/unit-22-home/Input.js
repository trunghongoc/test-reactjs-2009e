import React from 'react'
import { MyGlobalContext } from './../../context/MyGlobalContext'
import FormContext from './FormContext'

class Input extends React.Component {
  render() {
    return (
      <>
        <MyGlobalContext.Consumer>
          {
            globalContext => (
              <>
                <p>Name trong context của App:</p>
                <p>{globalContext.name}, {globalContext.age} tuổi</p>
                <button onClick={() => globalContext.changeAge(globalContext.age + 1)}>Tăng tuổi lên 1</button>

                <FormContext.Consumer>
                  {
                    formContext => (
                      <>
                        <p>Name trong context của Form:</p>
                        <p>{formContext.name}</p>
                      </>
                    )
                  }
                </FormContext.Consumer>
              </>
            )
          }
        </MyGlobalContext.Consumer>
      </>
    )
  }
}

// Input.contextType = MyGlobalContext

export default Input
