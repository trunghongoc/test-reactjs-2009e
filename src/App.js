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

  render() {
    const { contextValue } = this.state

    return (
      <MyGlobalContext.Provider value={contextValue}>
        <MyRef />

        <MyHOC />
      </MyGlobalContext.Provider>
    )
  }
}

export default App
