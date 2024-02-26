import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status: null,
};

export const commentPost = createAsyncThunk(
  "commentPost",
  async (data, { rejectWithValue }) => {
    try {
      const post = {
        title: data.body,
        post_id: data.post_id,
      };

      const response = await fetch("/api/v1/private/comment", {
        method: "POST",
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to add comment");
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("An error occurred during the comment request.");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "deleteComment",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/private/comment/${id}`, {
        method: "DELETE",
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

const likeSlicer = createSlice({
  name: "likes",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(commentPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(commentPost.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
    builder.addCase(commentPost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload;
    });
    builder.addCase(deleteComment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status_code;
    });
  },
});

export const getStatus = (state) => state.verify.status;
export const getLoading = (state) => state.verify.loading;
export default likeSlicer.reducer;
