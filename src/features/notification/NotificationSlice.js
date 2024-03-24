import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllApi } from "./NotificationApi";

export const GetAllNotifications = createAsyncThunk(
    'notification/getall',
    async () => {
        const response = await GetAllApi();
        return response;
    }
);

const initialState = {
    notificationsList: [],
    loading: true,
    error: ""
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    extraReducers: (builder) => {
    // Get all colors
        builder
            .addCase(GetAllNotifications.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetAllNotifications.fulfilled, (state, action) => {
                state.notificationsList = action.payload;
                state.loading = false;
            })
            .addCase(GetAllNotifications.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});

export default notificationSlice.reducer;