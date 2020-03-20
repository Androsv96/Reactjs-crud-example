export const API_URL = "http://127.0.0.1:3001";
export const USERS_ENDPOINT = "/users";

export const GET_METHOD = "GET";
export const POST_METHOD = "POST";

export const NO_INTERNET = "No internet connection. Do you want to try again?";
export const REQUEST_FAILED =
  "Something went wrong with the request. Try again?";
export const TRY_AGAIN = "Try again";
export const TABLE_TITLE = "Current users";

export const TABLE_COLUMNS = [
  {
    title: "Name",
    field: "name",
    headerStyle: {
      backgroundColor: "steelblue",
      color: "white"
    }
  },
  {
    title: "Username",
    field: "username",
    headerStyle: {
      backgroundColor: "steelblue",
      color: "#fff"
    }
  }
];
export const TABLE_OPTIONS = {
  selection: true,
  showSelectAllCheckbox: false,
  showTextRowsSelected: false,
  headerStyle: { backgroundColor: "steelblue" }
};
