import React from 'react'
import Counter from './Counter'

class MyRef extends React.Component {
  constructor() {
    super()
    this.myH2 = React.createRef()
    this.myCounter = React.createRef()
  }

  changeH2Color = () => {
    const h2 = this.myH2.current

    if (!h2.style.background || h2.style.background === 'red') {
      h2.style.background = 'green'
    } else {
      h2.style.background = 'red'
    }
  }

  componentDidMount() {
    this.changeH2Color()

    console.log(this.myCounter)
  }

  increment = () => {
    this.myCounter.current.increment()
  }

  render() {
    return (
      <>
        <h1>Sử dụng ref trong reactjs</h1>

        <h2 ref={this.myH2}>Ref với class component</h2>
        <button onClick={this.changeH2Color}>Thay đổi màu h2</button>

        <hr />
        <Counter ref={this.myCounter} />

        <hr />
        <button onClick={this.increment}>INCREMENT BY PARENT</button>
      </>
    )
  }
}

export default MyRef
