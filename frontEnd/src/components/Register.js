import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';


export default function Register() {
    const PORT = process.env.PORT || 3001;
    const URL = `http://localhost:${PORT}`;

    // register route----------------------------------------------------------------------------
    const [userTypeReg, setUserTypeReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [registered, setRegistered] = useState("");


    function register(e) {
        e.preventDefault();

        Axios.post(`${URL}/register`, {
            userType: userTypeReg,
            username: usernameReg,
            password: passwordReg
        }).then(function (response) {
            console.log(response.data.message);
            setRegistered(response.data.message);
        });
    }

    return (
        <div className="align-center form">
            <h1 className="mt-5">Private Chat Room</h1>
            <h3 className="mt-4 align-left">Register</h3>
            <form onSubmit={register}>
                <select type="text" id="userType" className="form-control mt-4" name="userType" placeholder="User Type (Admin || Student)" required
                    onChange={(e) => {
                        setUserTypeReg(e.target.value);
                    }}
                ><option selected>Choose User Type...</option><option value="Admin">Admin</option>
                    <option value="Student">Student</option></select>
                <input type="text" id="login" className="form-control mt-1" name="username" placeholder="Username..." required
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <input type="password" id="password" className="form-control mt-1" name="password" placeholder="Password..." required
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button type="submit" className="btn btn-success mt-4">Register</button><span>   </span>
                <Link to="/">
                    <button type="submit" className="btn btn-info mt-4">Login</button>
                </Link>


            </form>
            {registered === "saved" ? <div><Link to="/"><button className="btn btn-info mt-3">Login to Continue</button></Link></div> : <span> </span>}
            {registered === "error" ? <div><p className="errorText">You are Already Registered!</p><Link to="/"><button className="btn btn-info mt-3">Click Here To Login</button></Link></div> : <span> </span>}
        </div>
    )
}

