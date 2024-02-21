import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    values: {},
};


export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { rejectWithValue }) => {
    try {
        const data = {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Burak",
            surname: "Bıçakcıoğlu",
            email: "burakbicakci14@gmail.com",
            gender: "male",
            appeal: "she/her"
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const fetchProfileById = createAsyncThunk('profile/fetchProfileById', async (id, { rejectWithValue }) => {
    try {
        const data = [
            {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Burak",
                surname: "Bıçakcıoğlu",
                email: "burakbicakci14@gmail.com",
                gender: "male",
                appeal: "she/her"
            },
            {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Resul",
                surname: "Çelik",
                email: "burakbicakci14@gmail.com",
                gender: "female",
                appeal: "he/his"
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
    },
});

export const getProfile = (state) => state.profile.values;

export default profileSlice.reducer;
