import React from "react";
import { Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function Header() {
  return (
    <div style={{ minHeight: "70px" }}>
      <Typography
        variant="h1"
        component="h1"
        fontSize="200%"
        color="white"
        fontWeight="400"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="10px"
        paddingBottom="10px"
        boxShadow="0px 1px 7px black "
        position="fixed"
        zIndex="1"
        width="100%"
        bgcolor="#02545E"
        sx={{ textAlign: { xs: "center" } }}
      >
        <RocketLaunchIcon style={{ marginRight: "20px" }} />
        <i style={{ marginRight: "10px", color: "black" }}>SPACEX</i>
        INFORMATION CENTER
        <RocketLaunchIcon style={{ marginLeft: "20px" }} />
      </Typography>
    </div>
  );
}
export default Header;
