import React from 'react'
import { Provider, DefaultRootState } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { hot } from 'react-hot-loader/root'
import './styles.css'
import reducers from './reducers'
import A from './containers/A'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger()))
window.store = store
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <div>hello world</div>
            <A background="#fff"/>
            </Provider>
        )
    }
}

export default hot(App)
