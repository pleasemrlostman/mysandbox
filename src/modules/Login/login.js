const LOGIN_REQUEST = "Login/LOGIN_REQUEST";
const LOGIN_SUCCESS = "Login/LOGIN_SUCCESS";
const LOGIN_FAILURE = "Login/LOGIN_FAILURE";

const multipleTwice = (data) => {
    // async action creator
    return (dispatch, getState) => {
        dispatch(loginRequest(data));
        try {
            setTimeout(() => {
                dispatch(loginSuccess("정재훈"));
            }, 3000);
        } catch {
            dispatch(loginFailure("FAIL"));
        }
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
const loginFailure = (e) => {
    return {
        type: LOGIN_FAILURE,
        e,
    };
};

const loginReducer = (state = "로그인하지않음", action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action.data;
        case LOGIN_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export { loginReducer, loginSuccess, loginRequest, multipleTwice };
