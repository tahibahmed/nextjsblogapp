import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const loginApi = createAsyncThunk("loginApi", async(body) => {
  console.log(body);
  const response = await axios.post(
    `http://localhost:3000/api/signup/login`,
    body
  );
  console.log(response);
 return await response.data;
});
const loginSlice = createSlice({
  name: "loginSlicedata",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
    token: null,
    isLoggedIn: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        
         state.data = action.payload.data
         state.isLoading = false;
        state.isError = false; 
        state.isLoggedIn = true
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
