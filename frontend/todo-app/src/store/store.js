import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'

const middlewares = [
  createLogger(),
  thunk
];

const store = createStore(rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ));

export default store;