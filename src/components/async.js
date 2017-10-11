import React, { Component } from 'react'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null,
      }
    }

    async componentDidMount() {
      let component = null
      try {
        component = (await importComponent()).default
      } catch(e) {
        console.log(e)
      }

      this.setState({ component })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
