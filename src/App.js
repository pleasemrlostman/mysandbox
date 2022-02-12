import React, { useState, useEffect } from "react";
import Immutability from "./Page/Immutability";
import ReactHookFormPractice from "./Page/ReactHookFormPractice";
import { ReduxPractice } from "./Page/ReduxPractice";
import Sandbox from "./Page/Sandbox";

const App = () => {
    return (
        <>
            {/* <Immutability /> */}
            {/* <Sandbox /> */}
            {/* <ReduxPractice /> */}
            <ReactHookFormPractice />
        </>
    );
};

export default App;
