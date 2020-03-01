import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { hot } from 'react-hot-loader/root'
import './styles.css'
import reducers from './reducers'
import A from './containers/A'
import B from './containers/B'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger()))

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={'/b'} component={B}/>
                    <Route path={'/'} component={A}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default hot(App)