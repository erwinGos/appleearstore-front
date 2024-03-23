import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetMyOrdersApi, CreateOrderApi } from "./OrderApi";

export const getMyOrdersPagination = createAsyncThunk(
    'order/getMyOrdersPagination',
    async (params) => {
        const response = await GetMyOrdersApi(params);
        return response;
    }
);

export const createOrder = createAsyncThunk(
    'order/createOrder',
    async (params, { rejectWithValue }) => {
        try {
            const response = await CreateOrderApi(params);
            return response;
        }
        catch (error) {
            if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
            } else {
              return rejectWithValue({ message: 'Une erreur est survenue' });
            }
        }
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
                state.orders = action.payload.orders.reverse();
                state.maxPages = action.payload.maxPages;
                state.loading = false;
            })
            .addCase(getMyOrdersPagination.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.error = action.payload.message;
            })
    }
});

export default orderSlice.reducer;