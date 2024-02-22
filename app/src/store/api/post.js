import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    values: {},
};


export const fetchPost = createAsyncThunk('post/fetchPost', async (_, { rejectWithValue }) => {
    try {
        const data = {
            image : "https://via.placeholder.com/300x300",
            tags : ["#react", "#redux", "#javascript"],
            category : "programming",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
            title : "React Redux"
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})


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
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const getPost = (state) => state.post.values;

export default postSlice.reducer;
