
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import Routes from './routes/Routes'
import thunkMiddleware from 'redux-thunk'

import appReducer from './reducers/AppReducer'
global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent
console.disableYellowBox = true

const logger = createLogger()

export default class App extends Component {
  configureStore (initialState) {
    const enhancer = compose(
      applyMiddleware(
        thunkMiddleware,
        logger
      )
    )
    return createStore(appReducer, initialState, enhancer)
  }

  render () {
    const store = this.configureStore({})
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
