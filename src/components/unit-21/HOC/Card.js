import React from 'react'

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid green', padding: '10px' }}>
        {this.props.children}
      </div>
    )
  }
}
