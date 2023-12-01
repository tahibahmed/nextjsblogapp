import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const posttaskss = createAsyncThunk("posttask", async (data) => {
  const baseUrl = "http://localhost:3000/api/tasks";
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
     return response
  } catch (error) {
    throw error;
  }
});
export const posttaskSlice = createSlice({
  name: "posttaskslice",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(posttaskss.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(posttaskss.fulfilled, (state, action) => {
      state.data.push(action.payload.data);
      state.loading = false;
    });
    builder.addCase(posttaskss.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default posttaskSlice.reducer;
