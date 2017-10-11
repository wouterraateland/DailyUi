const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
  scrollTop: window.scrollTop,
  scrollLeft: window.scrollLeft
}

const windowReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        width: action.width,
        height: action.height
      }
    case 'WINDOW_SCROLL':
      return {
        ...state,
        scrollLeft: action.scrollLeft,
        scrollTop: action.scrollTop
      }
    default:
      return state
  }
}

export default windowReducer
