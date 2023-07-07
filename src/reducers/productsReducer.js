import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/productsActions";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    case FETCH_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
