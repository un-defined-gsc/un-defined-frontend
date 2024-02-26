import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status: null,
};

export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/public/verify/first/${token}`, {
        method: "GET",
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
);

const verifySlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(verifyUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
      state.error = null;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
      state.error = action.error.message;
    });
  },
});

export const getStatus = (state) => state.verify.status;
export const getLoading = (state) => state.verify.loading;
export default verifySlice.reducer;
