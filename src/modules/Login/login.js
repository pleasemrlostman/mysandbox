const LOGIN_REQUEST = "Login/LOGIN_REQUEST";
const LOGIN_SUCCESS = "Login/LOGIN_SUCCESS";

const multipleTwice = (data) => {
    // async action creator
    return (dispatch, getState) => {
        dispatch(loginRequest(data));
        setTimeout(() => {
            dispatch(
                loginSuccess({
                    userID: 1,
                    nickname: "pleasemrlostman",
                })
            );
        }, 2000);
    };
};

const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        data,
    };
};
const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data,
    };
};

const loginReducer = (state = "로그인하지않음", action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;
        case LOGIN_SUCCESS:
            return state;
        default:
            return state;
    }
};

export { loginReducer, loginSuccess, loginRequest };
