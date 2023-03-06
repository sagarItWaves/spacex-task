import React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomModal({ openModal, closeModalHandler, selectedCardData }) {
  const youTubeHandler = () => {
    if (selectedCardData?.links?.youtube_id) {
      window.open(
        `https://www.youtube.com/watch?v=${selectedCardData?.links?.youtube_id}`
      );
    } else {
      viewHandler("Not available on YouTube");
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openModal}
      onClose={closeModalHandler}
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
            <img
              src={unavailable}
              // src={selectedCardData?.links?.patch?.small}
              alt={selectedCardData?.name}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Item>
              <Heading selectedCardData={selectedCardData} />
              <Item>
                <Overview description={selectedCardData?.details} />
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
