import React from 'react'
import { connect } from 'react-redux'
import { incrementAsync } from '../actions'

import { bindActionCreators, Dispatch, Action } from 'redux'
import { indexReducer } from '../reducers'
import { useHistory } from 'react-router'

interface ownProps {
    background: string
}
const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({incrementAsync}, dispatch)
const mapState = (state: indexReducer) => {
    return {
        counter: state.increaseReducer.counter, 
    }
}

function A(props: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & ownProps) {
// let history = useHistory()
let history = useHistory()
    return (
        <>
            <div>{props.counter}</div>
            <button
                onClick={() => {
                    props.incrementAsync(1)
                }}
            >
                click
            </button>
            <button
                onClick={() => {
                    history.push('/b')
                }}
            >
                click
            </button>
        </>
    )
}
export default connect(mapState, mapDispatch)(A)
