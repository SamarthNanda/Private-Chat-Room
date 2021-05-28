import React from 'react'

import onlineIcon from '../../../icons/onlineIcon.png';
import closeIcon from '../../../icons/closeIcon.png';

import './InfoBar.css';

function infoBar({ room }) {

    function handleClick() {
        localStorage.removeItem("token");
    }
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a onClick={handleClick} href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    )
}

export default infoBar;

