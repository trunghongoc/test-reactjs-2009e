import React from 'react'
import './App.css'
import TodoApp from './components/TodoApp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
        <TodoApp />
      </>
    )
  }
}

export default App
