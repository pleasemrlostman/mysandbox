import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { loginRequest, loginSuccess } from "../Login/login";

const COUNT_UP = "Album/COUNT_UP";
const COUNT_DOWN = "Album/COUNT_DOWN";
const INPUT_DATA = "Album/INPUT_DATA";

const initialState = [
    {
        id: 2002123,
        artist: "Arctic Monkeys",
        album: "Whatever People Say I Am, That's What I'm Not",
        count: 10,
    },
    {
        id: 2002233,
        artist: "J dilla",
        album: "Donuts",
        count: 5,
    },
    {
        id: 656563,
        artist: "Strokes",
        album: "Is this it",
        count: 4,
    },
];

const countUp = createAction(COUNT_UP, (id) => id);
const countDown = createAction(COUNT_DOWN, (id) => id);
const inputData = createAction(INPUT_DATA, (data) => data);

// const countUp = (id) => {
//     return {
//         type: COUNT_UP,
//         id,
//     };
// };
// const countDown = (id) => {
//     return {
//         type: COUNT_DOWN,
//         id,
//     };
// };
const inputDataCheck = (data, userName) => {
    return (dispatch, getState) => {
        dispatch(inputData(data));
        alert(`당신이 구매한 앨범은 ${data?.album}`);
        dispatch(loginRequest(userName));
        setTimeout(() => {
            alert("로그인 완료!!!");
            dispatch(loginSuccess(`${userName} 님 로그인이 완료됐습니다.`));
        }, 3000);
    };
};
// const inputData = (data) => {
//     return {
//         type: INPUT_DATA,
//         data,
//     };
// };

export default handleActions(
    {
        [COUNT_UP]: (state, action) => {
            return produce(state, (draft) => {
                const matchIndex = draft.find(
                    (value) => value.id === action.payload
                );
                matchIndex.count++;
            });
        },
        [COUNT_DOWN]: (state, action) =>
            produce(state, (draft) => {
                const matchIndex = draft.find(
                    (value) => value.id === action.payload
                );
                matchIndex.count--;
            }),
        [INPUT_DATA]: (state, action) => {
            console.log(action.payload);
            return produce(state, (draft) => {
                draft.push(action.payload);
            });
        },
    },
    initialState
);

// const AlbumReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case COUNT_DOWN:
//             return produce(state, (draft) => {
//                 const matchIndex = draft.find(
//                     (value) => value.id === action.payload
//                 );
//                 if (matchIndex.count < 1) {
//                     alert("0 이하를 선택할 수 없습니다.");
//                     matchIndex.count = 0;
//                 } else {
//                     matchIndex.count--;
//                 }
//             });
//         case COUNT_UP:
//             return produce(state, (draft) => {
//                 const matchIndex = draft.find(
//                     (value) => value.id === action.payload
//                 );
//                 matchIndex.count++;
//             });
//         case INPUT_DATA:
//             return produce(state, (draft) => {
//                 draft.push(action.data);
//             });
//         default:
//             return state;
//     }
// };

export { countUp, countDown, inputDataCheck };
