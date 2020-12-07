import React, { Component } from 'react'
import './style.scss'
import Header from './Header'
import Body from './Body'

class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <Header />
        <Body />
      </div>
    )
  }
}

export default TodoApp