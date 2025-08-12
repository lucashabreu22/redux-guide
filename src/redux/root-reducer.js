import { combineReducers } from "redux";
import userReducer from "./user/reducer"; // Import your user reducer
import cartReducer from "./cart/slice"; // Usando o slice em vez do reducer clássico

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
