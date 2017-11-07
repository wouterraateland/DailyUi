import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import windowReducer from 'reducers/window'
import projectsReducer from 'reducers/projects'
import plotReducer from 'reducers/plot'
import project007Reducer from 'reducers/007'
import project013Reducer from 'reducers/013'
import project022Reducer from 'reducers/022'

const rootReducer = combineReducers({
  window: windowReducer,
  router: routerReducer,
  projects: projectsReducer,
  plot: plotReducer,
  '007': project007Reducer,
  '013': project013Reducer,
  '022': project022Reducer,
})

export default rootReducer
