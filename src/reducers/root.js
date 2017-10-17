import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import windowReducer from 'reducers/window'
import projectsReducer from 'reducers/projects'
import plotReducer from 'reducers/plot'
import project007Reducer from 'reducers/007'

const rootReducer = combineReducers({
  window: windowReducer,
  router: routerReducer,
  projects: projectsReducer,
  plot: plotReducer,
  '007': project007Reducer,
})

export default rootReducer
