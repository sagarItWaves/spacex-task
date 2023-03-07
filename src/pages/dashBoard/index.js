import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import debounce from "lodash/debounce";
import moment from "moment";
import { fetchData } from "../../redux/actions/app";
import CustomCard from "../../components/customCard";
import CustomPagination from "../../components/customPagination";
import CustomModal from "../../components/CustomModal";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";
import { IMAGES } from "../../constant/assest";
import NoDataFound from "../../components/noDataFound";
import FilterRow from "../../components/filterRow";
import BottomFilterRow from "../../components/bottomFilterRow";

function DashBoard() {
  const dispatch = useDispatch();
  const appState = useSelector((store) => store?.app?.data);
  const pages = useSelector((store) => store?.app?.totalPages);
  const loading = useSelector((store) => store?.app?.loading);
  const [pageNum, setPageNum] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();
  const [timeFilterValue, setTimeFilterValue] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [upComingEvent, setUpComingEvent] = useState(false);
  const [launchStatus, setlaunchStatus] = useState("");
  const [enableReset, setEnableReset] = useState(false);
  const [sortValue, setSortValue] = useState("asc");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");

  //  HANDLER FOR API SO THAT WE CAN USE IT AT MUTIPLE PLACE

  const apiDebounceHandler = useCallback(
    debounce(() => {
      dispatch(
        fetchData({
          params: {
            limit: 12,
            offset: (pageNum - 1) * 12,
            sort: { flight_number: sortValue },
          },
          startDate: filterStartDate,
          endDate: filterEndDate,
          search: searchText,
          upcoming: upComingEvent,
          success: launchStatus,
        })
      );
    }, 700),
    [
      pageNum,
      searchText,
      upComingEvent,
      launchStatus,
      sortValue,
      filterStartDate,
      filterEndDate,
    ]
  );

  // HANLDER OF CALLING THE API WHEN PAGE LOADS AND CHECK FILTER VALUES

  useEffect(() => {
    if (
      searchText !== "" ||
      upComingEvent === true ||
      launchStatus === false ||
      launchStatus === true ||
      sortValue === "desc" ||
      filterStartDate !== "" ||
      filterEndDate !== ""
    ) {
      setEnableReset(true);
    } else {
      setEnableReset(false);
    }
    apiDebounceHandler(
      pageNum,
      searchText,
      upComingEvent,
      launchStatus,
      sortValue
    );
  }, [
    pageNum,
    searchText,
    upComingEvent,
    launchStatus,
    sortValue,
    filterStartDate,
    filterEndDate,
  ]);

  /* HANDLER WHEN USER CHANGE PAGE NUMBER */

  const handleChange = (e, value) => {
    setPageNum(value);
  };

  // HANDLER FOR WHEN USER CLICK ON CARD

  const onCardClick = (event, data) => {
    setOpenModal(true);
    setSelectedCardData(data);
  };

  // HANLDER FOR CLOSING MODAL

  const closeModalHandler = () => {
    setOpenModal(false);
    setSelectedCardData("");
  };

  // HANLDER FOR HANDLING THE FILTER VALUE

  // TIME
  const timeFilterHandler = (e, value) => {
    setTimeFilterValue(value);
    const today = moment().format("yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'");
    if (value === 1) {
      setFilterStartDate(
        moment().subtract(7, "days").format("yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'")
      );
      setFilterEndDate(today);
    } else if (value === 2) {
      setFilterStartDate(
        moment()
          .subtract(1, "months")
          .format("yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'")
      );
      setFilterEndDate(today);
    } else if (value === 3) {
      setFilterStartDate(
        moment().subtract(1, "years").format("yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'")
      );
      setFilterEndDate(today);
    } else {
      setFilterStartDate("");
      setFilterEndDate("");
    }
  };

  /// LAUNCH STATUS

  const launchStatuFilterHandler = (e, value) => {
    if (value === true) {
      setlaunchStatus(true);
    } else if (value === false) {
      setlaunchStatus(false);
    } else {
      setlaunchStatus("");
    }
  };

  // SORTING

  const sortingFilterHandler = (event, value) => {
    setSortValue(value);
  };

  // UPCOMMNG

  const upcomingEventHandler = () => {
    if (upComingEvent) {
      setUpComingEvent(false);
    } else {
      setUpComingEvent(true);
    }
  };

  // HANDLER FOR  SETTING THE SEARCHING VALUE TO ITS STATE SEARCH

  const searchHandler = (event) => {
    setSearchText(event?.target?.value);
  };

  // HANDLER FOR RESET ALL FILTER TO INTITAL VAUES

  const resetFilterHandler = () => {
    setSearchText("");
    setUpComingEvent(false);
    setlaunchStatus("");
    setSortValue("asc");
    setFilterStartDate("");
    setFilterEndDate("");
    setTimeFilterValue(4);
  };

  //  RETURN

  return (
    <div
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND_IMAGE1})`,
        minHeight: "100vh",
      }}
    >
      <Header />
      <SearchInput onChange={searchHandler} value={searchText} />
      <FilterRow
        timeFilterHandler={timeFilterHandler}
        timeFilterValue={timeFilterValue}
        launchStatuFilterHandler={launchStatuFilterHandler}
        sortingFilterHandler={sortingFilterHandler}
        launchStatus={launchStatus}
        sortValue={sortValue}
      />
      <BottomFilterRow
        upcomingEventHandler={upcomingEventHandler}
        upComingEvent={upComingEvent}
        enableReset={enableReset}
        resetFilterHandler={resetFilterHandler}
      />
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
                launchStatus={data?.success}
              />
            </Grid>
          );
        })}
        {!loading && appState?.length === 0 && <NoDataFound />}
        {!!loading && (
          <Grid row width="100%" display="flex" justifyContent="center">
            <CircularProgress />
          </Grid>
        )}

        {appState?.length > 0 && (
          <CustomPagination
            pages={pages}
            page={pageNum}
            handleChange={handleChange}
          />
        )}
      </Grid>
      <CustomModal
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        selectedCardData={selectedCardData}
      />
    </div>
  );
}

export default DashBoard;
