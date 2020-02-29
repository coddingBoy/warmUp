import { Dispatch, Action } from "redux"
import { ThunkAction } from 'redux-thunk'
import { defaultState } from "../reducers/increaseReducer"

export const INCREMENT_COUNTER = 'INCREASE'

export type incrementasyncType = {
    type: typeof INCREMENT_COUNTER,
    number: number,
}
export function incrementAsync(number: number): ThunkAction<void, defaultState, unknown, Action<string>> {
    return (dispatch: Dispatch) => {
        dispatch({
            type: INCREMENT_COUNTER,
            number,
        })
    }
}
// export const incrementAsync = (number: number) => ({type: INCREMENT_COUNTER, number})
