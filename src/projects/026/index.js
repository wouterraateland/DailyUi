import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

const Project = ({ state, onSendClick }) => (
  <div className={classNames('Project-026', state)}>
    <div className="Project-026-container abs-center">
      <div className="Project-026-input-container">
        <div className="Project-026-email">
          <svg className="Project-026-email-icon" viewBox="0 0 64 64">
            <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <rect width="40" height="28" x="22" y="18" rx=".5" ry=".5"/>
              <path d="M22 23l20 14 20-14m-46 9H2m14-8H4m12 16H8"/>
            </g>
          </svg>
        </div>
        <input className="Project-026-input" type="email" placeholder="you@example.com" required />
        <button className="Project-026-send" onClick={onSendClick}></button>
        <div className="Project-026-loader abs-center">
          <div className="Project-026-loader-dot" />
          <div className="Project-026-loader-dot" />
          <div className="Project-026-loader-dot" />
        </div>
        <div className="Project-026-success">You're subscribed!</div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  state: state['026'],
})

const mapDispatchToProps = (dispatch) => ({
  onSendClick: () => dispatch({ type: 'SEND_EMAIL_REQUEST' })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
