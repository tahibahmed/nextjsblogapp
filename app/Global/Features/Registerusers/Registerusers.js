import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk("RegisterUser", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/signup");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const RegisteruserSlice = createSlice({
  name: "RegisteruserSlice",
  initialState: {
    userData: null,
    isloading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.userData =action.payload;
      })
      .addCase(RegisterUser.rejected,(state, action) => {
        state.isloading= false;
      });
  },
});

export default RegisteruserSlice.reducer