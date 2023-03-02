import React from "react";
import { useNavigate } from "react-router-dom";
export const Events = () => {

    let navigate = useNavigate();

    const eventFormHandler = (event) => {
        navigate("/events/new")
    }
  return (
    <>
      <div>Events</div>
      <button onClick={eventFormHandler}>Create an Event</button>
    </>
  );
};
