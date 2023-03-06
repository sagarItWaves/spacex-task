import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function TopBar({ closeModalHandler }) {
  return (
    <AppBar sx={{ position: "relative", bgcolor: "#05445E" }}>
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
