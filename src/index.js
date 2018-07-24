import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import CardList from './CardList'
import { searchRobots } from './reducers'
import App from './containers/App'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker'

// import { robots } from './robots'

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

    , document.getElementById('root'))
registerServiceWorker()
