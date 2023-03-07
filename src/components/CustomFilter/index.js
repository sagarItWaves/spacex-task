import React from "react";
import { Typography, Chip } from "@mui/material";
import { FILTER_LABEL, COLOR_CODE } from "../../constant";

function CustomFilter({ filterArray, onChange, filterValue }) {
  return (
    <Typography
      variant="h6"
      component="h6"
      fontWeight="400"
      display="flex"
      color={COLOR_CODE.BLACK}
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
        <b>{FILTER_LABEL.FITER_BY}</b>
      </Typography>
      {filterArray.map((value) => {
        return (
          <Chip
            label={value?.label}
            onClick={(e) => onChange(e, value?.value)}
            variant={filterValue === value?.value ? "outlined" : "filled"}
            style={{
              marginRight: "10px",
              backgroundColor:
                filterValue === value?.value
                  ? COLOR_CODE.GRAY
                  : COLOR_CODE.WHITE,
              border: `1px solid ${COLOR_CODE.BLACK}`,
            }}
          />
        );
      })}
    </Typography>
  );
}

export default CustomFilter;
