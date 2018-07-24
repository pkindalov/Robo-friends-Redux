import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
// import CardList from './CardList'
import { searchRobots } from './reducers'
import App from './containers/App'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker'

// import { robots } from './robots'

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

    , document.getElementById('root'))
registerServiceWorker()
