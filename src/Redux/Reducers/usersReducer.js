import { SUCCESS_GET_ALL_USERS, FAIL_GET_ALL_USERS } from "../Actions";

const initialState = {
  users: [],
  shouldFetchUsers: true,
  failGetAllUserMsg: ""
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_ALL_USERS:
      return (state = {
        ...state,
        users: action.result,
        shouldFetchUsers: false,
        failGetAllUserMsg: ""
      });

    case FAIL_GET_ALL_USERS:
      return (state = {
        ...state,
        shouldFetchUsers: false,
        failGetAllUserMsg: action.errorMsg
      });

    default:
      return state;
  }
}
