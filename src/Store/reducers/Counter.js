import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
  counter: 0
};

const reducerCounter = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + 1})
    case actionTypes.DECREMENT:
      return updateObject(state, {counter: state.counter - 1});
    case actionTypes.ADD5:
      return updateObject(state, {counter: state.counter + action.val});
    case actionTypes.SUBSTRUCT5:
      return updateObject(state, {counter: state.counter - action.val});
  }

  return state;
};

export default reducerCounter;