import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import configureStore from '../store'

const store = configureStore(browserHistory, {})

const decorateWithProvider = story => (
  <Provider store={store}>
    {story()}
  </Provider>
)

export default decorateWithProvider
