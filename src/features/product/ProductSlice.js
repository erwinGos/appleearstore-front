import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductsApi, AddProductToCart, GetMostSoldProductApi, GetCart, DeleteCart} from "./ProductApi";


export const GetProducts = createAsyncThunk(
    'product/getproducts',
    async (productFilter) => {
      const response = await GetProductsApi(productFilter);
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

export const GetMostSoldProduct = createAsyncThunk(
  "product/mostsoldproduct",
  async () => {
    const response = await GetMostSoldProductApi();
    return response;
  }
)

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
    products: [],
    MostSoldProducts : [],
    cart: [],
    loading: false
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    // Get products cases
    builder
      .addCase(GetProducts.pending, (state) => {
        state.products = [];
        state.loading = true;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(GetProducts.rejected, (state, action) => {
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

    builder
      .addCase(GetMostSoldProduct.fulfilled, (state, action) => {
        state.MostSoldProducts = action.payload;
      })
  }
});

export default productsSlice.reducer;