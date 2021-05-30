
import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
    const PORT = process.env.PORT || 3001;
    const URL = `http://localhost:${PORT}`;

    // login route------------------------------------------------------------------------------
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [room, setRoom] = useState("");
    const [chatLink, setChatLink] = useState("");
    // const [userType, setUserType] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        console.log("login is called");
        Axios.post(`${URL}/login`, {
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
                localStorage.setItem("token", JSON.stringify(response.data.token));
                localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
                // setUserType(response.data.userType);
                setChatLink("/chat");
            }
        });

    }

    return (
        <div className="align-center form">

            <h1 className="mt-5">Private Chat Room</h1>
            <h3 className="mt-4 align-left">Login</h3>

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
            {chatLink === "/chat"
                ? <div><h3 className="mt-4">Hi {username}</h3>
                    <Link to={chatLink}>
                        <button className="enterRoom btn-info mt-3 ">Enter the Room '{room}'</button>
                    </Link></div>
                : <span> </span>}

        </div>
    )
}

