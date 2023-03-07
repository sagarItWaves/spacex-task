import React from "react";
import { Grid, FormControlLabel, Checkbox, Button } from "@mui/material";
import { FILTER_LABEL, COLOR_CODE } from "../../constant";

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
          color: COLOR_CODE.WHITE,
        }}
        value="start"
        control={
          <Checkbox
            onChange={upcomingEventHandler}
            checked={upComingEvent}
            style={{ color: COLOR_CODE.WHITE }}
          />
        }
        label={<b>{FILTER_LABEL.UPCOMMING_LAUNCH}</b>}
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
            backgroundColor: COLOR_CODE.WHITE,
            color: COLOR_CODE.BLACK,
            "&:hover": {
              color: COLOR_CODE.WHITE,
              border: `1px solid ${COLOR_CODE.WHITE}`,
            },
          }}
          onClick={resetFilterHandler}
        >
          {FILTER_LABEL.RESET}
        </Button>
      </Grid>
    </Grid>
  );
}

export default BottomFilterRow;
