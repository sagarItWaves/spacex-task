import React from "react";
import { Typography, Chip } from "@mui/material";

function CustomFilter({ filterArray, onChange, filterValue }) {
  return (
    <Typography
      variant="h6"
      component="h6"
      color="black"
      fontWeight="400"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
      fontSize="12px"
    >
      <Typography marginRight="10px">Filter By:</Typography>
      {filterArray.map((value) => {
        return (
          <Chip
            label={value?.label}
            onClick={(e) => onChange(e, value?.value)}
            variant={filterValue === value?.value ? "outlined" : "filled"}
            style={{ marginRight: "10px" }}
          />
        );
      })}
    </Typography>
  );
}

export default CustomFilter;
