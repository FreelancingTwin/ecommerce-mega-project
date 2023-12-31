import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
        return state.filter(product => product[0].id !== action.payload)
    default:
      return state;
  }
};

export default cartReducer;