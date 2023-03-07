import React from "react";
import { Typography, Chip } from "@mui/material";

function CustomFilter({ filterArray, onChange, filterValue }) {
  return (
    <Typography
      variant="h6"
      component="h6"
      fontWeight="400"
      display="flex"
      color="white"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
      fontSize="14px"
    >
      <Typography
        marginRight="10px"
        variant="h6"
        component="h6"
        fontSize="14px"
      >
        <b>Filter By:</b>
      </Typography>
      {filterArray.map((value) => {
        return (
          <Chip
            label={value?.label}
            onClick={(e) => onChange(e, value?.value)}
            variant={filterValue === value?.value ? "outlined" : "filled"}
            style={{
              marginRight: "10px",
              backgroundColor: filterValue === value?.value ? "gray" : "white",
              border: "1px solid black",
            }}
          />
        );
      })}
    </Typography>
  );
}

export default CustomFilter;
