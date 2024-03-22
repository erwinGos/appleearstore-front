import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetMyAddressesApi } from "./OrderApi";

export const getMyOrdersPagination = createAsyncThunk(
    'order/getMyAddresses',
    async (params) => {
        const response = await GetMyAddressesApi(params);
        return response;
    }
);

const initialState = {
    orders: [],
    loading : false,
    maxPages: 0,
    error: null
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {
    // Use voucher
        builder
            .addCase(getMyOrdersPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMyOrdersPagination.fulfilled, (state, action) => {
                state.orders = action.payload.orders;
                state.maxPages = action.payload.maxPages;
                state.loading = false;
            })
            .addCase(getMyOrdersPagination.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })
    }
});

export default orderSlice.reducer;