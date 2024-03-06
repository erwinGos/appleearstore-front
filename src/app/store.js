import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productsReducer from "../features/product/ProductSlice";
import ColorReducer from "../features/color/ColorSlice";
import brandReducer from "../features/brand/brandSlice";
import voucherReducer from "../features/voucher/VoucherSlice";
import addressReducer from "../features/address/AddressSlice";
import orderReducer from "../features/order/OrderSlice";

export const store = configureStore({
    reducer: {
        address: addressReducer,
        user: userReducer,
        products: productsReducer,
        colors: ColorReducer,
        brands: brandReducer,
        vouchers: voucherReducer,
        order: orderReducer
    }
})
