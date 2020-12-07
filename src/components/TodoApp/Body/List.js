import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  renderList = () => {
    const { currentTag } = this.props

    let newList = this.props.list
    if (currentTag) {
      newList = this.props.list.filter(task => task.group === currentTag)
    }

    return newList
  }

  render() {
    const list = this.renderList()

    return (
      <div className="list">
        {
          list.map((task, index) => {
            return <div key={index}>
              <input type="checkbox" />
              <span>{task.name}</span>
              <button onClick={() => this.props.removeTask(task)}>x</button>
            </div>
          })
        }
      </div>
    )
  }
}

export default List