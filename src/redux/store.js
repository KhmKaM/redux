import {createStore, combineReducers} from "redux";
import productReducer from "./productReduser";

const store = createStore(combineReducers({product: productReducer}));

export default store;