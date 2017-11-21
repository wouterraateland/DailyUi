import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import rootReducer from 'reducers/root'
import rootSaga from 'sagas/root'

const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(history)

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
