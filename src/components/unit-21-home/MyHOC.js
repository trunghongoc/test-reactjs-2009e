import React from 'react'
import Input, { InputCard } from './Input'
import MyHOCContext from './MyHOCContext'
export default class MyHOC extends React.Component {
  state = {
    student: {
      name: 'Nguyễn Văn B',
      score: 9
    }
  }

  render() {
    return (
      <MyHOCContext.Provider value={this.state.student}>
        <div style={{ marginTop: '50px' }}>
          <Input type="text" label="Nhập tên" max={10} />

          <InputCard type="number" label="Nhập Tuổi" max={20} />
        </div>
      </MyHOCContext.Provider>
    );
  }
}
