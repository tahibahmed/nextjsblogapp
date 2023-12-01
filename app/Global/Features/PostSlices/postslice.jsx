
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getdata = createAsyncThunk("getdata", async () => {
  const url ="http://localhost:3000/api/users";
  const response = await fetch(url)

  const result = await response.json();
  console.log(result)
  return result;
});

export const getslice = createSlice({
  name: "getSlice",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getdata.pending, (state, action) => {
        state.loading = true;
      })
      builder.addCase(getdata.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      builder.addCase(getdata.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default getslice.reducer;
