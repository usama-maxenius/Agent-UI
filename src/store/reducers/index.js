import { combineReducers } from 'redux';
import { InitReducer } from './initReducer';

let allReducers = combineReducers({ InitReducer });

export default allReducers;
