import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import projectsReducer from 'reducers/projects'
import plotReducer from 'reducers/plot'
import project007Reducer from 'reducers/007'
import project013Reducer from 'reducers/013'
import project022Reducer from 'reducers/022'
import project026Reducer from 'reducers/026'
import project027Reducer from 'reducers/027'
import project030Reducer from 'reducers/030'
import project031Reducer from 'reducers/031'
import project039Reducer from 'reducers/039'

const rootReducer = combineReducers({
  router: routerReducer,
  projects: projectsReducer,
  plot: plotReducer,
  '007': project007Reducer,
  '013': project013Reducer,
  '022': project022Reducer,
  '026': project026Reducer,
  '027': project027Reducer,
  '030': project030Reducer,
  '031': project031Reducer,
  '039': project039Reducer,
})

export default rootReducer
