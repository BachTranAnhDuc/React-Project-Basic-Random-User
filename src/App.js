import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const App = () => {
  const [loading, isLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleOver = (e) => {
    console.log(e.current.target);
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="user image" className="user-img" />

          <p className="user-title">my {title}</p>
          <p className="user-value">{value}</p>

          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleOver}>
              <FaUser></FaUser>
            </button>

            <button
              className="icon"
              data-label="email"
              onMouseOver={handleOver}
            >
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>

            <button className="icon" data-label="age" onMouseOver={handleOver}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>

            <button
              className="icon"
              data-label="street"
              onMouseOver={handleOver}
            >
              <FaMap></FaMap>
            </button>

            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleOver}
            >
              <FaPhone></FaPhone>
            </button>

            <button
              className="icon"
              data-label="password"
              onMouseOver={handleOver}
            >
              <FaLock></FaLock>
            </button>
          </div>

          <button className="btn" type="button">
            {loading ? "Loading..." : "Random User"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
