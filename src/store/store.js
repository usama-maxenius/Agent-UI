import { createStore, applyMiddleware } from 'redux';
import RootReducers from './reducers/index';
import thunk from 'redux-thunk';

let store = createStore(RootReducers, applyMiddleware(thunk));

export default store;
