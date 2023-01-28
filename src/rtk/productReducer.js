import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {name: "Огурец", price: 200}, 
        {name: "Капуста", price: 70}
    ]
}

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const val = state.value;
            const data = action.payload;
            const test = val.filter(el => 
                el.name.toLowerCase() === 
                data.name.toLowerCase());
            state.value = test.length > 0 ?
            val 
            :
            [...val, data];
        },
        delProduct: (state, action) => {
            const val = state.value;
            const data = action.payload;
            state.value = val.filter(el => 
                el.name !== data)
        },
        updProduct: (state, action) => {
            const val = state.value;
            const data = action.payload;
            const check = val.filter(el => 
                el.name.toLowerCase() === 
                data.data.name.toLowerCase());
            if (check.length > 0) {
                state.value = val.map(el => {
                    if (el.name.toLowerCase() ===
                    data.data.name.toLowerCase()) {
                        el.price = data.data.price;
                    }
                    return el;
                })
            } else {
                state.value = val.map(el => {
                    return el.name === data.product 
                    ? data.data
                    : el
                })
            }
        }
    }
});

export const {addProduct, delProduct, updProduct} = productReducer.actions;
export default productReducer.reducer;