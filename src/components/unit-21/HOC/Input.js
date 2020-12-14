import React from 'react'
import Card from './Card'
import { MyGlobalContext } from './../../../context/MyGlobalContext'

class Input extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }

  componentDidMount() {
    console.log(this.context)
  }

  validate = (value) => {
    this.setState({
      errorMessage: ''
    })
    const { type, max } = this.props

    if (type === 'text' && value.length > max) {
      this.setState({
        errorMessage: `Độ dài tối đa là ${max}`
      })
    }

    if (type === 'number' && value > max) {
      this.setState({
        errorMessage: `Giá trị tối đa là ${max}`
      })
    }
  }

  onChange = event => {
    const { value } = event.target

    this.validate(value)

    this.setState({
      value
    })
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          onChange={this.onChange}
          type={this.props.type || 'text'}
        />
        {
          this.state.errorMessage &&
          <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
        }
      </div>
    )
  }
}

const InputInCard = MyComponent => class _InputInCard  extends React.Component {
  render() {
    return (
      <>
        <Card>
          <MyComponent {...this.props} />
        </Card>
      </>
    )
  }
}

Input.contextType = MyGlobalContext
export default InputInCard(Input)
