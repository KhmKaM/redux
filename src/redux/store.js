import {createStore, combineReducers} from "redux";
import productReducer from "./productReduser";
import cartReducer from "./actions/cartReducer";

const store = createStore(combineReducers({
    product: productReducer,
    cart: cartReducer
}));

export default store;