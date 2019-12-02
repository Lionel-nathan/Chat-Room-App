import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Welcome";
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      
      <div className="joinInnerContainer">
        <h1 className="heading">Chat Room</h1>
        <div>
          <input placeholder="Enter Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Enter Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">JOIN NOW!</button>
        </Link>
      </div>
    </div>
  );
}
