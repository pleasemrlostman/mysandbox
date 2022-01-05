import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown } from "../modules/Album/Album";
import { multipleTwice } from "../modules/Login/login";

const ReduxPractice = () => {
    const dispatch = useDispatch();
    const fetchedAlbum = useSelector((state) => state.AlbumReducer);
    const loginReducer = useSelector((state) => state.loginReducer);
    const [album, setAlbum] = useState([]);
    const [loginStatus, setLoginStauts] = useState(loginReducer);
    useEffect(() => {
        setAlbum(fetchedAlbum);
    }, [fetchedAlbum]);
    useEffect(() => {
        setLoginStauts(loginReducer);
        // setState는 비동기적으로 발생하기 때문에 콘솔에 이전값이 찍히는거다
        console.log(loginReducer);
    }, [loginReducer]);

    return (
        <>
            <div>로그인 상태 : {loginStatus}</div>
            <button
                onClick={() => {
                    dispatch(multipleTwice("정재훈로그인중"));
                }}
            >
                로그인하기
            </button>
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
