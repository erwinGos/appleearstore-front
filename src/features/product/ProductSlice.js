import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProducts, AddProductToCart, GetCart, DeleteCart} from "./ProductApi";


export const GetBestProducts = createAsyncThunk(
    'product/getproducts',
    async (productFilter) => {
      const response = await GetProducts(productFilter);
      return response;
    }
);

export const AddProduct = createAsyncThunk(
  'product/addproduct',
  async (productId, quantity) => {
    const response = await AddProductToCart(productId, quantity);
    return response;
  }
);

export const GetAllCart = createAsyncThunk(
  'product/getcart',
  async () => {
    const response = await GetCart();
    return response;
  }
);

export const deleteCart = createAsyncThunk(
  'product/deletecart',
  async (cartId) => {
    const response = await DeleteCart(cartId);
    return response;
  }
);


const initialState = {
    products: null,
    cart: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
    // Get products cases
    builder
      .addCase(GetBestProducts.pending, (state) => {
        state.products = null;
      })
      .addCase(GetBestProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(GetBestProducts.rejected, (state, action) => {
        state.products = null;
      })

    // Cart cases
    builder
      .addCase(AddProduct.fulfilled, (state, action) => {
        const checkItemIndex = state.cart.findIndex(item => item.product.id === action.payload.product.id);
        if(checkItemIndex < 0) {
          state.cart = [...state.cart, action.payload];
        } else {
          const copyCart = state.cart;
          copyCart.splice(checkItemIndex, 1, action.payload)
          state.cart = copyCart;
        }
      })
    // Cart cases
    builder
      .addCase(GetAllCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      // Cart cases
      builder
        .addCase(deleteCart.fulfilled, (state, action) => {
            const copyCart = state.cart;
            const indexItem = state.cart.findIndex(item => item.id === action.payload.id)
            copyCart.splice(indexItem, 1)
            state.cart = copyCart;
        })
      }
});

export default productsSlice.reducer;