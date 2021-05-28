import { React, useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import Decode from 'jwt-decode';
import jwt from 'jsonwebtoken';


import InfoBar from './InfoBar/InfoBar';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import TextContainer from './TextContainer/TextContainer'

import './Chat.css';
import axios from 'axios';

let socket;

function Chat() {

    const [loggedIn, setLoggedIn] = useState(false);

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [users, setUsers] = useState("");

    const PORT = process.env.PORT || 3001;
    const URL = `http://localhost:${PORT}`;
    const ENDPOINT = `localhost:${PORT}`;
    var connectionOptions = {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transports": ["websocket"]
    };

    //useEffect for joining the chat -----------------------------------------------------
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const decodedToken = Decode(token);

        if (decodedToken === null) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
            const { email, room } = decodedToken;

            socket = io(ENDPOINT, connectionOptions);
            setEmail(email);
            setRoom(room);

            socket.on("previousMessages", function ({ previousMessages }) {
                setMessages(...messages, previousMessages);
            })

            socket.emit("join", { email, room }, function () { });

            return (function () {
                socket.emit("disconnect");
                socket.off();
            })
        }

    }, [ENDPOINT]);

    // useEffect for manageing meassages in chat------------------------------------------
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

        jwt.verify(token, "jwtSecret", function (err, decodedToken) {
            if (err) {
                axios
                    .post(`${URL}/refresh`, { refreshToken: refreshToken })
                    .then(function (response) {
                        if (response.data.success === true) {
                            localStorage.setItem("token", JSON.stringify(response.data.token));
                            console.log("new token assigned");
                        } else {
                            setLoggedIn(false);
                        }
                    });
            }
        });

        if (token !== null) {
            socket.on("message", function (message) {
                setMessages([...messages, message]);
            })
            socket.on("roomData", function ({ users }) {
                setUsers(users);
            })
        } else {
            setLoggedIn(false);
        }

    }, [messages])

    function sendMessage(event) {
        event.preventDefault();

        if (message) {
            handleSend(event);
            socket.emit("sendMessage", message, () => {
                setMessage("");
            })
        }
    }

    // post request on chat to save messages----------------------------------------------
    function handleSend(e) {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            axios
                .post(`${URL}/chat`, {
                    room: room,
                    email: email,
                    message: message
                }, {
                    headers: {
                        authorization: `bearer ${token}`,
                    }
                }).then(function (response) {
                    if (response.data.isAuth === false) {
                        localStorage.removeItem("token");
                        setLoggedIn(false);
                    } else {
                        console.log(response.data.message);
                    }
                });
        } else {
            setLoggedIn(false);
        }
    }


    return (
        <div>
            {loggedIn
                ? <div><h1 className="mt-5 mb-5">Private Chat Room</h1>
                    <div className="container">
                        <InfoBar room={room} />
                        <Messages messages={messages} email={email} />
                        <Input setMessage={setMessage} sendMessage={sendMessage} message={message} />
                    </div>
                    <TextContainer users={users} /></div>
                : <div>
                    <h1 className="mt-5">First Login to Join Chat</h1>
                    <Link to="/">
                        <button type="submit" className="btn-success loginbtn mt-4">Login</button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Chat;
