import { combineReducers } from 'redux';
import { InitReducer } from './initReducer';
import { SearchDetail } from './userDetailReducer';

let allReducers = combineReducers({ InitReducer, SearchDetail });

export default allReducers;
