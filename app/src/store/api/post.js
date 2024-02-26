import { showToast } from '@/utils/showToast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProfile } from './profile';

const initialState = {
  loading: false,
  error: null,
  values: [],
  filter: {
    categoryId: "",
    userId: "",
    tag: "",
    limit: 10,
    offset: 0
  }
};


export const fetchPosts = createAsyncThunk("fetchPosts", async (_, { rejectWithValue, getState }) => {
  try {
    const response = await fetch(
      `/api/v1/private/post/filter?categoryId=${getState().post.filter.categoryId}&userId=${getState().post.filter.userId}&tag=${getState().post.filter.tag}&limit=${getState().post.filter.limit}&offset=${getState().post.filter.offset}`,
    );

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(
        errorData.message || "Failed to fetch post data"
      );
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (err) {
    console.error(err);
    return rejectWithValue(
      "An error occurred during the post request."
    );
  }
}
);

export const fetchPostById = createAsyncThunk(
  "fetchPostById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/v1/private/post/${id}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData.message || "Failed to fetch post data"
        );
      }

      const responseData = await response.json();
      return responseData.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(
        "An error occurred during the post request."
      );
    }
  }
);

export const createPost = createAsyncThunk(
  "createPost",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios(
        {
          url: "/api/v1/private/post/",
          method: "POST",
          data: {
            ...data,
            image: [data.image]
          },
        }
      );

      dispatch(fetchPosts());

      return response.data.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(
        "An error occurred during the post request."
      );
    }
  }
);


export const updatePost = createAsyncThunk("updatePost", async (data, { rejectWithValue, dispatch }) => {
  try {
    let tags = data.tags.map((tag) => tag.tag);
    console.log("qweqwe", tags);
    const response = await axios(
      {
        url: "/api/v1/private/post/",
        method: "PUT",
        data: { ...data, image: [data.image], tags: tags },
      }
    );

    dispatch(fetchProfile());

    return response.data.data;
  } catch (err) {
    // console.error(err);
  }
}
);

export const deletePost = createAsyncThunk(
  "deletePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/v1/private/post/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData.message || "Failed to delete post"
        );
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(
        "An error occurred during the post request."
      );
    }
  }
);



const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;

      showToast("dismiss")
      showToast("loading", "Post is creating...")
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;

      showToast("dismiss")
      showToast("success", "Post created successfully")
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;

      showToast("dismiss")
      showToast("error", "Post creation failed. Please try again.")
    });
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;

      showToast("dismiss")
      showToast("loading", "Post is editing...")
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;

      showToast("dismiss")
      showToast("success", "Post edited successfully")
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;

      showToast("dismiss")
      showToast("error", "Post edit failed. Please try again.")
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;

      showToast("dismiss")
      showToast("loading", "Post is deleting...")
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;

      showToast("dismiss")
      showToast("success", "Post deleted successfully")
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;

      showToast("dismiss")
      showToast("error", "Post delete failed. Please try again.")
    });
  },
});

export const getPosts = (state) => state.post.values;
export const getFilter = (state) => state.post.filter;

export const { setFilter } = postSlice.actions;

export default postSlice.reducer;
