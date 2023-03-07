import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLaunchesAPI } from "../../api/client";

export const fetchData = createAsyncThunk(
  "app/fetchData",
  async (
    { params, search, startDate, endDate, upcoming, success },
    thunkAPI
  ) => {
    try {
      const query = {};
      if (startDate && endDate) {
        query.date_utc = {
          $gte: startDate,
          $lte: endDate,
        };
      }
      if (search) {
        query.$text = {
          $search: search,
        };
      }
      if (upcoming) {
        query.upcoming = upcoming;
      }
      if (success !== "") {
        query.success = success;
      }

      const response = await fetchLaunchesAPI({
        query,
        options: params,
      });
      if (response?.status === 200) {
        return response?.data;
      }
      thunkAPI.rejectWithValue("ERROR");
    } catch (err) {
      thunkAPI.rejectWithValue(err?.message);
    }
  }
);
