import React from "react";
import { Typography, Pagination } from "@mui/material";
import { COLOR_CODE } from "../../constant";

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
      color={COLOR_CODE.WHITE}
    >
      <Pagination
        count={pages}
        page={page}
        onChange={handleChange}
        sx={{
          button: {
            color: COLOR_CODE.WHITE,
            backgroundColor: COLOR_CODE.BLACK,
          },
        }}
      />
    </Typography>
  );
}

export default CustomPagination;
