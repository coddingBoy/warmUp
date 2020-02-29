import {combineReducers } from 'redux'
import increaseReducer from './increaseReducer'

const reducers = combineReducers({
    increaseReducer,
})
export default reducers
export type indexReducer = ReturnType<typeof reducers>