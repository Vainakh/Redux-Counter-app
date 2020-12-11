const redux = require('redux');//this is nodejs syntax because we only going to use nodejs here.
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

//REDUCER => create reducer before creating the store

const rootReducer = (state = initialState, action) => {
  return state;
};

//STORE 
const store = createStore(rootReducer);
console.log(store.getState());

//DISPATCHING ACTION


//SUBSCRIPTION