import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAIL, payload: err.message });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_ERROR, payload: err.message });
    });
};

export const setError = (err) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: err });
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.