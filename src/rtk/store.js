import { configureStore } from "@reduxjs/toolkit";
import Cart from "./cartReducer";
import Product from "./productReducer";

const store = configureStore({
    reducer: {
        "cart": Cart,
        "product": Product
    }
})

export default store;