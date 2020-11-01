/*
createStore: Creates a Redux store that holds the state tree. 
    he only way to change the data in the store is to call 
    dispatch() on it.

combineReducers: Turns an object whose values are different 
    reducer functions, into a single reducer function. It will 
    call every child reducer, and gather their results into a 
    single state object, whose keys correspond to the keys of 
    the passed reducer functions.

applyMiddleware: a store enhancer that applies middleware 
    to the dispatch method of the Redux store
*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer } from './reducers/productReducers';
const reducer = combineReducers({ productList: productListReducer });
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
