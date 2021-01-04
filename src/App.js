import React, { useState, useEffect } from 'react'
import { MyGlobalContext } from './context/MyGlobalContext'
import axios from 'axios'
// import ClipLoader from 'react-spinners/ClipLoader'
// import UserList from './components/unit-23/UserList'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
// import TestUseMemo from './components/unit-24/TestUseMemo'
// import MyTable from './components/unit-24/Table'
// import { Select } from 'antd'
// import Form from './components/unit-26/Form'
import Counter from './components/unit-27/Counter'
import Display from './components/unit-27/Display'
import User from './components/unit-27/User'

import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  // const h1 = useRef(null)
  const [,setLoading] = useState(true)
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

  return (
    <Provider store={store}>
      <MyGlobalContext.Provider value={gContext}>
        {/* <Form /> */}
        <Counter />
        <Display />
        <User />
      </MyGlobalContext.Provider>
    </Provider>
  )
}

export default App
