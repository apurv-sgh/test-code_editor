import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // npm install uuid
import "./Landing_page.css";

export default function RoomLanding({ onJoinRoom }) {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCreateRoom = () => {
    const newRoomId = uuidv4().slice(0, 8);
    setRoomId(newRoomId);
  };

  const handleJoin = () => {
    if (!roomId || !userName) {
      alert("Please enter both Room ID and your Name");
      return;
    }
    onJoinRoom(roomId, userName);
  };

  return (
    <div className="landing-container">
      <div className="landing-card">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="title">Collaborative Code Editor</h1>
        <p className="datetime">{dateTime.toLocaleString()}</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="btn-group">
          <button onClick={handleCreateRoom} className="btn create-btn">
            Create Room
          </button>
          <button onClick={handleJoin} className="btn join-btn">
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
