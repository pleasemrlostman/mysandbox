import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules/rootReducer";

const firstMiddleware = (store) => (dispatch) => (action) => {
    console.log(action);
    // 기능추가
    dispatch(action);
    // 기능추가
};
const thunkdMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === "function") {
        // 비동기
        return action(store.dispatch, store.getState());
    }
    return dispatch(action);
};

// function fM(store) {
//     console.log(1);
//     return function (next) {
//         console.log(2);
//         return function (action) {
//             console.log(3);
//         };
//     };
// }
// fM();

const enhancer = compose(
    applyMiddleware(firstMiddleware, thunkdMiddleware),
    composeWithDevTools()
);

const store = createStore(rootReducer, enhancer);
console.log(store);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
