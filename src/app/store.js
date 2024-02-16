import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productsReducer from "../features/product/ProductSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer
    }
})
