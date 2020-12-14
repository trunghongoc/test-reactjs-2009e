import React from 'react'
import './App.css'
// import Form from './components/unit-20/Form'
// import UserList from './components/unit-20/UserList'
import MyRef from './components/unit-21/MyRef'
import MyHOC from './components/unit-21/HOC'
import { MyGlobalContext } from './context/MyGlobalContext'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: {
        name: 'Nguyễn Văn A',
        age: 12
      }
    }
  }

  render() {
    return (
      <MyGlobalContext.Provider value={this.state.value}>
        <MyRef />

        <hr />
        <MyHOC />
      </MyGlobalContext.Provider>
    )
  }
}

export default App
