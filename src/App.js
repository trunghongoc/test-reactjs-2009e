import React from 'react'
import './App.css'
// import TodoApp from './components/TodoApp'
import Form from './components/Form'
import UserList from './components/UserList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
        {
          false && <Form />
        }

        <UserList />
      </>
    )
  }
}

export default App
