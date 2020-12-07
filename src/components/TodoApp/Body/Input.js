import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      value
    })
  }

  onClick = () => {
    if (!this.state.value.trim()) {
      return alert('Hãy nhập nội dung task')
    }

    if (!this.props.currentTag) {
      return alert('Hãy chọn 1 tag')
    }

    // Add task
    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      uuid: uuid()
    })
  }

  render() {
    const { value } = this.state

    return (
      <>
        <input type="text" value={value} onChange={this.handleChange} />
        <button onClick={this.onClick}>add</button>
      </>
    )
  }
}

export default Input