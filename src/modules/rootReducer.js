import { combineReducers } from "redux";
import AlbumReducer from "./Album/Album";
import { loginReducer } from "./Login/login";

const rootReducer = combineReducers({ AlbumReducer, loginReducer });

export default rootReducer;
