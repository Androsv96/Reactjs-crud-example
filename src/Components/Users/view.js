/* React */
import React, { useEffect, forwardRef } from "react";

/* Material-ui */
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

/* Material-table */
import MaterialTable from "material-table";

/* Components */
import NoInternetConnection from "../NoInternetConnection/view";
import { Styles } from "./css";

/* Contants */
import {
  REQUEST_FAILED,
  TABLE_COLUMNS,
  TABLE_TITLE,
  TABLE_OPTIONS
} from "../../Utilities/Constants";

export default function Users({ state, getAllUsers }) {
  const { users, shouldFetchUsers, failGetAllUserMsg } = state.UsersReducer;

  useEffect(() => {
    if (shouldFetchUsers) getAllUsers();
  });

  if (failGetAllUserMsg) {
    alert(failGetAllUserMsg);
    return (
      <Box>
        {REQUEST_FAILED}
        <button onClick={() => getAllUsers()}>Retry</button>
      </Box>
    );
  }

  if (users.length > 0) {
    return (
      <Box>
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            style={Styles.materialTable}
            columns={TABLE_COLUMNS}
            data={users}
            title={TABLE_TITLE}
            icons={TABLE_ICONS}
            options={TABLE_OPTIONS}
          />
        </MuiThemeProvider>
      </Box>
    );
  } else {
    return <NoInternetConnection action={getAllUsers} />;
  }
}

const TABLE_ICONS = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#000"
    }
  }
});
