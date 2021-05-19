import React from 'react';

import './Input.css';

const Input = (props) => (
  <form className="formInput">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={props.message}
      onChange={(event) => props.setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? props.sendMessage(event) : null}
    />
    <button className="sendButton" onClick={(e) => props.sendMessage(e)}>SEND</button>
  </form>
)

export default Input;