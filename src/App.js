import React, { useState, useEffect, useRef } from 'react'
import { MyGlobalContext } from './context/MyGlobalContext'
import axios from 'axios'
// import ClipLoader from 'react-spinners/ClipLoader'
// import UserList from './components/unit-23/UserList'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import TestUseMemo from './components/unit-24/TestUseMemo'
import MyTable from './components/unit-24/Table'

const App = () => {
  const h1 = useRef(null)
  const [loading, setLoading] = useState(true)
  const [gContext, setGContext] = useState({
    user: null
  })

  const getCurrentUser = id => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        const user = response.data
        setGContext({
          user
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    getCurrentUser(2)
  }, [])

  useEffect(() => {
    console.log(h1)
  }, [h1])

  return (
    <MyGlobalContext.Provider value={gContext}>
      <h1 ref={h1}>Buổi 24</h1>
      <MyTable />
    </MyGlobalContext.Provider>
  )
}

export default App
