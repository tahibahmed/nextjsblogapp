import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Currentuserapi = createAsyncThunk("Currentuserapi", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/current");
    console.log(response);
    return response;

  } catch (error) {
    console.error(error);
  }
});

export const Currentuserslice = createSlice({
  name: "Currentuserslice",
  initialState: {
    userData: null,
    isloading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Currentuserapi.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(Currentuserapi.fulfilled, (state, action) => {
      
        state.userData =action.payload.currentuserdata;
        state.isloading = false;
      })
      .addCase(Currentuserapi.rejected,(state, action) => {
        state.isloading= false;
      });
  },
});

export default Currentuserslice.reducer