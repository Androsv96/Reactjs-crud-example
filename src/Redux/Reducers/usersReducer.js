import { GET_ALL_USERS_INIT, GET_ALL_USERS_SUCCESS } from "../Actions";

const initialState = {
  usersData: [],
  shouldFetchUsers: true
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS_INIT:
      return (state = {
        ...state,
        usersData: [],
        shouldFetchUsers: false
      });

    case GET_ALL_USERS_SUCCESS:
      return (state = {
        ...state,
        usersData: action.payload.data,
        shouldFetchUsers: false
      });

    default:
      return state;
  }
}
