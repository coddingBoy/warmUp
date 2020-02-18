import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { defaultState } from '../reducers'
import { incrementAsync } from '../actions'
import { bindActionCreators, Dispatch, Action } from 'redux'

interface ownProps {
    background: string
}
const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({incrementAsync}, dispatch)

function A(props: defaultState & ReturnType<typeof mapDispatch> & ownProps) {
return (
    <>
        <div>{props.counter}</div>
        <button
            onClick={() => {
                props.incrementAsync(1)
            }}
        >click</button>
    </>
)
}
export default connect((state: defaultState) => {
    return {
        counter: state.counter, 
    }
}, mapDispatch)(A)
