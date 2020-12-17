import React from 'react'

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state

    return (
      <>
        <h2>Current count: {count}</h2>
        <button onClick={this.increment}>INCREMENT</button>
      </>
    )
  }
}
