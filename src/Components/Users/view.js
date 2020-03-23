/* React */
import React, { useEffect } from "react";

/* Material-ui */
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

/* Components */
import MyTable from "../Shared/table";
import { Styles } from "./css";

/* Contants */
import {
  TABLE_COLUMNS,
  TABLE_TITLE,
  TABLE_OPTIONS
} from "../../Utilities/Constants";

export default function Users({ state, fetchGetAllUsers }) {
  const { usersData, shouldFetchUsers } = state.UsersReducer;
  const { error, errorMsg } = state.ErrorsReducer;

  useEffect(() => {
    if (shouldFetchUsers) fetchGetAllUsers();
    if (error) alert(errorMsg);
  });

  return (
    <Box>
      <MuiThemeProvider theme={theme}>
        <MyTable
          style={Styles.materialTable}
          columns={TABLE_COLUMNS}
          data={usersData}
          title={TABLE_TITLE}
          options={TABLE_OPTIONS}
        />
      </MuiThemeProvider>
    </Box>
  );
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#000"
    }
  }
});
