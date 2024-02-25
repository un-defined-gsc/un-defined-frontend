import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status: null,
};

export const likePost = createAsyncThunk(
  "likePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/like/${id}`, {
        method: "POST",
      });

      console.log(response);
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

export const unlikePost = createAsyncThunk(
  "unlikePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/unlike/${id}`, {
        method: "DELETE",
      });

      console.log(response);
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

const likeSlicer = createSlice({
  name: "likes",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(likePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
    builder.addCase(unlikePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(unlikePost.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
    builder.addCase(unlikePost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
  },
});

export const getStatus = (state) => state.verify.status;
export const getLoading = (state) => state.verify.loading;
export default likeSlicer.reducer;
