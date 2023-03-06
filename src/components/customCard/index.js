// import React, { useEffect, useState } from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { unavailable } from "../../config";

// import { img_300, unavailable } from "../../config/config";

function CustomCard({ title, date, type, onCardClick }) {
  return (
    <fragment>
      <Card
        sx={{
          maxWidth: 250,
          cursor: "pointer",
          bgcolor: "gray",
          "&:hover": {
            bgcolor: "#ffffff",
            color: "#2f2f2f",
          },
        }}
        onClick={onCardClick}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={unavailable}

          // image={poster ? `${poster}` : unavailable}
        />

        <CardContent>
          <Typography variant="body2" color="black" fontWeight="bold">
            {title ? title.substring(0, 20) : "No Name"}
          </Typography>

          <Typography
            variant="body2"
            color="black"
            display="flex"
            justifyContent="space-between"
            marginTop="10px"
            textTransform="capitalize"
          >
            <div>{type && type}</div>
            <div>{date && moment(date).format("dd.mm.yyyy")}</div>
          </Typography>
        </CardContent>
      </Card>
    </fragment>
  );
}

export default CustomCard;
