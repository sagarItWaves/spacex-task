import React from "react";
import { Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { BUTTTON_LBAEL, COLOR_CODE } from "../../../constant";

function YouTubeButton({ youTubeHandler }) {
  return (
    <Button
      variant="contained"
      component="label"
      sx={{
        bgcolor: COLOR_CODE.RED_YOU_TUBE,
        "&:hover": {
          bgcolor: COLOR_CODE.WHITE,
          color: COLOR_CODE.BLACK,
        },
      }}
      onClick={youTubeHandler}
    >
      <PhotoCamera style={{ marginRight: "10px" }} />
      {BUTTTON_LBAEL.YOU_TUBE}
    </Button>
  );
}
export default YouTubeButton;
