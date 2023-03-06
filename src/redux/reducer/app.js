import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../actions/app";

const initialState = {
  loading: false,
  data: [],
  error: null,
  totalPages: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action.payload.docs];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = appSlice.actions;

export default appSlice.reducer;
