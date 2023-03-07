import React, { useState, useEffect } from "react";
import { Dialog, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ToastMessage from "../toastMessage";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./topBar";
import { unavailable } from "../../config";
import Heading from "./heading";
import Overview from "./overview";
import YouTubeButton from "./youtubeButton";
import { viewHandler } from "../../utils";
import { COLOR_CODE } from "../../constant";

// STYLING FOR ITEM INTO INTEM

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === COLOR_CODE.DARK
      ? COLOR_CODE.LIGHT
      : COLOR_CODE.WHITE,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomModal({ openModal, closeModalHandler, selectedCardData }) {
  const [posterImage, setPosterImage] = useState();

  // HANDLER FOR CHECKING THE AVAIBILITY FO DATA

  useEffect(() => {
    if (selectedCardData?.links?.patch?.small) {
      setPosterImage(selectedCardData?.links?.patch?.small);
    } else {
      setPosterImage(unavailable);
    }
  }, [openModal]);

  // HANDLER FOR YOUTUBE

  const youTubeHandler = () => {
    if (selectedCardData?.links?.youtube_id) {
      window.open(
        `https://www.youtube.com/watch?v=${selectedCardData?.links?.youtube_id}`
      );
    } else {
      viewHandler("Not available on YouTube");
    }
  };

  // RETURN

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openModal}
      onClose={closeModalHandler}
      PaperProps={{
        sx: {
          width: "50%",
          maxHeight: 500,
        },
      }}
    >
      <ToastMessage />
      <TopBar closeModalHandler={closeModalHandler} />
      <Box sx={{ flexGrow: 1, margin: "10px 10px 10px 10px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={12} sm={4} textAlign="center">
            <img src={posterImage} alt={selectedCardData?.name} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Item>
              <Heading selectedCardData={selectedCardData} />
              <Item>
                <Overview selectedCardData={selectedCardData} />
              </Item>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <YouTubeButton youTubeHandler={youTubeHandler} />
    </Dialog>
  );
}

export default CustomModal;
