import React, { Component } from 'react'

class Table extends Component {
  constructor() {
    super()
    this.state = {
      bg: 'red',
      count: 0,
      students: [
        { id: 1, name: "Nguyễn Văn A", scrore: 9.2 },
        { id: 2, name: "Nguyễn Thị B", scrore: 7.3 },
        { id: 3, name: "Trần Văn C", scrore: 8.2 },
      ],
      headerBg: 'red'
    }
  }

  filterGeaterthan8 = () => {
    this.setState({
      students: this.state.students.filter(student => student.scrore > 8)
    })
  }

  render() {
    const { students } = this.state

    return (
      <div className="menu">

        <button onClick={this.filterGeaterthan8}>Hiển thị những SV có điểm lớn hơn 8</button>

        <table border="1">
          <thead style={{ backgroundColor: this.state.headerBg }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {
              students.map((student, index) => {
                return <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.scrore}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
