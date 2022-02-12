import React from "react";

const UseEffectPractice = () => {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "show" : "hide"}</button>
        </div>
    );
};

function Hello() {
    function byeFn() {
        console.log("bye");
    }
    function hiFn() {
        console.log("hi");
        return byeFn;
    }
    useEffect(hiFn, []);

    useEffect(() => {
        return hiFn();
        // return () => hiFn;
    }, []);

    return <h1>Hello</h1>;
}

export default UseEffectPractice;
