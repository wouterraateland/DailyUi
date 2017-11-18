import { combineReducers } from 'redux'

import image1 from 'projects/031/media/image1.svg'
import image2 from 'projects/031/media/image2.svg'
import image3 from 'projects/031/media/image3.svg'
import image4 from 'projects/031/media/image4.svg'
import image5 from 'projects/031/media/image5.svg'
import image6 from 'projects/031/media/image6.svg'

const initialState = {
  dragging: false,
  images: [
    { id: 0, image: image2 },
    { id: 1, image: image6 },
    { id: 2, image: image3 },
    { id: 3, image: image4 },
    { id: 4, image: image5 },
    { id: 5, image: image1 }
  ],
}

const draggingReducer = (state=initialState.dragging, action) => {
  switch (action.type) {
    case 'SET_DRAGGING_ACTIVE':
      return action.active
    case 'DROP_FILE_SUCCESS':
      return false
    default:
      return state
  }
}

const imagesReducer = (state=initialState.images, action) => {
  switch (action.type) {
    case 'DROP_FILE_SUCCESS':
      return [
        {
          id: state.length,
          image: action.file,
          uploaded: true
        },
        ...state,
      ]
    default:
      return state
  }
}

const project030Reducer = combineReducers({
  dragging: draggingReducer,
  images: imagesReducer,
})

export default project030Reducer
