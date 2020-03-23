import { combineReducers } from "redux";
import UsersReducer from "./usersReducer";
import ErrorsReducer from "./errorsReducers";

export default combineReducers({
  UsersReducer,
  ErrorsReducer
});
