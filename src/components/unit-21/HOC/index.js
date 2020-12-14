import React from 'react'
import Input from './Input'

export default class MyHOC extends React.Component {
  render() {
    return (
      <>
        <h1>Sử dụng HOC trong reactjs</h1>

        <Input
          type="text"
          max="10"
          label="Nhập tên"
        />

        <Input
          type="number"
          max={10}
          label="nhập tuổi"
        />
      </>
    )
  }
}
