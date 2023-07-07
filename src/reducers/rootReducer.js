import { combineReducers } from "redux";

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'

const RootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export default RootReducer;