import React from 'react'
import './App.css'
// import Form from './components/unit-20/Form'
// import UserList from './components/unit-20/UserList'
import MyRef from './components/unit-21-home/MyRef'
import MyHOC from './components/unit-21-home/MyHOC'

import { MyGlobalContext } from './context/MyGlobalContext'
class App extends React.Component {
  state = {
    contextValue: {
      name: 'Nguyen Van A',
      age: 20
    }
  }

  changeGlobalContextName = event => {
    const { value } = event.target
    this.setState({
      contextValue: {
        ...this.state.contextValue,
        name: value
      }
    })
  }

  changeAge = value => {
    this.setState({
      contextValue: {
        ...this.state.contextValue,
        age: value
      }
    })
  }

  render() {
    const { contextValue } = this.state


    return (
      <MyGlobalContext.Provider value={{ ...contextValue, changeAge: this.changeAge }}>
        <MyRef />

        <MyHOC />

        <input onChange={this.changeGlobalContextName} />
      </MyGlobalContext.Provider>
    )
  }
}

export default App
