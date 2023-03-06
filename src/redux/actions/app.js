import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLaunchesAPI } from "../../api/client";

export const fetchData = createAsyncThunk(
  "app/fetchData",
  async ({ params, search, startDate, endDate }, thunkAPI) => {
    try {
      const query = {};
      if (startDate) {
        query.date_utc = {
          $gte: startDate,
          $lte: endDate,
        };
      }
      if (search) {
        query.search = search;
      }

      const response = await fetchLaunchesAPI({
        query,
        params,
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
