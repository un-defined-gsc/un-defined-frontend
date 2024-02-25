import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    values: {},
};


export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { rejectWithValue }) => {
    try {
        const data = {
            avatar: "14.png",
            name: "Angeline",
            surname: "Christina",
            email: "angelinachristina@gmail.com",
            gender: "famale",
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
    },
});

export const getProfile = (state) => state.profile.values;

export default profileSlice.reducer;
