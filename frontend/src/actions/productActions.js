/*
Action creators are functions that create actions.

The listProducts() action creator:
  1. Wraps actions in a try/catch block for error handling.
  2. Dispatches a products request to the productsReducer.
  3. Requests products from the API/Mongo.
  4. Passes returned data to the productsReducer on success.
  5. Passes returned errors to the productsReducer on failure.
  
Calling an async dispatch function within the listProducts 
action creator is possible because of redux-thunk.
*/
import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
