import { combineReducers } from 'redux'

import brush from 'projects/027/media/brush.png'
import marker from 'projects/027/media/marker.png'
import pencil from 'projects/027/media/pencil.png'
import eraser from 'projects/027/media/eraser.png'

const initialState = {
  tools: [
    { name: 'brush', image: brush },
    { name: 'marker', image: marker },
    { name: 'pencil', image: pencil },
    { name: 'eraser', image: eraser },
  ],
  currentTool: 'brush',
  open: false,
}

const toolsReducer = (state=initialState.tools, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const currentToolReducer = (state=initialState.currentTool, action) => {
  switch (action.type) {
    case 'CLICK_TOOL':
      return action.tool
    default:
      return state
  }
}

const openReducer = (state=initialState.open, action) => {
  switch (action.type) {
    case 'CLICK_TOOL':
      return !state
    default:
      return state
  }
}

const project027Reducer = combineReducers({
  tools: toolsReducer,
  currentTool: currentToolReducer,
  open: openReducer,
})

export default project027Reducer
