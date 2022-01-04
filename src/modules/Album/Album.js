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
    return {
        type: COUNT_UP,
        id,
    };
};
const countDown = (id) => {
    return {
        type: COUNT_DOWN,
        id,
    };
};

const AlbumReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_DOWN:
            const copyState = [...state];
            const IndexNumber = copyState.find((value) => {
                if (value.id === action.id) {
                    value.count - 1;
                    return value;
                }
            });
            console.log(IndexNumber);
            return state;
        case COUNT_UP:
            return state;
        default:
            return state;
    }
};

export { AlbumReducer, countUp, countDown };
