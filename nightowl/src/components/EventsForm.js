
import React, { useState } from "react";
import "./EventsForm.css";

export const EventsForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name, location, description, date };
    const url = "http://localhost:5000/events";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newEvent = await response.json();
      console.log(newEvent);

      setName("");
      setLocation("");
      setDescription("");
      setDate("");
    }
  }

  return (
    <>
      <form className="eventsForm container" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="exampleInputEmail1">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            onChange={(e)=> setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Location</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Location"
            onChange={(e)=> setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            id="name"
            placeholder="Description"
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
            onChange={(e)=> setDate(e.target.value)}
            value={date}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
