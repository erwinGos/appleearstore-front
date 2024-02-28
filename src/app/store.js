import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productsReducer from "../features/product/ProductSlice";
import ColorReducer from "../features/color/ColorSlice";
import brandReducer from "../features/brand/brandSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        colors: ColorReducer,
        brands: brandReducer
    }
})
