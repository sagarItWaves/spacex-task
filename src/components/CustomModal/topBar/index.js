import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { COLOR_CODE } from "../../../constant";

function TopBar({ closeModalHandler }) {
  return (
    <AppBar sx={{ position: "relative", bgcolor: COLOR_CODE.LIGHT_BLUE }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={closeModalHandler}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
