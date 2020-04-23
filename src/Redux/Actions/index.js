/* Users */
export const GET_ALL_USERS_INIT = "GET_ALL_USERS_INIT";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const ADD_USER_INIT = "ADD_USER_INIT";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";

/* Errors */
export const SET_NEW_ERROR = "SET_NEW_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const fetchGetAllUsers = () => ({
  type: GET_ALL_USERS_INIT
});

export const fecthAddUser = payload => ({
  type: ADD_USER_INIT,
  payload
});
