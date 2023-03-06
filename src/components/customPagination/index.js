import React from "react";
import { Typography, Pagination } from "@mui/material";

function CustomPagination({ pages, page, handleChange }) {
  console.log("pages==>", pages);
  return (
    <Typography
      variant="h6"
      component="h6"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
      paddingTop="20px"
    >
      <Pagination count={pages} page={page} onChange={handleChange} />
    </Typography>
  );
}

export default CustomPagination;
