import React, { Component } from 'react'
import { connect } from 'react-redux'

const scale = (domain, codomain) => ({x, y}) => ({
  x: (x - domain[0]) / (domain[1] - domain[0]) * 100,
  y: (codomain[1] - y) / (codomain[1] - codomain[0]) * 100
})

const generateSVG = (domain, codomain) => points =>
  points
    .map(scale(domain, codomain))
    .filter(({x, y}) =>
      !isNaN(x) && !isNaN(y) &&
      x !== Infinity && x !== -Infinity &&
      y !== Infinity && y !== -Infinity)
    .reduce((acc, {x, y}) => acc + ` ${x},${y}`, '')

const smallDiff = d => (a, b) => Math.abs(b - a) <= d

const move = (from, to) => {
  switch (typeof from) {
    case 'string':
      return to
    case 'number':
      return from + (to - from) * .1
    case 'object':
      if (from.length !== undefined) { // Array
        return from.map((e, i) => move(e, to[i]))
      } else {
        return Object.keys(from)
          .reduce((acc, key) => ({
            ...acc,
            [key]: move(from[key], to[key])
          }), {})
      }
    default:
      return to
  }
}

class Plot extends Component {
  constructor(props) {
    super(props)

    this.state = {
      domain: [-1, 1],
      codomain: [-1, 1],
      points: Array(100).fill({x: 0, y: 0}),
      updating: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.updating) {
      this.setState({ updating: true })
      requestAnimationFrame(this.update.bind(this))
    }
  }

  update() {
    const { domain, codomain, points } = this.props
    const smallXDiff = smallDiff((domain[1] - domain[0]) / 100)
    const smallYDiff = smallDiff((codomain[1] - codomain[0]) / 100)

    if (
      smallXDiff(domain[0], this.state.domain[0]) &&
      smallXDiff(domain[1], this.state.domain[1]) &&
      smallYDiff(codomain[0], this.state.codomain[0]) &&
      smallYDiff(codomain[1], this.state.codomain[1])) {

      this.setState({
        domain,
        codomain,
        points,
        updating: false
      })
    } else {
      this.setState({
        domain: this.move('domain'),
        codomain: this.move('codomain'),
        points: this.move('points'),
      })

      requestAnimationFrame(this.update.bind(this))
    }
  }

  move(field) {
    return move(this.state[field], this.props[field])
  }

  render() {
    const { domain, codomain, points } = this.state

    return (
      <svg
        className="Project-004-plot abs-center"
        viewBox="0 0 100 100">
        <polyline
          points={generateSVG(domain, codomain)(points)}
          stroke="#f7410f"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none" />
      </svg>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state.plot
})

export default connect(
  mapStateToProps
)(Plot)
