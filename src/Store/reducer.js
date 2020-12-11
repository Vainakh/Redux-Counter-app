const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD5') {
    return {
      counter: state.counter + action.val
    }
  }

  if (action.type === 'SUBSTRUCT5') {
    return {
      counter: state.counter - action.val
    }
  }

  return state;
};

export default reducer;