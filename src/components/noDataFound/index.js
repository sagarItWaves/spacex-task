import React from "react";
import { Typography } from "@mui/material";

function NoDataFound() {
  return (
    <div style={{ minHeight: "70px" }}>
      <Typography
        variant="h6"
        component="h6"
        color="white"
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
        NO DATA FOUND
      </Typography>
    </div>
  );
}
export default NoDataFound;
