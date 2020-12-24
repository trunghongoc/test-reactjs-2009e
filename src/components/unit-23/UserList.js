import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Table, Tag, Button, Popconfirm, Tooltip } from 'antd'
import { UserOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { MyGlobalContext } from './../../context/MyGlobalContext'

const UserList = () => {
  const [users, setUsers] = useState([])
  const gContext = useContext(MyGlobalContext)

  const deleteUser = user => {
    const newUsers = users.filter(u => u.id !== user.id)
    setUsers(newUsers)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, row) => {
        if (row.id === gContext.user.id) {
          return (
            <Tag>
              <UserOutlined />&nbsp;
              {name}
            </Tag>
          )
        }

        return name
      }
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (cell, row) => {
        return (
          <>
            <Tooltip title="Xem chi tiết user">
              <Button shape="circle"><EyeOutlined /></Button>
            </Tooltip>

            <Button shape="circle"><EditOutlined /></Button>

            <Popconfirm
              title="Bạn chắc chắn muốn xóa user này?"
              onConfirm={() => deleteUser(row)}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button shape="circle" danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        )
      }
    },
  ]

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Danh sách users</h1>

      <Table rowKey="id" dataSource={users} columns={columns} />
    </div>
  )
}

export default UserList
