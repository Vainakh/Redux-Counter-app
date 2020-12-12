import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../Store/actions';

class Counter extends Component {
    state = {
        counter: 0 
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter } />
                <CounterControl label="Add 5" clicked={ this.props.onIncrementFiveCounter } />
                <CounterControl label="Subtract 5" clicked={ this.props.onDecrementFiveCounter } />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.strdResults.map(strdResult => (
                        <li key={strdResult.id} onClick={() => this.props.onDeleteResult(strdResult.id)}>{strdResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       ctr: state.ctr.counter,
       strdResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onIncrementFiveCounter: () => dispatch({ type: actionTypes.ADD5, val: 5 }),
        onDecrementFiveCounter: () => dispatch({ type: actionTypes.SUBSTRUCT5, val: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);