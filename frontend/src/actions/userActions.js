/*
Action creators are functions that create actions.
  
Calling an async dispatch function within the addToCart 
action creator is possible because of redux-thunk.
*/
import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

/*
The addToCart() action creator:
  1. Wraps actions in a try/catch block for error handling.
  2. Retrieves data about the added item from API/Mongo.
  3. Dispatches an add-to-cart request to the cartReducer
     containing the returned data.
  4. Saves the cart to local storage in stringified JSON.
     Local storage only supports string data. 
  5. Console logs any errors.
*/

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
