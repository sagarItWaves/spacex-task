import React from "react";
import { Typography } from "@mui/material";

function Heading({ selectedCardData }) {
  return (
    <Typography
      variant="h5"
      component="h5"
      color="#2f2f2f"
      fontWeight="600"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
    >
      {selectedCardData?.name}
    </Typography>
  );
}
export default Heading;
