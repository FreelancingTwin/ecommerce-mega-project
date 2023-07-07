import axios from "axios";
const URI = "https://dummyjson.com/products";
//Action types
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//Action creators
const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = data => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchDataRequest());

    try {
      const resp = await axios.get(URI)
      dispatch(fetchDataSuccess(resp.data))
    } catch (error) {
      dispatch(fetchDataFailure(error.message))
    }
  };
};
