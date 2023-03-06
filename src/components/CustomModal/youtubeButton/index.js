import React from "react";
import { Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function YouTubeButton({ youTubeHandler }) {
  return (
    <Button
      variant="contained"
      component="label"
      sx={{
        bgcolor: "#FF0000",
        "&:hover": {
          bgcolor: "white",
          color: "#2f2f2f",
        },
      }}
      onClick={youTubeHandler}
    >
      <PhotoCamera style={{ marginRight: "10px" }} />
      Watch on YouTube
    </Button>
  );
}
export default YouTubeButton;
