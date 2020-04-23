import { SET_NEW_ERROR, RESET_ERROR } from "../Actions";

const initialState = {
  error: false,
  errorMsg: "",
};

export default function ErrorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.errorMsg,
      };

    case RESET_ERROR:
      return {
        ...state,
        error: false,
        errorMsg: "",
      };

    default:
      return state;
  }
}
