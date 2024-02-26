import { showToast } from '@/utils/showToast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    values: {},
};


export const fetchProfile = createAsyncThunk(
    "fetchProfile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios({
                url: "/api/v1/private/user/me",
                method: "GET",
            });

            return response.data.data;
        } catch (err) {
            // console.error(err);
        }
    }
);

export const updateProfile = createAsyncThunk("updateProfile", async (data, { rejectWithValue, dispatch }) => {
    try {
        const response = await axios({
            url: "/api/v1/private/user/me",
            method: "PUT",
            data,
        });

        dispatch(fetchProfile());
        return response.data.data;
    } catch (err) {
        // console.error(err);
    }
});


export const fetchProfileById = createAsyncThunk('profile/fetchProfileById', async (id, { rejectWithValue }) => {
    try {
        const data = [
            {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Burak",
                surname: "Bıçakcıoğlu",
                email: "burakbicakci14@gmail.com",
                gender: "male",
                appeal: "he/his"
            },
            {
                avatar: "https://imgb.ifunny.co/images/88a18ba94d62c93838d3f56ededeba62e43e2e24e8c0f28947a444951ab04a93_1.webp",
                name: "Resul",
                surname: "Çelik",
                email: "burakbicakci14@gmail.com",
                gender: "Atak helikopter",
                appeal: "fly/flyer/flyself"
            }
        ]

        return data[id - 1] || data[0]
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchProfileById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProfileById.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;
        });
        builder.addCase(fetchProfileById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfile.pending, (state) => {
            state.loading = true;

            showToast("dismiss");
            showToast("loading", "Updating profile...");
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.values = action.payload;

            showToast("dismiss");
            showToast("success", "Profile updated successfully");
        });
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

            showToast("dismiss");
            showToast("error", "Profile update failed. Please try again.");
        });
    },
});

export const getProfile = (state) => state.profile.values;

export default profileSlice.reducer;
