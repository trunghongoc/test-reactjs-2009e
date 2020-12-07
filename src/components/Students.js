import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Students extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    const { students } = this.props

    return (
      <>
        <h1>List users</h1>
        <button onClick={this.props.getGreaterThan5}>Hiển thị danh sách điểm > 5</button>
        <ul>
          {
            students.map(student => {
              return <li key={student.id}>{student.id} | {student.name} | {student.score}</li>
            })
          }
        </ul>
      </>
    )
  }
}

Students.propTypes = {
  students: PropTypes.array,
  getGreaterThan5: PropTypes.func.isRequired
}

Students.defaultProps = {
  students: []
}

export default Students
