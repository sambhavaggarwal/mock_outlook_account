import React from "react";
import chat from "../../TLE_assets/chat-icon-01.svg";
import calendar from "../../TLE_assets/calendar-icon-02.svg";
import notes from "../../TLE_assets/notes-icon-03.svg";
import home from "../../TLE_assets/home-icon-18.svg";
import "./styles.scss";

const Landing = () => (
  <div className="landing">
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src={home} alt="Homepage img" />
          </a>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="chat">
            <img src={chat} alt="Chat img" />
          </a>
          <a href="chat">Chats</a>
        </li>
        <li>
          <a href="/calendar">
            <img src={calendar} alt="Calendar img" />
          </a>
          <a href="/calendar">Calendar</a>
        </li>
        <li>
          <a href="/notes">
            <img src={notes} alt="Notes img" />
          </a>
          <a href="/notes">Notes</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Landing;
