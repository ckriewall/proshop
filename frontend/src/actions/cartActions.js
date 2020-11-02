/*
Action creators are functions that create actions.
  
Calling an async dispatch function within the addToCart 
action creator is possible because of redux-thunk.
*/
import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

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

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};
