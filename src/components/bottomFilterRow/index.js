import React from "react";
import { Grid, FormControlLabel, Checkbox, Button } from "@mui/material";

function BottomFilterRow({
  upcomingEventHandler,
  upComingEvent,
  enableReset,
  resetFilterHandler,
}) {
  return (
    <Grid
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row", md: "row" },
        textAlign: "center",
      }}
      marginTop="10px"
      marginBottom="10px"
      paddingLeft="50px"
      paddingRight="50px"
    >
      <FormControlLabel
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
        value="start"
        control={
          <Checkbox
            onChange={upcomingEventHandler}
            checked={upComingEvent}
            style={{ color: "white" }}
          />
        }
        label={<b>Up Comming Launch</b>}
        labelPlacement="start"
      />
      <Grid
        sx={{
          width: "50%",
        }}
      >
        <Button
          disabled={!enableReset}
          variant="outlined"
          sx={{
            height: "31px",
            backgroundColor: "white",
            color: "black",
          }}
          onClick={resetFilterHandler}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}

export default BottomFilterRow;
