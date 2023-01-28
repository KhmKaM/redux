import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [{
        name: "Помидор",
        cnt: 2,
        price: 120,
        id: new Date().getTime()
    }]
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const val = state.value;
            const data = action.payload;
            let upd;
            let inCart = val.filter(el => el.name.toLowerCase()
            === data.name.toLowerCase());
            if (inCart.length) {
                inCart[0].cnt++;
                upd = val.map(el => {
                    if (inCart[0].id === el.id) {
                        return inCart[0];
                    } else {
                        return el;
                    }
                })
            } else {
                data.id = new Date().getTime();
                data.cnt = 1;
                upd = [...val, data];
            }
            state.value = upd;
        },
        increment: (state, action) => {
            const val = state.value;
            const data = action.payload;
            let upd;
            upd = val.map(el => {
                if (el.id === data) {
                    el.cnt++;
                }
                return el;
            });
            state.value = upd;
        },
        decrement: (state, action) => {
            const val = state.value;
            const data = action.payload;
            let upd;
            upd = val.filter(el => !(el.id === data && el.cnt === 1));
            if (upd.length !== val.length) {
                state.value = upd;
            } else {
                upd = val.map(el => {
                    if (el.id === data) {
                        el.cnt--;
                    }
                    return el;
                });
                state.value = upd;
            }
        }
    }
});

export const {addToCart, increment, decrement} = cartReducer.actions;

export default cartReducer.reducer;