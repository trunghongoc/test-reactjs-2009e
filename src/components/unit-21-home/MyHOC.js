import React from 'react'
import Input, { InputCard } from './Input'

export default class MyHOC extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <Input type="text" label="Nhập tên" max={10} />

        <InputCard type="number" label="Nhập Tuổi" max={20} />
      </div>
    );
  }
}
