import { createStore, applyMiddleware } from 'redux';
import RootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
