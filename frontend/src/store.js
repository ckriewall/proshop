/*
createStore: Creates a Redux store that holds the state tree. 
    he only way to change the data in the store is to call 
    dispatch() on it.

applyMiddleware: a store enhancer that applies middleware 
    to the dispatch method of the Redux store

combineReducers: Turns an object whose values are different 
    reducer functions, into a single reducer function. It will 
    call every child reducer, and gather their results into a 
    single state object, whose keys correspond to the keys of 
    the passed reducer functions.

    Data passed to combineReducers() ends up in global state.
    The key is the named object.
    The value is the data returned from the reducer.

localStorage: the stored data is saved across browser sessions
    and has no expiration. We use local storage to hold cartItems
    before it is added to the Redux cart.
*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// If items are in local storage, add them to this variable.
// If no items are in local storage, fill the variable with an empty array.
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = { cartItems: cartItemsFromStorage };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
