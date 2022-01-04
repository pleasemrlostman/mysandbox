import { combineReducers } from "redux";
import { AlbumReducer } from "./Album/Album";

const rootReducer = combineReducers({ AlbumReducer });

export default rootReducer;
