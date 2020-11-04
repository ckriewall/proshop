import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

/*
 Reducers take in default state and an action
 our function returns different objects based on
 the action received
*/
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (existingItem) {
        return {
          // If the item matches one already in the cart, replace it.
          // NOTE: an alternative would be to increase the quantity
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existingItem.product ? item : cartItem
          ),
        };
      } else {
        // If the item is not yet in the cart, add it.
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      // return state, removing any item matching the passed ID
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
