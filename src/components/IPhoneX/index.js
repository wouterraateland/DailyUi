import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const pad = prefix => s =>
  (prefix.repeat(2) + s).substr(-2)

const zeroPad = pad('0')

class DefaultLeftNotch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      interval: null
    }
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(this.update.bind(this), 1000)
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  update() {
    this.setState({ time: new Date() })
  }
  render() {
    const { time } = this.state
    return `${zeroPad(time.getHours())}:${zeroPad(time.getMinutes())}`
  }
}

const DefaultRightNotch = () => (
  <div className="IPhoneX-notch-icons">
    <div className="IPhoneX-notch-icon IPhoneX-connection-icon" />
    <div className="IPhoneX-notch-icon IPhoneX-WiFi-icon" />
    <div className="IPhoneX-notch-icon IPhoneX-battery-icon" />
  </div>
)

const IPhoneX = ({
  className,
  navContent=null,
  bodyContent=null,
  leftNotch=<DefaultLeftNotch />,
  rightNotch=<DefaultRightNotch />
}) => (
  <div
    className={classNames(
      'IPhoneX',
      'abs-center',
      'shadow',
      className)}
  >
    <div className="IPhoneX-inner">
      {navContent
        ? <div className="IPhoneX-nav">{navContent}</div>
        : null }
      <div className="IPhoneX-body">{bodyContent}</div>
    </div>
    <div className="IPhoneX-notch">
      <div className="IPhoneX-notch-left">{leftNotch}</div>
      <div className="IPhoneX-notch-right">{rightNotch}</div>
    </div>
    <div className="IPhoneX-overlay abs-center" />
  </div>
)

export default IPhoneX
