const initialState = {
  active: false,
  filters: {}
}

const project007Reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        active: !state.active
      }
    case 'TOGGLE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filter]: !state.filters[action.filter]
        }
      }
    default:
      return state
  }
}

export default project007Reducer
