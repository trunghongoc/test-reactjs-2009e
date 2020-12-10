import React, { Component } from 'react'
import axios from 'axios'

class UserList extends Component {
  state = {
    users: [],
    currentUser: null
  }

  fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      users: response.data
    })
  }

  fetchUser = async user => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    this.setState({
      currentUser: response.data
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const { users, currentUser } = this.state

    return (
      <>
        <h1>User list</h1>
        <ul>
          {
            users.map(user => {
              return <li key={user.id} onClick={() => this.fetchUser(user)}>{user.name}</li>
            })
          }
        </ul>

        <h2>User info:</h2>
        {
          currentUser &&
          <p>{currentUser.phone}</p>
        }
      </>
    )
  }
}

export default UserList
