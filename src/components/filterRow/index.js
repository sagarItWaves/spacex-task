import React from "react";
import { Grid } from "@mui/material";
import CustomFilter from "../CustomFilter";
import {
  FILTER_VALUE,
  LAUNCH_STATUS_FILTER_VALUE,
  SORTING_FILTER_VALUE,
} from "../../constant";

function FilterRow({
  timeFilterHandler,
  timeFilterValue,
  launchStatuFilterHandler,
  sortingFilterHandler,
  launchStatus,
  sortValue,
}) {
  return (
    <Grid
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        textAlign: "center",
      }}
      marginTop="20px"
      marginBottom="10px"
    >
      <CustomFilter
        filterArray={FILTER_VALUE}
        onChange={timeFilterHandler}
        filterValue={timeFilterValue}
      />
      <CustomFilter
        filterArray={LAUNCH_STATUS_FILTER_VALUE}
        onChange={launchStatuFilterHandler}
        filterValue={launchStatus}
      />
      <CustomFilter
        filterArray={SORTING_FILTER_VALUE}
        onChange={sortingFilterHandler}
        filterValue={sortValue}
      />
    </Grid>
  );
}

export default FilterRow;
