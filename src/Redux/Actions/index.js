/* Users */
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SUCCESS_GET_ALL_USERS = "SUCCESS_GET_ALL_USERS";
export const FAIL_GET_ALL_USERS = "FAIL_GET_ALL_USERS";

export const getAllUsers = () => ({
  type: GET_ALL_USERS
});

export const successGetAllUsers = payload => ({
  type: SUCCESS_GET_ALL_USERS,
  payload
});

export const failGetAllUsers = payload => ({
  type: FAIL_GET_ALL_USERS,
  payload
});
