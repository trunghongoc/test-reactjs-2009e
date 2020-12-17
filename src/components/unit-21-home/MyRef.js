import React from 'react'
import Counter from './Counter'

export default class MyRef extends React.Component {
  myH2 = React.createRef()
  myCounter = React.createRef()

  changeColor = () => {
    const h2 = this.myH2.current

    if (!h2.style.background || h2.style.background === 'red') {
      h2.style.background = 'green'
    } else {
      h2.style.background = 'red'
    }
  }

  componentDidMount() {
    this.changeColor()
  }

  increment = () => {
    this.myCounter.current.setState({
      count: 1024
    })
  }

  render() {
    return (
      <>
        <h2 ref={this.myH2}>Đây là thẻ h2</h2>
        <button onClick={this.changeColor}>Đổi màu</button>
        <Counter ref={this.myCounter} />
        <button onClick={this.increment}>INCREMENT FROM PARENT</button>
      </>
    );
  }
}
