import { combineReducers } from "redux";

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'

const RootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer
});

export default RootReducer;