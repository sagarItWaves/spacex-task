import React from "react";
import { Typography } from "@mui/material";
import { NO_DATA_FOUND, COLOR_CODE } from "../../constant";

function NoDataFound() {
  return (
    <div style={{ minHeight: "70px" }}>
      <Typography
        variant="h6"
        component="h6"
        color={COLOR_CODE.GRAY}
        fontWeight="500"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="10px"
        paddingBottom="10px"
        position="fixed"
        zIndex="1"
        width="100%"
        marginTop="20px"
        sx={{ textAlign: { xs: "center" } }}
      >
        {NO_DATA_FOUND}
      </Typography>
    </div>
  );
}
export default NoDataFound;
