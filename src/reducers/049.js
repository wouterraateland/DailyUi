import { combineReducers } from 'redux'

import jack from 'media/avatars/jack.jpg'
import walt from 'media/avatars/walt.jpg'
import hatter from 'media/avatars/hatter.jpg'

const initialState = {
  notifications: [
    { from: 0, message: 'Where is the rum gone?', t: new Date() },
  ],
  users: [
    { name: 'Jack Sparrow', image: jack },
    { name: 'Walt Disney', image: walt },
    { name: 'The Mad Hatter', image: hatter },
  ]
}

const notificationsReducer = (state=initialState.notifications, action) => {
  switch (action.type) {
    case 'RECEIVE_NOTIFICATION':
    return [
      ...state,
      {...action.notification, t: new Date() },
    ]
    default:
    return state
  }
}

const usersReducer = (state=initialState.users, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const project049Reducer = combineReducers({
  notifications: notificationsReducer,
  users: usersReducer,
})

export default project049Reducer
