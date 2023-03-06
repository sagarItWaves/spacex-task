import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { fetchData } from "../../redux/actions/app";
import CustomCard from "../../components/customCard";
import CustomPagination from "../../components/customPagination";
import CustomModal from "../../components/CustomModal";
import CustomFilter from "../../components/CustomFilter";
import {
  FILTER_VALUE,
  LAUNCH_STATUS_FILTER_VALUE,
  UPCOMMING_FILTER_VALUE,
} from "../../constant";
import Header from "../../components/header";

function DashBoard() {
  const dispatch = useDispatch();
  const appState = useSelector((store) => store?.app?.data);
  const pages = useSelector((store) => store?.app?.totalPages);
  const [pageNum, setPageNum] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();
  const [timeFilterValue, setTimeFilterValue] = useState(0);
  const [launchFilterValue, setLaunchFilterValue] = useState("");

  // /*HANLDER OF CALLING THE API WHEN PAGE LOADS */

  useEffect(() => {
    dispatch(
      fetchData({
        params: {
          limit: 12,
          offset: (pageNum - 1) * 12,
        },
        startDate: "",
        endDate: "",
        search: "FalconSat",
      })
    );
  }, [pageNum]);

  /* HANDLER WHEN USER CHANGE PAGE NUMBER */

  const handleChange = (e, value) => {
    setPageNum(value);
  };

  // HANDLER FOR CARD CLICK
  const onCardClick = (event, data) => {
    setOpenModal(true);
    setSelectedCardData(data);
  };

  // HANLDER FOR CLOSING MODAL

  const closeModalHandler = () => {
    setOpenModal(false);
    setSelectedCardData("");
  };

  // HANLDER FOR FILTER VALUE

  const timeFilterHandler = (e, value) => {
    setTimeFilterValue(value);
  };

  const launchStatuFilterHandler = (e, value) => {
    setLaunchFilterValue(value);
  };

  const upcommingFilterHandler = () => {
    console.log("heelo");
  };

  return (
    <fragment>
      <Header />
      <Grid
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}
      >
        <CustomFilter
          filterArray={FILTER_VALUE}
          onChange={timeFilterHandler}
          filterValue={timeFilterValue}
        />
        <CustomFilter
          filterArray={LAUNCH_STATUS_FILTER_VALUE}
          onChange={launchStatuFilterHandler}
          filterValue={launchFilterValue}
        />
        <CustomFilter
          filterArray={UPCOMMING_FILTER_VALUE}
          onChange={upcommingFilterHandler}
          filterValue={launchFilterValue}
        />
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {appState?.map((data) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={data?.id}
              textAlign="-webkit-center"
            >
              <CustomCard
                onCardClick={(event) => onCardClick(event, data)}
                poster={data?.links?.patch?.small}
                title={data?.name}
                date={data?.date_local}
                details={data?.details}
              />
            </Grid>
          );
        })}
        <CustomPagination
          pages={pages}
          page={pageNum}
          handleChange={handleChange}
        />
      </Grid>

      <CustomModal
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        selectedCardData={selectedCardData}
        movieType
      />
    </fragment>
  );
}

export default DashBoard;
