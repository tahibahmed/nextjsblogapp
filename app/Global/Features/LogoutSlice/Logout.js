import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LogoutApi = createAsyncThunk("LogoutApi", async (body) => {
  try {
    const response = await axios.post("http://localhost:3000/api/logout", body);

    console.log(response.data);
    return await response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const LogoutSlice = createSlice({
  name: "logOutslice",
  initialState: {
    data: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LogoutApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LogoutApi.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(LogoutApi.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default LogoutSlice.reducer;
