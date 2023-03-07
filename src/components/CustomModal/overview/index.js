import React from "react";
import { Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import moment from "moment";

function Overview({ selectedCardData }) {
  // HADLER FOR OPEN A ARTICE TO NEW PAGE
  const articleHandler = () => {
    window.open(selectedCardData?.links?.article);
  };
  // HADLER FOR OPEN A wikipedia TO NEW PAGE

  const wikipediaHandler = () => {
    window.open(selectedCardData?.links?.wikipedia);
  };
  return (
    <Typography
      variant="h7"
      component="h7"
      color="#2f2f2f"
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
          <b> Last Launch: </b>
          {moment(selectedCardData?.date_utc).format("DD-MMM-yyyy")}
        </Typography>
      )}

      {selectedCardData?.failures?.[0] && (
        <fragment>
          <Typography marginTop="10px">
            <b>Fail Count:</b> {selectedCardData?.failures?.[0]?.time}
          </Typography>
          <Typography marginTop="10px" textTransform="capitalize">
            <b> Fail Reason: </b>
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
          <b> Read Article: </b>
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
          <b> Read Wikipedia: </b>
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
