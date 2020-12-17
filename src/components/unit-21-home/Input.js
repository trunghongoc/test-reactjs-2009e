import React from 'react'
import Card from './Card'
import { MyGlobalContext } from './../../context/MyGlobalContext'


class Input extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }

  validate = value => {
    this.setState({
      errorMessage: ''
    })
    const { type, max } = this.props

    if (type === 'text' && value.length > max) {
      this.setState({
        errorMessage: `Field tối đa là ${max} ký tự`
      })
    }

    if (type === 'number' && value > max) {
      this.setState({
        errorMessage: `Field tối đa là ${max}`
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

  componentDidMount() {
    console.log('---this.context:', this.context)
  }

  render() {
    const { errorMessage, value } = this.state

    return (
      <div>
        <label>{this.props.label}</label>
        <input value={value} onChange={this.onChange} type={this.props.type} />

        {
          errorMessage &&
          <p style={{ color: 'red' }}>{errorMessage}</p>
        }
      </div>
    );
  }
}

Input.defautProps = {
  type: 'number'
}

const InputCardHOC = MyComponent => class _InputCard extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Card>
        <MyComponent {...this.props} />
        <MyComponent {...this.props} />
      </Card>
    );
  }
}
Input.contextType = MyGlobalContext

export default Input
export const InputCard = InputCardHOC(Input)
