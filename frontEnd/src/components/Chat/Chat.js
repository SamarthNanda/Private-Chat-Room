import { React, useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';


import InfoBar from './InfoBar/InfoBar';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import TextContainer from './TextContainer/TextContainer'

import './Chat.css';

let socket;

function Chat() {
    const [loggedIn, setLoggedIn] = useState(false);

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [users, setUsers] = useState("");

    const PORT = process.env.PORT || 3001;
    const ENDPOINT = `localhost:${PORT}`;
    var connectionOptions = {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transports": ["websocket"]
    };

    //useEffect for joining the chat -----------------------------------------------------
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user === null) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
            const { email, room } = user;
            
            socket = io(ENDPOINT, connectionOptions);
            setEmail(email);
            setRoom(room);

            socket.emit("join", { email, room }, function (){});

            return (function () {
                socket.emit("disconnect");
                socket.off();
            })
        }

    }, [ENDPOINT]);

    // useEffect for manageing meassages in chat------------------------------------------
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !==null) {
            socket.on("message", function (message) {
                setMessages([...messages, message]);
            })
            socket.on("roomData", function ({ users }) {
                setUsers(users);
            })
        }

    }, [messages])

    function sendMessage(event) {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => {
                setMessage("");
            })
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
