import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './App'

let store = createStore(reducers) //creates store (redux layer before this.state)


/*Provider wraps around App giving it and it's child components access to the store */
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
