import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown } from "../modules/Album/Album";

const ReduxPractice = () => {
    const dispatch = useDispatch();
    const fetchedAlbum = useSelector((state) => state.AlbumReducer);
    const loginReducer = useSelector((state) => state.loginReducer);
    const [album, setAlbum] = useState([]);
    const [loginStatus, setLoginStauts] = useState(loginReducer);
    useEffect(() => {
        setAlbum(fetchedAlbum);
        setLoginStauts(loginReducer);
    }, [fetchedAlbum, loginReducer]);

    return (
        <>
            <div>로그인 상태 : {loginStatus}</div>
            {album.map((value, key) => {
                return (
                    <div key={key}>
                        <h2>{value.artist}</h2>
                        <h3>{value.album}</h3>
                        <h4>{value.id}</h4>
                        <h5>{value.count}</h5>
                        <button
                            onClick={() => {
                                dispatch(countDown(value.id));
                            }}
                        >
                            빼기
                        </button>
                        <button
                            onClick={() => {
                                dispatch(countUp(value.id));
                            }}
                        >
                            더하기
                        </button>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export { ReduxPractice };
