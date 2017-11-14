const initialState = 'inputting'

const project026Reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SEND_EMAIL_REQUEST':
      return 'sending'
    case 'SEND_EMAIL_SUCCESS':
      return 'sent'
    case 'SEND_EMAIL_RESET':
      return initialState
    default:
      return state
  }
}

export default project026Reducer
