import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import withTracker from './withTracker'

import App from 'components/App'

import './reset.css'
import './index.css'

const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

const Root = (
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={withTracker(App)} />
    </ConnectedRouter>
	</Provider>
)
const root = document.getElementById('root')

if (root.hasChildNodes()) {
	hydrate(Root, root)
} else {
	render(Root, root)
}

registerServiceWorker()
