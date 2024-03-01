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
    maxPages : 0,
    latestCategory : null,
    loading: false
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLatestCategory: (state, action) => {
      state.latestCategory = action.payload.categoryName;
    },
  },
  extraReducers: (builder) => {
    // Get products cases
    builder
      .addCase(GetProducts.pending, (state) => {
        state.loading = true;
        state.products = [];
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.maxPages = action.payload.maxPages;
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
    // Cart get all cart
    builder
      .addCase(GetAllCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      // Cart delete single
    builder
      .addCase(deleteCart.fulfilled, (state, action) => {
          const copyCart = state.cart;
          const indexItem = state.cart.findIndex(item => item.id === action.payload.id)
          copyCart.splice(indexItem, 1)
          state.cart = copyCart;
      })


      // Products get most sold products
    builder
      .addCase(GetMostSoldProduct.fulfilled, (state, action) => {
        state.MostSoldProducts = action.payload;
      })
  }
});

export const { setLatestCategory } = productsSlice.actions;
export default productsSlice.reducer;