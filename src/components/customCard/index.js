import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { unavailable } from "../../config";
import { FILTER_LABEL, COLOR_CODE } from "../../constant";

function CustomCard({ title, date, launchStatus, onCardClick, poster }) {
  const [posterImage, setPosterImage] = useState();
  const [status, setStatus] = useState("");

  // USEEFFECT TO CHECK AVALABILTITY OF DATA

  useEffect(() => {
    if (poster) {
      setPosterImage(poster);
    } else {
      setPosterImage(unavailable);
    }

    if (launchStatus) {
      setStatus("Success");
    } else {
      setStatus("Fail");
    }
  }, []);

  // RETRUN

  return (
    <fragment>
      <Card
        sx={{
          maxWidth: 250,
          cursor: "pointer",
          bgcolor: COLOR_CODE.GRAY,
          "&:hover": {
            bgcolor: COLOR_CODE.WHITE,
            color: COLOR_CODE.BLACK,
          },
        }}
        onClick={onCardClick}
      >
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={posterImage}
        />

        <CardContent>
          <Typography
            variant="body2"
            color={COLOR_CODE.BLACK}
            fontWeight="bold"
          >
            {title ? title.substring(0, 20) : "No Name"}
          </Typography>

          <Typography
            variant="body2"
            color={COLOR_CODE.BLACK}
            display="flex"
            justifyContent="space-between"
            marginTop="10px"
            textTransform="capitalize"
          >
            <div>
              <div>
                <b>{FILTER_LABEL.LAUNCH_STATUS}</b>
              </div>
              <div>{status}</div>
            </div>
            <div>
              <div>
                <b>{FILTER_LABEL.LAUNCH_DATE}</b>
              </div>
              <div>{date && moment(date).format("DD-MMM-yyyy")}</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </fragment>
  );
}

export default CustomCard;
