import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useVoucherApi } from "./VoucherApi";

export const useVoucher = createAsyncThunk(
    'voucher/useVoucher',
    async (code) => {
        const response = await useVoucherApi(code);
        return response;
    }
);

const initialState = {
    balance: 0,
    vouchers: [],
    loading : false,
    error: null
};

const voucherSlice = createSlice({
    name: 'voucher',
    initialState,
    extraReducers: (builder) => {
    // Use voucher
        builder
            .addCase(useVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(useVoucher.fulfilled, (state, action) => {
                state.balance += action.payload.amount;
                state.loading = false;
            })
            .addCase(useVoucher.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })
    }
});

export default voucherSlice.reducer;