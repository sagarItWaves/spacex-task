import React from "react";
import { Typography } from "@mui/material";
import { COLOR_CODE } from "../../../constant";

function Heading({ selectedCardData }) {
  return (
    <Typography
      variant="h5"
      component="h5"
      color={COLOR_CODE.BLACK}
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
