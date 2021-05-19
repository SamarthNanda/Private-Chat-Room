
import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie'
import Decode from 'jwt-decode'


export default function Login(props) {

    // login route------------------------------------------------------------------------------
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [room, setRoom] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [userType, setUserType] = useState("")


    // async function requestLogin(token, refreshToken) {

    //     return new Promise((resolve, reject) => {

    //         Axios.get("http://localhost:3001/chat", {}, { headers:{"x-access-token":{token}} })
    //             .then(async function(response){
    //                 if (response.data.success === false) {
    //                     if (response.data.message === "User not authenticated") {
    //                         // set err message to login again. 
    //                     } else if (response.data.message === "Access token expired") {
    //                         const token = await refresh(refreshToken);
    //                         return await requestLogin(token, refreshToken);
    //                     }
    //                     resolve(false);
    //                 } else {
    //                     // protected route has been accessed, response can be used. 
    //                     resolve(true);
    //                 }
    //             });
    //     });
    // };

    // async function refresh(refreshToken) {

    //     return new Promise(function (resolve, reject) {
    //         Axios.post("http://localhost:3001/refresh", refreshToken)
    //             .then(function (response) {
    //                 if (response.data.success === true) {
    //                     localStorage.setItem("user", JSON.stringify(response.data.token));
    //                     return response.data.token;
    //                 } else {
    //                     // set err
    //                     return response.data.message;
    //                 }
    //             });
    //     });
    // }

    // async function hasAccess(token, refreshToken) {
    //     if (!refreshToken) return null;
    //     if (token === undefined) {
    //         token = await refresh(refreshToken);
    //         return token;
    //     }
    // }

    // async function protect(e) {
    //     let userData = localStorage.getItem('user');
    //     let token = userData.token;
    //     let refreshToken = userData.refreshToken;

    //     token = await hasAccess(token, refreshToken);
    //     if (!token) {
    //         // set err
    //     } else {
    //         await requestLogin(token, refreshToken);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("login is called");
        Axios.post('/login', {
            username: username,
            password: password,
            room: room
        }).then(function (response) {
            if (response.data.message) {
                console.log(response.data.message);
                if (response.data.message === "wrong password") {
                    alert("Try logging in with a Correct Password");
                } else {
                    alert("Try logging in with a valid Username or Register yourself Now");
                }
            }
            else {
                // Cookies.set("refreshToken", refreshToken);

                // Cookies.set("email", decoded.email);
                // Cookies.set("userType", decoded.userType);
                // Cookies.set("token", token);
                // const decoded = Decode(token);
                // const { token } = response.data;
                // console.log(decoded);

                localStorage.setItem("user", JSON.stringify(response.data));
                setUserType(response.data.userType);
                setLoginStatus("/chat");

            }
        });

    }

    return (
        <div className="form">

            <h1 className="mt-5">Login Page</h1>

            <form className="mt-4">
                <input type="text" id="login" className="form-control" name="username" placeholder="Username..." required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input type="password" id="password" className="form-control mt-1" name="password" placeholder="Password..." required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <input type="text" id="room" className="form-control mt-1" name="room" placeholder="Room Name..." required
                    onChange={(e) => {
                        setRoom(e.target.value);
                    }}
                />
                <button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>Login</button><span>   </span>


                <Link to="/register">
                    <button type="submit" className="btn btn-info mt-4">Register Now</button>
                </Link>

            </form>
            {loginStatus === "/chat"
                ? <div><h3 className="mt-4">Hi {username}</h3>
                    <Link to={loginStatus}>
                        <button className="btn btn-info mt-3">Enter the Room '{room}'</button>
                    </Link></div>
                : <span> </span>}

        </div>
    )
}

