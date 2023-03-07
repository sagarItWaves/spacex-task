import React from "react";
import { Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { HEADER, COLOR_CODE } from "../../constant";

function Header() {
  return (
    <div style={{ minHeight: "70px" }}>
      <Typography
        variant="h1"
        component="h1"
        fontSize="200%"
        color={COLOR_CODE.WHITE}
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
        bgcolor={COLOR_CODE.DARK_BLUE}
        sx={{ textAlign: { xs: "center" } }}
      >
        <RocketLaunchIcon style={{ marginRight: "20px" }} />
        <i style={{ marginRight: "10px", color: "black" }}>
          {HEADER.ORGANISATION}
        </i>
        {HEADER.INFORMATION_CENTER}
        <RocketLaunchIcon style={{ marginLeft: "20px" }} />
      </Typography>
    </div>
  );
}
export default Header;
