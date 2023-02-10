import { combineReducers } from '@reduxjs/toolkit';
import navBarReducer from './application/navBarSlice';


const createReducer = () =>
	combineReducers({
		navBar: navBarReducer,
	});

export default createReducer;
