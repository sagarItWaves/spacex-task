import React from "react";
import { Typography, Pagination } from "@mui/material";

function CustomPagination({ pages, page, handleChange }) {
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
      color="white"
    >
      <Pagination
        count={pages}
        page={page}
        onChange={handleChange}
        sx={{ button: { color: "#ffffff", backgroundColor: "black" } }}
      />
    </Typography>
  );
}

export default CustomPagination;
