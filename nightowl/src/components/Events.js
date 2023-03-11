import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Events.css";

function EventColumn(props) {
  console.log(props)
  return (
    <div className="col text-truncate cardContainer card-group">
      {props.event.map((data, index) => {
        const date = data.date
        const dateObj = new Date(date)
        const dateFinal = dateObj.toLocaleDateString()
        return (
          <div key={index} style={{ maxWidth: "540px" }} className="card mx-4 my-5 w-auto p-4 shadow" >
            <img src={data.eventUrl} className="card-img-top figure-img img-fluid" alt="event-pic"/>
            <div className="card-body">
              <h5 className="card-title mb-2" style={{flexWrap:"wrap"}}>{data.name}</h5>
              <h6 className="card-subtitle mb-3 text-muted">{data.location}</h6>
              <div className="text-truncate">{data.description}</div>
            </div>
            <div className="card-footer">
              <div className="btn-wrapper text-center d-flex justify-content-between">{dateFinal}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Events = () => {
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
        const events = [[]]
        let i = 0;
        for (const event of data) {
          events[i].push(event)
          i++;
          if (i >= events.length) {
            i = 0
          }
        }
        setEvents(events);
      }
    }
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <div className="cardEvents container ">
      <div className="row ">
        {events.map((event, index) => {
          return <EventColumn event={event} key={index} />;
        })}
      </div>
      </div>
      <div className="eventButton">
        <button className="buttonEvent" onClick={eventFormHandler}>
          Create an Event
        </button>
      </div>
    </React.Fragment>
  );
};
