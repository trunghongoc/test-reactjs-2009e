import React from 'react'
import axios from 'axios'

class UserList extends React.Component {
  state = {
    users: []
  }

  fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.setState({
      users: response.data
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { users } = this.state

    return (
      <>
        <h1>Danh sách Users</h1>
        <ul>
          {
            users.map(user => {
              return <li key={user.id}>{user.name}</li>
            })
          }
        </ul>
      </>
    )
  }
}

export default UserList
