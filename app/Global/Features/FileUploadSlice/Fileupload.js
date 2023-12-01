import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Uploadfileapi = createAsyncThunk("Uploadfileapi", async (body) => {
  try {
    const response = await axios.post("http://localhost:3000/api/upload", body);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
});

export const uploadfileslice = createSlice({
  name: "uploadfileslice",
  initialState: {
    userData: null,
    isloading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Uploadfileapi.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(Uploadfileapi.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isloading = false;
      })
      .addCase(Uploadfileapi.rejected, (state, action) => {
        state.isloading = false;
      });
  },
});

export default uploadfileslice.reducer;
