import React from 'react'
import "./assets/main.scss"
import Table from './components/Table'

class App extends React.Component {
  render() {
    return (<div>
      <Table />
      <Table />
      <Table />
    </div>)
  }
}

export default App
