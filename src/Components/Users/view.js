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

export default function Users({ state, fetchGetAllUsers, fecthAddUser }) {
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
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    fecthAddUser({ data: newData });
                  }
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    /* const data = this.state.data;
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            this.setState({ data }, () => resolve()); */
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    /* let data = this.state.data;
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve()); */
                  }
                  resolve();
                }, 1000);
              })
          }}
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
