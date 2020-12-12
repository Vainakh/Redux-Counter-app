import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerCounter from './Store/reducers/Counter';
import reducerResults from './Store/reducers/Results';
import { Provider } from 'react-redux';

const reducerRoot = combineReducers({
  ctr: reducerCounter,
  res: reducerResults
})
const store = createStore(reducerRoot);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
