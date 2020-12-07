import React, { Component } from 'react'
import Input from './Input'
import Tags from './Tags'
import List from './List'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      currentTag: '',
      list: []
    }
  }

  setCurrentTag = tag => {
    this.setState({
      currentTag: tag
    })
  }

  addNewTask = item => {
    this.setState({
      list: [...this.state.list, item]
    })
  }

  removeTask = task => {
    this.setState({
      list: this.state.list.filter(item => item.uuid !== task.uuid)
    })
  }

  render() {
    const { currentTag, list } = this.state

    return (
      <>
        <h1>body</h1>
        <Input
          currentTag={currentTag}
          addNewTask={this.addNewTask}
        />

        <Tags
          currentTag={currentTag}
          setCurrentTag={this.setCurrentTag}
        />

        <List removeTask={this.removeTask} currentTag={currentTag} list={list} />
      </>
    )
  }
}

export default Body