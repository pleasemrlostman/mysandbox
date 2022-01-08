import React from "react";
import { connect } from "react-redux";
const Sandbox = (props) => {
    console.log(props);
    // state에 그냥 리듀서만 넣어주면 바로 initialState 값이 나오나
    // 현재는 combineReducer를 사용했기 때문에 object형식으로 들어오고 있다

    return <div>{props.loginReducer}</div>;
};

const mapStateToProps = (state, ownProps) => {
    return state;
};

export default connect(mapStateToProps)(Sandbox);
// export default Sandbox;
