import { createSelector } from 'reselect'

export const selectState = (state, props) => state['013']

export const selectUsers = createSelector(
  selectState,
  state => state.users
)

export const getAllUsers = createSelector(
  selectUsers,
  users => users.allIds
    .map(userId => users.byId[userId]),
)

export const getUsers = createSelector(
  getAllUsers,
  users => users.filter(user => user.id !== 0)
)

export const selectMessages = createSelector(
  selectState,
  state => state.messages
)

export const getMessages = createSelector(
  selectMessages,
  selectUsers,
  (messages, users) => messages
    .map(message => ({ ...message, user: users.byId[message.userId] }))
)
