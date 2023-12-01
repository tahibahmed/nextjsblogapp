import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerPost = createAsyncThunk("registerPost",async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/signup",data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    userdata: [],
    error: null,
    isloading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPost.pending, (state) => {
        state.isloading = true
      })
      .addCase(registerPost.fulfilled, (state, action) => {
        state.isloading = false
        state.userdata.push(action.payload);
      })
      .addCase(registerPost.rejected, (state, action) => {
        state.isloading = false
        state.error = false
      });
  },
});

export default registerSlice.reducer;
