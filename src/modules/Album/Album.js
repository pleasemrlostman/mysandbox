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

const countUp = (id) => {
    // 동기 액션 크리에이터
    return {
        type: COUNT_UP,
        id,
    };
};
const countDown = (id) => {
    // 동기 액션 크리에이터
    return {
        type: COUNT_DOWN,
        id,
    };
};

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

const inputData = (data) => {
    return {
        type: INPUT_DATA,
        data,
    };
};

const AlbumReducer = (state = initialState, action) => {
    const copyState = [...state];
    switch (action.type) {
        case COUNT_DOWN:
            console.log("리듀서가 작동중이다 !!!");
            copyState.forEach((value) => {
                if (value.id === action.id) {
                    if (value.count < 1) {
                        value.count = 0;
                    } else {
                        value.count -= 1;
                    }
                }
            });
            return copyState;
        case COUNT_UP:
            console.log("리듀서가 작동중이다 !!!");
            copyState.forEach((value) => {
                if (value.id === action.id) {
                    value.count += 1;
                }
            });
            return copyState;
        case INPUT_DATA:
            const updateState = [...copyState, action.data];
            return updateState;
        default:
            return state;
    }
};

export { AlbumReducer, countUp, countDown, inputDataCheck };
