import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import windowReducer from 'reducers/window'
import projectsReducer from 'reducers/projects'
import plotReducer from 'reducers/plot'

const rootReducer = combineReducers({
  window: windowReducer,
  router: routerReducer,
  projects: projectsReducer,
  plot: plotReducer,
})

export default rootReducer
