import React from "react";
import { Typography } from "@mui/material";

function Overview({ description }) {
  return (
    <Typography
      variant="h7"
      component="h7"
      color="#2f2f2f"
      fontWeight="500"
      display="flex"
      justifyContent="flex-start"
      width="100%"
      textAlign="start"
      paddingBottom="10px"
      fontStyle="italic"
    >
      {description}
    </Typography>
  );
}
export default Overview;
