import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetMyAddressesApi, deleteAddressApi, updateAddressApi } from "./AddressApi";

export const getMyAddresses = createAsyncThunk(
    'address/getMyAddresses',
    async () => {
        const response = await GetMyAddressesApi();
        return response;
    }
);

export const updateAddress = createAsyncThunk(
    'address/updateAddress',
    async (address) => {
        const response = await updateAddressApi(address);
        return response;
    }
);

export const deleteAddress = createAsyncThunk(
    'address/deleteAddress',
    async (addressId) => {
        const response = await deleteAddressApi(addressId);
        return response;
    }
);

const initialState = {
    addresses: [],
    loading : false,
    error: null
};

const addressSlice = createSlice({
    name: 'voucher',
    initialState,
    extraReducers: (builder) => {
    // Use voucher
        builder
            .addCase(getMyAddresses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMyAddresses.fulfilled, (state, action) => {
                state.addresses = action.payload;
                state.loading = false;
            })
            .addCase(getMyAddresses.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })

        builder
            .addCase(updateAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateAddress.fulfilled, (state, action) => {
                let addressCopy = [...state.addresses];
                let index = addressCopy.findIndex(address => address.id == action.payload.id)
                if(index >= 0) {
                    addressCopy.splice(index, 1, action.payload);
                    state.addresses = addressCopy;
                    state.loading = false;
                }
                
            })
            .addCase(updateAddress.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })

        builder
            .addCase(deleteAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                let addressCopy = [...state.addresses];
                let index = addressCopy.findIndex(address => address.id == action.payload.id)
                if(index >= 0) {
                    addressCopy.splice(index, 1);
                    state.addresses = addressCopy;
                    state.loading = false;
                }
                
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.error = "une erreur s'est produite";
            })
    }
});

export default addressSlice.reducer;