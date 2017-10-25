import { combineReducers } from 'redux'

import jack from 'media/avatars/jack.jpg'
import walt from 'media/avatars/walt.jpg'

const initialState = {
  messages: [],
  users: {
    byId: {
      0: { id: 0, name: 'You', state: 'online' },
      1: { id: 1, name: 'Jack', state: 'online', avatar: jack },
      2: { id: 2, name: 'Walt', state: 'offline', avatar: walt },
    },
    allIds: [0, 1, 2],
  }
}

const messagesReducer = (state=initialState.messages, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      if (action.message === '') {
        return state
      } else {
        return [
          ...state,
          {
            id: state.length,
            message: action.message,
            userId: action.sender,
          },
        ]
      }
    default:
      return state
  }
}

const usersByIdReducer = (state=initialState.users.byId, action) => {
  switch (action.type) {
    case 'GO_ONLINE':
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          state: 'online',
        }
      }
    case 'GO_OFFLINE':
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          state: 'offline',
        }
      }
    default:
      return state
  }
}

const allUserIdsReducer = (state=initialState.users.allIds, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const usersReducer = combineReducers({
  byId: usersByIdReducer,
  allIds: allUserIdsReducer,
})

const project013Reducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
})

export default project013Reducer
