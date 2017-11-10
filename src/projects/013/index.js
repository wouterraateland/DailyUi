import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import { getUsers, getMessages } from 'selectors/013'

import Phone from 'components/Phone'

const Project = ({ users, messages, sendMessage }) => (
  <div className="Project-013">
    <Phone className="Project-013-container">
      <div className="Project-013-header">
        <div className="Project-013-back"></div>
        <div className="Project-013-persons">
          { users.map(({id, state, avatar, name}) => (
            <div key={id} className={classNames('Project-013-person', state)}>
              <img className="Project-013-person-avatar alignleft" src={avatar} alt={name} />
              <div className="Project-013-person-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="Project-013-messages">
        { messages.map(({ id, message, userId, user: { name } }) => (
            <div key={id} className={classNames('Project-013-message', { 'me': userId === 0 })}>
              <div className="Project-013-message-inner">
                <div className="Project-013-message-user">{name}</div>
                <div className="Project-013-message-text">{message}</div>
              </div>
            </div>
        ))}
      </div>
      <div className="Project-013-messages-overlay"></div>
      <form className="Project-013-actions" onSubmit={sendMessage}>
        <div className="Project-013-input">
          <button className="Project-013-emoji"></button>
          <input className="Project-013-text" name="message" autoComplete="off" placeholder="Type a message" />
        </div>
        <button className="Project-013-send"></button>
      </form>
    </Phone>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  users: getUsers(state, ownProps),
  messages: getMessages(state, ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (event) => {
    event.preventDefault()
    dispatch({
      type: 'SEND_MESSAGE',
      message: event.target.message.value,
      sender: 0,
    })
    event.target.reset()
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project)
