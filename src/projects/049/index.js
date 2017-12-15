import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import IPhoneX from 'components/IPhoneX'

const n = Array(24).fill(0).map(() => (
  Math.random() < .2
    ? 2 + Math.ceil(Math.random() * 20)
    : 0
))

const timeAgo = t => {
  const dt = Math.floor((new Date() - t) / (1000 * 60))

  return dt === 0
    ? 'Just now'
    : `${dt} min ago`
}

const templates = [
  { from: 0, message: 'Where is the rum gone?' },
  { from: 1, message: 'Let\'s catch some coffee. 3:00 at Starbucks?' },
  { from: 2, message: 'Wanna grab some tea?' },
  { from: 2, message: 'I\'m not crazy. My reality is just different from yours.' },
]

const App = ({ hideName, notifications }) => (
  <div className="Project-049-app" data-notifications={notifications}>
    <div className="Project-049-app-icon" />
    {hideName
      ? null
      : <div className="Project-049-app-name" />}
  </div>
)

const MyApp = ({ notifications, users }) => (
  <div className="Project-049-app Project-049-my-app" data-notifications={notifications.length}>
    <div className="Project-049-app-icon Project-049-my-app-icon" />
    <div className="Project-049-notifications">
      {notifications.map(({from, message, t}, i) => (
        <div className="Project-049-notification row" key={i}>
          <img className="Project-049-avatar" src={users[from].image} alt={users[from].name} />
          <div className="Project-049-name">{users[from].name}</div>
          <div className="Project-049-content">{message}</div>
          <div className="Project-049-time">{timeAgo(t)}</div>
        </div>
      ))}
    </div>
  </div>
)

const Body = (props) => (
  <div>
    <div className="Project-049-apps">
      {Array(19).fill(0).map((_, i) => (
        <App
          notifications={n[i]}
          key={i}
        />
      ))}
    </div>
    <div className="Project-049-apps-bar">
      {Array(4).fill(0).map((_, i) => (
        i === 1
          ? <MyApp
              {...props}
              key={i}
            />
          : <App
              notifications={n[i + 19]}
              hideName
              key={i}
            />
      ))}
    </div>
  </div>
)

const Project = ({ onClick, ...props }) => (
  <div className="Project-049" onClick={onClick}>
    <IPhoneX
      className="Project-049-container"
      bodyContent={<Body {...props} />}
      hideHomeIndicator
    />
  </div>
)

const mapStateToProps = (state) => ({
  users: state['049'].users,
  notifications: state['049'].notifications,
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({
    type: 'RECEIVE_NOTIFICATION',
    notification: templates[Math.floor(Math.random() * templates.length)],
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
