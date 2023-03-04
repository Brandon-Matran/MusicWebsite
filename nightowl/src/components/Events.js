import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "./Card";
import "./Events.css";

export const Events = (props) => {
  const [events, setEvents] = useState([], [], []);
  let navigate = useNavigate();

  const eventFormHandler = (event) => {
    navigate("/events/new");
  };

  //show events
  useEffect(() => {
    async function fetchEvents() {
      let url = "http://localhost:5000/events";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    }
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <div className="cardEvents container">
        <Card events={events} />
      </div>
      <div className="eventButton">
        <button className="buttonEvent" onClick={eventFormHandler}>
          Create an Event
        </button>
      </div>
    </React.Fragment>
  );
};
