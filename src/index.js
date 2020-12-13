import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerCounter from './Store/reducers/Counter';
import reducerResults from './Store/reducers/Results';
import { Provider } from 'react-redux';

const reducerRoot = combineReducers({
  ctr: reducerCounter,
  res: reducerResults
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const store = createStore(reducerRoot, applyMiddleware(logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
