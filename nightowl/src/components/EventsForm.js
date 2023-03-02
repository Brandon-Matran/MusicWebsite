import React, { useState } from 'react'
import "./EventsForm.css"

export const EventsForm = () => {
  return (
    <>
    <form className="eventsForm">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Events</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Location</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Location"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}
