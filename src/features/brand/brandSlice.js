import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllApi } from "./brandApi";

export const GetAllBrands = createAsyncThunk(
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

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    extraReducers: (builder) => {
    // Get all colors
        builder
            .addCase(GetAllBrands.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetAllBrands.fulfilled, (state, action) => {
                state.brandsList = action.payload;
                state.loading = false;
            })
            .addCase(GetAllBrands.rejected, (state, action) => {
                state.error = action.payload.message;
            })
    }
});

export default brandSlice.reducer;