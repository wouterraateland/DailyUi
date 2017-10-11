import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import windowReducer from 'reducers/window'
import projectsReducer from 'reducers/projects'

const rootReducer = combineReducers({
  window: windowReducer,
  router: routerReducer,
  projects: projectsReducer,
})

export default rootReducer
