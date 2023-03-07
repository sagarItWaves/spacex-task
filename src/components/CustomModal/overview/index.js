import React from "react";
import { Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import moment from "moment";
import { MODAL_LABEL, COLOR_CODE } from "../../../constant";

function Overview({ selectedCardData }) {
  // HANDLER FOR OPEN A ARTICE TO NEW PAGE
  const articleHandler = () => {
    window.open(selectedCardData?.links?.article);
  };

  // HANDLER FOR OPEN A wikipedia TO NEW PAGE

  const wikipediaHandler = () => {
    window.open(selectedCardData?.links?.wikipedia);
  };
  return (
    <Typography
      variant="h7"
      component="h7"
      color={COLOR_CODE.BLACK}
      fontWeight="500"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      width="100%"
      textAlign="start"
      paddingBottom="10px"
      fontStyle="italic"
    >
      <Typography marginTop="10px">{selectedCardData?.details}</Typography>

      {selectedCardData?.date_utc && (
        <Typography marginTop="10px" textTransform="capitalize">
          <b> {MODAL_LABEL.LAST_LAUNCH}</b>
          {moment(selectedCardData?.date_utc).format("DD-MMM-yyyy")}
        </Typography>
      )}

      {selectedCardData?.failures?.[0] && (
        <fragment>
          <Typography marginTop="10px">
            <b>{MODAL_LABEL.FAIL_COUNT}</b>{" "}
            {selectedCardData?.failures?.[0]?.time}
          </Typography>
          <Typography marginTop="10px" textTransform="capitalize">
            <b>{MODAL_LABEL.FAIL_REASON}</b>
            {selectedCardData?.failures?.[0]?.reason}
          </Typography>
        </fragment>
      )}

      {selectedCardData?.links?.article && (
        <Typography
          marginTop="10px"
          textTransform="capitalize"
          display="flex"
          alignItems="center"
        >
          <b> {MODAL_LABEL.ARTICLE}</b>
          <ArticleIcon style={{ cursor: "pointer" }} onClick={articleHandler} />
        </Typography>
      )}

      {selectedCardData?.links?.wikipedia && (
        <Typography
          marginTop="10px"
          textTransform="capitalize"
          display="flex"
          alignItems="center"
        >
          <b>{MODAL_LABEL.WIKIPEDIA} </b>
          <ArticleIcon
            style={{ cursor: "pointer" }}
            onClick={wikipediaHandler}
          />
        </Typography>
      )}
    </Typography>
  );
}
export default Overview;
