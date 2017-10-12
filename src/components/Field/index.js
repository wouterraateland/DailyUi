import React, { Component } from 'react'

class Field extends Component {
  componentDidMount() {
    console.log('mounted')
  }
  render() {
    const { type: Type, ...props } = this.props

    return (
      <Type {...props} />
    )
  }
}

export default Field
