import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllApi } from "./ColorApi";

export const GetAllColors = createAsyncThunk(
    'color/getall',
    async (params) => {
        const response = await GetAllApi(params);
        return response;
    }
);

const initialState = {
    loading: true,
    error: ""
};

const colorSlice = createSlice({
    name: 'color',
    initialState,
    extraReducers: (builder) => {
    // Get all colors
        builder
            .addCase(GetAllColors.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetAllColors.fulfilled, (state, action) => {
                state.colorsList = action.payload;
                state.loading = false;
            })
            .addCase(GetAllColors.rejected, (state, action) => {
                state.error = action.payload.message;
            })
    }
});

export default colorSlice.reducer;