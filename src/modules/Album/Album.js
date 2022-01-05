const COUNT_UP = "Album/COUNT_UP";
const COUNT_DOWN = "Album/COUNT_DOWN";

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
        default:
            return state;
    }
};

export { AlbumReducer, countUp, countDown };
