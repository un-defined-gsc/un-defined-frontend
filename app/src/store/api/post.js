import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    values: {},
};


export const fetchPost = createAsyncThunk(
    "fetchPost",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(
          "/api/v1/private/post/",
        );

        console.log(response);
  
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

  export const addPost = createAsyncThunk(
    "addPost",
    async (data, { rejectWithValue }) => {
      try {

        const post = {
          title: data.title,
          content: data.content,
          category: data.category,
          tags: data.tags,
          image: data.image,
        };

        console.log("gelenveriler",post);

        const response = await fetch(
          "/api/v1/private/post/",
          {
            method: "POST",
            body: JSON.stringify(post),
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (!response.ok) {
          const errorData = await response.json();
          return rejectWithValue(
            errorData.message || "Failed to add post"
          );
        }
        dispatch(fetchPost());
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


  export const editPost = createAsyncThunk(
    "editPost",
    async (data, { rejectWithValue }) => {
      try {

        const post = {
          title: data.title,
          content: data.content,
          category: data.category,
          tags: data.tags,
          image: data.image,
        };
        const response = await fetch(
          "/api/v1/private/post/",
          {
            method: "PUT",
            body: JSON.stringify(post),
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (!response.ok) {
          const errorData = await response.json();
          return rejectWithValue(
            errorData.message || "Failed to edit post"
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
            console.log(state.values)
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(addPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(editPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(editPost.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(editPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deletePost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const getPost = (state) => state.post.values;

export default postSlice.reducer;
