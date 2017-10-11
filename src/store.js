import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import rootReducer from 'reducers/root'
import rootSaga from 'sagas/root'

import { windowResize, windowScroll } from 'actions/window'

const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(history)

  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, routerMiddleware, logger))

  window.addEventListener('resize', () => {
    store.dispatch(windowResize(window.innerWidth, window.innerHeight))
  })

  window.addEventListener('scroll', () => {
    store.dispatch(windowScroll(window.scrollX, window.scrollY))
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
