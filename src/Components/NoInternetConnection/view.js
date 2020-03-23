/* React */
import React from "react";

/* Material-ui */
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

/* Constants */
import { NO_INTERNET_CONNECTION, TRY_AGAIN } from "../../Utilities/Constants";

/* CSS */
import { Styles } from "./css";

export default function NoInternetConnection(props) {
  return (
    <Box style={Styles.mainContainer}>
      <Box style={Styles.subContainer}>
        {NO_INTERNET_CONNECTION}
        <Button
          color="primary"
          variant="contained"
          onClick={() => props.action()}
        >
          {TRY_AGAIN}
        </Button>
      </Box>
    </Box>
  );
}
