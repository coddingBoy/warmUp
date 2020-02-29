import { INCREMENT_COUNTER, incrementasyncType } from "../actions"

export interface defaultState {
    counter: number
}
export default (state = { counter: 0 }, action: incrementasyncType): defaultState => {
    const nextState = {...state}
    if (action.type === INCREMENT_COUNTER) {
        nextState.counter = state.counter += action.number
    }
    return nextState
}
