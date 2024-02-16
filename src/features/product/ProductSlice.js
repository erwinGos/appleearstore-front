import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProduct } from "./ProductApi";

export const GetProducts = createAsyncThunk(
    'product/getproducts',
    async (productFilter) => {
      const response = await GetProduct(productFilter);
      return response;
    }
);

const initialState = {
    products: null,
    error: null,
    status: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        state.products = null;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = null;
        state.error = null;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.products = null;
        state.status = 'error';
        state.error = null;
      })
    }
});

export default productsSlice.reducer;