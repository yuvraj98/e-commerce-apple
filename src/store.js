import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlices";
import userReducer from './slices/userSlice'
import orderReducer from './slices/orderSlice'

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        user: userReducer,
        order: orderReducer,
    }
});