import React from 'react'
import './App.css'
// import Form from './components/unit-20/Form'
import UserList from './components/unit-20/UserList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
        <UserList />
      </>
    )
  }
}

export default App
