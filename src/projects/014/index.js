import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const MAX_NUMBER = 30

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: MAX_NUMBER,
      counting: false,
      timer: null
    }
  }

  componentDidMount() {
    this.update()
  }

  componentWillUnmount() {
    if (this.state.timer !== null) {
      clearTimeout(this.state.timer)
    }
  }

  start() {
    this.setState({ counting: true })
  }

  stop() {
    this.setState({ counting: false })
  }

  update() {
    if (this.state.counting) {
      this.setState({
        number: Math.max(0, this.state.number - 1),
        timer: setTimeout(this.update.bind(this), 4500 / MAX_NUMBER),
      })
    } else {
      this.setState({
        number: Math.min(this.state.number + 1, MAX_NUMBER),
        timer: setTimeout(this.update.bind(this), 1000 / MAX_NUMBER),
      })
    }
  }

  render() {
    const { number } = this.state
    const start = this.start.bind(this)
    const stop = this.stop.bind(this)

    return (
      <div className="Project-014" onMouseEnter={start} onMouseLeave={stop}>
        <div className="Project-014-container abs-center">
          <div className="Project-014-sand">
            <div className="Project-014-number abs-center">{number}</div>
          </div>
        </div>
        <div className={classNames('Project-014-timeover', 'abs-center', { 'finished': number <= 1})}>
          Finished
        </div>
      </div>
    )
  }
}

export default Project
