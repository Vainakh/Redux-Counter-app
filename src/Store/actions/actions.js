export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD5 = 'ADD5';
export const SUBSTRUCT5 = 'SUBSTRUCT5';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  }
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const add5 = (value) => {
  return {
    type: ADD5,
    val: value
  }
};

export const substruct5 = (value) => {
  return {
    type: SUBSTRUCT5,
    val: value
  }
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result
  }
};

export const deleteResult = (resultElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resultElId
  }
};

