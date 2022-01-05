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
const thunkdMiddleware =
    ({ dispatch, getState }) =>
    (dispatch) =>
    (action) => {
        if (typeof action === "function") {
            // 비동기
            return action(dispatch, getState);
        }
        return dispatch(action);
        // 동기(action이 오브젝트일 경우에는 바로 dispatch해주고)
        // 비동기(action이 함수일 경우에는 해당함수를 실행시켜라)
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
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
