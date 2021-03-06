import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(cartItem => cartItem.product === item.product);
      if (product) {
        return { cartItems: state.cartItems.map(cartItem => cartItem === product.product ? item : cartItem) };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter(cartItem => cartItem.product !== action.payload) }
    default:
      return state;
  }
}

export { cartReducer };
