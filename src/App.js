import React from 'react'
import './App.css'
import Students from './components/Students'
import students, { fbUrl as myFbUrl } from './constants/menu'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students,
      isShowStudents: true
    }
  }

  getGreaterThan5 = () => {
    this.setState({
      students: this.state.students.filter(s => s.score > 5)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    console.log({
      oldState: this.state,
      nextState,
      oldProps: this.props,
      nextProps
    })
    return true
  }

  componentWillMount() {
    console.log("---componentWillMount")
  }

  componentDidMount() {
    console.log("---componentDidMount")
  }

  removeStudents = () => {
    this.setState({
      isShowStudents: false
    })
  }

  render() {
    console.log("-----render")

    return (
      <div>
        <button onClick={this.removeStudents}>Xóa Student</button>
        {
          this.state.isShowStudents &&
          <Students
            students={this.state.students}
            getGreaterThan5={this.getGreaterThan5} />
        }

        <Students getGreaterThan5={this.getGreaterThan5} />
      </div>
    )
  }
}

export default App
