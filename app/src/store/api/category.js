import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    values: [],
    selectedCategories: "",
};


export const fetchCategories = createAsyncThunk("fetchCategories", async (_, { rejectWithValue }) => {
    try {
        const response = await axios({
            url: "/api/v1/private/category",
            method: "GET",
        });

        return response.data.data;
    } catch (err) {
        // console.error(err);
    }
}
);

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelectedCategories: (state, action) => {
            state.selectedCategories = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const getCategories = (state) => state.category.values
export const getSelectedCategories = (state) => state.category.selectedCategories

export const { setSelectedCategories } = categorySlice.actions;

export default categorySlice.reducer;
